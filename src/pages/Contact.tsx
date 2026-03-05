import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91-XXXX-XXXXXX", href: "tel:+91XXXXXXXXXX" },
  { icon: Mail, label: "Email", value: "info@zigmaglobal.com", href: "mailto:info@zigmaglobal.com" },
  { icon: MapPin, label: "Office", value: "India & Global Offices" },
  { icon: Clock, label: "Hours", value: "Mon–Sat: 9:00 AM – 6:00 PM" },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@zigmaglobal.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`)}`;
    window.open(mailtoLink, "_blank");
    toast({ title: "Opening email client...", description: "Your message details have been pre-filled." });
  };

  return (
    <Layout>
      <section className="py-20 bg-primary">
        <div className="container">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="font-heading text-5xl font-bold text-primary-foreground">Contact Us</motion.h1>
          <motion.p initial="hidden" animate="visible" variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.2, duration: 0.6 } } }} className="mt-4 text-primary-foreground/80 max-w-2xl text-lg">
            Get in touch for quotes, partnerships, or any inquiries.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    <Input type="email" placeholder="Email Address" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    <Input placeholder="Subject" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                  </div>
                  <Textarea placeholder="Your Message" rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  <Button type="submit" size="lg">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {contactInfo.map((c) => (
              <motion.div key={c.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card>
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <c.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="font-medium text-sm hover:text-primary transition-colors">{c.value}</a>
                      ) : (
                        <p className="font-medium text-sm">{c.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
