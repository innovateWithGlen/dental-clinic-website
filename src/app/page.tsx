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
  Scan,
  ArrowRight,
  CheckCircle2,
  Quote,
  CreditCard,
  Accessibility,
  Bath,
  CalendarCheck,
  ChevronRight,
  Navigation,
  ExternalLink,
  Share2,
} from "lucide-react";

const GOOGLE_MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3643.2906138249327!2d72.87200127505177!3d19.065800082136672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9a556777eef%3A0x23bab342ac97014f!2sSmile%20Care%20Clinic!5e1!3m2!1sen!2sus!4v1789755679009!5m2!1sen!2sus";

const GOOGLE_MAPS_PLACE_URL =
  "https://maps.google.com/?cid=2574719266736439631";

const GOOGLE_MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Smile+Care+Clinic,+Shop+no.+1,+sunny+chs,+Lal+Bahadur+Shastri+Marg,+near+Old+Post+Office,+Kurla+West,+Mumbai+400070";

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

function InstagramIcon({
  size = 18,
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
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
import CalBooking from "@/components/CalBooking";

/* ---------- Data ---------- */

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Book", href: "#booking" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: ToothIcon,
    title: "Root Canal Treatment",
    desc: "Single-sitting, painless root canals with advanced rotary endodontics.",
    highlighted: true,
  },
  {
    icon: Crown,
    title: "Dental Implants",
    desc: "Permanent, natural-looking tooth replacements using premium implants.",
  },
  {
    icon: Stethoscope,
    title: "Wisdom Tooth Extraction",
    desc: "Gentle, fast extractions including impacted wisdom teeth by Dr. Saurabh.",
    highlighted: true,
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening & Cleaning",
    desc: "Professional scaling, polishing & whitening for a brighter smile.",
  },
  {
    icon: Smile,
    title: "Cosmetic Dentistry",
    desc: "Veneers, bonding, and smile makeovers designed to match your face.",
  },
  {
    icon: Baby,
    title: "Family & Pediatric Dentistry",
    desc: "Gentle care for kids, adults, and seniors — your family's dental home.",
  },
  {
    icon: Scan,
    title: "Digital X-Rays & Diagnosis",
    desc: "Low-radiation digital imaging for accurate, chairside diagnosis.",
  },
  {
    icon: ShieldCheck,
    title: "Dental Fillings & Restorations",
    desc: "Tooth-coloured composite fillings and crowns that look natural.",
  },
];

const HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    title: "Sterile & Hygienic",
    desc: "Strict autoclave sterilization & clean, well-maintained facility.",
  },
  {
    icon: HeartPulse,
    title: "Painless Procedures",
    desc: "Modern anesthesia and gentle techniques for anxiety-free visits.",
  },
  {
    icon: Star,
    title: "5.0★ on Google",
    desc: "163+ glowing reviews from patients across Mumbai.",
  },
  {
    icon: CreditCard,
    title: "Affordable & Transparent",
    desc: "Upfront pricing, value for money, multiple payment options.",
  },
];

const REVIEWS = [
  {
    name: "Mitali Kashaveni",
    time: "2 months ago",
    rating: 5,
    text:
      "I had my wisdom tooth extracted by Dr. Saurabh Inamadar, and I had a great experience. He was professional, explained the procedure clearly, and made me feel comfortable throughout. The extraction was quick and smooth, and the clinic staff were friendly and supportive.",
  },
  {
    name: "Jyoti Gupta",
    time: "3 months ago",
    rating: 5,
    text:
      "I've always had severe anxiety about going to the dentist, but Dr. Saurabh completely changed that for me. He was incredibly patient, walked me through every step, and checked on me constantly to make sure I was comfortable.",
  },
  {
    name: "Milind Pawar",
    time: "7 months ago",
    badge: "Local Guide",
    rating: 5,
    text:
      "Excellent experience at Smile Care Dental Clinic! Dr. Saurabh Inamdar is an exceptional dentist — a master in Dental Surgery. His professionalism, kindness, and attention to detail put me at ease. The clinic is clean and well maintained.",
  },
];

