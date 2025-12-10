import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Phone, Mail, Clock, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Rise2Growth - Apply for Peer Specialist Jobs NYC</title>
        <meta 
          name="description" 
          content="Ready to join our team? Contact Rise2Growth to apply for peer specialist positions in NYC. We'll get back to you within 2 business days." 
        />
        <meta 
          name="keywords" 
          content="contact Rise2Growth, peer specialist jobs contact, apply peer specialist NYC, peer support jobs application" 
        />
        <link rel="canonical" href="https://rise2growth.org/contact" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  Contact <span className="text-primary">Rise2Growth</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  <strong>Ready to join our team?</strong>
                  <br />
                  We'd love to hear from you.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Info + Form */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Contact Info */}
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-8">
                    Contact Info
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <a href="tel:1212-470-7439" className="text-primary hover:underline">
                          (212) 470-7439
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <a href="mailto:info@rise2growth.org" className="text-primary hover:underline">
                          info@rise2growth.org
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Hours</p>
                        <p className="text-muted-foreground">Monday–Friday</p>
                        <p className="text-muted-foreground">9:00 AM – 5:00 PM</p>
                      </div>
                    </div>
                  </div>

                  {/* For Peer Specialists */}
                  <div className="mt-12 p-6 bg-secondary/20 rounded-xl">
                    <div className="flex items-start gap-3 mb-4">
                      <Briefcase className="h-6 w-6 text-secondary flex-shrink-0" />
                      <h3 className="text-lg font-display font-bold text-foreground">
                        For Peer Specialists
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Email us your resume and the NYC areas you can work in.
                      <br />
                      We'll get back to you within 2 business days.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link to="/faqs" className="text-primary hover:underline">
                        Have Questions? Check FAQs →
                      </Link>
                    </div>
                  </div>

                  {/* Learn About Certification */}
                  <div className="mt-6 p-6 bg-primary/10 rounded-xl">
                    <h3 className="text-lg font-display font-bold text-foreground mb-4">
                      Not Certified Yet?
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Learn about how to become a certified peer specialist in NYC.
                    </p>
                    <Link to="/resources" className="text-primary hover:underline">
                      Learn About Certification →
                    </Link>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Tell us about yourself.
                    <br />
                    We'll respond as soon as possible.
                  </p>
                  
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Your last name" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (optional)</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="reason">How can we help?</Label>
                      <select 
                        id="reason" 
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                      >
                        <option value="">Select an option</option>
                        <option value="job">I want to apply for a job</option>
                        <option value="info">I have questions about working here</option>
                        <option value="certification">I have questions about certification</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about yourself and the NYC areas you can work in..."
                        rows={4}
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;