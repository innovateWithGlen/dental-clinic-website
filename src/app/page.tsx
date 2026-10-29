import Link from "next/link";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Sparkles,
  ShieldCheck,
  HeartPulse,
  Smile,
  Stethoscope,
  Baby,
  Crown,
  CalendarCheck,
  ChevronRight,
  Navigation,
  ExternalLink,
  CheckCircle2,
  Quote,
  CreditCard,
  Accessibility,
  Bath,
  ArrowRight,
  Timer,
  CalendarClock,
  GraduationCap,
  BadgeCheck,
  Video,
  Languages,
  Award,
} from "lucide-react";
import CalBooking from "@/components/CalBooking";
import SmileTransformations from "@/components/SmileTransformations";

const GOOGLE_MAPS_SHORT_URL = "https://maps.app.goo.gl/KY9ZXvdDvM4eRSNk9";

const GOOGLE_MAPS_EMBED_SRC =
  "https://www.google.com/maps?q=Vishnu+Dental+Care,+No+39,+Maruthi+Complex,+11th+Cross,+Vyalikaval,+Kodandarampura,+Malleshwaram,+Bengaluru,+Karnataka+560003&output=embed";

const GOOGLE_MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Vishnu+Dental+Care,+No+39,+Maruthi+Complex,+11th+Cross,+Vyalikaval,+Malleshwaram,+Bengaluru,+Karnataka+560003";

/* Inline SVG icons for brand/social where lucide doesn't include them */
function ToothIcon({
  size = 20,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
    >
      <path d="M12 5.5c-1.5 0-2.5.5-4 .8-2.5.4-4-.5-4 2.2 0 3.5 1.5 5.5 2 7.5.4 1.7 1 3.5 2 3.5 1.2 0 1.4-2.2 2-3.8.5-1.3 1-2 2-2s1.5.7 2 2c.6 1.6.8 3.8 2 3.8 1 0 1.6-1.8 2-3.5.5-2 2-4 2-7.5 0-2.7-1.5-1.8-4-2.2-1.5-.3-2.5-.8-4-.8z" />
    </svg>
  );
}

function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <img
      src="/images/vishnu-dental-care-mark.png"
      alt="Dental Care logo"
      width={size}
      height={size}
      style={{ height: size, width: size }}
      className="rounded-xl bg-white object-cover shadow-sm ring-1 ring-slate-200"
    />
  );
}

/* ---------- Data ---------- */

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Smile Gallery", href: "#transformations" },
  { label: "Reviews", href: "#reviews" },
  { label: "Book", href: "#booking" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: ToothIcon,
    title: "Root Canal Treatment",
    desc: "Painless root canals with natural-looking caps you can't tell apart.",
    highlighted: true,
  },
  {
    icon: Stethoscope,
    title: "Wisdom Tooth Removal",
    desc: "Gentle, pain-free surgical extractions with clear after-care guidance.",
    highlighted: true,
  },
  {
    icon: Crown,
    title: "Dental Implants",
    desc: "Permanent, natural-looking replacements for missing teeth & bridges.",
    highlighted: true,
  },
  {
    icon: ShieldCheck,
    title: "Cavity Filling",
    desc: "Quick, seamless tooth-coloured fillings and restorations.",
    highlighted: true,
  },
  {
    icon: HeartPulse,
    title: "Painless Procedures",
    desc: "Modern anesthesia and gentle techniques for anxiety-free visits.",
    highlighted: false,
  },
  {
    icon: Timer,
    title: "Punctual Appointments",
    desc: "On-time slots that respect your schedule — no long waiting.",
    highlighted: false,
  },
  {
    icon: Baby,
    title: "Family Clinic",
    desc: "Trusted care for kids, adults & seniors — whole families visit us.",
    highlighted: false,
  },
  {
    icon: Sparkles,
    title: "Sanitized Equipment",
    desc: "Strict sterilization and a spotless, well-maintained clinic.",
    highlighted: false,
  },
  {
    icon: CalendarClock,
    title: "Flexible Scheduling",
    desc: "Easy booking and rescheduling that fits around your availability.",
    highlighted: false,
  },
];

const HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    title: "Sanitized & Sterile",
    desc: "Strict sterilization, sanitized equipment & a spotless facility.",
  },
  {
    icon: HeartPulse,
    title: "Painless Procedures",
    desc: "Gentle, anxiety-free dentistry — even nervous patients feel at ease.",
  },
  {
    icon: Star,
    title: "4.9★ on Google",
    desc: "113 glowing reviews from patients across Bengaluru.",
  },
  {
    icon: Baby,
    title: "Family Clinic",
    desc: "Punctual appointments with flexible scheduling for the whole family.",
  },
];

const REVIEWS = [
  {
    name: "G Somesh",
    meta: "4 reviews",
    time: "a month ago",
    text: "Exceptional and comforting care! As someone who gets anxious at the dentist, Dr. Sriram @ Dental Care completely put me at ease. He took the time to listen, explained every step, and delivered a completely painless procedure.",
  },
  {
    name: "Joseph Souza",
    meta: "2 reviews",
    time: "a month ago",
    text: "It was really wonderful experience with all expertise, the service given was really very good. Doctor was very kind and hospitable. I would highly recommend those in need of dental help. Thank you.",
  },
  {
    name: "Samarth Sriram",
    meta: "4 reviews",
    time: "a month ago",
    text: "It was a wonderful experience, great doctor, has a lot of patience. Overall one of the best clinics in Bangalore.",
  },
  {
    name: "Sahana Pai",
    meta: "Local Guide · 18 reviews",
    time: "a year ago",
    text: "Very good doctor. Got my wisdom tooth extracted and my teeth cleaned here. You can book an appointment with the receptionist before visiting.",
  },
  {
    name: "Gautam Nandakumar",
    meta: "Local Guide · 12 reviews",
    time: "4 years ago",
    text: "It was my 1st experience at a dental clinic ever, so I was a bit nervous. But to my surprise it was a very pain free & nice experience. Dr. Sriram makes you feel absolutely comfortable & explains everything with a lot of knowledge.",
  },
  {
    name: "Priya Rai",
    meta: "Local Guide · 23 reviews",
    time: "6 years ago",
    text: "I happened to visit Vishnu Dental Clinic just by chance and till date don't regret it. My entire family goes here. The clinic is absolutely spotless and makes my visit there very satisfying.",
  },
  {
    name: "Govind Samtani",
    meta: "Local Guide · 74 reviews",
    time: "2 years ago",
    text: "Root canal has become so easy that you don't feel any pain. Added to this, the cap that is fixed is so natural that you cannot make out that it has been fixed. On the whole I am a most satisfied patient.",
    ownerResponse: "Thank u sir for your kind review",
  },
  {
    name: "Nisarg Shah",
    meta: "Local Guide · 11 reviews",
    time: "3 years ago",
    text: "I visited Dr. Sriram's clinic for root canals, teeth implant, and bridges. All the appointments were very smooth, painless, and perfectly done. There was enough flexibility to schedule appointments as per availability. Would highly recommend Dental Care for all your dental needs.",
  },
];

const AMENITY_GROUPS = [
  {
    title: "Accessibility",
    items: ["Wheelchair-accessible seating", "Wheelchair-accessible toilet"],
    icon: Accessibility,
  },
  {
    title: "Amenities & Parking",
    items: ["Clean restroom", "On-site parking available", "LGBTQ+ friendly space"],
    icon: Bath,
  },
  {
    title: "Planning",
    items: ["Appointment required", "Appointments recommended"],
    icon: CalendarCheck,
  },
  {
    title: "Payments Accepted",
    items: ["Debit cards", "Google Pay / UPI", "NFC mobile payments", "Easy EMI options"],
    icon: CreditCard,
  },
];

/* ---------- Reusable pieces ---------- */

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < count ? "fill-amber-400 text-amber-400" : "text-slate-300"}
        />
      ))}
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
        <Sparkles size={12} />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-slate-600">{subtitle}</p>
      ) : null}
    </div>
  );
}

