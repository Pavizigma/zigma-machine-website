import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, FileText, CheckCircle, ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import productTrommel from "@/assets/product-trommel.jpg";
import productConveyor from "@/assets/product-conveyor.jpg";
import productAds from "@/assets/product-ads.jpg";
import productObms from "@/assets/product-obms.jpg";
import productDiscScreen from "@/assets/product-disc-screen.jpg";
import productShredder from "@/assets/product-shredder.jpg";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const productsData = [
  {
    slug: "trommel-machines",
    name: "Trommel Machines",
    img: productTrommel,
    tagline: "Heavy-duty rotary screening for efficient waste separation and material recovery.",
    description: "Zigma Trommel Machines are engineered for the toughest waste processing environments. The rotating cylindrical drum with perforated screens separates mixed waste by size, enabling efficient downstream processing. Available in multiple configurations to suit municipal solid waste, construction debris, compost, and industrial waste streams.",
    specs: [
      { label: "Drum Diameter", value: "1.5m to 3.5m" },
      { label: "Drum Length", value: "4m to 12m" },
      { label: "Capacity", value: "20–200 TPH" },
      { label: "Screen Aperture", value: "10mm–100mm (customizable)" },
      { label: "Drive System", value: "Electric motor with heavy-duty gearbox" },
      { label: "Construction", value: "MS / SS options available" },
      { label: "Speed", value: "Variable speed drive" },
      { label: "Screen Type", value: "Perforated / Wedge wire / Punch plate" },
    ],
    features: [
      "Robust welded steel frame construction",
      "Replaceable modular screen panels for quick change",
      "Variable speed drive for optimized separation",
      "Multiple screen sections for multi-fraction output",
      "Low maintenance — greased-for-life bearings option",
      "Custom inlet/outlet configurations",
      "Optional dust suppression system",
      "Skid-mounted or wheel-mounted options",
    ],
    applications: ["Municipal Solid Waste (MSW) processing", "Construction & Demolition waste", "Compost screening", "Soil screening & remediation", "Biomass processing"],
    related: ["conveyors", "disc-screen-separator", "air-density-separator"],
  },
  {
    slug: "conveyors",
    name: "Conveyors",
    img: productConveyor,
    tagline: "Complete range of belt conveyors for material handling in waste processing plants.",
    description: "Zigma manufactures a complete range of belt conveyors designed specifically for waste processing applications. From feeding conveyors to discharge systems, our conveyors handle everything from fine screened material to heavy bulky waste. Available in belt widths from 500mm to 2400mm with lengths up to 50m+.",
    specs: [
      { label: "Belt Width", value: "500mm to 2400mm" },
      { label: "Length", value: "Custom — up to 50m+" },
      { label: "Speed", value: "Variable — up to 2.5 m/s" },
      { label: "Capacity", value: "10–500 TPH" },
      { label: "Incline", value: "0° to 22° (chevron belt for steeper)" },
      { label: "Drive", value: "Motorized head drum with gearbox" },
      { label: "Belt Type", value: "EP / NN / Chevron / Heat-resistant" },
      { label: "Frame", value: "Channel / Tubular steel construction" },
    ],
    features: [
      "Slider bed & troughed idler configurations",
      "Self-aligning return rollers",
      "Heavy-duty drive system with soft start",
      "Spillage containment skirting",
      "Weather-resistant covers available",
      "Emergency pull-cord & safety switches",
      "Belt tracking adjustment",
      "Picking station integration option",
    ],
    applications: ["Feed conveyors for processing lines", "Transfer & sorting conveyors", "Incline conveyors for elevation change", "Discharge & stockpile conveyors", "Manual picking station belts"],
    related: ["trommel-machines", "overband-magnetic-separator", "shredders"],
  },
  {
    slug: "disc-screen-separator",
    name: "Disc Screen Separator",
    img: productDiscScreen,
    tagline: "High-volume disc screen for accurate size-based separation of mixed waste.",
    description: "The Zigma Disc Screen Separator uses rotating star-shaped or circular discs mounted on parallel shafts to screen and separate materials by size. Ideal for high-volume waste streams where accurate size classification is critical. The modular design allows for easy expansion and configuration changes.",
    specs: [
      { label: "Capacity", value: "Up to 100 TPH" },
      { label: "Disc Configurations", value: "Star / Circular — multiple sizes" },
      { label: "Separation Range", value: "20mm–150mm (adjustable)" },
      { label: "Drive", value: "Individual shaft motors" },
      { label: "Deck Width", value: "1m to 3m" },
      { label: "Deck Length", value: "2m to 6m" },
    ],
    features: [
      "High throughput with excellent accuracy",
      "Handles wet, sticky, and dry materials",
      "Self-cleaning disc design",
      "Minimal maintenance requirements",
      "Modular and expandable layout",
      "Low power consumption per ton",
    ],
    applications: ["MSW size classification", "Compost screening", "C&D waste separation", "Biomass sorting", "RDF preparation"],
    related: ["trommel-machines", "conveyors", "air-density-separator"],
  },
  {
    slug: "air-density-separator",
    name: "Air Density Separator (ADS)",
    img: productAds,
    tagline: "Advanced air classification system for separating light and heavy fractions.",
    description: "The Zigma Air Density Separator uses controlled air flow to separate materials by density. Light materials (plastics, paper, textiles) are lifted and carried away while heavy materials (stones, glass, metals) fall through. Essential for producing clean RDF/SRF fractions and recovering valuable materials from mixed waste.",
    specs: [
      { label: "Capacity", value: "5–50 TPH" },
      { label: "Air Volume", value: "Adjustable — fan speed controlled" },
      { label: "Chamber", value: "Pressure-resistant design" },
      { label: "Motor", value: "15–75 kW (application dependent)" },
      { label: "Fractions", value: "2-way or 3-way separation" },
      { label: "Feed Size", value: "Up to 300mm" },
    ],
    features: [
      "Pressure-resistant separation chamber",
      "Adjustable air flow for fine-tuning",
      "Low energy consumption",
      "Effective RDF/SRF production",
      "Minimal dust emission with enclosed design",
      "Compact footprint for easy integration",
    ],
    applications: ["RDF/SRF production", "Plastic & paper recovery", "MSW light fraction separation", "C&D waste classification", "Industrial waste processing"],
    related: ["trommel-machines", "overband-magnetic-separator", "disc-screen-separator"],
  },
  {
    slug: "overband-magnetic-separator",
    name: "Overband Magnetic Separator (OBMS)",
    img: productObms,
    tagline: "Self-cleaning permanent magnet system for continuous ferrous metal recovery.",
    description: "The Zigma OBMS is suspended above conveyor belts to automatically extract ferrous metals from the waste stream. Using high-grade permanent magnets, it requires no electricity for the magnetic field — only for the self-cleaning belt that continuously discharges captured metals. Ideal for protecting downstream equipment and recovering valuable ferrous scrap.",
    specs: [
      { label: "Belt Width Coverage", value: "600mm to 1800mm" },
      { label: "Magnetic Strength", value: "Up to 1500 Gauss at working distance" },
      { label: "Magnet Type", value: "Permanent — Ferrite / Rare Earth" },
      { label: "Cleaning", value: "Automatic self-cleaning belt" },
      { label: "Suspension", value: "Cross-belt or in-line mounting" },
      { label: "Construction", value: "Corrosion-resistant enclosure" },
    ],
    features: [
      "Self-cleaning continuous operation — no downtime",
      "High-grade permanent magnets — no electricity for magnetic field",
      "Adjustable suspension height",
      "Handles high belt speeds",
      "Corrosion and abrasion resistant",
      "Protects downstream equipment from metal damage",
    ],
    applications: ["Ferrous metal recovery from MSW", "Scrap metal extraction", "Protection of shredders & screens", "Recycling line metal removal", "C&D waste metal recovery"],
    related: ["conveyors", "shredders", "trommel-machines"],
  },
  {
    slug: "shredders",
    name: "Shredders",
    img: productShredder,
    tagline: "Industrial-grade shredders for size reduction of bulky waste and recyclables.",
    description: "Zigma industrial shredders are designed for primary size reduction of mixed waste, bulky items, mattresses, wood, tyres, and other difficult-to-process materials. Available in single-shaft and dual-shaft configurations with high-torque, low-speed operation that handles unpredictable waste feeds without jamming.",
    specs: [
      { label: "Capacity", value: "5–100 TPH" },
      { label: "Shaft Type", value: "Single shaft / Dual shaft" },
      { label: "Motor", value: "30–300 kW" },
      { label: "Feed Opening", value: "Custom sizes available" },
      { label: "Output Size", value: "50mm–300mm (screen dependent)" },
      { label: "Cutting System", value: "Reversible hook / square knives" },
    ],
    features: [
      "High-torque, low-speed operation",
      "Reversible hardened cutting knives",
      "Automatic reverse on overload",
      "Heavy-duty shaft bearings",
      "Hydraulic pusher option for bulky feeds",
      "Easy knife replacement design",
    ],
    applications: ["MSW primary shredding", "Bulky waste size reduction", "Tyre & rubber shredding", "Wood & pallet destruction", "RDF preparation"],
    related: ["conveyors", "trommel-machines", "air-density-separator"],
  },
  {
    slug: "shredder-blades",
    name: "Shredder Blades",
    img: productShredder,
    tagline: "Precision-manufactured replacement blades for industrial waste shredders.",
    description: "Zigma manufactures high-quality replacement blades for all types of industrial waste shredders. Made from premium hardened tool steel, our blades offer extended service life with multiple re-sharpening cycles. Compatible with all major shredder brands and available in hook, square, and hex profiles.",
    specs: [
      { label: "Material", value: "Hardened tool steel" },
      { label: "Hardness", value: "55–62 HRC" },
      { label: "Types", value: "Hook / Square / Hex profiles" },
      { label: "Custom Profiles", value: "Available on request" },
      { label: "Re-sharpening", value: "Multiple cycles supported" },
    ],
    features: [
      "Extended service life — premium steel",
      "Precision CNC machined for perfect fit",
      "Multiple re-sharpening cycles",
      "Compatible with all major shredder brands",
      "Quick-change mounting system",
      "Bulk order discounts available",
    ],
    applications: ["Replacement blades for existing shredders", "Upgrade kits for improved performance", "Spare parts inventory"],
    related: ["shredders", "trommel-machines", "conveyors"],
  },
];

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-heading text-3xl font-bold">Product Not Found</h1>
          <Button asChild className="mt-4"><Link to="/products">View All Products</Link></Button>
        </div>
      </Layout>
    );
  }

  const relatedProducts = productsData.filter((p) => product.related.includes(p.slug));

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-secondary border-b">
        <div className="container py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/products" className="hover:text-primary">Products</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground font-medium">{product.name}</span>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-16">
        <div className="container grid lg:grid-cols-2 gap-12 items-start">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="rounded-2xl overflow-hidden bg-muted shadow-lg">
            <img src={product.img} alt={product.name} className="w-full aspect-[4/3] object-cover" />
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.2, duration: 0.6 } } }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold">{product.name}</h1>
            <p className="mt-2 text-lg text-primary font-semibold">{product.tagline}</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">{product.description}</p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button size="lg" asChild>
                <Link to="/contact"><FileText className="mr-2 h-4 w-4" /> Get a Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+91XXXXXXXXXX"><Phone className="mr-2 h-4 w-4" /> Call Now</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-heading text-3xl font-bold mb-8">Technical Specifications</motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-card rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <tbody>
                {product.specs.map((s, i) => (
                  <tr key={s.label} className={i % 2 === 0 ? "bg-card" : "bg-secondary/50"}>
                    <td className="px-6 py-4 font-medium text-sm w-1/3 border-r">{s.label}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Features & Applications */}
      <section className="py-16">
        <div className="container grid md:grid-cols-2 gap-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-heading text-2xl font-bold mb-6">Key Features</h2>
            <ul className="space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.15, duration: 0.6 } } }}>
            <h2 className="font-heading text-2xl font-bold mb-6">Applications</h2>
            <ul className="space-y-3">
              {product.applications.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-sm">{a}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="py-16 bg-primary">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-heading text-3xl font-bold text-primary-foreground">Interested in {product.name}?</h2>
            <p className="mt-2 text-primary-foreground/80">Get custom specifications and pricing for your requirements.</p>
          </div>
          <div className="flex gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact"><FileText className="mr-2 h-4 w-4" /> Get a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="tel:+91XXXXXXXXXX"><Phone className="mr-2 h-4 w-4" /> Call Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold mb-10">Related Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((rp, i) => (
              <motion.div key={rp.slug} initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.1, duration: 0.5 } } }}>
                <Link to={`/products/${rp.slug}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all group h-full">
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img src={rp.img} alt={rp.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-heading text-lg font-bold">{rp.name}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{rp.tagline}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export { productsData };
export default ProductDetail;
