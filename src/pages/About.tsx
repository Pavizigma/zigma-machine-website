import { motion } from "framer-motion";
import { Target, Eye, Handshake, Leaf } from "lucide-react";
import Layout from "@/components/Layout";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const About = () => (
  <Layout>
    <section className="py-20 bg-primary">
      <div className="container">
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="font-heading text-5xl font-bold text-primary-foreground">About Zigma</motion.h1>
        <motion.p initial="hidden" animate="visible" variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.2, duration: 0.6 } } }} className="mt-4 text-primary-foreground/80 max-w-2xl text-lg">
          Pioneering sustainable waste management solutions across India and beyond.
        </motion.p>
      </div>
    </section>

    <section className="py-20">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="font-heading text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Zigma Global Environ Solutions Pvt. Ltd. is a pioneering force in environmental sustainability, specializing in waste management, landfill remediation, and the design and manufacturing of cutting-edge waste processing machinery.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With over 15 years of experience, we have processed more than 20 million tons of waste and reclaimed over 2,500 acres of land from legacy dumpsites, turning environmental challenges into opportunities for sustainable development.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 gap-6">
          {[
            { icon: Target, title: "Mission", desc: "To deliver innovative, sustainable waste management solutions that create environmental and economic value." },
            { icon: Eye, title: "Vision", desc: "A world where waste is no longer a burden but a resource — zero waste to landfill." },
            { icon: Handshake, title: "Blue Planet Partnership", desc: "Strategic partnership with Blue Planet Environmental Solutions for global waste management initiatives." },
            { icon: Leaf, title: "Sustainability", desc: "Every project reduces environmental impact and contributes to a circular economy." },
          ].map((item, i) => (
            <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.1, duration: 0.6 } } }}
              className="p-6 rounded-xl bg-secondary">
              <item.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-heading text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
