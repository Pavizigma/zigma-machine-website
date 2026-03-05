import { motion } from "framer-motion";
import { Lightbulb, Zap, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const technologies = [
  { icon: Lightbulb, title: "Patented Screening Technology", desc: "Proprietary trommel screen designs that increase throughput by 40% compared to conventional systems, with reduced power consumption and wear." },
  { icon: Zap, title: "Smart Air Classification", desc: "Advanced ADS systems with intelligent air flow control that adapts to varying waste compositions in real-time for optimal separation." },
  { icon: Shield, title: "Corrosion-Resistant Engineering", desc: "Specialized material selection and coating technologies that extend equipment life in harsh waste processing environments." },
  { icon: TrendingUp, title: "Process Optimization", desc: "Integrated monitoring systems that track performance metrics and enable data-driven optimization of waste processing lines." },
];

const processSteps = [
  { step: "01", title: "Waste Reception", desc: "Incoming waste is weighed, recorded, and directed to the appropriate processing line." },
  { step: "02", title: "Size Reduction", desc: "Shredders break down oversized materials to uniform feed size for efficient screening." },
  { step: "03", title: "Screening & Separation", desc: "Trommels and disc screens separate materials by size into multiple fractions." },
  { step: "04", title: "Density Classification", desc: "Air density separators isolate light (RDF) and heavy fractions for recovery." },
  { step: "05", title: "Metal Recovery", desc: "Magnetic separators extract ferrous metals for recycling." },
  { step: "06", title: "Output & Recovery", desc: "Recovered materials, compost, and RDF are processed for their respective end-use markets." },
];

const Technology = () => (
  <Layout>
    <section className="py-20 bg-primary">
      <div className="container">
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="font-heading text-5xl font-bold text-primary-foreground">Technology & Innovation</motion.h1>
        <motion.p initial="hidden" animate="visible" variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.2, duration: 0.6 } } }} className="mt-4 text-primary-foreground/80 max-w-2xl text-lg">
          Engineering excellence driving the future of waste management.
        </motion.p>
      </div>
    </section>

    <section className="py-24">
      <div className="container">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">Our Innovations</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {technologies.map((t, i) => (
            <motion.div key={t.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.1, duration: 0.6 } } }}>
              <Card className="h-full border-none shadow-md">
                <CardContent className="p-8 flex gap-5">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <t.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold mb-2">{t.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-secondary">
      <div className="container">
        <h2 className="font-heading text-3xl font-bold text-center mb-4">Waste Processing Flow</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">How our integrated technology turns mixed waste into valuable resources.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((s, i) => (
            <motion.div key={s.step} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.1, duration: 0.6 } } }}
              className="relative p-6 rounded-xl bg-card shadow-sm">
              <span className="font-heading text-5xl font-bold text-primary/10 absolute top-4 right-4">{s.step}</span>
              <h3 className="font-heading text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Technology;
