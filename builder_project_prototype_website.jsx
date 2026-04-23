import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Home,
  Building2,
  BedDouble,
  Bath,
  Car,
  Ruler,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Star,
  Hammer,
  ShieldCheck,
  Trees,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Project", href: "#project" },
  { label: "Designs", href: "#designs" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const timeline = [
  { title: "Land Secured", desc: "Prime development land secured and project vision established." },
  { title: "Design Phase", desc: "Working with modern home concepts, streetscape layouts, and buyer-focused floor plans." },
  { title: "Approval Stage", desc: "Planning documentation and approvals progressing for a smooth project launch." },
  { title: "Construction Start", desc: "Site works and staged home construction to begin following approvals." },
  { title: "Completion", desc: "Delivery of high-quality, modern homes ready for families and investors." },
];

const houseDesigns = [
  {
    name: "The Willow 22",
    beds: 4,
    baths: 2,
    garage: 2,
    area: "22 sq",
    desc: "A spacious family home with open-plan living, a private master suite, and a practical layout for modern living.",
  },
  {
    name: "The Ashton 19",
    beds: 3,
    baths: 2,
    garage: 2,
    area: "19 sq",
    desc: "A smart and stylish design ideal for first-home buyers, downsizers, or investors seeking strong appeal.",
  },
  {
    name: "The Oakridge 25",
    beds: 4,
    baths: 2,
    garage: 2,
    area: "25 sq",
    desc: "A premium home design featuring generous living spaces, contemporary finishes, and a welcoming facade.",
  },
];

const benefits = [
  {
    icon: Home,
    title: "Modern Design",
    desc: "Thoughtfully planned homes with functional layouts, attractive facades, and contemporary finishes.",
  },
  {
    icon: Hammer,
    title: "Quality Construction",
    desc: "Built with care, workmanship, and a strong commitment to delivering lasting value.",
  },
  {
    icon: Trees,
    title: "Family-Friendly Lifestyle",
    desc: "Designed to support comfortable living, growing families, and a welcoming neighborhood feel.",
  },
  {
    icon: TrendingUp,
    title: "Investment Potential",
    desc: "An early opportunity to secure a property in a new development before completion.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Builder",
    desc: "Family-owned values with a focus on honesty, reliability, and personal service.",
  },
  {
    icon: CheckCircle2,
    title: "Early Buyer Advantage",
    desc: "Get in early to explore options, receive updates, and register interest before public launch.",
  },
];

const testimonials = [
  {
    name: "Future Buyer Placeholder",
    text: "The presentation gave us confidence in the builder’s vision. The homes look modern, practical, and very well planned.",
  },
  {
    name: "Investor Placeholder",
    text: "A professional project concept with strong buyer appeal. It’s easy to see the long-term value in the development.",
  },
  {
    name: "Family Client Placeholder",
    text: "We liked the clear floor plans, quality feel, and the trust that comes from a family-owned building business.",
  },
];

const faqs = [
  {
    q: "When will the project officially launch?",
    a: "This project is currently in the planning and pre-launch stage. Buyers and investors can register interest now to receive the latest updates.",
  },
  {
    q: "Can I reserve a home before construction starts?",
    a: "This prototype includes an early interest process so prospective buyers can enquire before public release and construction completion.",
  },
  {
    q: "Are the floor plans final?",
    a: "The current designs are presented as sample concepts and may be refined during final planning, approvals, and construction documentation.",
  },
  {
    q: "Who is this project suitable for?",
    a: "The development is designed to appeal to families, owner-occupiers, first-home buyers, and investors seeking a quality new-build opportunity.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
    </div>
  );
}

function PlaceholderImage({ label, tall = false }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/50 bg-gradient-to-br from-stone-200 via-amber-100 to-slate-200 ${
        tall ? "h-[420px]" : "h-64"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.95),transparent_30%)]" />
      <div className="absolute inset-x-8 bottom-8 rounded-2xl border border-white/70 bg-white/75 p-4 backdrop-blur">
        <p className="text-sm font-medium text-slate-800">{label}</p>
        <p className="mt-1 text-sm text-slate-600">Premium project render placeholder</p>
      </div>
      <div className="absolute bottom-24 left-8 right-8 h-24 rounded-[2rem] bg-slate-300/70" />
      <div className="absolute bottom-24 left-16 h-36 w-24 rounded-t-3xl bg-slate-500/70" />
      <div className="absolute bottom-24 left-44 h-28 w-28 rounded-t-3xl bg-stone-500/70" />
      <div className="absolute bottom-24 right-16 h-40 w-32 rounded-t-3xl bg-slate-600/70" />
    </div>
  );
}

