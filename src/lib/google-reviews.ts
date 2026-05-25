export type GoogleReview = {
  author: string;
  authorPhoto?: string;
  authorUrl?: string;
  rating: number;
  text: string;
  relativeTime?: string;
};

export type GoogleReviewsData = {
  rating: number;
  totalReviews: number;
  mapsUrl: string;
  reviews: GoogleReview[];
};

const PLACE_QUERY = "Greenwich Dental Health, 14-16 Victoria Parade, Greenwich, London SE10 9FR";

export async function fetchGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return null;

  const findUrl = new URL("https://maps.googleapis.com/maps/api/place/findplacefromtext/json");
  findUrl.searchParams.set("input", PLACE_QUERY);
  findUrl.searchParams.set("inputtype", "textquery");
  findUrl.searchParams.set("fields", "place_id");
  findUrl.searchParams.set("key", apiKey);

  const findRes = await fetch(findUrl.toString(), { next: { revalidate: 86400 } });
  if (!findRes.ok) return null;

  const findData = (await findRes.json()) as {
    status: string;
    candidates?: { place_id: string }[];
  };

  if (findData.status !== "OK" || !findData.candidates?.[0]?.place_id) return null;

  const placeId = findData.candidates[0].place_id;

  const detailsUrl = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  detailsUrl.searchParams.set("place_id", placeId);
  detailsUrl.searchParams.set(
    "fields",
    "reviews,rating,user_ratings_total,url",
  );
  detailsUrl.searchParams.set("reviews_sort", "newest");
  detailsUrl.searchParams.set("key", apiKey);

  const detailsRes = await fetch(detailsUrl.toString(), { next: { revalidate: 3600 } });
  if (!detailsRes.ok) return null;

  const details = (await detailsRes.json()) as {
    status: string;
    result?: {
      rating?: number;
      user_ratings_total?: number;
      url?: string;
      reviews?: {
        author_name: string;
        author_url?: string;
        profile_photo_url?: string;
        rating: number;
        text: string;
        relative_time_description?: string;
      }[];
    };
  };

  if (details.status !== "OK" || !details.result) return null;

  const reviews =
    details.result.reviews?.map((r) => ({
      author: r.author_name,
      authorPhoto: r.profile_photo_url,
      authorUrl: r.author_url,
      rating: r.rating,
      text: r.text,
      relativeTime: r.relative_time_description,
    })) ?? [];

  return {
    rating: details.result.rating ?? 5,
    totalReviews: details.result.user_ratings_total ?? reviews.length,
    mapsUrl: details.result.url ?? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PLACE_QUERY)}`,
    reviews,
  };
}
