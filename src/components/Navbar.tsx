import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import EnquirySheet from "@/components/EnquirySheet";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Products", path: "/products" },
  { label: "Projects", path: "/projects" },
  { label: "Technology", path: "/technology" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
        
           <img
             className="h-8 w-8 text-primary"
            src="https://zigma.in/img/logo.png"

            />
         
          <div className="flex flex-col leading-tight">
            
            <span className="font-heading text-xl font-bold text-primary">Machineries</span>
            {/* <span className="text-[10px] tracking-widest text-muted-foreground uppercase">Global Environ Solutions</span> */}
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-primary/10 hover:text-primary",
                location.pathname === item.path && "bg-primary/10 text-primary font-semibold"
              )}
            >
              {item.label}
            </Link>
          ))}
          <EnquirySheet
            trigger={
              <Button className="ml-2">Enquire Now</Button>
            }
          />
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <EnquirySheet
            trigger={
              <Button size="sm">Enquire Now</Button>
            }
          />
          <button onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-background">
          <nav className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-primary/10",
                  location.pathname === item.path && "bg-primary/10 text-primary font-semibold"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
