export const site = {
  name: "Greenwich Dental Health",
  logo: "/logo.png",
  tagline: "Your Private Dentist in Greenwich, London",
  phone: "020 8016 4121",
  phoneHref: "tel:+442080164121",
  address: "14-16 Victoria Parade, New Capital Quay, Greenwich, London SE10 9FR",
  bookingUrl: "https://book.dentr.net/greenwichdentalhealth",
  reviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Greenwich+Dental+Health+14-16+Victoria+Parade+Greenwich+SE10+9FR",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Greenwich+Dental+Health,+14-16+Victoria+Parade,+Greenwich,+London+SE10+9FR&z=15&output=embed",
  email: "info@greenwichdentalhealth.co.uk",
  hours: [
    { day: "Monday – Friday", time: "9:00am – 6:00pm" },
    { day: "Saturday", time: "By appointment" },
    { day: "Sunday", time: "Closed" },
  ],
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/treatments", label: "Treatments" },
  { href: "/fees", label: "Fees" },
  { href: "/team", label: "Team" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: site.reviewsUrl, label: "Reviews", external: true },
] as const;

export const secondaryNavLinks = [
  { href: "/treatments#general", label: "Routine dentistry" },
  { href: "/treatments#cosmetic", label: "Cosmetic dentistry" },
  { href: "/treatments#invisalign", label: "Invisalign™" },
  { href: "/treatments#implants", label: "Implants" },
  { href: "/nervous-patients", label: "Nervous Patients" },
  { href: "/emergency", label: "Emergency", highlight: true },
  { href: "/refer", label: "Refer a Patient" },
] as const;

export const awards = [
  {
    year: "2024",
    title: "Practice of the Year",
    organisation: "UK Private Dentistry Awards",
    result: "Winner",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=260&fit=crop&q=80",
    featured: true,
  },
  {
    year: "2024",
    title: "Best Digital Dental Practice",
    organisation: "UK Private Dentistry Awards",
    result: "Highly Commended",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=260&fit=crop&q=80",
    featured: true,
  },
  {
    year: "",
    title: "Invisalign Elite Provider",
    organisation: "Invisalign®",
    result: "Certified Provider",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=260&fit=crop&q=80",
    featured: true,
  },
] as const;

export const contactBanner = {
  headline: "Speak to us today on",
  phone: site.phone,
  address: site.address,
} as const;

export const images = {
  hero: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&fit=crop&q=80",
  clinic: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&fit=crop&q=80",
  smile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&fit=crop&q=80",
  whitening: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1200&fit=crop&q=80",
  implants: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&fit=crop&q=80",
  team: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&fit=crop&q=80",
  cosmetic: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&fit=crop&q=80",
  implantClinic: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&fit=crop&q=80",
  testimonial: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&fit=crop&q=80",
  invisalign: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&fit=crop&q=80",
} as const;

export const homeHero = {
  headline: "Award-winning private dental clinic",
  subtitle: "Modern private dentistry with transparent fees and a team who take time to listen.",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&fit=crop&crop=faces&q=80",
  imageAlt: "Happy patient with a healthy, confident smile",
} as const;

export const services = [
  {
    title: "Cosmetic Procedures",
    description:
      "Attain a perfect smile with our variety of highly popular cosmetic dental techniques. Revive your skin with the variety of skin treatments on offer.",
    image: images.cosmetic,
    href: "/treatments#cosmetic",
  },
  {
    title: "Dental Implants in Greenwich",
    description:
      "Dental implants restore the natural function of your bite by replacing one or more missing teeth.",
    image: images.implantClinic,
    href: "/treatments#implants",
  },
  {
    title: "General Dentistry",
    description:
      "At Greenwich Dental Health, we deliver all aspects of routine dental care for your entire family.",
    image: images.clinic,
    href: "/treatments#general",
  },
  {
    title: "Advanced Dentistry",
    description:
      "High quality advanced dentistry using the very best in digital technology — to empower your smile.",
    image: images.team,
    href: "/treatments#advanced",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Had an emergency which was dealt with brilliantly. Equipment is super new, bedside manner and professionalism is outstanding from all involved. Yes, it's not the cheapest, but it's also not the most expensive around.",
    author: "James M.",
    detail: "Greenwich patient",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&q=80",
  },
  {
    quote:
      "I am always pretty nervous about visiting the dentist — I haven't found one I have particularly liked until now. These guys are phenomenal! They put you at ease, explain everything and answer any questions. Really fantastic.",
    author: "Sarah T.",
    detail: "New patient",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80",
  },
  {
    quote:
      "Clear advice, transparent fees, and a calm modern practice near Cutty Sark. Invisalign treatment has been straightforward from consultation through to my final aligners.",
    author: "Priya K.",
    detail: "Invisalign patient",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&q=80",
  },
] as const;

