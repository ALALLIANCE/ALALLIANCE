"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PhoneCall,
  Mail,
  ArrowRight,
  BadgeCheck,
  Timer,
  ShieldCheck,
  Wrench,
  Cog,
  Bolt,
  Rocket,
  Layers,
  Cpu,
} from "lucide-react";

const COMPANY = {
  name: "AL ALLIANCE",
  phone: "+44 7999 679143", // ← change
  email: "info@alalliance.co.uk", // ← change
  tagline: "Electrical • Mechanical • Automation",
};

const marquee = [
  { icon: Bolt, text: "24/7 Call-Out" },
  { icon: Wrench, text: "Shift Cover (Days/Nights)" },
  { icon: Cog, text: "PLC/HMI & Controls" },
  { icon: ShieldCheck, text: "EICR • PUWER • LOTO" },
  { icon: Layers, text: "Install • Commission • Maintain" },
  { icon: Cpu, text: "OEE & Line Optimization" },
];

const services = [
  {
    icon: Bolt,
    title: "Electrical",
    desc: "LV installs, panels, MCCs, containment, testing & inspection (EICR).",
    chips: ["Food & beverage", "Industrial", "Pharma"],
  },
  {
    icon: Wrench,
    title: "Mechanical",
    desc: "Conveyors, pumps & valves, hygienic pipework, stainless fabrication.",
    chips: ["Breakdown→turnkey", "Hygienic", "Retrofits"],
  },
  {
    icon: Cog,
    title: "Automation",
    desc: "PLC/HMI, sensors, SCADA, OEE, debottlenecking & integration.",
    chips: ["Siemens/AB", "Safety relays", "Remote"],
  },
  {
    icon: ShieldCheck,
    title: "Compliance",
    desc: "LOTO, PUWER, CE/UKCA, risk assessments, documentation & sign-off.",
    chips: ["Audits", "Docs", "Training"],
  },
  {
    icon: Timer,
    title: "Rapid Response",
    desc: "On-site within hours for outages & shift cover—days or nights.",
    chips: ["SLA", "24/7", "Temporary labour"],
  },
  {
    icon: BadgeCheck,
    title: "Assurance",
    desc: "Qualified, insured, site-ready. RAMS, permits, inductions handled.",
    chips: ["LV3+", "CSCS/ECS", "IPAF/First-aid"],
  },
];

