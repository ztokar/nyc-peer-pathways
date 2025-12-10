import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, ExternalLink, Award, RefreshCw, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import resourcesHero from "@/assets/resources-hero.png";

const certificationCovers = [
  "Lived experience and recovery principles",
  "Boundaries and ethics",
  "Trauma-informed care",
  "Communication skills",
  "Documentation and professionalism",
];

const ResourcesPage = () => {
  return (
    <>
      <Helmet>
        <title>Resources | Rise2Growth - Peer Specialist Certification NYC</title>
        <meta 
          name="description" 
          content="Everything you need to know about becoming a peer specialist in NYC. Whether you're exploring certification or already certified and job-hunting, here's what you need." 
        />
        <meta 
          name="keywords" 
          content="peer specialist certification NYC, how to become peer specialist, NYS peer certification, peer support training NYC" 
        />
        <link rel="canonical" href="https://rise2growth.org/resources" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  <span className="text-primary">Resources</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  <strong>Everything you need to know about becoming a peer specialist in NYC.</strong>
                </p>
                <p className="text-muted-foreground mt-4">
                  Whether you're exploring certification or already certified and job-hunting, here's what you need.
                </p>
              </div>
            </div>
          </section>

          {/* Getting Certified */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="h-8 w-8 text-primary" />
                    <h2 className="text-3xl font-display font-bold text-foreground">
                      Getting Certified in New York
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-8">
                    To work as a peer specialist in NYS, you need to complete certification training.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-card rounded-xl p-6 border border-border">
                      <h3 className="font-display font-bold text-foreground mb-2">
                        New York Peer Specialist Certification Board (NYPSCB)
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        The official certifying body for peer specialists in New York.
                      </p>
                      <a 
                        href="https://nypscb.org/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:underline"
                      >
                        nypscb.org <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>

                    <div className="bg-card rounded-xl p-6 border border-border">
                      <h3 className="font-display font-bold text-foreground mb-2">
                        Academy of Peer Services
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        Offers training programs for aspiring peer specialists.
                      </p>
                      <a 
                        href="https://academyofpeerservices.org/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:underline"
                      >
                        academyofpeerservices.org <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div>
                  <img 
                    src={resourcesHero} 
                    alt="Peer specialist resources"
                    className="w-full rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* What Certification Covers */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                  What Certification Covers
                </h2>
                <ul className="space-y-3 mb-8">
                  {certificationCovers.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground">
                  Training typically takes <strong>4–6 weeks</strong> and includes exams and practice hours.
                </p>
              </div>
            </div>
          </section>

          {/* Renewing Your Certification */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <RefreshCw className="h-8 w-8 text-secondary" />
                  <h2 className="text-3xl font-display font-bold text-foreground">
                    Renewing Your Certification
                  </h2>
                </div>
                <p className="text-muted-foreground">
                  NYS peer certification requires <strong>renewal every 2 years</strong>.
                  <br />
                  You'll need continuing education credits to stay current.
                </p>
              </div>
            </div>
          </section>

          {/* NYC-Specific Resources */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <MapPin className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-display font-bold text-foreground">
                    NYC-Specific Resources
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h3 className="font-display font-bold text-foreground mb-2">
                      NYC Department of Health and Mental Hygiene
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Mental health services and peer support information.
                    </p>
                    <a 
                      href="https://www.nyc.gov/health" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      nyc.gov/health <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h3 className="font-display font-bold text-foreground mb-2">
                      NAMI NYC (National Alliance on Mental Illness)
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Peer-led support groups and advocacy.
                    </p>
                    <a 
                      href="https://naminycmetro.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      naminycmetro.org <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Become a Peer Specialist */}
          <section className="py-16 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                  Why Become a Peer Specialist?
                </h2>
                <p className="text-xl text-muted-foreground mb-2">
                  Your story has power.
                </p>
                <p className="text-xl text-muted-foreground mb-4">
                  Your recovery can light the way for someone else.
                </p>
                <p className="text-lg text-foreground">
                  Peer work is meaningful, flexible, and grounded in real human connection.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-display font-bold mb-4">
                Ready to Start Working?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                If you're certified and ready to join a team that values what you bring, we'd love to hear from you.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Apply Now</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Contact Us</Link>
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

export default ResourcesPage;