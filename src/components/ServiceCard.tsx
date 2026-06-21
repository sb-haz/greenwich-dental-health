import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export function ServiceCard({ title, description, image, href }: ServiceCardProps) {
  return (
    <article className="service-card group">
      <Link href={href} className="service-card__link">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
        <div className="service-card__body">
          <h3 className="heading-md text-foreground">{title}</h3>
          <p className="type-body-sm mt-2 text-muted line-clamp-3">{description}</p>
          <span className="service-card__cta">
            Find out more <span aria-hidden>→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