/** Shown when Google Places API is not configured; text from patient Google reviews. */
export const googleReviewsFallback = {
  rating: 5,
  totalReviews: 198,
  reviews: [
    {
      author: "Ben L",
      rating: 5,
      authorPhoto:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=faces&q=80",
      text: "Friendly, professional staff and nice environment. First dentist I have been to where they take photos of your teeth, display them on a monitor and explain any issues and what needs to be done.",
    },
    {
      author: "Sue W",
      rating: 5,
      authorPhoto:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=96&h=96&fit=crop&crop=faces&q=80",
      text: "I had not been to the dentist for 6+ years because of anxiety. Dr Agarwal and all his staff have been incredibly understanding, kind and supportive. I can smile again without worrying.",
    },
    {
      author: "Margaret H",
      rating: 5,
      authorPhoto:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=96&h=96&fit=crop&crop=faces&q=80",
      text: "A real pleasure — not the sort of thing you normally hear about a dentist. Dr Agarwal really cares; his professionalism, care and attention to detail is evident at every stage.",
    },
    {
      author: "Rebecca Corry",
      rating: 5,
      authorPhoto:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces&q=80",
      text: "Fantastic dental practice! I was able to get a same day emergency appointment after smashing my front teeth and Dr Goyal did an amazing job with my composite fillings.",
    },
    {
      author: "Alfredo S",
      rating: 5,
      authorPhoto:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=faces&q=80",
      text: "Came here for Invisalign treatment and it's going wonderfully! Plenty of information, modern equipment and very friendly staff.",
    },
    {
      author: "James M",
      rating: 5,
      authorPhoto:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&fit=crop&crop=faces&q=80",
      text: "Brilliant practice near Cutty Sark — easy to book, on-time appointments, and honest advice about what I actually needed versus optional extras.",
    },
  ],
} as const;

export const teamMembers = [
  {
    name: "Dr Abhishek Agarwal",
    role: "Clinical Director",
    gdc: "179938",
    qualifications: [
      "BDS",
      "DipDCS (QMUL)",
      "MFGDP(UK)",
      "MJDF (RCSEng)",
      "MFDS (RCSEdin)",
      "DipDSedation (KCL)",
      "DipImpDent (RCSEng)",
    ],
    specialties: ["Dental implants", "IV sedation", "Complex restorative dentistry"],
    bio: "Dr Abhishek Agarwal is a highly experienced dentist with advanced training in implant dentistry, sedation, and complex restorative care. He leads the clinical team with a patient-first approach.",
    image: images.team,
  },
  {
    name: "Dr Disha Goyal",
    role: "Director",
    gdc: "246298",
    qualifications: ["BDS", "LDS RCS (Eng)", "MJDF RCS (Eng)", "Dip Endodontics (UCLAN)"],
    specialties: ["Root canal treatment", "Minimally invasive cosmetic dentistry", "Endodontics"],
    bio: "Dr Goyal qualified with distinction and brings expertise in endodontics and minimally invasive cosmetic dentistry, helping patients achieve healthy, beautiful smiles.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&fit=crop&q=80",
  },
  {
    name: "Dr Michael Chen",
    role: "Associate Dentist",
    gdc: "281104",
    qualifications: ["BDS (Hons)", "MFDS RCPS (Glasg)"],
    specialties: ["General dentistry", "Cosmetic dentistry", "Nervous patients & families"],
    bio: "Dr Chen focuses on general and cosmetic dentistry, with a gentle approach especially valued by nervous patients and families.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&fit=crop&q=80",
  },
  {
    name: "Emma Richards",
    role: "Treatment Coordinator",
    gdc: "",
    qualifications: [
      "Certificate in Dental Treatment Coordination",
      "NVQ Level 3 Business Administration",
      "Invisalign Go Starter (coordinator pathway)",
    ],
    specialties: [
      "Treatment planning & patient coordination",
      "Invisalign consultations",
      "Implant treatment journeys",
      "Fees & scheduling",
    ],
    bio: "Emma guides patients through treatment options, fees and appointment scheduling — your main point of contact from first enquiry to completion.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&fit=crop&q=80",
  },
  {
    name: "Sarah Mitchell",
    role: "Dental Hygienist",
    gdc: "255812",
    qualifications: [
      "BSc (Hons) Dental Hygiene & Therapy",
      "NEBDN National Diploma in Dental Hygiene",
      "Certificate in Periodontal Disease Management",
    ],
    specialties: [
      "Dental hygiene & therapy",
      "Hygiene appointments",
      "Gum health",
      "Preventive care",
    ],
    bio: "Sarah provides preventive care, hygiene appointments and gum health support to keep smiles healthy between dental visits.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&fit=crop&q=80",
  },
  {
    name: "James Coleman",
    role: "Practice Manager",
    gdc: "",
    qualifications: [
      "ILM Level 3 Leadership & Management",
      "Level 3 Certificate in Dental Practice Administration",
      "CQC practice management & compliance training",
    ],
    specialties: [
      "Practice operations & patient experience",
      "Reception & enquiries",
      "Insurance & billing support",
    ],
    bio: "James ensures the practice runs smoothly day to day and is often the friendly voice you'll speak with on the phone.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&fit=crop&q=80",
  },
] as const;

