import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CheckCircle, Heart, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import teamSupport from "@/assets/team-support.png";

const whatMakesUsDifferent = [
  { text: "We value your lived experience", description: ": it's not a side note, it's your superpower" },
  { text: "Flexible placements", description: ": community-based work that fits your life" },
  { text: "Supportive culture", description: ": you're not alone in this work" },
  { text: "Competitive pay", description: ": based on your experience" },
  { text: "Real growth", description: ": mentorship and opportunities to develop" },
];

const whatYoullHelpWith = [
  "Mental health recovery",
  "Housing resources",
  "Community programs",
  "Daily responsibilities",
  "City services",
];

const promises = [
  "We show up for our team.",
  "We listen.",
  "We support your growth.",
  "Your success is our success.",
];

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Rise2Growth - Peer Specialist Staffing Agency NYC</title>
        <meta 
          name="description" 
          content="We're a staffing agency built for peer specialists. We connect certified peers with New Yorkers who need support and create careers where lived experience becomes real impact." 
        />
        <meta 
          name="keywords" 
          content="peer support staffing agency NYC, peer specialist jobs, lived experience, peer support NYC, recovery support organization" 
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
                  <strong>We're a staffing agency built for peer specialists.</strong>
                </p>
                <p className="text-muted-foreground mt-4">
                  We connect certified peers with New Yorkers who need support, and we create careers where lived experience becomes real impact.
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
                    To build a network of peer specialists who help New Yorkers feel seen, supported, and empowered.
                  </p>

                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                    Why We Exist
                  </h2>
                  <p className="text-muted-foreground mb-2">
                    NYC moves fast.
                  </p>
                  <p className="text-muted-foreground mb-2">
                    People need support.
                  </p>
                  <p className="text-muted-foreground mb-2">
                    Peer specialists make the difference.
                  </p>
                  <p className="text-foreground font-medium mt-4">
                    We exist to help you build a career doing work that matters.
                  </p>
                </div>
                
                <div>
                  <img 
                    src={teamSupport} 
                    alt="Rise2Growth peer support team"
                    className="w-full rounded-2xl shadow-xl clip-watermark"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* What Makes Us Different (For You) */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-display font-bold text-foreground">
                    What Makes Us Different (For You)
                  </h2>
                </div>
                <ul className="space-y-4">
                  {whatMakesUsDifferent.map((item) => (
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

          {/* What You'll Help With */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="h-8 w-8 text-secondary" />
                  <h2 className="text-3xl font-display font-bold text-foreground">
                    What You'll Help With
                  </h2>
                </div>
                <p className="text-muted-foreground mb-8">You'll support New Yorkers navigating:</p>
                <ul className="space-y-3">
                  {whatYoullHelpWith.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Our Promise to You */}
          <section className="py-16 bg-primary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-display font-bold text-foreground">
                    Our Promise to You
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
                Ready to Join Our Team?
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="outline" className="bg-background text-foreground hover:bg-background/90" asChild>
                  <Link to="/contact">Apply Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
                  <Link to="/services">See What the Job Looks Like</Link>
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