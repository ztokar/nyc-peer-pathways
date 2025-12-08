import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Briefcase, CheckCircle, MapPin, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import teamRooftop from "@/assets/team-rooftop.png";

const whatWeOffer = [
  "Steady work across all 5 boroughs",
  "Supportive team",
  "Flexible schedules",
  "Professional growth",
  "Competitive pay based on experience and budget",
];

const whoWereLookingFor = [
  "Certified as Peer Specialists (NYC or NYS)",
  "Reliable and compassionate",
  "Comfortable sharing lived experience",
  "Ready to support others",
  "Able to work in the community",
];

const jobIncludes = [
  "1:1 support",
  "Community and field work",
  "Documentation",
  "Team meetings",
  "Helping people reach their goals",
];

const JobsPage = () => {
  return (
    <>
      <Helmet>
        <title>Peer Support Specialist Jobs NYC | Rise2Growth Careers</title>
        <meta 
          name="description" 
          content="Join Rise2Growth as a certified peer support specialist. We're hiring across all 5 NYC boroughs. Fair pay, supportive team, flexible schedules." 
        />
        <meta 
          name="keywords" 
          content="peer support specialist job nyc, peer specialist jobs nyc, certified peer support specialist jobs, peer specialist jobs near me, peer recovery specialist jobs, certified peer specialist NYC" 
        />
        <link rel="canonical" href="https://rise2growth.com/jobs" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "Certified Peer Support Specialist",
            "description": "Join our team of certified peer support specialists in NYC",
            "hiringOrganization": {
              "@type": "Organization",
              "name": "Rise2Growth"
            },
            "jobLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "New York City",
                "addressRegion": "NY",
                "addressCountry": "US"
              }
            },
            "employmentType": "FULL_TIME"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  Jobs at <span className="text-primary">Rise2Growth</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  <strong>Join our team of certified peer support specialists.</strong>
                </p>
                <p className="text-muted-foreground mt-4">
                  We hire NYC peers who want to make a real difference.
                </p>
              </div>
            </div>
          </section>

          {/* What We Offer */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                  What We Offer
                </h2>
                <ul className="space-y-4">
                  {whatWeOffer.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <span className="text-lg text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Who We're Looking For */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                    Who We're Looking For
                  </h2>
                  <p className="text-muted-foreground mb-8">People who are:</p>
                  <ul className="space-y-3">
                    {whoWereLookingFor.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <img 
                    src={teamRooftop} 
                    alt="Rise2Growth team"
                    className="w-full rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* What the Job Includes */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                  What the Job Includes
                </h2>
                <ul className="space-y-3">
                  {jobIncludes.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Why Work With Us */}
          <section className="py-16 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                  Why Work With Us
                </h2>
                <p className="text-xl text-muted-foreground mb-4">
                  You get to use your story to support someone else's healing.
                </p>
                <p className="text-lg text-foreground font-medium">
                  Your experience matters here.
                </p>
              </div>
            </div>
          </section>

          {/* Job Details */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                    Certified Peer Support Specialist
                  </h3>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-5 w-5" />
                      <span>All 5 NYC Boroughs</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-5 w-5" />
                      <span>Flexible Schedule</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="h-5 w-5" />
                      <span>Full-Time / Part-Time</span>
                    </div>
                  </div>
                  
                  <Button size="lg" asChild>
                    <Link to="/contact">Apply Today</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Apply CTA */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-display font-bold mb-4">
                Apply Today
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Send us your info.
                <br />
                We'd love to meet you.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Contact Us to Apply</Link>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default JobsPage;
