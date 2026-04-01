import { Resend } from "resend";
import {
  validateEnquiryForm,
  hasErrors,
  type EnquiryFormData,
} from "@/app/lib/validation";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT_EMAIL = "info@keylittle.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, message, source } = body as EnquiryFormData & {
      source?: string;
    };

    // Server-side validation
    const errors = validateEnquiryForm({ name, phone, email, message });
    if (hasErrors(errors)) {
      return Response.json({ success: false, errors }, { status: 400 });
    }

    const sourceLabel = source || "Website";

    await resend.emails.send({
      from: "Godrej Parkshire <onboarding@resend.dev>",
      to: RECIPIENT_EMAIL,
      subject: `New Enquiry from ${name.trim()} — ${sourceLabel}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #b18e4e; color: white; padding: 20px 24px;">
            <h2 style="margin: 0;">New Enquiry — Godrej Parkshire</h2>
            <p style="margin: 4px 0 0; font-size: 14px; opacity: 0.9;">Source: ${sourceLabel}</p>
          </div>
          <div style="padding: 24px; border: 1px solid #eee; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; width: 100px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600;">${name.trim()}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600;">+91 ${phone.trim()}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600;">${email.trim()}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #888;">Message</td>
                <td style="padding: 10px 0;">${message.trim() || "<em>No message provided</em>"}</td>
              </tr>
            </table>
          </div>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Enquiry submission error:", error);
    return Response.json(
      { success: false, error: "Failed to send enquiry. Please try again." },
      { status: 500 },
    );
  }
}
