import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, NavLink as RRNavLink, Routes, Route, useLocation } from "react-router-dom";
import {
  Search,
  Phone,
  Mail,
  MapPin,
  Shield,
  Globe,
  Cpu,
  Server,
  Headphones,
  Menu,
  X,
  Monitor,
  Network,
} from "lucide-react";

// Theme (black + emerald)
const brand = {
  bg: "bg-black",
  surface: "bg-zinc-900/60",
  text: "text-zinc-100",
  sub: "text-zinc-400",
  btn: "bg-emerald-500 hover:bg-emerald-400",
  chip: "bg-emerald-500/10 text-emerald-300",
};

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-16 md:py-24">
    <div className="max-w-7xl mx-auto px-4">
      <motion.h2
        className={`text-2xl md:text-4xl font-semibold ${brand.text}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className={`mt-2 md:mt-3 ${brand.sub}`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          {subtitle}
        </motion.p>
      )}
      <div className="mt-8 md:mt-10">{children}</div>
    </div>
  </section>
);

const Card = ({ children }) => (
  <div className={`rounded-2xl ${brand.surface} ring-1 ring-white/5 shadow-lg shadow-emerald-500/5 p-6`}>
    {children}
  </div>
);

const NavLink = ({ to, children }) => (
  <RRNavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 text-sm font-medium transition ${isActive ? "text-emerald-400" : "text-zinc-300 hover:text-emerald-400"
      }`
    }
  >
    {children}
  </RRNavLink>
);

