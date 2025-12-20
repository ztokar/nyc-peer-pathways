import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Briefcase, CheckCircle, MapPin, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import peerMeeting from "@/assets/peer-meeting.png";

const whatWeOffer = [
  { text: "Community-based field work", description: ": real connection, not desk work" },
  { text: "Supportive team culture", description: ": you'll have backup" },
  { text: "Flexible scheduling", description: ": work that fits your life" },
  { text: "Meaningful impact", description: ": your story becomes someone else's hope" },
  { text: "Competitive pay", description: ": based on your experience" },
];

const whoWereLookingFor = [
  "Certified Peer Specialists (NYS), required",
  "Adults 18+",
  "Comfortable sharing lived experience",
  "Reliable with strong boundaries",
  "Ready to travel within NYC",
  "Compassionate and grounded",
];

const jobIncludes = [
  "Meeting peers in the community",
  "1:1 recovery support",
  "Group support facilitation",
  "Daily life navigation",
  "Documentation",
  "Real connection and mentorship",
];

const JobsPage = () => {
  return (
    <>
      <Helmet>
        <title>Peer Specialist Jobs NYC | Rise2Growth Staffing Agency Careers</title>
        <meta 
          name="description" 
          content="Rise2Growth is hiring certified peer specialists across NYC. Your story becomes someone else's hope. Apply for meaningful community-based peer support work." 
        />
        <meta 
          name="keywords" 
          content="Rise2Growth jobs, peer specialist jobs NYC, certified peer specialist careers, peer support employment NYC, mental health peer jobs" 
        />
        <link rel="canonical" href="https://rise2growth.com/jobs" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "Certified Peer Support Specialist",
            "description": "Rise2Growth is hiring certified peer specialists across NYC. Your story becomes someone else's hope through meaningful community-based work.",
            "hiringOrganization": {
              "@type": "EmploymentAgency",
              "name": "Rise2Growth",
              "description": "Staffing agency connecting certified peer specialists with meaningful work across NYC"
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
            "employmentType": ["FULL_TIME", "PART_TIME"]
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
                  <strong>We're hiring certified peer specialists across NYC.</strong>
                </p>
                <p className="text-muted-foreground mt-4">
                  If you're NYS certified and looking for meaningful community-based work, let's talk.
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
                    <li key={item.text} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-foreground">
                        <strong>{item.text}</strong> {item.description}
                      </span>
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
                    src={peerMeeting} 
                    alt="Rise2Growth peer specialist meeting"
                    className="w-full rounded-2xl shadow-xl clip-watermark"
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
                <p className="text-xl text-muted-foreground mb-2">
                  Your story has power.
                </p>
                <p className="text-xl text-muted-foreground mb-2">
                  Your experience matters here.
                </p>
                <p className="text-lg text-foreground font-medium mt-4">
                  You'll be supported while you support others.
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
                  
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" asChild>
                      <Link to="/contact">Apply Now</Link>
                    </Button>
                    <Button size="lg" variant="secondary" asChild>
                      <Link to="/faqs">Read FAQs</Link>
                    </Button>
                  </div>
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
                Send your resume and the areas you can work in.
                <br />
                We'll reach out soon.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Apply Now</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/faqs">Read FAQs</Link>
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

export default JobsPage;