import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CheckCircle, Heart, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroNyc from "@/assets/hero-nyc.png";

const whatYoullDo = [
  "1:1 peer support",
  "Group therapy support",
  "Community-based services",
  "Help people navigate NYC systems",
  "Goal planning and accountability",
];

const whyPeerWorkMatters = [
  "You've been there.",
  "You know the grind.",
  "Your experience can help someone else find their footing in this city.",
];

const whatWereLookingFor = [
  "NYS Certified Peer Specialists",
  "Adults 18+",
  "Compassionate and grounded",
  "Ready to work in the community",
  "Comfortable sharing lived experience",
];

const whyWorkWithUs = [
  "Flexible, community-based work",
  "Supportive team culture",
  "Competitive pay",
  "Real mentorship",
  "Your story becomes someone else's hope",
];

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Peer Support Specialist Jobs NYC | Rise2Growth - Join Our Team</title>
        <meta 
          name="description" 
          content="Rise2Growth is hiring certified peer specialists for community-based work across NYC. Use your story to help New Yorkers navigate real life." 
        />
        <meta 
          name="keywords" 
          content="peer support specialist job nyc, peer specialist jobs nyc, certified peer support specialist jobs, peer specialist jobs near me, peer recovery specialist jobs, certified peer specialist NYC" 
        />
        <link rel="canonical" href="https://rise2growth.com" />
        
        <meta property="og:title" content="Peer Support Specialist Jobs NYC | Rise2Growth" />
        <meta property="og:description" content="Use your story to help New Yorkers navigate real life. We're hiring certified peer specialists." />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Rise2Growth",
            "description": "Staffing agency hiring certified peer specialists for community-based work across NYC",
            "telephone": "+1-212-470-7439",
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
                  Peer support work that actually <span className="text-primary">means something.</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-4">
                  Use your story to help New Yorkers navigate real life.
                </p>
                
                <p className="text-lg text-muted-foreground mb-8">
                  Rise2Growth is a <strong>staffing agency</strong> hiring certified peer specialists for community-based work across NYC.
                  <br /><br />
                  If you're certified and looking for meaningful peer work, we want to meet you.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/jobs">See Open Positions</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/about">Learn More About Working With Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* What You'll Do */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                  What You'll Do
                </h2>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {whatYoullDo.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Why Peer Work Matters */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <Heart className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <h2 className="text-3xl font-display font-bold mb-6">
                Why Peer Work Matters
              </h2>
              {whyPeerWorkMatters.map((item) => (
                <p key={item} className="text-xl opacity-90 max-w-2xl mx-auto">
                  {item}
                </p>
              ))}
            </div>
          </section>

          {/* What We're Looking For */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  What We're Looking For
                </h2>
                <p className="text-muted-foreground mb-8">Certified peer specialists who are:</p>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {whatWereLookingFor.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Why Work With Rise2Growth */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                  Why Work With Rise2Growth?
                </h2>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {whyWorkWithUs.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Ready to Make an Impact CTA */}
          <section className="py-16 bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-4 text-center">
              <Briefcase className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <h2 className="text-3xl font-display font-bold mb-4">
                Ready to Make an Impact?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-xl mx-auto">
                We're hiring now.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="outline" className="bg-background text-foreground hover:bg-background/90" asChild>
                  <Link to="/jobs">See Open Positions</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
                  <Link to="/about">Learn More About Working With Us</Link>
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

export default HomePage;