export default function ALAllianceWow() {
  const [leadOpen, setLeadOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const heroRef = useRef<HTMLDivElement | null>(null);
  const [cursor, setCursor] = useState({ x: 0.5, y: 0.5 });
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      setCursor({ x, y });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <BackgroundGlow />

      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <Rocket className="h-6 w-6" />
              <span className="text-lg font-semibold tracking-tight">{COMPANY.name}</span>
              <span className="hidden md:inline text-white/60">— {COMPANY.tagline}</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="hidden sm:flex items-center gap-2 rounded-2xl border border-white/10 px-3 py-1.5 text-sm hover:bg-white/5"
              >
                <PhoneCall className="h-4 w-4" /> {COMPANY.phone}
              </a>
              <PrimaryButton onClick={() => setLeadOpen(true)}>Book a 15-min call</PrimaryButton>
            </div>
          </div>
        </div>
      </header>

      <section ref={heroRef} className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-6xl font-extrabold leading-[1.05] tracking-tight"
              >
                Engineering & Maintenance that
                <span className="ml-3 inline bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                  ships on time
                </span>
                .
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mt-5 text-lg text-white/80"
              >
                Electrical, mechanical, and automation teams on demand—shift cover, installs, breakdowns, and compliance.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/70"
              >
                <Chip icon={BadgeCheck} text="Site-ready crews (days/nights)" />
                <Chip icon={Timer} text="Rapid shift cover" />
                <Chip icon={ShieldCheck} text="RAMS • PUWER • EICR" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="mt-8 flex flex-col sm:flex-row gap-3"
              >
                <PrimaryButton onClick={() => setLeadOpen(true)}>
                  Get a same-day slot <ArrowRight className="ml-2 h-4 w-4" />
                </PrimaryButton>
                <SecondaryButton href="#capabilities">See capabilities</SecondaryButton>
              </motion.div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
              >
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl" />
                <div className="absolute -right-28 -bottom-28 h-72 w-72 rounded-full bg-indigo-400/30 blur-3xl" />

                <div className="relative z-10 h-full w-full p-6">
                  <div className="grid h-full grid-rows-3 gap-4">
                    <CardLine title="OEE Uplift" metric="+12.4%" sub="90-day average" />
                    <CardLine title="Mean Time to Repair" metric="37m" sub="SLA: < 2h on-site" />
                    <CardLine title="Compliance Tasks" metric="100%" sub="Audited & signed-off" />
                  </div>
                </div>

                <Orbit icon={Bolt} radius={80} delay={0} cursor={cursor} />
                <Orbit icon={Wrench} radius={110} delay={2} cursor={cursor} />
                <Orbit icon={Cog} radius={140} delay={3.5} cursor={cursor} />
              </motion.div>
            </div>
          </div>
        </div>

        <Marquee />
      </section>

      <section id="capabilities" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Full-stack capabilities</h2>
          <p className="hidden md:block text-white/70 max-w-xl">
            From fault-finding at 2am to turnkey upgrades, our multi-disciplinary team keeps production moving and compliant.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <TiltCard key={s.title} delay={i * 0.04}>
              <div className="flex items-center gap-3">
                <s.icon className="h-6 w-6" />
                <h3 className="text-xl font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-white/80">{s.desc}</p>
              <ul className="mt-4 flex flex-wrap gap-2 text-sm text-white/70">
                {s.chips.map((b) => (
                  <li key={b} className="rounded-xl border border-white/10 px-2.5 py-1">
                    {b}
                  </li>
                ))}
              </ul>
            </TiltCard>
          ))}
        </div>
      </section>

      <section className="bg-white/5 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Recent engagements</h2>
            <a href="#contact" className="text-sm underline underline-offset-4 text-white/80">Work with us</a>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Packaging line debottleneck", sub: "+11% OEE • 5 weeks" },
              { title: "Hygienic conveyor install", sub: "F&B • weekend changeover" },
              { title: "EICR & PUWER audit", sub: "100% pass • documentation" },
              { title: "PLC/HMI upgrade", sub: "Siemens • remote support" },
              { title: "Shift cover nights", sub: "2x electricians • SLA" },
              { title: "Energy metering roll-out", sub: "Power quality • analytics" },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rotate-12 rounded-full bg-white/10 blur-2xl transition-opacity group-hover:opacity-80" />
                <div className="text-xl font-semibold">{p.title}</div>
                <div className="mt-1 text-white/70">{p.sub}</div>
                <ArrowRight className="mt-6 h-5 w-5 opacity-60 transition group-hover:translate-x-1 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gradient-to-b from-white/5 to-transparent py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Need engineers this week?</h2>
          <p className="mt-3 text-white/80">Book a quick intro and get a same-day action plan. We reply within one business hour.</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <EmailInput value={email} onChange={setEmail} />
            <PrimaryButton
              onClick={() => {
                if (!email) return;
                window.location.href = `mailto:${COMPANY.email}?subject=Project%20enquiry&body=Hi%20${COMPANY.name}%2C%0D%0A%0D%0AMy%20email%3A%20${encodeURIComponent(email)}%0D%0AProject%20details%3A%20...`;
              }}
            >
              Send enquiry
            </PrimaryButton>
          </div>
          <p className="mt-3 text-sm text-white/60">
            Prefer phone? <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="underline underline-offset-4">Call {COMPANY.phone}</a>
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 z-50 flex gap-2">
        <a
          href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
          className="rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur hover:bg-white/20"
        >
          <PhoneCall className="inline h-4 w-4" />
          <span className="ml-2 hidden sm:inline">Call</span>
        </a>
        <button
          onClick={() => setLeadOpen(true)}
          className="rounded-full border border-white/10 bg-white text-black px-4 py-2 hover:bg-zinc-200"
        >
          <Mail className="inline h-4 w-4" />
          <span className="ml-2 hidden sm:inline">Enquire</span>
        </button>
      </div>

      <AnimatePresence>
        {leadOpen && (
          <LeadModal
            onClose={() => {
              setLeadOpen(false);
              setSent(false);
            }}
            onSubmit={(payload) => {
              setSent(true);
              const body = encodeURIComponent(
                `Name: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone}\n\nProject:\n${payload.message}`
              );
              window.location.href = `mailto:${COMPANY.email}?subject=New%20lead%20from%20${encodeURIComponent(COMPANY.name)}&body=${body}`;
            }}
            sent={sent}
          />
        )}
      </AnimatePresence>

      <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(40rem_40rem_at_50%_-10%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(30rem_30rem_at_80%_10%,rgba(168,85,247,0.18),transparent_60%),radial-gradient(25rem_25rem_at_20%_20%,rgba(34,197,94,0.16),transparent_60%)]" />
    </div>
  );
}

function PrimaryButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex h-12 items-center justify-center rounded-2xl bg-white px-6 text-sm font-medium text-black transition hover:bg-zinc-200"
    >
      {children}
    </button>
  );
}

function SecondaryButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 text-sm font-medium text-white transition hover:bg-white/10"
    >
      {children}
    </a>
  );
}

