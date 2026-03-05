import { motion } from "framer-motion";
import { Recycle, Mountain, Cog, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const services = [
  {
    icon: Recycle, title: "Waste Management",
    desc: "Comprehensive end-to-end waste management solutions for municipalities, industries, and private enterprises.",
    benefits: ["Waste collection & transportation", "Material recovery & recycling", "Organic waste composting", "Hazardous waste handling", "Regulatory compliance support"],
  },
  {
    icon: Mountain, title: "Landfill Remediation",
    desc: "Scientific remediation of legacy dumpsites, restoring land to productive use while recovering resources.",
    benefits: ["Legacy dumpsite assessment", "Bio-mining & bio-remediation", "Land reclamation & restoration", "Leachate management", "Environmental monitoring"],
  },
  {
    icon: Cog, title: "Machinery Manufacturing",
    desc: "Design and manufacturing of custom waste processing machinery — built for Indian and global waste streams.",
    benefits: ["Custom-engineered machines", "Trommel screens & conveyors", "Air density separators", "Magnetic separators", "Complete turnkey plants"],
  },
];

const Services = () => (
  <Layout>
    <section className="py-20 bg-primary">
      <div className="container">
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="font-heading text-5xl font-bold text-primary-foreground">Our Services</motion.h1>
        <motion.p initial="hidden" animate="visible" variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.2, duration: 0.6 } } }} className="mt-4 text-primary-foreground/80 max-w-2xl text-lg">
          End-to-end environmental solutions — from waste processing to land reclamation.
        </motion.p>
      </div>
    </section>

    <section className="py-24">
      <div className="container space-y-16">
        {services.map((s, i) => (
          <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.1, duration: 0.6 } } }}>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <s.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-heading text-2xl font-bold mb-3">{s.title}</h2>
                    <p className="text-muted-foreground mb-6 max-w-2xl">{s.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {s.benefits.map((b) => (
                        <div key={b} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Services;
