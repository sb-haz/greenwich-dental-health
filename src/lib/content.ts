export const site = {
  name: "Greenwich Dental Health",
  logo: "/logo.png",
  /** Intrinsic logo dimensions — keep in sync with public/logo.png to avoid stretch */
  logoWidth: 1024,
  logoHeight: 342,
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

/** Self-hosted stock photos (placeholders until client supplies photography) */
const stock = {
  awardPractice: "/images/award-practice.jpg",
  awardDigital: "/images/award-digital.jpg",
  patientSmile: "/images/patient-smile.jpg",
  patientFemale: "/images/patient-female.jpg",
  clinic: "/images/clinic.jpg",
  portraitWoman: "/images/portrait-woman.jpg",
  implants: "/images/implants.jpg",
  team: "/images/team.jpg",
  cosmetic: "/images/cosmetic.jpg",
  implantClinic: "/images/implant-clinic.jpg",
  teamMale: "/images/team-male.jpg",
  reviewFemale: "/images/review-female.jpg",
  reviewMale: "/images/review-male.jpg",
  reviewMale2: "/images/review-male-2.jpg",
  teamFemale: "/images/team-female.jpg",
  teamMale2: "/images/team-male-2.jpg",
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
    image: stock.awardPractice,
    featured: true,
  },
  {
    year: "2024",
    title: "Best Digital Dental Practice",
    organisation: "UK Private Dentistry Awards",
    result: "Highly Commended",
    image: stock.awardDigital,
    featured: true,
  },
  {
    year: "",
    title: "Invisalign Elite Provider",
    organisation: "Invisalign®",
    result: "Certified Provider",
    image: stock.patientSmile,
    featured: true,
  },
] as const;

export const contactBanner = {
  headline: "Speak to us today on",
  phone: site.phone,
  address: site.address,
} as const;

export const treatmentsCta = {
  eyebrow: "Not sure what you need?",
  title: "Book a consultation first",
  lead: "We'll examine, explain the options and give you a written estimate — no obligation to go ahead.",
} as const;

export const nervousPatientsContent = {
  intro: {
    eyebrow: "Nervous or anxious?",
    title: "We understand — and we're here to help",
    lead: "Dental anxiety is common. Many of our patients had avoided the dentist for years before finding us. We take things at your pace, explain every step clearly, and never rush you.",
  },
  sedationTitle: "Options to help you feel relaxed",
  sedationLead:
    "Sedation is not always needed — but when it is, we offer safe, clinician-led options tailored to your age and treatment.",
  sedationOptions: [
    {
      title: "IV sedation",
      subtitle: "Adults",
      description:
        "A deeper level of relaxation for longer or more complex appointments. You remain conscious but deeply calm, with monitoring throughout.",
    },
    {
      title: "Inhalation sedation",
      subtitle: "Children aged 5–14",
      description:
        "Also known as laughing gas — a gentle, well-established option that helps children feel at ease during treatment.",
    },
    {
      title: "Gentle care without sedation",
      subtitle: "Every visit",
      description:
        "Clear explanations, breaks when you need them, and a calm environment. Many nervous patients build confidence over time without sedation.",
    },
  ],
  stepsTitle: "How we look after you",
  steps: [
    {
      title: "Listen first",
      text: "Tell us what makes you anxious — past experiences, sounds, needles, or not knowing what to expect. We adapt to you.",
    },
    {
      title: "Explain everything",
      text: "Before any treatment, we walk you through the plan in plain language. You can ask questions at any point.",
    },
    {
      title: "Go at your pace",
      text: "Short appointments, hand signals if you need a pause, and no pressure to proceed until you're ready.",
    },
    {
      title: "Build confidence",
      text: "Many patients who once dreaded the dentist now attend regularly — we're proud of that journey.",
    },
  ],
  quote: {
    text: "I am always pretty nervous about visiting the dentist — I haven't found one I have particularly liked until now. These guys are phenomenal! They put you at ease, explain everything and answer any questions.",
    author: "Sarah T.",
    detail: "Nervous patient, Greenwich",
    image: stock.patientSmile,
  },
  ctaTitle: "Take the first step — no pressure",
  ctaLead:
    "Book a consultation to talk through your concerns in a calm, unhurried appointment. We'll agree a plan together before any treatment.",
} as const;