export const invisalignPromo = {
  title: "Align & Smile Day",
  date: "Sat, 27th June 2026",
  offers: [
    "Free Whitening",
    "Free retainers",
    "10% off total treatment",
    "Free dental check up",
  ],
} as const;

export const trustItems = [
  "Invisalign Elite Provider",
  "Digital technology & modern equipment",
  "Family-friendly, stress-free care",
  "Near Cutty Sark, Greenwich",
] as const;

export const feeIntro = {
  headline:
    "At Greenwich Dental Health, our goal is to provide outstanding dental care at accessible prices.",
  insurance:
    "We accept all major dental insurance providers such as Bupa, AXA, Unum, Denplan, Vitality and Simplyhealth, along with overseas insurers. After each treatment, we provide a fully itemised invoice to make claiming easy and hassle-free.",
} as const;

export type FeeItem = { service: string; price: string; note?: string };

export type FeeCategory = {
  id: string;
  title: string;
  items: FeeItem[];
};

export const feeCategories: FeeCategory[] = [
  {
    id: "examinations",
    title: "Examinations",
    items: [
      {
        service: "New patient (first check-up or lapsed patient) incl. 2 small x-rays",
        price: "£90",
      },
      {
        service: "Routine (regular) patient examination incl. 2 small x-rays",
        price: "£70",
      },
      { service: "Prescription", price: "£20" },
      {
        service: "Child exam (under 3 — 2 free checkups per year*)",
        price: "£50",
      },
      { service: "Child exam (up to 12 years)", price: "£50" },
      {
        service: "Emergency appointment — assessment incl. small x-ray",
        price: "£120",
        note: "£85 for regular existing patients who have had checkups",
      },
    ],
  },
  {
    id: "xrays",
    title: "X-rays",
    items: [
      { service: "Small x-ray", price: "£18" },
      { service: "Panoramic x-ray", price: "£85" },
      { service: "CT Scan (3D) — single tooth to full jaw", price: "£180–£300" },
    ],
  },
  {
    id: "invisalign",
    title: "Invisalign",
    items: [
      { service: "Invisalign consultation — Adults/Teenagers", price: "FREE" },
      { service: "Invisalign (mild cases)", price: "from £1,450 per jaw" },
      { service: "Invisalign (moderate cases)", price: "from £1,750 per jaw" },
      { service: "Invisalign (complex cases)", price: "from £2,000 per jaw" },
      { service: "Vivera retainers (3 sets) — single arch", price: "£395" },
      { service: "Vivera retainers (3 sets) — both arches", price: "£495" },
      { service: "Removable essix retainer — single arch", price: "£295" },
      { service: "Removable essix retainer — both arches", price: "£395" },
      { service: "Fixed (wire) retainer — single arch", price: "£350" },
      { service: "Fixed (wire) retainer — both arches", price: "£495" },
    ],
  },
  {
    id: "restorative",
    title: "Restorative",
    items: [
      { service: "Composite (tooth coloured)", price: "from £250" },
      { service: "Temporary fillings", price: "from £120" },
      { service: "Preventive fillings / fissure sealants", price: "from £150" },
      { service: "Crowns, Inlays, Onlays", price: "from £895" },
      { service: "Same day CEREC — Inlay, Onlay, Crown (2yr warranty)", price: "from £945" },
      { service: "Porcelain bridge (single missing tooth)", price: "from £1,800" },
      { service: "Root canal treatment", price: "from £650" },
      { service: "Re-root canal treatment", price: "£250" },
      { service: "Fibre post", price: "£350" },
    ],
  },
  {
    id: "cosmetic",
    title: "Cosmetic",
    items: [
      { service: "Zoom chairside whitening", price: "£550" },
      { service: "Zoom chairside + home whitening kit", price: "£650" },
      { service: "Teeth whitening (2 weeks at home)", price: "£395" },
      { service: "Enlighten premium teeth whitening (B1 shade guarantee)", price: "£645" },
      { service: "Porcelain veneers", price: "from £895 per tooth" },
      { service: "Cosmetic bonding", price: "£245–£450 per tooth" },
      { service: "Cosmetic bonding 4 front teeth package", price: "from £1,500" },
      { service: "Cosmetic bonding 6 front teeth package", price: "from £2,000" },
    ],
  },
  {
    id: "hygiene",
    title: "Hygiene",
    items: [
      { service: "Scale & polish with hygienist (up to 30 mins)", price: "£90" },
      {
        service: "Scale + air polish with hygienist (up to 30 mins)",
        price: "£125",
      },
      { service: "Extended hygiene session with hygienist", price: "£175" },
      { service: "Hygiene session with dentist", price: "from £150" },
      { service: "Implant hygiene", price: "from £195" },
    ],
  },
  {
    id: "implants",
    title: "Implants",
    items: [
      { service: "Implant consultation", price: "£150" },
      { service: "Oral surgery consultation", price: "£95" },
      { service: "Single tooth implant (incl. the crown)", price: "from £2,850" },
      { service: "Single implant crown", price: "from £1,150" },
      { service: "Routine extractions", price: "from £275" },
      { service: "Bone graft", price: "from £595" },
      { service: "Sinus lift (incl. bone graft and PRF)", price: "£1,400" },
    ],
  },
];

