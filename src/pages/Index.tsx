import { Link } from "react-router-dom";
import { ArrowRight, Phone, FileText, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import EnquirySheet from "@/components/EnquirySheet";
import Layout from "@/components/Layout";
import CounterSection from "@/components/CounterSection";
import heroBg from "@/assets/hero-bg.jpg";
import productTrommel from "@/assets/product-trommel.jpg";
import productConveyor from "@/assets/product-conveyor.jpg";
import productAds from "@/assets/product-ads.jpg";
import productObms from "@/assets/product-obms.jpg";
import productDiscScreen from "@/assets/product-disc-screen.jpg";
import productShredder from "@/assets/product-shredder.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const allProducts = [
  { slug: "trommel-machines", name: "Trommel Machines", img: productTrommel, tagline: "Heavy-duty rotary screening for efficient waste separation", capacity: "20–200 TPH" },
  { slug: "conveyors", name: "Conveyors", img: productConveyor, tagline: "Belt conveyors from 500mm to 2400mm width range", capacity: "10–500 TPH" },
  { slug: "disc-screen-separator", name: "Disc Screen Separator", img: productDiscScreen, tagline: "High-volume screening for accurate size-based separation", capacity: "Up to 100 TPH" },
  { slug: "air-density-separator", name: "Air Density Separator (ADS)", img: productAds, tagline: "Density-based separation for light & heavy fractions", capacity: "5–50 TPH" },
  { slug: "overband-magnetic-separator", name: "Overband Magnetic Separator (OBMS)", img: productObms, tagline: "Self-cleaning permanent magnet for ferrous metal recovery", capacity: "Up to 1800mm belt" },
  { slug: "shredders", name: "Shredders", img: productShredder, tagline: "Industrial-grade size reduction for bulky waste & recyclables", capacity: "5–100 TPH" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Zigma waste processing machinery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-zigma-charcoal/80" />
        </div>
        <div className="container relative z-10 py-20">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-sm font-semibold mb-6 border border-primary/30">
              Industrial Waste Processing Equipment
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
              Engineering Sustainable Waste Solutions
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
              Zigma Global Environ Solutions is a leading Indian manufacturer of industrial-grade waste processing machinery — Trommels, Conveyors, Shredders, Air Density Separators, and Magnetic Separators — trusted by municipal bodies, recyclers, and waste management companies across India and beyond.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <EnquirySheet
                trigger={
                  <Button size="lg">
                    <FileText className="mr-2 h-4 w-4" /> Get a Quote
                  </Button>
                }
              />
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+91XXXXXXXXXX">
                  <Phone className="mr-2 h-4 w-4" /> Call Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Zigma Global Environ Solutions Pvt. Ltd. is a specialist manufacturer and solution provider in the waste management sector. We design, fabricate, and deploy heavy-duty machinery that powers solid waste processing plants, material recovery facilities (MRFs), and construction & demolition (C&D) waste recycling units.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a state-of-the-art manufacturing facility, experienced engineering team, and commitment to quality, we deliver machines built for the toughest operating conditions. Our equipment is trusted by leading waste management companies, government bodies, and recyclers for reliability, throughput, and low maintenance.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-8 mt-14 max-w-4xl mx-auto">
            {[
              { label: "In-House Manufacturing", desc: "Complete design-to-delivery under one roof with rigorous quality control." },
              { label: "Custom Engineering", desc: "Every machine is tailored to your waste stream, capacity, and site requirements." },
              { label: "Pan-India Service", desc: "Installation, commissioning, and after-sales support across the country." },
            ].map((item, i) => (
              <motion.div key={item.label} initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.12, duration: 0.5 } } }}
                className="text-center p-6 rounded-xl bg-card shadow-sm">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="font-heading text-lg font-bold text-primary">0{i + 1}</span>
                </div>
                <h3 className="font-heading text-lg font-bold mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-24">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold">Our Product Range</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Explore our complete range of industrial waste processing machinery — engineered for performance, built to last.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((p, i) => (
              <motion.div key={p.slug} initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: (i % 3) * 0.12 } } }}>
                <Link to={`/products/${p.slug}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all group h-full border-none shadow-md">
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-heading text-lg font-bold">{p.name}</h3>
                        <ChevronRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-muted-foreground text-sm">{p.tagline}</p>
                      <span className="inline-block mt-3 text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                        Capacity: {p.capacity}
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <CounterSection />

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold">Why Choose Zigma?</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Custom Engineered", desc: "Every machine is designed to match your specific waste stream and throughput requirements." },
              { title: "Built to Last", desc: "Heavy-duty MS/SS construction with replaceable wear parts for years of reliable operation." },
              { title: "Complete Plants", desc: "From individual machines to full turnkey waste processing plants — we do it all." },
              { title: "After-Sales Support", desc: "Dedicated service team for installation, commissioning, spares, and maintenance." },
            ].map((item, i) => (
              <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.1, duration: 0.6 } } }}
                className="p-6 rounded-xl bg-card shadow-sm text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading text-xl font-bold text-primary">0{i + 1}</span>
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Ready to Discuss Your Requirements?</h2>
            <p className="mt-2 text-primary-foreground/80 max-w-lg">Get custom pricing and specifications for your waste processing machinery needs.</p>
          </div>
          <div className="flex gap-4">
            <EnquirySheet
              trigger={
                <Button size="lg" variant="secondary">
                  <FileText className="mr-2 h-4 w-4" /> Get a Quote
                </Button>
              }
            />
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+91XXXXXXXXXX"><Phone className="mr-2 h-4 w-4" /> Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
