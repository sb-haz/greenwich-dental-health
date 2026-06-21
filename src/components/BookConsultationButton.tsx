import { site } from "@/lib/content";

export function BookConsultationButton() {
  return (
    <a
      href={site.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary fixed bottom-5 right-5 z-40 rounded-lg px-5 shadow-lg shadow-black/20 !py-3.5 text-base max-lg:bottom-[max(1.25rem,env(safe-area-inset-bottom))]"
      aria-label="Book free consultation"
    >
      Book free consultation
    </a>
  );
}