// ---------- Layout ----------
function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 py-3 md:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-300 grid place-items-center ring-1 ring-white/10 shadow-md shadow-emerald-500/20">
              <Shield className="h-5 w-5 text-black" />
            </div>
            <span className="font-bold text-lg md:text-xl tracking-wide">EHIGHWAY</span>
          </Link>

          {/* Search (desktop) */}
          <div className="flex-1 hidden md:block">
            <div className={`group flex items-center gap-2 px-3 py-2 rounded-xl ${brand.surface} ring-1 ring-white/10 focus-within:ring-emerald-400/50`}>
              <Search className="h-4 w-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search products, services, solutions…"
                className="w-full bg-transparent outline-none placeholder:text-zinc-500 text-sm"
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center ml-auto">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/clients">Clients</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          {/* Helpline (desktop) */}
          <Link
            to="/contact"
            className={`ml-2 hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-xl ${brand.btn} text-black font-semibold`}
          >
            <Phone className="h-4 w-4" /> Helpline
          </Link>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="md:hidden pb-3">
            <div className={`flex items-center gap-2 px-3 py-2 rounded-xl ${brand.surface} ring-1 ring-white/10 mb-2`}>
              <Search className="h-4 w-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search products, services, solutions…"
                className="w-full bg-transparent outline-none placeholder:text-zinc-500 text-sm"
              />
            </div>
            <div className="grid gap-1">
              <RRNavLink onClick={() => setOpen(false)} to="/about" className="px-3 py-2 rounded-lg hover:bg-white/5">
                About
              </RRNavLink>
              <RRNavLink onClick={() => setOpen(false)} to="/services" className="px-3 py-2 rounded-lg hover:bg-white/5">
                Services
              </RRNavLink>
              <RRNavLink onClick={() => setOpen(false)} to="/clients" className="px-3 py-2 rounded-lg hover:bg-white/5">
                Clients
              </RRNavLink>
              <RRNavLink onClick={() => setOpen(false)} to="/contact" className="px-3 py-2 rounded-lg hover:bg-white/5">
                Contact
              </RRNavLink>
              <Link
                onClick={() => setOpen(false)}
                to="/contact"
                className={`mt-1 inline-flex items-center gap-2 px-3 py-2 rounded-xl ${brand.btn} text-black font-semibold w-max`}
              >
                <Phone className="h-4 w-4" /> Helpline
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-emerald-500 grid place-items-center ring-1 ring-white/10">
              <Shield className="h-4 w-4 text-black" />
            </div>
            <span className="font-semibold">EHIGHWAY</span>
          </div>
          <p className="mt-3 text-zinc-400 text-sm">
            Your trusted digital partner — websites, software, networking, CCTV, and full support.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-emerald-400" /> +880 1711-975005, +880 1911-310472
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-emerald-400" /> info@ehighway.tech (placeholder)
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-emerald-400" /> Ali Bhaban, Airport Road, Mojumdari,  Sylhet
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <div className="flex flex-wrap gap-2">
            {[
              ["About", "/about"],
              ["Services", "/services"],
              ["Clients", "/clients"],
              ["Opportunities", "/opportunities"],
            ].map(([label, to], i) => (
              <Link
                key={i}
                to={to}
                className="px-3 py-1.5 rounded-lg border border-white/10 text-sm text-zinc-300 hover:text-emerald-300"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-zinc-500 pb-8">
        © {new Date().getFullYear()} eHIGHWAY — All rights reserved.
      </div>
    </footer>
  );
}

// ---------- Pages ----------
function Home() {
  return (
    <>
      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.12),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              className="text-3xl md:text-5xl font-extrabold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              One Digital Platform for <span className="text-emerald-400">Online</span>,
              <br className="hidden md:block" /> Offline, Hardware & Software Support
            </motion.h1>
            <motion.p
              className="mt-4 text-zinc-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              We build, deploy and support complete digital solutions — websites, hotel & retail systems,
              CCTV & networking, POS, accounting dashboards, and more.
            </motion.p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link to="/services" className={`px-4 py-2 rounded-xl ${brand.btn} text-black font-semibold`}>
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 rounded-xl border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/10 transition"
              >
                Get a Free Quote
              </Link>
              <span className={`px-3 py-1 rounded-lg ${brand.chip}`}>24/7 Support</span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              alt="Digital agency workspace"
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
              className="w-full h-72 md:h-[420px] object-cover rounded-3xl ring-1 ring-white/10 shadow-2xl shadow-emerald-500/10"
            />
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <div className="px-4 py-3 rounded-2xl bg-black/70 ring-1 ring-white/10 backdrop-blur flex items-center gap-2">
                <Shield className="h-4 w-4 text-emerald-400" />
                <span className="text-sm text-zinc-300">Trusted implementation partner</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <Section id="mission" title="Mission & Vision" subtitle="Value-driven service, long-term partnership">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="mt-2 text-zinc-300">
              Empower businesses with reliable, affordable technology — from software to hardware —
              so they can focus on growth, not problems.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold">Our Vision</h3>
            <p className="mt-2 text-zinc-300">
              Become the most trusted digital partner in Sylhet & beyond for hotels, retail, education,
              and SMEs — delivering end-to-end solutions under one umbrella.
            </p>
          </Card>
        </div>
      </Section>

      {/* About preview */}
      <Section id="about" title="About Us" subtitle="Digital platform for online, offline, hardware & software support">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <div className="flex items-center gap-3">
              <Monitor className="h-5 w-5 text-emerald-400" />
              <h4 className="font-semibold">Web & Apps</h4>
            </div>
            <p className="mt-2 text-zinc-300">React, MERN, dashboards, hotel & restaurant systems, portals.</p>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <Network className="h-5 w-5 text-emerald-400" />
              <h4 className="font-semibold">Networking & CCTV</h4>
            </div>
            <p className="mt-2 text-zinc-300">Design, fiber, PoE, routers, security cameras — installation & support.</p>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <Headphones className="h-5 w-5 text-emerald-400" />
              <h4 className="font-semibold">Support & Training</h4>
            </div>
            <p className="mt-2 text-zinc-300">24/7 helpline, staff training, on-site and remote assistance.</p>
          </Card>
        </div>
      </Section>

      {/* Goals */}
      <Section id="goals" title="Our Goals" subtitle="Quality, transparency, and quick response">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h4 className="font-semibold">Reliable Delivery</h4>
            <p className="mt-2 text-zinc-300">On-time projects with documented processes and clear milestones.</p>
          </Card>
          <Card>
            <h4 className="font-semibold">Affordable & Scalable</h4>
            <p className="mt-2 text-zinc-300">Solutions that start small and grow with your business.</p>
          </Card>
          <Card>
            <h4 className="font-semibold">Local + Global</h4>
            <p className="mt-2 text-zinc-300">Sylhet-based support with global best practices and tools.</p>
          </Card>
        </div>
      </Section>

      {/* Services preview */}
      <Section id="services" title="Our Services" subtitle="End-to-end products & services under one roof">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Globe, title: "Websites & SEO", desc: "React sites, landing pages, SEO, analytics, hosting." },
            { icon: Cpu, title: "Software (MERN)", desc: "Hotel, restaurant, POS, accounting, OMR, custom apps." },
            { icon: Server, title: "Cloud & DevOps", desc: "VPS, backups, monitoring, CI/CD, security hardening." },
            { icon: Network, title: "Networking & CCTV", desc: "Router setup, fiber, PoE, IP cameras, access control." },
            { icon: Headphones, title: "Support & AMC", desc: "Annual maintenance, SLA, remote & on-site support." },
            { icon: Shield, title: "Procurement", desc: "Laptops, printers, scanners, PoE switches, accessories." },
          ].map((s, i) => (
            <Card key={i}>
              <div className="flex items-center gap-3">
                <s.icon className="h-5 w-5 text-emerald-400" />
                <h4 className="font-semibold">{s.title}</h4>
              </div>
              <p className="mt-2 text-zinc-300">{s.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Clients */}
      <Section id="clients" title="Our Clients" subtitle="Hotels, restaurants, schools, clinics & SMEs">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {["Hiltown Hotel", "Grand Akther", "Ibn Sina", "SCPSC", "Relaks Media", "Friends Computer"].map((c, i) => (
            <div key={i} className="rounded-xl border border-white/10 px-3 py-4 text-center text-sm text-zinc-300">
              {c}
            </div>
          ))}
        </div>
      </Section>

      {/* Opportunities */}
      <Section id="opportunity" title="Opportunities" subtitle="Partner, reseller & project collaboration">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h4 className="font-semibold">Partnerships</h4>
            <p className="mt-2 text-zinc-300">Join as reseller/partner. Share work, share growth.</p>
          </Card>
          <Card>
            <h4 className="font-semibold">Bulk Projects</h4>
            <p className="mt-2 text-zinc-300">Institutional setups: hotels, campuses, clinics, factories.</p>
          </Card>
          <Card>
            <h4 className="font-semibold">Custom Solutions</h4>
            <p className="mt-2 text-zinc-300">Tailor-made software and hardware integration.</p>
          </Card>
        </div>
      </Section>
    </>
  );
}

