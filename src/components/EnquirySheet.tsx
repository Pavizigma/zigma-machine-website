import { useState } from "react";
import { FileText, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

interface EnquirySheetProps {
  trigger?: React.ReactNode;
  productName?: string;
}

const EnquirySheet = ({ trigger, productName }: EnquirySheetProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    product: productName || "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = form.product
      ? `Enquiry for ${form.product}`
      : "Product Enquiry";
    const mailtoLink = `mailto:info@zigmaglobal.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nProduct: ${form.product}\n\n${form.message}`
    )}`;
    window.open(mailtoLink, "_blank");
    toast({
      title: "Opening email client...",
      description: "Your enquiry details have been pre-filled.",
    });
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {trigger || (
          <Button>
            <FileText className="mr-2 h-4 w-4" /> Enquire Now
          </Button>
        )}
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="font-heading text-xl">
            Product Enquiry
          </SheetTitle>
          <SheetDescription>
            Fill in your details and we'll get back to you with a custom quote.
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <Input
            placeholder="Your Name *"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <Input
            type="email"
            placeholder="Email Address *"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <Input
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <Input
            placeholder="Product of Interest"
            value={form.product}
            onChange={(e) => setForm({ ...form, product: e.target.value })}
          />
          <Textarea
            placeholder="Your Requirements / Message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <Button type="submit" className="w-full" size="lg">
            <FileText className="mr-2 h-4 w-4" /> Submit Enquiry
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t">
          <p className="text-sm text-muted-foreground mb-3">Or reach us directly:</p>
          <Button variant="outline" className="w-full" asChild>
            <a href="tel:+91XXXXXXXXXX">
              <Phone className="mr-2 h-4 w-4" /> Call Now
            </a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default EnquirySheet;
