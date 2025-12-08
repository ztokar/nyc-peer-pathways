import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CheckCircle, Heart, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import teamRooftop from "@/assets/team-rooftop.png";

const whatWeDo = [
  "1:1 peer support",
  "Community support",
  "Goal planning",
  "Help with daily life skills",
  "Connection to resources",
  "Hope, honesty, and real support",
];

const whoWeHelp = [
  "Mental health challenges",
  "Stress or trauma",
  "Life transitions",
  "Feeling stuck or alone",
];

const whyPeerSupport = [
  "Someone who gets it",
  "No judgment",
  "Real conversation",
  "Practical help",
  "Emotional support",
  "Hope that recovery is possible",
];

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Peer Support Services NYC | Rise2Growth - Recovery Support in All 5 Boroughs</title>
        <meta 
          name="description" 
          content="Rise2Growth offers peer support services in all 5 NYC boroughs. Connect with certified peer specialists who understand your journey. Get real support today." 
        />
        <meta 
          name="keywords" 
          content="peer support NYC, peer support specialist, mental health support NYC, recovery support, peer counselor NYC, certified peer specialist" 
        />
        <link rel="canonical" href="https://rise2growth.com" />
        
        <meta property="og:title" content="Peer Support Services NYC | Rise2Growth" />
        <meta property="og:description" content="Peer support that feels real. Recovery that feels possible. Serving all 5 NYC boroughs." />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Rise2Growth",
            "description": "Peer support services in all 5 NYC boroughs",
            "telephone": "+1-212-470-7439",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "15 Perlman Dr",
              "addressLocality": "Spring Valley",
              "addressRegion": "NY",
              "postalCode": "10977",
              "addressCountry": "US"
            },
            "areaServed": ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative min-h-[80vh] flex items-center">
            <div className="absolute inset-0">
              <img 
                src={teamRooftop} 
                alt="Rise2Growth peer support team in NYC"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                  Peer support that feels <span className="text-primary">real</span>.
                  <br />
                  Recovery that feels <span className="text-secondary">possible</span>.
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8">
                  Rise2Growth offers <strong>peer support services in all 5 NYC boroughs</strong>.
                  <br />
                  Our team is made up of people who have lived experience and understand what you're going through.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Get Support Today</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/jobs">Join Our Team</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* What We Do */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                  What We Do
                </h2>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {whatWeDo.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Who We Help */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  Who We Help
                </h2>
                <p className="text-muted-foreground mb-8">People living with:</p>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {whoWeHelp.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Heart className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Why Peer Support Works */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  Why Peer Support Works
                </h2>
                <p className="text-muted-foreground mb-8">Peer support brings:</p>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {whyPeerSupport.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Looking for a Job CTA */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <Briefcase className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <h2 className="text-3xl font-display font-bold mb-4">
                Looking for a Peer Specialist Job?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-xl mx-auto">
                We hire <strong>certified peer specialists</strong> across NYC.
                <br />
                Fair pay. Real impact. Supportive team.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/jobs">View Open Positions</Link>
              </Button>
            </div>
          </section>

          {/* Get Support CTA */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Get Support Today
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                You don't have to do this alone.
                <br />
                Reach out. We're here for you.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
