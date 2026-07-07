"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowRight,
  Award,
  BadgeCheck,
  CalendarDays,
  Camera,
  CheckCircle2,
  ChevronUp,
  Clock,
  Coffee,
  Crown,
  Dumbbell,
  Flame,
  HeartPulse,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  Music,
  Phone,
  Shield,
  Sparkles,
  Star,
  Users,
  Utensils,
  Waves,
  X,
  Zap,
} from "lucide-react";

type NavLink = {
  label: string;
  href: string;
};

type Stat = {
  label: string;
  value: number | string;
  suffix?: string;
  decimals?: number;
  Icon: LucideIcon;
};

type IconCard = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

type FeaturedProgram = IconCard & {
  focus: string;
};

type MembershipPlan = {
  name: string;
  tone: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

type Trainer = {
  name: string;
  role: string;
  focus: string;
  initials: string;
};

type GalleryItem = {
  title: string;
  label: string;
  image: string;
  alt: string;
  feature?: "wide" | "tall";
};

type Testimonial = {
  quote: string;
  author: string;
};

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "About", href: "#about" },
  { label: "Membership", href: "#membership" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const stats: Stat[] = [
  { label: "Programs", value: 30, suffix: "+", Icon: Activity },
  { label: "Rating", value: 4.6, decimals: 1, Icon: Star },
  { label: "Open Daily", value: "Daily", Icon: CalendarDays },
  { label: "Until 10 PM", value: "10 PM", Icon: Clock },
];

const chooseUs: IconCard[] = [
  {
    title: "Professional trainers",
    description:
      "Friendly coaches help members train with confidence, safer form, and clear goals.",
    Icon: BadgeCheck,
  },
  {
    title: "Modern equipment",
    description:
      "A clean, well-equipped floor supports strength, cardio, mobility, and conditioning.",
    Icon: Sparkles,
  },
  {
    title: "For every goal",
    description:
      "Programs support beginners, athletes, kids, seniors, weight loss, strength, and wellness.",
    Icon: HeartPulse,
  },
];

const programs: IconCard[] = [
  {
    title: "General Fitness",
    description: "Balanced training plans for energy, mobility, endurance, and everyday strength.",
    Icon: Activity,
  },
  {
    title: "Strength Training",
    description: "Progressive resistance work built for safe form, power, and lean muscle.",
    Icon: Dumbbell,
  },
  {
    title: "Personal Training",
    description: "Focused coaching, accountability, and tailored progressions for your goals.",
    Icon: Award,
  },
  {
    title: "Weight Loss Program",
    description: "Structured workouts and practical nutrition guidance for sustainable transformation.",
    Icon: Flame,
  },
  {
    title: "Kickboxing",
    description: "High-energy striking sessions for conditioning, confidence, and coordination.",
    Icon: Zap,
  },
  {
    title: "Kids & Teens Fitness",
    description: "Age-aware training that builds movement skills, discipline, and confidence.",
    Icon: Users,
  },
  {
    title: "Taekwondo",
    description: "Martial arts foundations with technique, respect, flexibility, and control.",
    Icon: Shield,
  },
  {
    title: "Gymnastics",
    description: "Body control, balance, flexibility, and athletic coordination for growing athletes.",
    Icon: Activity,
  },
  {
    title: "Circuit Training",
    description: "Efficient stations that blend strength, cardio, and full-body conditioning.",
    Icon: Zap,
  },
  {
    title: "Metabolic Training",
    description: "Smart intervals designed to improve stamina, burn energy, and build resilience.",
    Icon: Flame,
  },
  {
    title: "Zumba",
    description: "Dance-driven cardio sessions with upbeat music and community energy.",
    Icon: Music,
  },
  {
    title: "Ethiopian Traditional Dance Fitness",
    description: "Cultural movement, rhythm, and endurance in an expressive fitness format.",
    Icon: Music,
  },
  {
    title: "International Dance Fitness",
    description: "Global rhythms and accessible choreography for cardio, joy, and consistency.",
    Icon: Music,
  },
  {
    title: "Self Defence",
    description: "Practical defensive skills with awareness, footwork, and confident movement.",
    Icon: Shield,
  },
  {
    title: "Nutrition Consulting",
    description: "Simple food strategy that supports training, energy, recovery, and body goals.",
    Icon: Leaf,
  },
  {
    title: "Meal Planning",
    description: "Realistic meal structures for busy routines, weight goals, and better habits.",
    Icon: Utensils,
  },
  {
    title: "Medical Doctor Consultation",
    description: "Health-aware guidance for members who want an informed training start.",
    Icon: HeartPulse,
  },
  {
    title: "Fitness Expert Consultation",
    description: "Goal assessment, movement review, and a clearer plan before you commit.",
    Icon: CheckCircle2,
  },
  {
    title: "Pregnancy Fitness Program",
    description: "Gentle, guided movement designed around comfort, safety, and stability.",
    Icon: HeartPulse,
  },
  {
    title: "Senior Fitness 60+",
    description: "Low-impact strength, balance, and mobility training for confident daily movement.",
    Icon: Users,
  },
  {
    title: "VIP Classes",
    description: "Premium coaching blocks with more privacy, precision, and personal attention.",
    Icon: Crown,
  },
  {
    title: "Private Lessons",
    description: "One-to-one sessions for focused skill work, form correction, and accountability.",
    Icon: Award,
  },
  {
    title: "Outdoor Training",
    description: "Fresh-air conditioning sessions that add variety, stamina, and group motivation.",
    Icon: Activity,
  },
  {
    title: "Cafe & Juice Bar",
    description: "Post-workout refreshment with energizing drinks and a social recovery space.",
    Icon: Coffee,
  },
  {
    title: "Healthy Food Restaurant",
    description: "Convenient nourishing meals that make disciplined eating easier after training.",
    Icon: Utensils,
  },
  {
    title: "Spa Services",
    description: "Recovery-focused care to help your body reset after intense training weeks.",
    Icon: Waves,
  },
];

const featuredPrograms: FeaturedProgram[] = [
  {
    title: "Weight Loss Transformation",
    focus: "Structured plan",
    description:
      "Training intensity, nutrition support, and progress tracking for members ready to change habits.",
    Icon: Flame,
  },
  {
    title: "Strength & Muscle Building",
    focus: "Progressive overload",
    description:
      "Technique-led resistance training for stronger lifts, better posture, and visible muscle.",
    Icon: Dumbbell,
  },
  {
    title: "Kickboxing & Self Defence",
    focus: "Confidence training",
    description:
      "Conditioning, striking, footwork, and practical defensive awareness in energetic sessions.",
    Icon: Shield,
  },
  {
    title: "Dance Fitness",
    focus: "Movement culture",
    description:
      "Zumba, Ethiopian traditional dance fitness, and international dance workouts that keep training joyful.",
    Icon: Music,
  },
  {
    title: "Kids & Teens Programs",
    focus: "Active growth",
    description:
      "Youth-friendly fitness, taekwondo, gymnastics, and skill-building classes for confidence.",
    Icon: Users,
  },
  {
    title: "VIP Personal Coaching",
    focus: "Premium attention",
    description:
      "Private lessons and VIP classes for members who want deeper support and flexible focus.",
    Icon: Crown,
  },
];

const membershipPlans: MembershipPlan[] = [
  {
    name: "1 Month",
    tone: "Flexible start",
    description:
      "A focused short-term option for new members, travelers, or anyone restarting their fitness rhythm.",
    features: [
      "Access to modern gym equipment",
      "Easy way to test your routine",
      "Great for getting started quickly",
      "Call or visit for current membership options",
    ],
  },
  {
    name: "3 Months",
    tone: "Build consistency",
    description:
      "A practical commitment for members who want momentum, accountability, and visible progress.",
    features: [
      "Better rhythm for strength and fitness goals",
      "Time to explore classes and coaching",
      "Ideal for habit-building",
      "Call or visit for current membership options",
    ],
  },
  {
    name: "6 Months",
    tone: "Transformation path",
    description:
      "A premium mid-term plan for members serious about body composition, skill, and lifestyle change.",
    features: [
      "Strong fit for weight loss and strength goals",
      "Enough time for measurable transformation",
      "Supports class variety and coaching check-ins",
      "Call or visit for current membership options",
    ],
    highlighted: true,
  },
  {
    name: "1 Year",
    tone: "Long-term value",
    description:
      "The best long-range option for members who want training to become part of everyday life.",
    features: [
      "Designed for lasting consistency",
      "Best for all-season training discipline",
      "Room to combine fitness, classes, and recovery",
      "Call or visit for current membership options",
    ],
  },
];

const trainers: Trainer[] = [
  {
    name: "Sample Coach A",
    role: "Strength & Conditioning",
    focus: "Form, progressive loading, and sustainable muscle gain.",
    initials: "A",
  },
  {
    name: "Sample Coach B",
    role: "Weight Loss & Nutrition",
    focus: "Habit coaching, meal structure, and practical transformation planning.",
    initials: "B",
  },
  {
    name: "Sample Coach C",
    role: "Martial Arts & Self Defence",
    focus: "Kickboxing, taekwondo basics, confidence, and conditioning.",
    initials: "C",
  },
  {
    name: "Sample Coach D",
    role: "Dance & Youth Programs",
    focus: "Zumba, cultural dance fitness, kids movement, and athletic confidence.",
    initials: "D",
  },
];

const galleryItems: GalleryItem[] = [
  {
    title: "Gym Floor",
    label: "Bright, modern training floor with strength equipment",
    image: "/images/img1.webp",
    alt: "GET FIT GYM main floor with modern strength equipment",
    feature: "wide",
  },
  {
    title: "Modern Equipment",
    label: "Premium machines, open space, and coaching energy",
    image: "/images/img2.webp",
    alt: "Modern GET FIT GYM equipment area with trainers and members",
  },
  {
    title: "Strength Detail",
    label: "Clean equipment details for focused progressive training",
    image: "/images/img3.webp",
    alt: "Close-up of strength training plate and equipment at GET FIT GYM",
    feature: "tall",
  },
  {
    title: "Training Community",
    label: "A friendly environment for all ages and goals",
    image: "/images/img2.webp",
    alt: "GET FIT GYM training floor with members working out",
  },
  {
    title: "Performance Zone",
    label: "Strength, cardio, dance, and coaching in one destination",
    image: "/images/img1.webp",
    alt: "GET FIT GYM performance space and training machines",
  },
  {
    title: "Focused Strength",
    label: "High-quality equipment for precise, confident lifting",
    image: "/images/img3.webp",
    alt: "Strength equipment detail inside GET FIT GYM",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Incredibly knowledgeable and welcoming staff. The trainers are far better quality than any of the other gyms in Addis. Also one of the cleanest gyms I've ever been to. The group classes have worked exceptionally well for me. I would recommend this gym to anyone, whatever their fitness level. Thank you GET FIT.",
    author: "Achamyelesh Tariku",
  },
  {
    quote:
      "Joining GetFit was one of the best decisions I've made. The trainers are friendly, patient, and truly committed to helping us improve. They push us to do better while making sure we feel comfortable and confident. I really appreciate the support and positive atmosphere!",
    author: "Lina Henok",
  },
  {
    quote:
      "This gym is amazing! The trainers and staff are very friendly and disciplined. I personally have seen a huge difference. I highly recommend it to anyone looking for a great place to work out.",
    author: "Fikirte Mekonnen",
  },
  {
    quote:
      "Indeed, you get fit at Get Fit! A place where professionalism and absolute dedication are experienced. Proud member of Get Fit.",
    author: "Selam Sultan",
  },
];

const socialLinks = [
  {
    label: "Instagram",
    value: "@get_fittt_gym",
    href: "https://www.instagram.com/get_fittt_gym/",
    Icon: Camera,
  },
  {
    label: "TikTok",
    value: "Get Fit Gym",
    href: "https://www.tiktok.com/@getfit.gym?_r=1&_t=ZS-97phzatbsuY",
    Icon: Music,
  },
  {
    label: "Facebook",
    value: "Search GET FIT GYM",
    href: "https://www.facebook.com/search/top?q=GET%20FIT%20GYM%20Addis%20Ababa",
    Icon: MessageCircle,
  },
];

const phoneHref = "tel:0992222224";
const whatsappHref = "https://wa.me/251992222224";
const directionsHref =
  "https://www.google.com/maps/search/?api=1&query=GET%20FIT%20GYM%20CMC%20MH%20Building%20Addis%20Ababa";

function Reveal({
  children,
  className = "",
  delay = 0,
  visibleByDefault = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  visibleByDefault?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (visibleByDefault) {
      return;
    }

    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.16 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [visibleByDefault]);

  return (
    <div
      ref={ref}
      className={`reveal ${visibleByDefault ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function AnimatedValue({
  value,
  suffix = "",
  decimals = 0,
}: {
  value: number | string;
  suffix?: string;
  decimals?: number;
}) {
  const [displayValue, setDisplayValue] = useState(
    typeof value === "number" ? 0 : value,
  );
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (typeof value !== "number") {
      return;
    }

    const node = ref.current;

    if (!node) {
      return;
    }

    let frameId = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        const start = performance.now();
        const duration = 1100;

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Number((value * eased).toFixed(decimals)));

          if (progress < 1) {
            frameId = requestAnimationFrame(tick);
          }
        };

        frameId = requestAnimationFrame(tick);
        observer.unobserve(node);
      },
      { threshold: 0.6 },
    );

    observer.observe(node);

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [decimals, value]);

  return (
    <span ref={ref}>
      {typeof displayValue === "number"
        ? displayValue.toFixed(decimals)
        : displayValue}
      {suffix}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={`section-heading ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </Reveal>
  );
}

function BrandMark({ onClick }: { onClick?: () => void }) {
  return (
    <a className="brand-mark" href="#home" onClick={onClick}>
      <span className="brand-logo" aria-hidden="true">
        <Image
          src="/images/logo.png"
          alt=""
          width={64}
          height={64}
          priority
          unoptimized
          sizes="44px"
        />
      </span>
      <span>GET FIT GYM</span>
    </a>
  );
}

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState<GalleryItem | null>(
    null,
  );

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
      setShowTop(window.scrollY > 620);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!selectedGallery) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedGallery(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedGallery]);

  const closeNav = () => setNavOpen(false);

  return (
    <main className="site-shell">
      <nav
        className={`site-nav ${isScrolled ? "is-scrolled" : ""}`}
        aria-label="Primary navigation"
      >
        <BrandMark onClick={closeNav} />

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} className="nav-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a className="nav-phone" href={phoneHref}>
            <Phone size={16} aria-hidden="true" />
            099 222 2224
          </a>
          <a className="cta-button cta-small" href="#contact">
            Join Now
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>

        <button
          className="nav-toggle"
          type="button"
          aria-label={navOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={navOpen}
          onClick={() => setNavOpen((current) => !current)}
        >
          {navOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`mobile-panel ${navOpen ? "is-open" : ""}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeNav}>
              {link.label}
            </a>
          ))}
          <a className="cta-button mt-3 justify-center" href="#contact" onClick={closeNav}>
            Join Now
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-sweep" aria-hidden="true" />
        <div className="floating-frame frame-one" aria-hidden="true" />
        <div className="floating-frame frame-two" aria-hidden="true" />
        <div className="floating-line line-one" aria-hidden="true" />
        <div className="floating-line line-two" aria-hidden="true" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-20 lg:pt-32">
          <Reveal className="hero-copy" visibleByDefault>
            <p className="eyebrow">Premium fitness in CMC, Addis Ababa</p>
            <h1>
              <span>Transform Your Body.</span>
              <span>Transform Your Life.</span>
            </h1>
            <p className="hero-subtitle">
              Join Addis Ababa&apos;s complete fitness destination with expert
              trainers, specialized programs, and a community built to help you
              become your strongest self.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a className="cta-button cta-primary" href="#contact">
                Join Today
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="cta-button cta-secondary" href="#programs">
                Explore Programs
                <Activity size={18} aria-hidden="true" />
              </a>
            </div>

            <div className="hero-proof" aria-label="GET FIT GYM quick facts">
              <span>
                <Star size={16} aria-hidden="true" />
                4.6 rating from 11 Google reviews
              </span>
              <span>
                <MapPin size={16} aria-hidden="true" />
                CMC, MH Building near St. Michael Church
              </span>
            </div>
          </Reveal>

          <Reveal className="hero-visual" delay={120} visibleByDefault>
            <div className="hero-photo-card">
              <Image
                src="/images/img1.webp"
                alt="GET FIT GYM training floor in Addis Ababa"
                fill
                priority
                unoptimized
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="hero-photo"
              />
              <div className="hero-photo-overlay" aria-hidden="true" />
              <div className="hero-photo-badge">
                <span>Premium Floor</span>
                <strong>Modern equipment. Focused coaching.</strong>
              </div>
              <div className="hero-photo-strip">
                <span>Strength</span>
                <span>Classes</span>
                <span>Recovery</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-3 px-5 pb-8 sm:px-8 lg:grid-cols-4 lg:px-10">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 70}>
              <article className="stat-card">
                <stat.Icon size={22} aria-hidden="true" />
                <strong>
                  <AnimatedValue
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </strong>
                <span>{stat.label}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="about" className="section-band">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
          <div className="about-visual-wrap">
            <Reveal className="about-image-card">
              <Image
                src="/images/img2.webp"
                alt="Modern GET FIT GYM equipment and training floor"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="about-image"
              />
              <div className="about-image-overlay" aria-hidden="true" />
              <div className="about-image-note">
                <strong>Clean. Modern. Welcoming.</strong>
                <span>Built for every age, goal, and fitness level.</span>
              </div>
            </Reveal>
          </div>

          <div className="about-copy">
            <SectionHeading
              eyebrow="About the gym"
              title="A polished fitness home for every goal."
              description="GET FIT GYM combines professional coaching, modern equipment, and a friendly training atmosphere in CMC, Addis Ababa."
            />
            <Reveal delay={80}>
              <p className="about-short-copy">
                Train with expert support, high-quality machines, energetic
                classes, and programs for beginners, athletes, kids, seniors,
                weight loss, strength, dance, and wellness.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {chooseUs.map((item, index) => (
                <Reveal key={item.title} delay={index * 90}>
                  <article className="glass-card h-full">
                    <div className="icon-box">
                      <item.Icon size={24} aria-hidden="true" />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="section-band section-dark">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Programs"
            title="More ways to train, recover, and stay consistent."
            description="Choose from fitness, strength, martial arts, dance, wellness, youth programs, and premium coaching."
            align="center"
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {programs.map((program, index) => (
              <Reveal key={program.title} delay={(index % 8) * 40}>
                <article className="program-card h-full">
                  <div className="program-icon">
                    <program.Icon size={22} aria-hidden="true" />
                  </div>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Featured"
            title="Signature paths for the goals people care about most."
            description="Start with a clear focus, then let the team help you refine the training rhythm that fits your life."
            align="center"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredPrograms.map((program, index) => (
              <Reveal key={program.title} delay={index * 70}>
                <article className="feature-card h-full">
                  <div className="feature-card-top">
                    <div className="icon-box">
                      <program.Icon size={24} aria-hidden="true" />
                    </div>
                    <span>{program.focus}</span>
                  </div>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="membership" className="section-band section-dark">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Membership"
            title="Membership options without guesswork or pressure."
            description="Exact current options are best confirmed by calling or visiting the front desk, so the plan matches your schedule and goals."
            align="center"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {membershipPlans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 90}>
                <article
                  className={`membership-card h-full ${
                    plan.highlighted ? "is-highlighted" : ""
                  }`}
                >
                  <span>{plan.tone}</span>
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle2 size={18} aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a className="cta-button cta-secondary justify-center" href={phoneHref}>
                    Call or Visit
                    <Phone size={17} aria-hidden="true" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Trainers"
            title="Professional guidance across every training lane."
            description="The profiles below are sample trainer cards and should be replaced with real team data when available."
            align="center"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trainers.map((trainer, index) => (
              <Reveal key={trainer.name} delay={index * 80}>
                <article className="trainer-card h-full">
                  <div className="trainer-avatar" aria-hidden="true">
                    {trainer.initials}
                  </div>
                  <span>Sample profile</span>
                  <h3>{trainer.name}</h3>
                  <strong>{trainer.role}</strong>
                  <p>{trainer.focus}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="section-band section-dark">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Gallery"
            title="A visual feel for the GET FIT experience."
            description="A polished look inside the training floor, equipment zones, and atmosphere at GET FIT GYM."
            align="center"
          />

          <div className="gallery-grid mt-12">
            {galleryItems.map((item, index) => (
              <Reveal key={item.title} delay={(index % 4) * 70}>
                <button
                  className={`gallery-card ${item.feature ? `is-${item.feature}` : ""}`}
                  type="button"
                  onClick={() => setSelectedGallery(item)}
                  aria-label={`Open ${item.title} image`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="gallery-image"
                  />
                  <div className="gallery-overlay" aria-hidden="true" />
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {selectedGallery ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedGallery.title} image preview`}
          onClick={() => setSelectedGallery(null)}
        >
          <div
            className="gallery-lightbox-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="lightbox-close"
              type="button"
              aria-label="Close gallery image"
              onClick={() => setSelectedGallery(null)}
            >
              <X size={22} aria-hidden="true" />
            </button>
            <div className="lightbox-image-wrap">
              <Image
                src={selectedGallery.image}
                alt={selectedGallery.alt}
                fill
                unoptimized
                sizes="90vw"
                className="lightbox-image"
              />
            </div>
            <div className="lightbox-caption">
              <strong>{selectedGallery.title}</strong>
              <span>{selectedGallery.label}</span>
            </div>
          </div>
        </div>
      ) : null}

      <section id="testimonials" className="section-band">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by members who train here."
            description="Real customer feedback highlights the coaching quality, cleanliness, group classes, and supportive atmosphere."
            align="center"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.quote} delay={index * 90}>
                <article className="testimonial-card h-full">
                  <div className="rating-stars flex gap-1" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <Star key={star} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <blockquote>{testimonial.quote}</blockquote>
                  <span>{testimonial.author}</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-band section-dark contact-section">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Call, visit, or message GET FIT GYM today."
              description="Find us in CMC at MH Building near St. Michael Church. The gym is open daily until 10 PM."
            />

            <div className="mt-8 grid gap-4">
              <Reveal delay={80}>
                <article className="contact-card">
                  <Phone size={22} aria-hidden="true" />
                  <div>
                    <span>Phone</span>
                    <a href={phoneHref}>099 222 2224</a>
                  </div>
                </article>
              </Reveal>
              <Reveal delay={140}>
                <article className="contact-card">
                  <MapPin size={22} aria-hidden="true" />
                  <div>
                    <span>Location</span>
                    <p>CMC, MH Building, near St. Michael Church, Addis Ababa</p>
                  </div>
                </article>
              </Reveal>
              <Reveal delay={200}>
                <article className="contact-card">
                  <Clock size={22} aria-hidden="true" />
                  <div>
                    <span>Hours</span>
                    <p>Open daily until 10 PM</p>
                  </div>
                </article>
              </Reveal>
            </div>

            <Reveal delay={260}>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a className="cta-button cta-primary" href={phoneHref}>
                  Call Now
                  <Phone size={18} aria-hidden="true" />
                </a>
                <a
                  className="cta-button cta-secondary"
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                  <MessageCircle size={18} aria-hidden="true" />
                </a>
                <a
                  className="cta-button cta-secondary"
                  href={directionsHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Directions
                  <MapPin size={18} aria-hidden="true" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="contact-socials">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <social.Icon size={18} aria-hidden="true" />
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="map-card">
              <iframe
                title="GET FIT GYM location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.457697138449!2d38.8431632!3d9.0219445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9b003ab50f1d%3A0x66f8f679ae063ad1!2sGET%20FIT%20GYM!5e0!3m2!1sen!2set!4v1783442606733!5m2!1sen!2set"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="site-footer">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <div>
            <BrandMark />
            <p className="mt-5 text-sm leading-7 text-zinc-400">
              Premium dark fitness destination in CMC, Addis Ababa, built for
              training, transformation, recovery, and community.
            </p>
          </div>

          <div>
            <h2>Quick links</h2>
            {navLinks.slice(0, 6).map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div>
            <h2>Programs</h2>
            {featuredPrograms.slice(0, 5).map((program) => (
              <a key={program.title} href="#programs">
                {program.title}
              </a>
            ))}
          </div>

          <div>
            <h2>Contact</h2>
            <a href={phoneHref}>099 222 2224</a>
            <a href={directionsHref} target="_blank" rel="noreferrer">
              CMC, MH Building, Addis Ababa
            </a>
            <p>Open daily until 10 PM</p>
            <div className="mt-5 flex flex-col gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  className="social-link"
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <social.Icon size={17} aria-hidden="true" />
                  {social.label}: {social.value}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            Copyright {new Date().getFullYear()} GET FIT GYM. All rights reserved.
          </span>
          <a
            href="https://websitecrafters.net"
            target="_blank"
            rel="noreferrer"
          >
            Website crafted by WebsiteCrafters
          </a>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Message GET FIT GYM on WhatsApp"
      >
        <MessageCircle size={24} aria-hidden="true" />
      </a>

      <button
        className={`back-to-top ${showTop ? "is-visible" : ""}`}
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronUp size={22} aria-hidden="true" />
      </button>
    </main>
  );
}