function About() {
  return (
    <Section title="About Ehighway" subtitle="Who we are & what we do">
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h4 className="font-semibold">Our Story</h4>
          <p className="mt-2 text-zinc-300">
            We started in Sylhet delivering practical tech for real businesses — hotels, retail, schools —
            focusing on results and long-term support.
          </p>
        </Card>
        <Card>
          <h4 className="font-semibold">Why Choose Us</h4>
          <ul className="mt-2 list-disc list-inside text-zinc-300 space-y-1">
            <li>Single partner for software + hardware</li>
            <li>Local support, fast response</li>
            <li>Transparent pricing & documentation</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section title="Services" subtitle="Everything under one roof">
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Globe, title: "Websites & SEO", desc: "React/Vite sites, SEO, analytics, hosting, maintenance." },
          { icon: Cpu, title: "Custom Software (MERN)", desc: "Hotel reservation, POS, accounting, OMR, dashboards." },
          { icon: Server, title: "Cloud & DevOps", desc: "VPS, backups, monitoring, CI/CD, SSL, hardening." },
          { icon: Network, title: "Networking & CCTV", desc: "Fiber, PoE, IP camera, access control, PABX, Wi-Fi." },
          { icon: Headphones, title: "Support & AMC", desc: "Annual maintenance contracts, SLA, trainings." },
          { icon: Shield, title: "Procurement", desc: "Laptops, printers, scanners, PoE switches & more." },
        ].map((s, i) => (
          <Card key={i}>
            <div className="flex items-center gap-3">
              <s.icon className="h-5 w-5 text-emerald-400" />
              <h4 className="font-semibold">{s.title}</h4>
            </div>
            <p className="mt-2 text-zinc-300">{s.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Clients() {
  return (
    <Section title="Clients" subtitle="Some names we’ve worked with">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {["Hiltown Hotel", "Grand Akther", "Ibn Sina", "SCPSC", "Relaks Media", "Friends Computer"].map((c, i) => (
          <div key={i} className="rounded-xl border border-white/10 px-3 py-4 text-center text-sm text-zinc-300">
            {c}
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section title="Contact Us" subtitle="We’d love to hear from you">
      <Card>
        <form className="grid md:grid-cols-2 gap-4">
          <input className="bg-zinc-900/60 border border-white/10 rounded-xl px-3 py-2 outline-none" placeholder="Your name" />
          <input className="bg-zinc-900/60 border border-white/10 rounded-xl px-3 py-2 outline-none" placeholder="Phone" />
          <input className="md:col-span-2 bg-zinc-900/60 border border-white/10 rounded-xl px-3 py-2 outline-none" placeholder="Email" />
          <textarea rows={4} className="md:col-span-2 bg-zinc-900/60 border border-white/10 rounded-xl px-3 py-2 outline-none" placeholder="How can we help?" />
          <button className={`md:col-span-2 justify-self-start px-4 py-2 rounded-xl ${brand.btn} text-black font-semibold`}>
            Send Message
          </button>
        </form>
      </Card>
    </Section>
  );
}

function Opportunities() {
  return (
    <Section title="Opportunities" subtitle="Partner, reseller & project collaboration">
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <h4 className="font-semibold">Partnerships</h4>
          <p className="mt-2 text-zinc-300">Join as reseller/partner. Share work, share growth.</p>
        </Card>
        <Card>
          <h4 className="font-semibold">Bulk Projects</h4>
          <p className="mt-2 text-zinc-300">Institutional setups: hotels, campuses, clinics, factories.</p>
        </Card>
        <Card>
          <h4 className="font-semibold">Custom Solutions</h4>
          <p className="mt-2 text-zinc-300">Tailor-made software and hardware integration.</p>
        </Card>
      </div>
    </Section>
  );
}

// ---------- Utilities ----------
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

// ---------- App ----------
export default function App() {
  return (
    <div className={`min-h-screen ${brand.bg} ${brand.text} antialiased`}>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
