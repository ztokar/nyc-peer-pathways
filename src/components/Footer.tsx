import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import logo from "@/assets/logo-transparent.png";

const Footer = () => {
  return (
    <footer className="bg-muted text-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img src={logo} alt="Rise2Growth" className="h-24 w-auto mb-4" />
            <p className="text-muted-foreground mb-4 max-w-md">
              Rise2Growth is a staffing agency connecting certified peer specialists with meaningful work across NYC. Your story becomes someone else's hope.
            </p>
            <div className="flex gap-4 mb-4">
              <a href="tel:1212-470-7439" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                (212) 470-7439
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island"].map((area) => (
                <span key={area} className="px-3 py-1 bg-golden rounded-full text-sm font-medium">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/jobs" className="text-muted-foreground hover:text-primary transition-colors">Jobs</Link></li>
              <li><Link to="/faqs" className="text-muted-foreground hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-5 w-5" />
                <a href="tel:1212-470-7439" className="hover:text-primary transition-colors">(212) 470-7439</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5" />
                <a href="mailto:info@rise2growth.com" className="hover:text-primary transition-colors">info@rise2growth.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Rise2Growth. All rights reserved.</p>
          <p className="mt-2">
            Peer Support Specialist Jobs NYC | Certified Peer Specialist | Recovery Coach | Peer Advocate
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;