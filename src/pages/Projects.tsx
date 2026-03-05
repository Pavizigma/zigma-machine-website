import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import CounterSection from "@/components/CounterSection";
import Layout from "@/components/Layout";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const milestones = [
  { year: "2010", title: "Company Founded", desc: "Zigma established with a vision to transform waste management in India." },
  { year: "2013", title: "First Major Project", desc: "Awarded first municipal solid waste processing contract." },
  { year: "2016", title: "Machinery Division Launched", desc: "Began in-house manufacturing of waste processing machinery." },
  { year: "2018", title: "Blue Planet Partnership", desc: "Strategic partnership for global environmental initiatives." },
  { year: "2020", title: "20M Tons Milestone", desc: "Crossed 20 million tons of waste processed across all projects." },
  { year: "2023", title: "2500 Acres Reclaimed", desc: "Major landfill remediation milestone — 2500+ acres restored." },
];

const projects = [
  { title: "Municipal Waste Processing Plant — Gujarat", desc: "500 TPD integrated waste processing facility with material recovery and composting.", status: "Completed" },
  { title: "Legacy Dumpsite Remediation — Maharashtra", desc: "Bio-mining and land reclamation of 200-acre legacy dumpsite.", status: "Completed" },
  { title: "Turnkey Recycling Facility — Rajasthan", desc: "Complete design, build, and operate contract for a modern recycling plant.", status: "Ongoing" },
];

const Projects = () => (
  <Layout>
    <section className="py-20 bg-primary">
      <div className="container">
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="font-heading text-5xl font-bold text-primary-foreground">Projects & Achievements</motion.h1>
        <motion.p initial="hidden" animate="visible" variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.2, duration: 0.6 } } }} className="mt-4 text-primary-foreground/80 max-w-2xl text-lg">
          Track record of transformative environmental projects across India.
        </motion.p>
      </div>
    </section>

    <CounterSection />

    {/* Timeline */}
    <section className="py-24">
      <div className="container">
        <h2 className="font-heading text-3xl font-bold text-center mb-16">Key Milestones</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />
          {milestones.map((m, i) => (
            <motion.div key={m.year} initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.1, duration: 0.6 } } }}
              className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-2 z-10" />
              <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                <span className="text-sm font-bold text-primary">{m.year}</span>
                <h3 className="font-heading text-lg font-bold">{m.title}</h3>
                <p className="text-sm text-muted-foreground">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Projects */}
    <section className="py-24 bg-secondary">
      <div className="container">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">Project Showcase</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.15, duration: 0.6 } } }}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${p.status === "Completed" ? "bg-primary/10 text-primary" : "bg-accent/20 text-accent-foreground"}`}>{p.status}</span>
                  <h3 className="font-heading text-lg font-bold mt-3 mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Projects;