function Chip({ icon: Icon, text }: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-3 py-1.5">
      <Icon className="h-4 w-4" /> {text}
    </div>
  );
}

function CardLine({ title, metric, sub }: { title: string; metric: string; sub: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-4">
      <div>
        <p className="text-sm text-white/60">{title}</p>
        <p className="text-white/70 text-xs">{sub}</p>
      </div>
      <div className="text-2xl font-semibold">{metric}</div>
    </div>
  );
}

function TiltCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-xl"
      style={{ perspective: 1000 }}
    >
      <motion.div
        animate={{ rotateX: hovered ? -2 : 0, rotateY: hovered ? 2 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 14 }}
      >
        {children}
      </motion.div>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 [background:radial-gradient(60rem_60rem_at_var(--x)_var(--y),rgba(255,255,255,0.06),transparent_60%)] group-hover:opacity-100" />
    </motion.div>
  );
}

function Orbit({
  icon: Icon, radius, delay = 0, cursor
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  radius: number;
  delay?: number;
  cursor: { x: number; y: number };
}) {
  const t = useMemo(() => ({ duration: 8 + delay, repeat: Infinity as const, ease: "linear" as const }), [delay]);
  const center = { x: `calc(50% - ${radius}px)`, y: `calc(50% - ${radius}px)` };
  const tiltX = (cursor.y - 0.5) * 10;
  const tiltY = (cursor.x - 0.5) * -10;
  return (
    <motion.div className="absolute" style={{ left: center.x, top: center.y }} animate={{ rotate: 360 }} transition={t}>
      <motion.div
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur"
        style={{ transform: `translate(${radius}px, 0) rotateY(${tiltY}deg) rotateX(${tiltX}deg)` }}
      >
        <Icon className="h-5 w-5" />
      </motion.div>
    </motion.div>
  );
}

function Marquee() {
  return (
    <div className="relative border-y border-white/10 bg-white/[0.02] py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
      <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] overflow-hidden">
        <div className="flex animate-[marquee_20s_linear_infinite] gap-6 whitespace-nowrap px-4">
          {Array.from({ length: 2 }).map((_, loop) => (
            <div key={loop} className="flex items-center gap-6">
              {marquee.map((m, i) => (
                <div
                  key={`${loop}-${i}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-white/70"
                >
                  <m.icon className="h-4 w-4" />
                  <span>{m.text}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EmailInput({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <input
      type="email"
      required
      placeholder="you@company.com"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-12 w-full max-w-md rounded-2xl border border-white/15 bg-white/10 px-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-1"
    />
  );
}

function LeadModal({
  onClose, onSubmit, sent
}: {
  onClose: () => void;
  onSubmit: (p: { name: string; email: string; phone: string; message: string }) => void;
  sent: boolean;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div
        initial={{ y: 20, scale: 0.98, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
        className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-black p-6 shadow-2xl"
      >
        <button onClick={onClose} className="absolute right-3 top-3 rounded-full border border-white/10 px-2 py-1 text-xs text-white/70 hover:bg-white/10">
          close
        </button>

        <h3 className="text-2xl font-semibold">Book a 15-min intro</h3>
        <p className="mt-1 text-white/70">We’ll reply within one business hour.</p>

        <div className="mt-5 grid gap-3">
          <input className="h-11 rounded-2xl border border-white/15 bg-white/10 px-3" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="h-11 rounded-2xl border border-white/15 bg-white/10 px-3" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="h-11 rounded-2xl border border-white/15 bg-white/10 px-3" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <textarea className="min-h-[120px] rounded-2xl border border-white/15 bg-white/10 px-3 py-2" placeholder="Project / shift details" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs text-white/50">RAMS, inductions & permits handled.</span>
          <PrimaryButton onClick={() => onSubmit({ name, email, phone, message })}>Send</PrimaryButton>
        </div>

        <AnimatePresence>{sent && <Confetti />}</AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

function Confetti() {
  const pieces = Array.from({ length: 60 });
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 0.2;
        const duration = 1.6 + Math.random() * 0.9;
        const size = 6 + Math.random() * 8;
        return (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 400, opacity: 1, rotate: Math.random() * 360 }}
            transition={{ duration, delay, ease: "easeOut" }}
            className="absolute top-10"
            style={{ left: left + "%", width: size, height: size, background: randomConfettiColor(), borderRadius: 2 }}
          />
        );
      })}
    </motion.div>
  );
}
function randomConfettiColor() {
  const colors = ["#22d3ee", "#a78bfa", "#34d399", "#fde047", "#fca5a5", "#60a5fa"];
  return colors[Math.floor(Math.random() * colors.length)];
}