export const feePolicies = [
  "A deposit of 50% of the proposed treatment fee is required to secure your appointment. For hygiene or gum treatment, full payment (100%) is required at booking.",
  "Treatment estimates are valid for 3 months; fees may change after this period.",
  "Missed appointments or late attendance may incur a fee of £90 per half hour of clinical time lost. Please give at least 24 hours' notice to reschedule.",
  "A patient is considered lapsed if their last check-up was more than 2 years ago — a new patient examination would be required.",
  "Refunds will be processed within 14 days after receipt of your written request.",
] as const;

export const treatments = [
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with teeth whitening, porcelain veneers, composite bonding, and smile makeovers. Our cosmetic treatments are tailored to help you achieve natural, beautiful results.",
    items: [
      "Teeth Whitening (Zoom, Enlighten, home kits)",
      "Porcelain Veneers & Crowns",
      "Composite Bonding",
      "Smile Makeovers",
      "Icon resin infiltration",
    ],
    image: images.cosmetic,
  },
  {
    id: "implants",
    title: "Dental Implants",
    description:
      "Replace missing teeth with durable, natural-looking dental implants. From single tooth replacement to full-arch solutions, we restore function and confidence to your smile.",
    items: [
      "Single tooth implants",
      "Implant-retained dentures",
      "Same-day fixed bridge (All-on-4 style)",
      "Bone grafting & sinus lifts",
      "Implant maintenance",
    ],
    image: images.implantClinic,
  },
  {
    id: "general",
    title: "General Dentistry",
    description:
      "Comprehensive routine care for the whole family — examinations, fillings, extractions, and preventive treatments in a welcoming, stress-free environment.",
    items: [
      "Routine check-ups & examinations",
      "Fillings & restorations",
      "Children's dentistry",
      "Emergency appointments",
      "Preventive care & fissure sealants",
    ],
    image: images.clinic,
  },
  {
    id: "invisalign",
    title: "Invisalign™ Clear Aligners",
    description:
      "Straighten your teeth discreetly with Invisalign clear aligners. Free consultations for adults and teenagers, with digital planning and expert supervision throughout your journey.",
    items: [
      "Free Invisalign consultation",
      "Mild, moderate & complex cases",
      "Invisalign for teens",
      "Retainers & refinement",
      "Align & Smile Day offers",
    ],
    image: images.invisalign,
  },
  {
    id: "advanced",
    title: "Advanced Dentistry",
    description:
      "Cutting-edge treatments using digital technology — Invisalign clear aligners, CEREC same-day crowns, root canal therapy, and IV sedation for nervous patients.",
    items: [
      "Invisalign clear aligners",
      "CEREC same-day crowns",
      "Root canal treatment",
      "IV & inhalation sedation",
      "Orthodontics (fixed braces)",
    ],
    image: images.smile,
  },
  {
    id: "hygiene",
    title: "Hygiene & Gum Care",
    description:
      "Professional hygiene appointments and specialist periodontal treatment to keep your gums healthy and your smile sparkling.",
    items: [
      "Scale & polish",
      "Air polish for stubborn stains",
      "Gum disease treatment",
      "Implant hygiene",
    ],
    image: images.whitening,
  },
] as const;