const AMENITY_GROUPS = [
  {
    title: "Accessibility",
    items: ["Wheelchair-accessible seating", "Wheelchair-accessible toilet"],
    icon: Accessibility,
  },
  {
    title: "Amenities",
    items: ["Clean restroom", "Comfortable waiting area"],
    icon: Bath,
  },
  {
    title: "Planning",
    items: ["Appointments recommended", "Walk-ins welcome (subject to availability)"],
    icon: CalendarCheck,
  },
  {
    title: "Payments Accepted",
    items: ["Credit & Debit Cards", "Google Pay / UPI", "NFC mobile payments", "Cash"],
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

export default function HomePage() {
  const phone = "+919970279892";
  const phoneDisplay = "099702 79892";
  const address =
    "Shop No. 1, Sunny CHS, Lal Bahadur Shastri Marg, near Old Post Office, near Imperial Cycles, Kurla West, Kurla, Mumbai, Maharashtra 400070";
  const hours = "Mon–Sat: 10:30 AM – 9:00 PM · Sun: Closed";

  return (
    <main className="min-h-screen bg-white">
      {/* ============ NAVBAR ============ */}
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-mint-600 shadow-sm">
              <Smile className="h-6 w-6 text-white" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg font-bold text-slate-900">
                Smile Care
              </div>
              <div className="text-xs text-slate-500">स्माइल केयर · Dental Clinic</div>
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
              Accepting new patients · Kurla West, Mumbai
            </div>

            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] text-slate-900 sm:text-5xl lg:text-[3.5rem]">
              Gentle, Modern Dental Care{" "}
              <span className="bg-gradient-to-r from-brand-600 to-mint-600 bg-clip-text text-transparent">
                Your Family Will Love
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              Smile Care Clinic is a trusted, hygienic dental practice in Kurla
              West led by <strong className="text-slate-900">Dr. Saurabh Inamadar</strong>.
              From painless root canals to dental implants, we deliver amazing
              service at an affordable price — and our 163+ 5★ reviews prove it.
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
                    5.0
                  </span>
                </div>
                <div>
                  <Stars />
                  <p className="mt-0.5 text-sm font-medium text-slate-700">
                    163+ Google Reviews
                  </p>
                </div>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 size={18} className="text-emerald-500" />
                <span>
                  <span className="font-semibold text-slate-900">15+ years</span> of
                  clinical excellence
                </span>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <ShieldCheck size={18} className="text-emerald-500" />
                <span>Sterile, hygienic facility</span>
              </div>
            </div>

            {/* Review quote */}
            <div className="mt-6 rounded-xl border-l-4 border-brand-500 bg-white/60 p-4 text-sm italic text-slate-700">
              &ldquo;Literally amazing service at affordable price.&rdquo;
              <span className="mt-1 block text-xs font-semibold not-italic text-slate-500">
                — A recent 5★ Google review
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
                    src="/images/doctor-and-patient.jpeg"
                    alt="Dr. Saurabh Inamadar with a young smiling patient at Smile Care Clinic"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent p-5 text-white">
                    <p className="text-sm font-medium opacity-90">Led by</p>
                    <p className="font-display text-xl font-bold">
                      Dr. Saurabh Inamadar
                    </p>
                    <p className="text-xs opacity-80">
                      BDS, MDS — Dental Surgeon & Implantologist
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
            eyebrow="About Smile Care"
            title="A clean, welcoming dental home in Kurla"
            subtitle="For over a decade, families across Kurla and Mumbai have trusted us with their smiles. We combine time-honored care with modern techniques and technology."
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-3">
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
            subtitle="From routine checkups to advanced surgical procedures, we offer a full spectrum of dental services tailored to your needs."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* ============ REVIEWS ============ */}
      <section id="reviews" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Patient Stories"
            title="Loved by 163+ patients (5.0★)"
            subtitle="Here's what our patients are saying on Google."
          />

          {/* Review summary bar */}
          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm sm:flex-row">
            <div className="text-center">
              <div className="font-display text-5xl font-extrabold text-slate-900">
                5.0
              </div>
              <Stars count={5} />
              <div className="mt-1 text-sm text-slate-500">163 reviews</div>
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
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure
                key={r.name}
                className="relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <Quote
                  size={28}
                  className="absolute right-5 top-5 text-brand-100"
                />
                <Stars count={r.rating} />
                <blockquote className="mt-4 text-sm leading-relaxed text-slate-700">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-mint-600 font-semibold text-white">
                    {r.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-slate-900">
                        {r.name}
                      </p>
                      {r.badge ? (
                        <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-700">
                          {r.badge}
                        </span>
                      ) : null}
                    </div>
                    <p className="text-xs text-slate-500">{r.time}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-slate-500">
            Read all 163+ reviews on{" "}
            <a
              href={GOOGLE_MAPS_PLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-brand-700 underline-offset-2 hover:underline"
            >
              Google Maps <ExternalLink size={13} />
            </a>
          </div>
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
                  "30-minute consultation or procedure booking",
                  "Free consultation for first-time patients",
                  "Transparent pricing, no hidden fees",
                  "Automated calendar invite & WhatsApp reminder",
                  "Flexible rescheduling if plans change",
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
                  Opens 10:30 AM Mon–Sat &bull; Kurla West, Mumbai
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
            title="Find Smile Care Clinic"
            subtitle="We're located on LBS Marg in Kurla West — easy to reach by train, bus or car."
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
                    <p className="mt-1 text-xs text-slate-500">
                      Plus code: 3V8F+8R Mumbai, Maharashtra
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
                      Opens Saturday 10:30 AM
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <InstagramIcon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Follow us
                    </p>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm font-semibold text-brand-700 hover:underline"
                    >
                      @smilecare_kurla
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
                        Smile Care Clinic
                      </span>
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-800">
                        5.0 ★ (163)
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">
                      Dental clinic &bull; Kurla West, Mumbai
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
                      href={GOOGLE_MAPS_PLACE_URL}
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
                    title="Smile Care Clinic on Google Maps"
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
                  <span className="font-semibold text-slate-800">Landmarks:</span> Near Old Post Office &bull; Near Imperial Cycles &bull; Lal Bahadur Shastri Marg &bull; <span className="font-mono text-[11px] text-slate-500">3V8F+8R</span>
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

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-mint-600">
                <Smile className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-display text-lg font-bold text-white">
                  Smile Care Clinic
                </div>
                <div className="text-xs text-slate-400">
                  स्माइल केयर · Kurla West, Mumbai
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
              A modern, hygienic dental clinic offering gentle, painless and
              affordable dental care for the whole family. Led by Dr. Saurabh
              Inamadar.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-amber-400 ring-1 ring-slate-700">
                ★ 5.0 · 163+ reviews
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
                <span>Kurla West, Mumbai 400070</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={14} className="mt-0.5" />
                <span>Mon–Sat: 10:30 AM – 9 PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
            <p>
              © {new Date().getFullYear()} Smile Care Clinic. All rights
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

      {/* ============ FLOATING CALL BUTTON (MOBILE + DESKTOP) ============ */}
      <a
        href="#booking"
        className="fixed bottom-20 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-600/30 ring-4 ring-white transition hover:bg-brand-700 sm:bottom-24 sm:right-8"
      >
        <CalendarCheck size={18} />
        Book Appointment
      </a>
    </main>
  );
}
