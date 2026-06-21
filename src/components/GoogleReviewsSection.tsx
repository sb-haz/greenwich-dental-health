import Image from "next/image";
import { googleReviewsFallback, site } from "@/lib/content";
import { fetchGoogleReviews, type GoogleReview, type GoogleReviewsData } from "@/lib/google-reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex gap-0.5 text-brand-lime" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} aria-hidden>
          {i < Math.round(rating) ? "★" : "☆"}
        </span>
      ))}
    </span>
  );
}

function ReviewCard({ review, fromGoogle }: { review: GoogleReview; fromGoogle: boolean }) {
  return (
    <blockquote className="card-friendly flex h-full flex-col p-5 lg:p-6">
      <div className="flex items-start gap-3">
        {review.authorPhoto ? (
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-border">
            <Image
              src={review.authorPhoto}
              alt=""
              fill
              className="object-cover"
              sizes="48px"
              unoptimized={review.authorPhoto.includes("googleusercontent")}
            />
          </div>
        ) : (
          <div className="type-body-sm flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-soft-green font-bold text-brand-dark">
            {review.author.charAt(0)}
          </div>
        )}
        <div className="min-w-0">
          {review.authorUrl ? (
            <a
              href={review.authorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="type-link text-foreground hover:text-brand-lime"
            >
              {review.author}
            </a>
          ) : (
            <p className="type-link text-foreground">{review.author}</p>
          )}
          <div className="mt-1 flex flex-wrap items-center gap-2">
            <Stars rating={review.rating} />
            {review.relativeTime && (
              <span className="type-caption text-muted">{review.relativeTime}</span>
            )}
          </div>
        </div>
      </div>
      <p className="type-body-sm mt-4 flex-1 text-muted">
        &ldquo;{review.text}&rdquo;
      </p>
      {fromGoogle && (
        <p className="type-caption mt-3 text-muted">Posted on Google</p>
      )}
    </blockquote>
  );
}

export async function GoogleReviewsSection() {
  const live = await fetchGoogleReviews();
  const fromGoogle = Boolean(live?.reviews.length);

  const data: GoogleReviewsData = live ?? {
    rating: googleReviewsFallback.rating,
    totalReviews: googleReviewsFallback.totalReviews,
    mapsUrl: site.reviewsUrl,
    reviews: googleReviewsFallback.reviews.map((r) => ({
      author: r.author,
      rating: r.rating,
      text: r.text,
      authorPhoto: r.authorPhoto,
    })),
  };

  const displayReviews = data.reviews.slice(0, 5);

  return (
    <section className="section-muted page-section border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="heading-lg text-foreground">Patient reviews</h2>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <Stars rating={data.rating} />
              <span className="type-body-sm font-semibold text-foreground">
                {data.rating.toFixed(1)} · {data.totalReviews}+ on Google
              </span>
            </div>
            <p className="type-body-sm mt-3 text-muted">
              Unedited reviews from our Google listing — more photos and videos there too.
            </p>
          </div>
          <a
            href={data.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline shrink-0 text-center"
          >
            View on Google →
          </a>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="grid gap-6 sm:grid-cols-2">
            {displayReviews.map((review) => (
              <ReviewCard
                key={`${review.author}-${review.text.slice(0, 24)}`}
                review={review}
                fromGoogle={fromGoogle}
              />
            ))}
          </div>
          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <iframe
              title="Greenwich Dental Health on Google Maps"
              src={site.mapsEmbedUrl}
              className="h-full min-h-[26.25rem] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <p className="type-body-sm mt-8 text-center text-muted">
          Read all reviews on our{" "}
          <a href={data.mapsUrl} target="_blank" rel="noopener noreferrer" className="type-link text-brand-lime">
            Google listing
          </a>
          .
        </p>
      </div>
    </section>
  );
}
