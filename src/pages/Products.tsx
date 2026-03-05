import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { productsData } from "./ProductDetail";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const Products = () => (
  <Layout>
    <section className="py-20 bg-primary">
      <div className="container">
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="font-heading text-5xl font-bold text-primary-foreground">
          Our Products
        </motion.h1>
        <motion.p initial="hidden" animate="visible" variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.2, duration: 0.6 } } }} className="mt-4 text-primary-foreground/80 max-w-2xl text-lg">
          Complete range of waste processing machinery — custom-engineered for your needs.
        </motion.p>
        <motion.div initial="hidden" animate="visible" variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.35, duration: 0.6 } } }} className="flex gap-4 mt-6">
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact"><FileText className="mr-2 h-4 w-4" /> Get a Quote</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <a href="tel:+91XXXXXXXXXX"><Phone className="mr-2 h-4 w-4" /> Call Now</a>
          </Button>
        </motion.div>
      </div>
    </section>

    <section className="py-24">
      <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productsData.map((p, i) => (
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
                  <span className="inline-block mt-3 text-xs font-medium text-primary underline-offset-2 hover:underline">View Details →</span>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Products;
