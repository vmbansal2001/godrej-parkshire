export default function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-red-500 text-[12px] mt-0.5">{message}</p>;
}