export const faqs = [
  {
    question: "Do you accept dental insurance?",
    answer:
      "Yes. We accept Bupa, AXA, Unum, Denplan, Vitality, Simplyhealth, and overseas insurers. We provide fully itemised invoices after each treatment to make claiming straightforward.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book online via our Dentr booking portal, call us on 020 8016 4121, or visit us at 14-16 Victoria Parade, New Capital Quay, Greenwich, London SE10 9FR.",
  },
  {
    question: "Do you offer Invisalign?",
    answer:
      "Yes. We offer free Invisalign consultations for adults and teenagers. Treatment starts from £1,450 per jaw for mild cases. Ask about our Align & Smile Day offers.",
  },
  {
    question: "What if I'm a nervous patient?",
    answer:
      "We specialise in caring for anxious patients. We offer IV sedation for adults and inhalation (laughing gas) sedation for children aged 5–14. Our team takes time to explain every step and put you at ease.",
  },
  {
    question: "What are your fees for a new patient examination?",
    answer:
      "A new patient examination including up to 2 small x-rays (if required) is £90. Routine examinations for existing patients are £70. See our full fee guide for all treatment prices.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Please give at least 24 hours' notice to reschedule or cancel. For appointments over 2 hours, we ask for 48 hours' notice. Missed appointments may incur a fee of £90 per half hour of clinical time lost.",
  },
] as const;

export const team = teamMembers;

export const beforeAfterImages = [
  { src: images.cosmetic, alt: "Cosmetic dentistry result" },
  { src: images.smile, alt: "Smile transformation" },
  { src: images.whitening, alt: "Teeth whitening result" },
  { src: images.testimonial, alt: "Patient smile" },
] as const;

export const resultsCases = [
  {
    treatment: "Teeth Whitening",
    description: "Professional chairside and home whitening for a brighter, natural-looking smile.",
    image: images.whitening,
  },
  {
    treatment: "Invisalign®",
    description: "Discreet alignment — straighter teeth without traditional fixed braces.",
    image: images.smile,
  },
  {
    treatment: "Cosmetic Bonding & Veneers",
    description: "Refined shape, shade and symmetry for the front teeth.",
    image: images.cosmetic,
  },
  {
    treatment: "Dental Implants",
    description: "Restored function and appearance for missing teeth.",
    image: images.implants,
  },
] as const;

export const aboutContent = {
  headline: "Your Private Dentist in Greenwich, London",
  paragraphs: [
    "Welcome to Greenwich Dental Health. We are an award-winning private dental practice located in Greenwich near the Cutty Sark. Committed to achieving healthy and beautiful smiles for all, we offer exceptional dental care at affordable prices within a clean, stress-free and family-friendly environment.",
    "Our practice combines the latest digital dental technology with a warm, personal approach. Whether you need a routine check-up, emergency care, Invisalign, dental implants, or a complete smile makeover, our experienced team is here to help.",
    "We believe in transparency — clear communication, upfront pricing, and treatment plans tailored to your needs. Your comfort and confidence are at the heart of everything we do.",
  ],
  values: [
    {
      title: "Exceptional care",
      description: "Advanced training and modern equipment for the highest standard of dentistry.",
    },
    {
      title: "Accessible pricing",
      description: "Outstanding care at transparent, competitive fees with insurance accepted.",
    },
    {
      title: "Family friendly",
      description: "A welcoming environment for patients of all ages, including nervous patients.",
    },
    {
      title: "Local & trusted",
      description: "Proudly serving Greenwich and South East London from New Capital Quay.",
    },
  ],
} as const;
