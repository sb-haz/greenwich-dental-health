import { site } from "@/lib/content";

export function BookConsultationButton() {
  return (
    <a
      href={site.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary fixed bottom-5 right-5 z-40 rounded-lg px-5 shadow-lg shadow-black/25 !py-3.5 text-base"
      aria-label="Book free consultation"
    >
      Book free consultation
    </a>
  );
}
