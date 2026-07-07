"use client";

import type { CSSProperties, ReactNode } from "react";
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
  gradient: string;
};

type Testimonial = {
  quote: string;
  label: string;
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
    title: "Complete fitness ecosystem",
    description:
      "Train, recover, refuel, and get guidance in one local Addis Ababa fitness destination.",
    Icon: BadgeCheck,
  },
  {
    title: "Specialized programs",
    description:
      "From weight loss and strength to dance, martial arts, kids fitness, pregnancy fitness, and senior training.",
    Icon: Sparkles,
  },
  {
    title: "Support beyond workouts",
    description:
      "Nutrition consulting, meal planning, healthy food, spa services, and professional consultations support the full journey.",
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
    name: "Starter",
    tone: "Begin with clarity",
    description:
      "A flexible way to experience the gym floor, group energy, and essential coaching support.",
    features: [
      "Gym access for consistent training",
      "Starter fitness consultation",
      "Access to selected group sessions",
      "Call or visit for current membership options",
    ],
  },
  {
    name: "Premium",
    tone: "Most balanced",
    description:
      "Built for members who want broader program access, guidance, and steady accountability.",
    features: [
      "Broader program participation",
      "Nutrition and training guidance",
      "Transformation-focused check-ins",
      "Ideal for weight loss, strength, and dance fitness",
    ],
    highlighted: true,
  },
  {
    name: "VIP",
    tone: "Personalized coaching",
    description:
      "A premium path for focused goals, privacy, expert attention, and elevated support.",
    features: [
      "VIP classes and private lessons",
      "Personal coaching priority",
      "Consultation-led plan refinement",
      "Best for intensive transformations and busy schedules",
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
    label: "Strength, cardio, and daily training energy",
    gradient: "linear-gradient(135deg, #111111 0%, #233528 48%, #0db14b 100%)",
  },
  {
    title: "Strength Training",
    label: "Progressive resistance and confident technique",
    gradient: "linear-gradient(135deg, #151515 0%, #2d2d2d 42%, #0a7f38 100%)",
  },
  {
    title: "Kickboxing",
    label: "High-impact conditioning and self defence",
    gradient: "linear-gradient(135deg, #050505 0%, #331919 45%, #0db14b 100%)",
  },
  {
    title: "Kids Programs",
    label: "Active confidence for kids and teens",
    gradient: "linear-gradient(135deg, #101010 0%, #1d3840 45%, #0db14b 100%)",
  },
  {
    title: "Dance Fitness",
    label: "Zumba, Ethiopian, and international movement",
    gradient: "linear-gradient(135deg, #101010 0%, #352145 45%, #0db14b 100%)",
  },
  {
    title: "Healthy Cafe",
    label: "Juice bar and nourishing post-workout meals",
    gradient: "linear-gradient(135deg, #101010 0%, #2d3320 45%, #0db14b 100%)",
  },
  {
    title: "Spa",
    label: "Recovery care after demanding training",
    gradient: "linear-gradient(135deg, #101010 0%, #1e3440 48%, #0db14b 100%)",
  },
  {
    title: "Personal Training",
    label: "Focused coaching and individual progress",
    gradient: "linear-gradient(135deg, #090909 0%, #282828 45%, #0db14b 100%)",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "The gym feels serious but welcoming. The variety of classes makes it easier to stay consistent.",
    label: "Gym Member",
  },
  {
    quote:
      "I like that training, nutrition, and recovery are treated as one journey instead of separate pieces.",
    label: "Gym Member",
  },
  {
    quote:
      "The group energy is motivating, and the coaching makes the workouts feel purposeful.",
    label: "Gym Member",
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
    href: "https://www.tiktok.com/search?q=Get%20Fit%20Gym",
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

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
      setShowTop(window.scrollY > 620);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeNav = () => setNavOpen(false);

  return (
    <main className="site-shell">
      <nav
        className={`site-nav ${isScrolled ? "is-scrolled" : ""}`}
        aria-label="Primary navigation"
      >
        <a className="brand-mark" href="#home" onClick={closeNav}>
          <span className="brand-icon" aria-hidden="true">
            GF
          </span>
          <span>GET FIT GYM</span>
        </a>

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
          className="nav-toggle lg:hidden"
          type="button"
          aria-label={navOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={navOpen}
          onClick={() => setNavOpen((current) => !current)}
        >
          {navOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`mobile-panel lg:hidden ${navOpen ? "is-open" : ""}`}>
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
            <h1>Transform Your Body. Transform Your Life.</h1>
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
            <div className="training-display">
              <div className="training-display-top">
                <span>GET FIT</span>
                <strong>Performance Hub</strong>
              </div>
              <div className="training-bars" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="training-ring" aria-hidden="true">
                <div className="ring-core">
                  <Dumbbell size={42} aria-hidden="true" />
                </div>
              </div>
              <div className="training-metrics">
                <span>Strength</span>
                <span>Dance</span>
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
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <SectionHeading
              eyebrow="About the gym"
              title="A complete local fitness center for Addis Ababa."
              description="GET FIT GYM brings training, coaching, recovery, nutrition, and community into one polished space in CMC."
            />
            <Reveal delay={80}>
              <p className="mt-7 text-base leading-8 text-zinc-300">
                Members can build a routine around general fitness, personal
                training, nutrition consulting, kids programs, dance fitness,
                martial arts, spa services, healthy food, and a cafe and juice
                bar. Whether you are starting fresh or training seriously, the
                goal is the same: make progress feel supported, measurable, and
                energizing.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
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

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
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
            description="Local-safe visual placeholders show the major areas and can be replaced with real gym photography later."
            align="center"
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item, index) => (
              <Reveal key={item.title} delay={(index % 4) * 70}>
                <article
                  className="gallery-card"
                  style={{ "--gallery-gradient": item.gradient } as CSSProperties}
                >
                  <div aria-hidden="true" />
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="section-band">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Testimonials"
            title="Realistic feedback, presented without invented identities."
            description="Use these generic member-style cards until GET FIT GYM adds approved customer quotes."
            align="center"
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.quote} delay={index * 90}>
                <article className="testimonial-card h-full">
                  <div className="flex gap-1 text-[#0DB14B]" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <Star key={star} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <blockquote>{testimonial.quote}</blockquote>
                  <span>{testimonial.label}</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-band section-dark contact-section">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
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
          </div>

          <Reveal delay={120}>
            <form
              className="contact-form"
              aria-label="Contact form"
              onSubmit={(event) => event.preventDefault()}
            >
              <div>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" autoComplete="name" />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" />
              </div>
              <div>
                <label htmlFor="goal">Fitness goal</label>
                <select id="goal" name="goal" defaultValue="">
                  <option value="" disabled>
                    Choose a focus
                  </option>
                  <option>Weight loss</option>
                  <option>Strength training</option>
                  <option>Personal training</option>
                  <option>Dance fitness</option>
                  <option>Kids or teens program</option>
                  <option>VIP coaching</option>
                </select>
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us what you want to improve."
                />
              </div>
              <button className="cta-button cta-primary justify-center" type="submit">
                Request a Callback
                <ArrowRight size={18} aria-hidden="true" />
              </button>
              <p>
                For the fastest response, call or WhatsApp the gym directly.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="site-footer">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <div>
            <a className="brand-mark" href="#home">
              <span className="brand-icon" aria-hidden="true">
                GF
              </span>
              <span>GET FIT GYM</span>
            </a>
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
        <div className="border-t border-white/10 px-5 py-6 text-center text-sm text-zinc-500">
          Copyright {new Date().getFullYear()} GET FIT GYM. All rights reserved.
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
