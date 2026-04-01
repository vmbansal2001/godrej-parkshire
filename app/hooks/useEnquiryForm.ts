"use client";

import { useState, useCallback } from "react";
import {
  validateEnquiryForm,
  hasErrors,
  type EnquiryFormData,
  type ValidationErrors,
} from "@/app/lib/validation";

interface UseEnquiryFormOptions {
  source: string;
  onSuccess?: () => void;
}

export function useEnquiryForm({ source, onSuccess }: UseEnquiryFormOptions) {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [consent, setConsentRaw] = useState(true);
  const setConsent = useCallback((value: boolean) => {
    setConsentRaw(value);
    if (value) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.consent;
        return next;
      });
    }
  }, []);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      // Clear field error on change
      if (errors[name as keyof ValidationErrors]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[name as keyof ValidationErrors];
          return next;
        });
      }
    },
    [errors]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      // Client-side validation
      const validationErrors = validateEnquiryForm(formData);
      if (!consent) {
        validationErrors.consent = "Please provide your consent to proceed";
      }
      if (hasErrors(validationErrors)) {
        setErrors(validationErrors);
        return;
      }

      setErrors({});
      setServerError("");
      setStatus("submitting");

      try {
        const res = await fetch("/api/enquiry", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, source }),
        });

        const data = await res.json();

        if (!res.ok) {
          if (data.errors) {
            setErrors(data.errors);
            setStatus("idle");
          } else {
            setServerError(data.error || "Something went wrong");
            setStatus("error");
          }
          return;
        }

        setStatus("success");
        setFormData({ name: "", phone: "", email: "", message: "" });
        onSuccess?.();
      } catch {
        setServerError("Network error. Please try again.");
        setStatus("error");
      }
    },
    [formData, consent, source, onSuccess]
  );

  return {
    formData,
    consent,
    setConsent,
    errors,
    status,
    serverError,
    handleChange,
    handleSubmit,
  };
}
