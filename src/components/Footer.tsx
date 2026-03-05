import { Link } from "react-router-dom";
import { Leaf, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-zigma-charcoal text-primary-foreground">
    <div className="container py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Leaf className="h-7 w-7 text-primary" />
          <span className="font-heading text-xl font-bold">ZIGMA</span>
        </div>
        <p className="text-sm text-primary-foreground/70 leading-relaxed">
          Leading waste management and environmental solutions company, transforming waste into value through innovation and sustainable practices.
        </p>
      </div>

      <div>
        <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/70">
          {["About", "Services", "Products", "Projects", "Technology", "Contact"].map((item) => (
            <li key={item}>
              <Link to={`/${item.toLowerCase()}`} className="hover:text-primary transition-colors">{item}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-heading text-lg font-semibold mb-4">Products</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/70">
          {["Trommel", "Conveyors", "Air Density Separator", "Magnetic Separator", "Disc Screen Separator", "Shredders"].map((item) => (
            <li key={item}>
              <Link to="/products" className="hover:text-primary transition-colors">{item}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
        <ul className="space-y-3 text-sm text-primary-foreground/70">
          <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> +91-XXXX-XXXXXX</li>
          <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /> info@zigmaglobal.com</li>
          <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> India &amp; Global Offices</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="container py-6 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/50">
        <p>© {new Date().getFullYear()} Zigma Global Environ Solutions Pvt. Ltd. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Engineering Sustainable Waste Solutions</p>
      </div>
    </div>
  </footer>
);

export default Footer;
