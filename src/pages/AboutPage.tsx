import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CheckCircle, Heart, MapPin, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import teamSupport from "@/assets/team-support.png";

const whatMakesUsDifferent = [
  "We value your lived experience",
  "Flexible, community-based placements",
  "Supportive work environment",
  "Competitive pay",
  "Real mentorship and growth",
];

const howWeSupport = [
  "Mental health recovery",
  "Housing resources",
  "Community programs",
  "Daily responsibilities",
  "City services",
];

const promises = [
  "We show up.",
  "We listen.",
  "We walk with you.",
  "Your goals become our goals.",
];

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Rise2Growth - Peer Support Staffing Agency NYC</title>
        <meta 
          name="description" 
          content="Rise2Growth is a staffing agency connecting certified peer specialists with New Yorkers who need support. We place peers in community-based roles where lived experience becomes real impact." 
        />
        <meta 
          name="keywords" 
          content="peer support staffing agency NYC, mental health support, lived experience, peer support NYC, recovery support organization" 
        />
        <link rel="canonical" href="https://rise2growth.org/about" />
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
                  <strong>Rise2Growth is a staffing agency connecting certified peer specialists with New Yorkers who need support.</strong>
                </p>
                <p className="text-muted-foreground mt-4">
                  We place peers in community-based roles where lived experience becomes real impact.
                </p>
              </div>
            </div>
          </section>

          {/* Mission & Why We Exist */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                    Our Mission
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    To help New Yorkers feel seen, supported, and empowered through authentic peer connection.
                  </p>

                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                    Why We Exist
                  </h2>
                  <p className="text-muted-foreground">
                    NYC moves fast.
                    <br />
                    People fall through the cracks.
                    <br />
                    Peer specialists help make sure no one faces it alone.
                  </p>
                </div>
                
                <div>
                  <img 
                    src={teamSupport} 
                    alt="Rise2Growth peer support team"
                    className="w-full rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* What Makes Us Different (For Job Seekers) */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-display font-bold text-foreground">
                    What Makes Us Different (For Job Seekers)
                  </h2>
                </div>
                <ul className="space-y-4">
                  {whatMakesUsDifferent.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <span className="text-lg text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* How We Support New Yorkers */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="h-8 w-8 text-secondary" />
                  <h2 className="text-3xl font-display font-bold text-foreground">
                    How We Support New Yorkers
                  </h2>
                </div>
                <p className="text-muted-foreground mb-8">We help people navigate:</p>
                <ul className="space-y-3">
                  {howWeSupport.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Our Promise */}
          <section className="py-16 bg-primary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-display font-bold text-foreground">
                    Our Promise
                  </h2>
                </div>
                <ul className="space-y-3">
                  {promises.map((item) => (
                    <li key={item} className="text-xl text-foreground">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-display font-bold mb-6">
                See What You Can Help With
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