export const emergencyContent = {
  callEyebrow: "Urgent dental care",
  callTitle: "Call us now — we'll prioritise emergencies",
  callLead: "If you are in pain, have broken a tooth, or suffered dental trauma, phone the practice straight away. We aim to see emergency patients as soon as we can.",
  situationsTitle: "Common dental emergencies we treat",
  situations: [
    "Severe toothache or swelling",
    "Broken, chipped, or knocked-out teeth",
    "Lost fillings or crowns",
    "Dental trauma after an accident",
    "Bleeding that will not stop after first aid",
    "Pain or infection after recent treatment",
  ],
  feeTitle: "Emergency appointment fees",
  feeStandard: "£120",
  feeStandardDetail: "Assessment including a small x-ray if required",
  feeExisting: "£85",
  feeExistingDetail: "For regular existing patients who have attended check-ups with us",
  urgentWarningTitle: "When to call 999 or go to A&E",
  urgentWarning:
    "If you have severe swelling affecting your breathing or swallowing, heavy uncontrolled bleeding, or suspect a serious jaw injury, call 999 or attend your nearest A&E department immediately — do not wait for a dental appointment.",
  visitTitle: "What happens when you arrive",
  visitSteps: [
    {
      title: "Quick assessment",
      text: "We focus on relieving pain and understanding the problem — including x-rays if needed.",
    },
    {
      title: "Clear options",
      text: "We'll explain what can be done today and any follow-up treatment, with fees confirmed before you agree.",
    },
    {
      title: "Same-day care when possible",
      text: "Many emergencies can be stabilised or completed in one visit — including composite repairs.",
    },
  ],
  quote: {
    text: "Fantastic dental practice! I was able to get a same day emergency appointment after smashing my front teeth and Dr Goyal did an amazing job with my composite fillings.",
    author: "Rebecca Corry",
    detail: "Emergency patient",
    image: stock.patientFemale,
  },
  ctaTitle: "In pain right now?",
  ctaLead: "Call the practice first so we can advise you and arrange the soonest appointment.",
} as const;

export const images = {
  hero: stock.clinic,
  clinic: stock.clinic,
  smile: stock.patientSmile,
  whitening: stock.portraitWoman,
  implants: stock.implants,
  team: stock.team,
  cosmetic: stock.cosmetic,
  implantClinic: stock.implantClinic,
  testimonial: stock.portraitWoman,
  invisalign: stock.patientSmile,
} as const;

export const homeHero = {
  headline: "Award-winning private dental clinic",
  subtitle:
    "Private dentistry in Greenwich — check-ups, Invisalign, implants and emergency care. We explain fees before treatment starts.",
  image: stock.patientSmile,
  imageAlt: "Happy patient with a healthy, confident smile",
  /** Replace with your own clinic reel when ready */
  video: "/video/hero.mp4",
  videoPoster: stock.clinic,
} as const;