function ReviewCard({ r }: { r: (typeof REVIEWS)[number] }) {
  return (
    <figure className="relative flex w-[300px] flex-shrink-0 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:w-[360px]">
      <Quote size={28} className="absolute right-5 top-5 text-brand-100" />
      <Stars count={5} />
      <blockquote className="mt-4 line-clamp-6 text-sm leading-relaxed text-slate-700">
        &ldquo;{r.text}&rdquo;
      </blockquote>
      {r.ownerResponse ? (
        <p className="mt-3 rounded-lg bg-slate-50 px-3 py-2 text-xs italic text-slate-600">
          <span className="font-semibold not-italic text-slate-800">
            Response from owner:{" "}
          </span>
          {r.ownerResponse}
        </p>
      ) : null}
      <figcaption className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-mint-600 text-sm font-semibold text-white">
          {r.name
            .split(" ")
            .map((w) => w[0])
            .slice(0, 2)
            .join("")}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-900">{r.name}</p>
          <p className="truncate text-xs text-slate-500">
            {r.meta} · {r.time}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function HomePage() {
  const phone = "+919353678546";
  const phoneDisplay = "93536 78546";
  const address =
    "No 39, Maruthi Complex, 11th Cross, above Mahaveer Ayurvedics, Vyalikaval, Kodandarampura, Malleshwaram, Bengaluru, Karnataka 560003";
  const hours = "Mon–Sat: 10:00 AM – 8:00 PM · Sun: Closed";

  return (
    <main className="min-h-screen bg-white">
      {/* ============ NAVBAR ============ */}
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <LogoMark />
            <div className="leading-tight">
              <div className="font-display text-lg font-bold text-slate-900">
                Dental Care
              </div>
              <div className="text-xs text-slate-500">Family Dental Clinic · Malleshwaram</div>
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-700 transition hover:text-brand-700"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${phone}`}
              className="hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-50 sm:inline-flex"
            >
              <Phone size={15} />
              {phoneDisplay}
            </a>
            <a
              href="#booking"
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
            >
              Book Now <ChevronRight size={16} />
            </a>
          </div>
        </nav>
      </header>

      {/* ============ HERO ============ */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3 py-1.5 text-xs font-semibold text-brand-700 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Accepting new patients · Malleshwaram, Bengaluru
            </div>

            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] text-slate-900 sm:text-5xl lg:text-[3.5rem]">
              Gentle, Modern Dental Care{" "}
              <span className="bg-gradient-to-r from-brand-600 to-mint-600 bg-clip-text text-transparent">
                Your Family Will Love
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              Dental Care is a trusted family dental clinic in
              Malleshwaram led by{" "}
              <strong className="text-slate-900">
                Dr. Arjun Mehra (B.D.S., F.A.G.E.)
              </strong>
              , Dental Surgeon with 25 years of experience. From painless root
              canals, wisdom tooth removal and implants to cavity
              fillings — we deliver gentle, sanitized, punctual care with
              flexible scheduling, and our 113 4.9★ reviews prove it.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700 hover:shadow-brand-700/30"
              >
                <CalendarCheck size={18} />
                Book Appointment
              </a>
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-800 shadow-sm transition hover:border-brand-400 hover:text-brand-700"
              >
                <Phone size={18} />
                Call {phoneDisplay}
              </a>
            </div>

            {/* Rating block */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
                  <span className="font-display text-xl font-bold text-amber-600">
                    4.9
                  </span>
                </div>
                <div>
                  <Stars />
                  <p className="mt-0.5 text-sm font-medium text-slate-700">
                    113 Google Reviews
                  </p>
                </div>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 size={18} className="text-emerald-500" />
                <span>
                  <span className="font-semibold text-slate-900">Painless</span> &
                  gentle dentistry
                </span>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <ShieldCheck size={18} className="text-emerald-500" />
                <span>Sanitized, hygienic facility</span>
              </div>
            </div>

            {/* Review quote */}
            <div className="mt-6 rounded-xl border-l-4 border-brand-500 bg-white/60 p-4 text-sm italic text-slate-700">
              &ldquo;Exceptional and comforting care! Dr. Sriram completely put
              me at ease — a completely painless procedure.&rdquo;
              <span className="mt-1 block text-xs font-semibold not-italic text-slate-500">
                — G Somesh · 5★ Google review
              </span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Decorative cards */}
              <div className="absolute -left-4 -top-4 z-20 hidden rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-200 sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <HeartPulse size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Patient comfort</p>
                    <p className="text-sm font-semibold text-slate-900">
                      Painless & gentle
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-4 z-20 hidden rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-200 sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <CalendarCheck size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Online booking</p>
                    <p className="text-sm font-semibold text-slate-900">
                      Instant confirmation
                    </p>
                  </div>
                </div>
              </div>

              {/* Main image card */}
              <div className="animate-float relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 to-mint-700 p-1 shadow-2xl shadow-brand-600/30">
                <div className="relative h-full w-full overflow-hidden rounded-[calc(1.5rem-4px)] bg-gradient-to-br from-brand-50 to-mint-50">
                  <img
                    src="/images/docter-pacient.png"
                    alt="Male dentist treating a patient in the dental chair at Dental Care"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent p-5 text-white">
                    <p className="text-sm font-medium opacity-90">Led by</p>
                    <p className="font-display text-xl font-bold">
                      Dr. Arjun Mehra
                    </p>
                    <p className="text-xs opacity-80">
                      B.D.S., F.A.G.E · Dental Surgeon · 25 yrs experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============ ABOUT ============ */}
      <section id="about" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="About Dental Care"
            title="A clean, welcoming family clinic in Malleshwaram"
            subtitle="Families across Malleshwaram and Bengaluru trust Dr. Arjun Mehra with their smiles. We combine gentle, painless techniques with sanitized equipment, punctual appointments and flexible scheduling."
          />

          {/* Meet the doctor */}
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-brand-50/50 shadow-sm">
            <div className="grid gap-0 sm:grid-cols-5">
              <div className="flex items-center justify-center bg-gradient-to-br from-brand-600 to-mint-700 p-8 sm:col-span-2">
                <div className="text-center text-white">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/20 font-display text-3xl font-bold ring-2 ring-white/60">
                    AM
                  </div>
                  <p className="mt-4 font-display text-xl font-bold">
                    Dr. Arjun Mehra
                  </p>
                  <p className="mt-1 text-sm text-white/85">
                    B.D.S., F.A.G.E
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-white">
                    Dental Surgeon · Bangalore
                  </p>
                </div>
              </div>
              <div className="p-8 sm:col-span-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                  Meet your dentist
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <GraduationCap size={17} className="mt-0.5 flex-shrink-0 text-brand-700" />
                    <span><strong>Qualification:</strong> B.D.S., F.A.G.E</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Award size={17} className="mt-0.5 flex-shrink-0 text-brand-700" />
                    <span><strong>Experience:</strong> 25 years overall</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Stethoscope size={17} className="mt-0.5 flex-shrink-0 text-brand-700" />
                    <span><strong>Specialisation:</strong> Dental Surgeon</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <BadgeCheck size={17} className="mt-0.5 flex-shrink-0 text-brand-700" />
                    <span><strong>Registration:</strong> 11425-A, Karnataka State Dental Council (2001)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Languages size={17} className="mt-0.5 flex-shrink-0 text-brand-700" />
                    <span><strong>Languages:</strong> English</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Video size={17} className="mt-0.5 flex-shrink-0 text-brand-700" />
                    <span><strong>Consultations:</strong> In-clinic visits & video consultation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((h) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.title}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/50"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-mint-600 text-white shadow-md">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    {h.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {h.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============ SERVICES ============ */}
      <section id="services" className="bg-slate-50/70 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Services"
            title="Complete dental care under one roof"
            subtitle="From painless root canals and wisdom tooth removal to implants and cavity fillings — plus punctual, family-friendly care with sanitized equipment and flexible scheduling."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className={`relative overflow-hidden rounded-2xl border p-6 transition hover:-translate-y-1 hover:shadow-lg ${
                    s.highlighted
                      ? "border-brand-200 bg-gradient-to-br from-white to-brand-50 shadow-sm"
                      : "border-slate-200 bg-white shadow-sm"
                  }`}
                >
                  <div
                    className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm ${
                      s.highlighted
                        ? "bg-gradient-to-br from-brand-500 to-mint-600"
                        : "bg-slate-900"
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-base font-bold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {s.desc}
                  </p>
                  {s.highlighted && (
                    <span className="absolute right-4 top-4 rounded-full bg-brand-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      Popular
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Not sure which service? Book a consultation <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============ BEFORE / AFTER ============ */}
      <section id="transformations" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Smile Transformations"
            title="Drag to compare before & after"
            subtitle="Explore real treatment outcomes — root canals, wisdom tooth removal, implants and cavity fillings. Slide the handle to see the difference gentle, expert care makes."
          />
          <SmileTransformations />
        </div>
      </section>

      <div className="section-divider" />

      {/* ============ REVIEWS ============ */}
      <section id="reviews" className="overflow-hidden py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Patient Stories"
            title="Loved by 113 patients (4.9★)"
            subtitle="Here's what our patients are saying on Google."
          />

          {/* Review summary bar */}
          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm sm:flex-row">
            <div className="text-center">
              <div className="font-display text-5xl font-extrabold text-slate-900">
                4.9
              </div>
              <Stars count={5} />
              <div className="mt-1 text-sm text-slate-500">113 reviews</div>
            </div>
            <div className="h-px w-full bg-slate-200 sm:h-16 sm:w-px" />
            <div className="flex-1 space-y-1.5">
              {[5, 4, 3, 2, 1].map((n) => {
                const pct = n === 5 ? 96 : n === 4 ? 3 : 1;
                return (
                  <div key={n} className="flex items-center gap-2 text-xs">
                    <span className="w-6 font-semibold text-slate-700">{n}</span>
                    <Star size={12} className="fill-amber-400 text-amber-400" />
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200">
                      <div
                        className="h-full rounded-full bg-amber-400"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <a
              href={GOOGLE_MAPS_SHORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
            >
              See all reviews <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Infinite marquee — duplicated list for a seamless right→left loop */}
        <div className="reviews-marquee relative mt-12 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-28" />
          <div className="reviews-marquee-track flex w-max gap-6 px-4">
            {REVIEWS.map((r) => (
              <ReviewCard key={`a-${r.name}`} r={r} />
            ))}
            {REVIEWS.map((r) => (
              <div key={`b-${r.name}`} aria-hidden="true">
                <ReviewCard r={r} />
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl px-4 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
          Read all 113 reviews on{" "}
          <a
            href={GOOGLE_MAPS_SHORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-brand-700 underline-offset-2 hover:underline"
          >
            Google Maps <ExternalLink size={13} />
          </a>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============ BOOKING ============ */}
      <section id="booking" className="bg-gradient-to-br from-brand-50 via-white to-mint-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 shadow-sm ring-1 ring-brand-200">
                <CalendarCheck size={12} />
                Online booking
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
                Reserve your visit in seconds
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Choose a time that works for you, tell us what you need, and
                we&apos;ll confirm your appointment right away. Powered by Cal.com with real-time slot availability.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Painless consultation & treatment options",
                  "In-clinic visits & video consultation",
                  "Punctual slots with flexible rescheduling",
                  "Transparent pricing, no hidden fees",
                  "Automated calendar invite & reminder",
                  "Family-friendly, sanitized clinic",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Prefer to call or walk in?
                </p>
                <a
                  href={`tel:${phone}`}
                  className="mt-2 inline-flex items-center gap-2 font-display text-xl font-bold text-brand-700 hover:text-brand-800"
                >
                  <Phone size={18} /> {phoneDisplay}
                </a>
                <p className="mt-3 flex items-start gap-2 text-sm text-slate-600">
                  <Clock size={16} className="mt-0.5 flex-shrink-0 text-slate-400" />
                  Open · Closes 8 PM Mon–Sat &bull; Malleshwaram, Bengaluru
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="rounded-3xl bg-white p-5 shadow-xl ring-1 ring-slate-200/70 sm:p-8">
                <CalBooking />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============ CONTACT / LOCATION ============ */}
      <section id="contact" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Visit Us"
            title="Find Dental Care"
            subtitle="We're above Mahaveer Ayurvedics at Maruthi Complex, 11th Cross, Vyalikaval — easy to reach from across Malleshwaram & Bengaluru."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-5">
            <div className="space-y-5 lg:col-span-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Address
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-800">
                      {address}
                    </p>
                    <a
                      href={GOOGLE_MAPS_DIRECTIONS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 hover:underline"
                    >
                      <Navigation size={13} />
                      Get directions on Google Maps &rarr;
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Call us
                    </p>
                    <a
                      href={`tel:${phone}`}
                      className="mt-1 block font-display text-lg font-bold text-slate-900 hover:text-brand-700"
                    >
                      {phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Hours
                    </p>
                    <p className="mt-1 text-sm text-slate-800">{hours}</p>
                    <p className="mt-1 text-xs font-semibold text-emerald-600">
                      Open · Closes 8 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Star size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Google reviews
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      4.9 ★ · 113 reviews
                    </p>
                    <a
                      href={GOOGLE_MAPS_SHORT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm font-semibold text-brand-700 hover:underline"
                    >
                      See all reviews on Google Maps &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:col-span-3">
              <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                {/* Map quick action header */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 bg-slate-50/70 p-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-display font-bold text-slate-900">
                        Dental Care
                      </span>
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-800">
                        4.9 ★ (113)
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">
                      Dental clinic &bull; Malleshwaram, Bengaluru
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={GOOGLE_MAPS_DIRECTIONS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-brand-700"
                    >
                      <Navigation size={13} />
                      Directions
                    </a>
                    <a
                      href={GOOGLE_MAPS_SHORT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-brand-500 hover:text-brand-700"
                    >
                      <ExternalLink size={13} />
                      View on Maps
                    </a>
                  </div>
                </div>

                {/* The exact Google Maps embed iframe */}
                <div className="relative min-h-[450px] w-full flex-1 bg-slate-100">
                  <iframe
                    title="Dental Care on Google Maps"
                    src={GOOGLE_MAPS_EMBED_SRC}
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="h-full min-h-[450px] w-full border-0"
                  />
                </div>

                {/* Map card footer */}
                <div className="border-t border-slate-100 bg-white px-4 py-2.5 text-xs text-slate-600">
                  <span className="font-semibold text-slate-800">Landmarks:</span> Maruthi Complex, 11th Cross &bull; Above Mahaveer Ayurvedics &bull; Vyalikaval, Malleshwaram
                </div>
              </div>
            </div>
          </div>

          {/* Amenities grid */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {AMENITY_GROUPS.map((g) => {
              const Icon = g.icon;
              return (
                <div
                  key={g.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-slate-900">
                    {g.title}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {g.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle2
                          size={14}
                          className="mt-0.5 flex-shrink-0 text-emerald-500"
                        />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ CTA STRIP ============ */}
      <section className="border-t border-slate-200 bg-slate-900 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 sm:px-6 lg:flex-row lg:px-8">
          <div className="text-center lg:text-left">
            <p className="font-display text-xl font-bold text-white">
              Ready for a healthier, pain-free smile?
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Call {phoneDisplay} or book online — we&apos;ll take care of the rest.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              <Smile size={16} /> Book Appointment
            </a>
            <a
              href={GOOGLE_MAPS_SHORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              <Star size={16} /> 4.9★ · 113 Reviews
            </a>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-slate-800 bg-slate-900 text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="/images/vishnu-dental-care-logo.png"
                alt="Dental Care logo"
                className="h-16 w-auto rounded-xl bg-white px-3 py-2 shadow-sm"
              />
              <div className="text-xs leading-relaxed text-slate-400">
                Family Dental Clinic
                <br />
                Malleshwaram, Bengaluru
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
              A modern, sanitized family dental clinic offering gentle, painless
              and affordable dental care. Led by Dr. Arjun Mehra (B.D.S.,
              F.A.G.E), Dental Surgeon with 25 years of experience — root canals,
              wisdom tooth removal, implants, cavity fillings & more, with
              punctual appointments and flexible scheduling.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-amber-400 ring-1 ring-slate-700">
                ★ 4.9 · 113 reviews
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-slate-400 transition hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <Phone size={14} className="mt-0.5" />
                <a href={`tel:${phone}`} className="hover:text-white">
                  {phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>No 39, Maruthi Complex, 11th Cross, Vyalikaval, Malleshwaram, Bengaluru 560003</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={14} className="mt-0.5" />
                <span>Mon–Sat: 10:00 AM – 8 PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
            <p>
              © {new Date().getFullYear()} Dental Care. All rights
              reserved. Designed by{" "}
              <a
                href="https://www.linkedin.com/in/glen-monteiro/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-400 underline-offset-2 transition hover:text-white hover:underline"
              >
                Glen Monteiro
              </a>
            </p>
            <p>Crafted with care for healthier smiles.</p>
          </div>
        </div>
      </footer>

    </main>
  );
}
