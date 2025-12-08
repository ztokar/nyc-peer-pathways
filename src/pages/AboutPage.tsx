import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Shield, Star, Users, Smile, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import peerSession from "@/assets/peer-session.png";

const values = [
  { icon: Heart, label: "Respect" },
  { icon: Shield, label: "Trust" },
  { icon: Star, label: "Hope" },
  { icon: Users, label: "Recovery" },
  { icon: Smile, label: "Community" },
  { icon: MessageCircle, label: "Empathy" },
];

const teamBrings = [
  "Lived experience",
  "NYC community knowledge",
  "Training and certification",
  "Real compassion",
  "Judgment-free support",
];

const promises = [
  "We walk with you.",
  "We listen.",
  "We support your goals.",
  "We believe in your growth.",
];

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Rise2Growth - Peer-Run Mental Health Support NYC</title>
        <meta 
          name="description" 
          content="Rise2Growth is a peer-run mental health support organization serving all five NYC boroughs. Built on lived experience, trust, and community." 
        />
        <meta 
          name="keywords" 
          content="peer-run organization NYC, mental health support, lived experience, peer support NYC, recovery support organization" 
        />
        <link rel="canonical" href="https://rise2growth.com/about" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  About <span className="text-primary">Rise2Growth</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  <strong>Rise2Growth is built on lived experience, trust, and community.</strong>
                </p>
              </div>
            </div>
          </section>

          {/* Who We Are */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div>
                  <p className="text-lg text-muted-foreground mb-6">
                    We are a <strong>peer-run mental health support organization</strong> serving all five NYC boroughs.
                  </p>
                  <p className="text-muted-foreground mb-8">
                    Our team uses their own recovery stories to support others on their journey.
                  </p>

                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                    Our Mission
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    To help people feel seen, heard, and supported through peer-to-peer connection.
                  </p>

                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                    Why We Exist
                  </h2>
                  <p className="text-muted-foreground">
                    Many people struggle alone.
                    <br />
                    We believe support feels different when it's from someone who understands.
                  </p>
                </div>
                
                <div>
                  <img 
                    src={peerSession} 
                    alt="Rise2Growth peer support session"
                    className="w-full rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                  Our Values
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {values.map(({ icon: Icon, label }) => (
                    <div key={label} className="bg-card rounded-xl p-6 text-center shadow-sm border border-border">
                      <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                      <span className="font-medium text-foreground">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Our Team */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  Our Team
                </h2>
                <p className="text-muted-foreground mb-8">Our peers bring:</p>
                <ul className="space-y-3 mb-12">
                  {teamBrings.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  Who We Serve
                </h2>
                <p className="text-muted-foreground mb-12">
                  Adults across NYC who want support, connection, and a path toward recovery.
                </p>

                <div className="bg-primary/10 rounded-2xl p-8">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                    Our Promise
                  </h2>
                  <ul className="space-y-2">
                    {promises.map((item) => (
                      <li key={item} className="text-lg text-foreground">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-display font-bold mb-6">
                Ready to Connect?
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="outline" className="bg-background text-foreground hover:bg-background/90" asChild>
                  <Link to="/services">View Our Services</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
                  <Link to="/contact">Get Support</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