export const services = [
  {
    title: "Cosmetic Dentistry",
    description:
      "Whitening, bonding, veneers and smile makeovers. We'll talk through what would actually suit your teeth.",
    image: images.cosmetic,
    href: "/treatments#cosmetic",
  },
  {
    title: "Dental Implants",
    description:
      "Replace one tooth or several — fixed in place, no slipping dentures. Dr Agarwal handles implant placement and complex cases.",
    image: images.implantClinic,
    href: "/treatments#implants",
  },
  {
    title: "General Dentistry",
    description:
      "Check-ups, fillings, children's dentistry and hygiene for the whole family. Same-day emergency slots where we can.",
    image: images.clinic,
    href: "/treatments#general",
  },
  {
    title: "Advanced Dentistry",
    description:
      "Same-day CEREC crowns, root canal treatment, IV sedation and digital planning — when routine care isn't enough.",
    image: images.team,
    href: "/treatments#advanced",
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
      authorPhoto: stock.teamMale,
      text: "Friendly, professional staff and nice environment. First dentist I have been to where they take photos of your teeth, display them on a monitor and explain any issues and what needs to be done.",
    },
    {
      author: "Sue W",
      rating: 5,
      authorPhoto: stock.reviewFemale,
      text: "I had not been to the dentist for 6+ years because of anxiety. Dr Agarwal and all his staff have been incredibly understanding, kind and supportive. I can smile again without worrying.",
    },
    {
      author: "Margaret H",
      rating: 5,
      authorPhoto: stock.patientFemale,
      text: "A real pleasure — not the sort of thing you normally hear about a dentist. Dr Agarwal really cares; his professionalism, care and attention to detail is evident at every stage.",
    },
    {
      author: "Rebecca Corry",
      rating: 5,
      authorPhoto: stock.patientSmile,
      text: "Fantastic dental practice! I was able to get a same day emergency appointment after smashing my front teeth and Dr Goyal did an amazing job with my composite fillings.",
    },
    {
      author: "Alfredo S",
      rating: 5,
      authorPhoto: stock.reviewMale,
      text: "Came here for Invisalign treatment and it's going wonderfully! Plenty of information, modern equipment and very friendly staff.",
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
    bio: "Clinical Director. Implants, IV sedation and complex restorative work — the cases other practices refer on.",
    image: images.team,
  },
  {
    name: "Dr Disha Goyal",
    role: "Director",
    gdc: "246298",
    qualifications: ["BDS", "LDS RCS (Eng)", "MJDF RCS (Eng)", "Dip Endodontics (UCLAN)"],
    specialties: ["Root canal treatment", "Minimally invasive cosmetic dentistry", "Endodontics"],
    bio: "Qualified with distinction. Endodontics and minimally invasive cosmetic work — root canals and front-tooth repairs are her speciality.",
    image: stock.teamFemale,
  },
  {
    name: "Dr Michael Chen",
    role: "Associate Dentist",
    gdc: "281104",
    qualifications: ["BDS (Hons)", "MFDS RCPS (Glasg)"],
    specialties: ["General dentistry", "Cosmetic dentistry", "Nervous patients & families"],
    bio: "General and cosmetic dentistry. Known for a calm chairside manner — popular with nervous patients and families.",
    image: stock.reviewMale,
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
    bio: "Your point of contact from first call to final appointment — treatment plans, Invisalign journeys and fee breakdowns.",
    image: stock.patientSmile,
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
    bio: "Hygiene and gum care — scale and polish, air polish, and periodontal treatment between dental visits.",
    image: stock.portraitWoman,
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
    bio: "Runs day-to-day operations — often the first voice on the phone. Handles billing, insurance queries and scheduling.",
    image: stock.teamMale2,
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
  "Digital x-rays and 3D scanning",
  "IV sedation for nervous patients",
  "Five minutes from Cutty Sark DLR",
] as const;

export const pageHeroImages = {
  about: {
    src: images.hero,
    alt: "Greenwich Dental Health private dental clinic",
  },
  treatments: {
    src: images.cosmetic,
    alt: "Cosmetic and general dental treatments",
  },
  fees: {
    src: images.clinic,
    alt: "Modern dental practice interior",
  },
  team: {
    src: images.team,
    alt: "Greenwich Dental Health clinical team",
  },
  contact: {
    src: images.clinic,
    alt: "Reception at Greenwich Dental Health",
  },
  emergency: {
    src: images.clinic,
    alt: "Emergency dental care at our Greenwich practice",
  },
  nervous: {
    src: images.smile,
    alt: "Gentle dentistry for nervous patients",
  },
  refer: {
    src: images.team,
    alt: "Refer a patient to our Greenwich practice",
  },
} as const;

export const dentalInsurers = [
  "Bupa",
  "AXA",
  "Unum",
  "Denplan",
  "Vitality",
  "Simplyhealth",
  "Overseas insurers",
] as const;

export const feeIntro = {
  feesTitle: "What does treatment cost?",
  feesLead:
    "Pick a category below. Prices are indicative — your dentist confirms the final quote at your consultation.",
  insuranceTitle: "Dental insurance accepted",
  insuranceLead:
    "We accept Bupa, AXA, Denplan, Vitality, Simplyhealth and overseas insurers. Itemised invoices provided after every visit.",
  insuranceDetail:
    "After every appointment we provide a fully itemised invoice — clear codes, dates and fees — so your claim is straightforward for you or your employer.",
  ctaTitle: "Questions about our fees?",
  ctaLead:
    "Call or email — we're happy to walk through treatment options, insurance or what to expect before you book.",
  ctaContactLabel: "Contact us",
  ctaBookLabel: "Book free consultation",
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
      "Whitening, veneers, composite bonding and smile makeovers. We plan around your teeth and budget, not a one-size package.",
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
      "Single-tooth replacements through to full-arch solutions. Titanium posts fixed in the jaw — function and appearance restored.",
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
      "Examinations, fillings, extractions and preventive care for adults and children. Emergency appointments available.",
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
      "Clear aligners for adults and teenagers. Free initial consultation, digital scan, and treatment supervised by our Invisalign Elite team.",
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
      "CEREC same-day crowns, root canal therapy, IV sedation and fixed braces — backed by digital scanning and 3D planning.",
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
      "Scale and polish, air polish for staining, and gum disease treatment. Hygiene appointments with our therapist or a dentist.",
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
    description: "Chairside Zoom and take-home kits — typically one to two shades lighter in a single visit.",
    image: images.whitening,
  },
  {
    treatment: "Invisalign®",
    description: "Clear aligners for mild to complex crowding. Treatment times vary — most cases run 6–18 months.",
    image: images.smile,
  },
  {
    treatment: "Cosmetic Bonding & Veneers",
    description: "Shape, shade and symmetry corrected on front teeth — bonding from £245 per tooth, veneers from £895.",
    image: images.cosmetic,
  },
  {
    treatment: "Dental Implants",
    description: "Single implants from £2,850 including the crown. Before and after photos available at consultation.",
    image: images.implants,
  },
] as const;