function FAQItem({ item, open, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-base font-medium text-slate-900">{item.q}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition ${open ? "rotate-180" : ""}`} />
      </div>
      {open && <p className="mt-4 text-sm leading-7 text-slate-600">{item.a}</p>}
    </button>
  );
}

export default function BuilderProjectPrototype() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen scroll-smooth bg-[#fcfaf7] text-slate-900">
      <style>{`
        html { scroll-behavior: smooth; }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#fcfaf7]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">Family Builder</p>
              <p className="text-base font-semibold text-slate-900">Oakview Homes Project</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-slate-950">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild className="rounded-xl bg-slate-900 px-5 text-white hover:bg-slate-800">
              <a href="#register">Register Interest</a>
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setMobileOpen((v) => !v)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="text-sm font-medium text-slate-700">
                  {item.label}
                </a>
              ))}
              <Button asChild className="mt-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800">
                <a href="#register">Register Interest</a>
              </Button>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(120,53,15,0.06),rgba(15,23,42,0.04),rgba(255,255,255,0.5))]" />
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <Badge className="rounded-full border border-amber-200 bg-amber-50 px-4 py-1 text-amber-800 hover:bg-amber-50">
                New Housing Project Coming Soon
              </Badge>
              <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Future Homes, Built With Trust
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                A modern residential project by a family-owned builder, created to help buyers and investors preview the vision before construction is complete.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Explore the project concept, home designs, development timeline, and early opportunities to register interest before launch.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-xl bg-slate-900 px-6 text-white hover:bg-slate-800">
                  <a href="#project">View Project</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl border-slate-300 bg-white px-6">
                  <a href="#register">Register Interest</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl border-slate-300 bg-white px-6">
                  <a href="#contact">Contact Us</a>
                </Button>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  ["12", "Planned Lots"],
                  ["3+", "Home Designs"],
                  ["Family", "Owned Builder"],
                  ["Now", "Registering Interest"],
                ].map(([value, label]) => (
                  <Card key={label} className="rounded-2xl border-white/70 bg-white/70 shadow-sm backdrop-blur">
                    <CardContent className="p-4">
                      <p className="text-xl font-semibold text-slate-900">{value}</p>
                      <p className="mt-1 text-sm text-slate-600">{label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <PlaceholderImage label="Contemporary streetscape and hero home render" tall />
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="About the Builder"
                title="Built on family values, quality workmanship, and trust"
                description="This project is presented by a family-owned builder committed to creating modern, comfortable homes with care and attention to detail."
              />
              <div className="mt-8 space-y-5 text-slate-600">
                <p>
                  With a focus on reliability, honest service, and quality construction, the builder’s vision is to deliver homes that feel practical, welcoming, and made for real life.
                </p>
                <p>
                  Every part of the development is designed to reflect modern living, from well-planned layouts to attractive facades and lifestyle-oriented streetscapes.
                </p>
                <p>
                  As a family-run business, the goal is simple: build trust early, communicate clearly, and create homes that buyers can feel confident investing in.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Personal service and clear communication",
                "Modern home building approach",
                "Strong focus on workmanship and detail",
                "Homes designed for comfort and lifestyle",
              ].map((item) => (
                <Card key={item} className="rounded-3xl border-slate-200 bg-white shadow-sm">
                  <CardContent className="flex h-full items-start gap-3 p-6">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-700" />
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="project" className="bg-white/70 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="The New Project"
              title="A fresh residential development designed for future living"
              description="This upcoming project transforms ready-to-develop land into a modern housing community created for families, owner-occupiers, and investors."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <Card className="rounded-3xl border-slate-200 bg-white shadow-sm lg:col-span-2">
                <CardContent className="p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge className="rounded-full bg-amber-100 text-amber-800 hover:bg-amber-100">Status: Planning Stage</Badge>
                    <Badge variant="outline" className="rounded-full border-slate-300">Location: Premium land holding</Badge>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-slate-900">Project Vision</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    Oakview Homes is a placeholder project concept that showcases a boutique housing development featuring approximately 12 quality homes. The aim is to give buyers and investors an early view of what is coming, helping them understand the product, the design direction, and the value of getting involved before completion.
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {[
                      ["12", "Planned homes / lots"],
                      ["3", "Sample house designs"],
                      ["2026", "Indicative project timeline"],
                    ].map(([value, label]) => (
                      <div key={label} className="rounded-2xl bg-slate-50 p-5">
                        <p className="text-2xl font-semibold text-slate-900">{value}</p>
                        <p className="mt-1 text-sm text-slate-600">{label}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-slate-200 bg-slate-900 text-white shadow-sm">
                <CardContent className="p-8">
                  <p className="text-sm uppercase tracking-[0.25em] text-amber-300">Why this matters</p>
                  <h3 className="mt-4 text-2xl font-semibold">Present the future before it is built</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    This prototype helps buyers imagine the end result, understand the builder’s direction, and feel comfortable expressing interest early.
                  </p>
                  <Button asChild className="mt-8 w-full rounded-xl bg-white text-slate-900 hover:bg-slate-100">
                    <a href="#register">Enquire About This Project</a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-5">
              {timeline.map((step, idx) => (
                <Card key={step.title} className="rounded-3xl border-slate-200 bg-white shadow-sm">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-sm font-semibold text-amber-800">
                      {idx + 1}
                    </div>
                    <h4 className="text-base font-semibold text-slate-900">{step.title}</h4>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{step.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="designs" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="House Designs / Floor Plans"
            title="Explore sample home concepts"
            description="Preview a selection of modern home designs prepared as part of the project concept. Each design is presented to help buyers imagine how the completed homes may look and function."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {houseDesigns.map((house) => (
              <Card key={house.name} className="overflow-hidden rounded-[28px] border-slate-200 bg-white shadow-sm">
                <div className="p-4">
                  <PlaceholderImage label={`${house.name} facade concept`} />
                </div>
                <CardContent className="p-6 pt-2">
                  <h3 className="text-2xl font-semibold text-slate-900">{house.name}</h3>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-600">
                    <div className="flex items-center gap-2"><BedDouble className="h-4 w-4 text-amber-700" /> {house.beds} Bedrooms</div>
                    <div className="flex items-center gap-2"><Bath className="h-4 w-4 text-amber-700" /> {house.baths} Bathrooms</div>
                    <div className="flex items-center gap-2"><Car className="h-4 w-4 text-amber-700" /> {house.garage} Garage</div>
                    <div className="flex items-center gap-2"><Ruler className="h-4 w-4 text-amber-700" /> {house.area}</div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{house.desc}</p>
                  <div className="mt-6 flex gap-3">
                    <Button className="rounded-xl bg-slate-900 text-white hover:bg-slate-800">Download Floor Plan</Button>
                    <Button variant="outline" className="rounded-xl border-slate-300">Enquire Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="gallery" className="bg-white/70 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Gallery / Visual Preview"
              title="See the project vision come to life"
              description="A visual preview area for future 3D renders, facade concepts, interiors, and streetscape imagery. Elegant placeholders are used here for presentation purposes."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Streetscape preview",
                "Modern facade concept",
                "Kitchen and living render",
                "Master bedroom interior",
                "Outdoor entertaining concept",
                "Project overview render",
              ].map((label) => (
                <PlaceholderImage key={label} label={label} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Buy in This Project"
            title="A compelling opportunity for buyers and investors"
            description="This development is designed to combine modern design, trusted construction, lifestyle appeal, and the benefit of getting in early."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <Card key={benefit.title} className="rounded-3xl border-slate-200 bg-white shadow-sm">
                  <CardContent className="p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-800">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-slate-900">{benefit.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{benefit.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Testimonials"
                title="A presentation built to inspire confidence"
                description="Use these testimonial placeholders to show how buyer and investor feedback could appear once the project begins generating enquiries."
              />
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {testimonials.map((item) => (
                <Card key={item.name} className="rounded-3xl border-white/10 bg-white/5 text-white shadow-none">
                  <CardContent className="p-7">
                    <div className="flex gap-1 text-amber-300">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-5 text-sm leading-7 text-slate-200">“{item.text}”</p>
                    <p className="mt-5 text-sm font-medium text-white">{item.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="register" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="rounded-[32px] border-slate-200 bg-slate-900 text-white shadow-sm">
              <CardContent className="p-8 sm:p-10">
                <p className="text-sm uppercase tracking-[0.25em] text-amber-300">Register Interest</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight">Register your interest before launch</h2>
                <p className="mt-5 text-sm leading-7 text-slate-300">
                  Submit your details to receive project updates, floor plan information, and early access opportunities as the development moves forward.
                </p>
                <div className="mt-8 space-y-4 text-sm text-slate-200">
                  <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-amber-300" /> Early buyer updates</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-amber-300" /> Project release notifications</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-amber-300" /> Priority enquiry access</div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[32px] border-slate-200 bg-white shadow-sm">
              <CardContent className="p-8 sm:p-10">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label className="mb-2 block text-sm font-medium text-slate-700">Full Name</label>
                    <Input placeholder="Your full name" className="h-12 rounded-xl" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="mb-2 block text-sm font-medium text-slate-700">Phone</label>
                    <Input placeholder="Your phone number" className="h-12 rounded-xl" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                    <Input placeholder="Your email address" className="h-12 rounded-xl" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="mb-2 block text-sm font-medium text-slate-700">Preferred House Type</label>
                    <Input placeholder="e.g. 3 bedroom / 4 bedroom" className="h-12 rounded-xl" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                    <Textarea placeholder="Tell us what type of home or investment opportunity you are interested in" className="min-h-[140px] rounded-xl" />
                  </div>
                </div>
                <Button className="mt-6 h-12 rounded-xl bg-slate-900 px-6 text-white hover:bg-slate-800">
                  Register Your Interest Before Launch <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="faq" className="bg-white/70 py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions from future buyers"
              description="A simple FAQ section to help explain the project clearly and build confidence during the early interest stage."
            />
            <div className="mt-10 space-y-4">
              {faqs.map((item, idx) => (
                <FAQItem key={item.q} item={item} open={openFaq === idx} onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="rounded-[32px] border-slate-200 bg-white shadow-sm">
              <CardContent className="p-8 sm:p-10">
                <p className="text-sm uppercase tracking-[0.25em] text-amber-700">Contact</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">Talk to the builder</h2>
                <div className="mt-8 space-y-5 text-sm text-slate-600">
                  <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-amber-700" /> 0400 000 000</div>
                  <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-amber-700" /> info@oakviewhomes.com.au</div>
                  <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-amber-700" /> 123 Project Avenue, Your Town VIC</div>
                </div>
                <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-medium text-slate-800">Office hours</p>
                  <p className="mt-2 text-sm text-slate-600">Monday – Friday: 9:00 AM – 5:00 PM</p>
                  <p className="mt-1 text-sm text-slate-600">Weekend appointments by enquiry</p>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-8">
              <Card className="rounded-[32px] border-slate-200 bg-white shadow-sm">
                <CardContent className="p-8 sm:p-10">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">Full Name</label>
                      <Input placeholder="Your full name" className="h-12 rounded-xl" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                      <Input placeholder="Your email address" className="h-12 rounded-xl" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                      <Textarea placeholder="How can we help you?" className="min-h-[120px] rounded-xl" />
                    </div>
                  </div>
                  <Button className="mt-6 h-12 rounded-xl bg-slate-900 px-6 text-white hover:bg-slate-800">Send Enquiry</Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden rounded-[32px] border-slate-200 bg-white shadow-sm">
                <div className="h-72 bg-gradient-to-br from-slate-200 via-stone-100 to-amber-100 p-6">
                  <div className="flex h-full items-center justify-center rounded-[28px] border border-white/70 bg-white/50 backdrop-blur">
                    <div className="text-center">
                      <MapPin className="mx-auto h-10 w-10 text-amber-700" />
                      <p className="mt-4 text-lg font-medium text-slate-900">Map Placeholder</p>
                      <p className="mt-2 text-sm text-slate-600">Project site and office location can be embedded here</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-[#f7f3ee]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">Family Builder</p>
                <p className="text-base font-semibold text-slate-900">Oakview Homes Project</p>
              </div>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
              A modern prototype website created to present an upcoming housing development professionally and help future buyers and investors imagine the finished result before construction is complete.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-800">Quick Links</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="transition hover:text-slate-900">{item.label}</a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-800">Contact Info</p>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>0400 000 000</p>
              <p>info@oakviewhomes.com.au</p>
              <p>123 Project Avenue, Your Town VIC</p>
              <div className="pt-2">
                <p>Facebook / Instagram / LinkedIn</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <p>© {year} Oakview Homes Project. All rights reserved.</p>
            <p>Prototype presentation website for pre-launch marketing.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
