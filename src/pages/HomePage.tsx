import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CheckCircle, Heart, Users, Briefcase, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroNyc from "@/assets/hero-nyc.png";

const whatWeDo = [
  "1:1 peer support placements",
  "Group therapy support",
  "Community-based services",
  "Navigation of NYC systems",
  "Goal planning and accountability",
];

const whoWeSupport = [
  "Mental health challenges",
  "Stress or burnout",
  "Housing or job struggles",
  "Life transitions",
  "Isolation",
];

const whyPeerSupport = [
  "Someone who's been there",
  "Someone who understands NYC life",
  "Someone who keeps it real",
  "No judgment",
  "Real progress",
];

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Peer Support Services NYC | Rise2Growth - Recovery Support in All 5 Boroughs</title>
        <meta 
          name="description" 
          content="Rise2Growth is a staffing agency connecting certified peer specialists with meaningful work across NYC. Peer support for real life in New York City." 
        />
        <meta 
          name="keywords" 
          content="peer support NYC, peer support specialist, mental health support NYC, recovery support, peer counselor NYC, certified peer specialist, peer specialist jobs nyc" 
        />
        <link rel="canonical" href="https://rise2growth.org" />
        
        <meta property="og:title" content="Peer Support Services NYC | Rise2Growth" />
        <meta property="og:description" content="Peer support for real life in NYC. Recovery with people who get the NYC grind." />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Rise2Growth",
            "description": "Staffing agency connecting certified peer specialists with meaningful work across NYC",
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
                src={heroNyc} 
                alt="Rise2Growth peer support team in NYC"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                  Peer support for <span className="text-primary">real life</span> in New York City.
                </h1>
                <p className="text-xl text-muted-foreground mb-4">
                  Recovery with people who get the NYC grind.
                </p>
                
                <p className="text-lg text-muted-foreground mb-8">
                  Rise2Growth is a <strong>staffing agency</strong> connecting certified peer specialists with meaningful work across NYC.
                  <br /><br />
                  We help New Yorkers access peer support — and we help <strong>peer specialists build careers</strong> doing what they do best.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/services">Learn About Our Services</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/jobs">View Open Positions</Link>
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

          {/* NYC Life Is Hard */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <Building2 className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <h2 className="text-3xl font-display font-bold mb-4">
                NYC Life Is Hard. You Don't Have To Do It Alone.
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Traffic, rent, noise, pressure — NYC can be a lot.
                <br />
                We walk with people through the chaos, step by step.
              </p>
            </div>
          </section>

          {/* Who We Support */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  Who We Support
                </h2>
                <p className="text-muted-foreground mb-8">Adults 18+ facing:</p>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {whoWeSupport.map((item) => (
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
                <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                  Why Peer Support Works
                </h2>
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

          {/* Looking for Peer Specialist Work CTA */}
          <section className="py-16 bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-4 text-center">
              <Briefcase className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <h2 className="text-3xl font-display font-bold mb-4">
                Looking For Peer Specialist Work?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-xl mx-auto">
                We hire <strong>certified NYS peer specialists</strong> for community-based roles.
              </p>
              <Button size="lg" variant="outline" className="bg-background text-foreground hover:bg-background/90" asChild>
                <Link to="/jobs">View Open Positions</Link>
              </Button>
            </div>
          </section>

          {/* Need Support CTA */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Need Support?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We're here.
                <br />
                One message away.
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