export const aboutContent = {
  headline: "Your Private Dentist in Greenwich, London",
  paragraphs: [
    "We're a private dental practice at New Capital Quay in Greenwich — about five minutes' walk from Cutty Sark DLR. The practice won Private Dentistry Practice of the Year in 2024 and holds Invisalign Elite Provider status.",
    "Dr Abhishek Agarwal and Dr Disha Goyal lead the clinical team. Between them they cover implants, sedation, endodontics, cosmetic work and general dentistry. We use digital x-rays, intraoral cameras and 3D scanning — you'll see your own teeth on screen before any treatment is discussed.",
    "Fees are listed on our website and confirmed in writing at your consultation. We accept Bupa, AXA, Denplan and most major insurers, and provide itemised invoices for claims.",
  ],
  values: [
    {
      title: "Clinical standards",
      description: "Award-winning team with advanced training in implants, sedation and digital dentistry.",
    },
    {
      title: "Upfront pricing",
      description: "Full fee guide online. Written estimates before treatment — no surprises at checkout.",
    },
    {
      title: "Nervous patients welcome",
      description: "IV sedation for adults, laughing gas for children aged 5–14. Appointments at your pace.",
    },
    {
      title: "Greenwich riverside",
      description: "14-16 Victoria Parade, New Capital Quay — parking nearby, easy from Greenwich and Canary Wharf.",
    },
  ],
} as const;
