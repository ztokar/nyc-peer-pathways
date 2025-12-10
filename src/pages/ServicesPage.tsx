import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Users, Heart, Target, Navigation, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import communityWork from "@/assets/community-work.png";

const howItWorks = [
  "Paired with a dedicated peer specialist",
  "Sessions match individual needs (10–20 hours a week)",
  "Support happens in the community — subways, appointments, parks, wherever help is needed",
  "We move at their pace",
];

const keyBenefits = [
  "Guidance from someone who has lived it",
  "Help with goals and daily routines",
  "Navigation of NYC systems",
  "Encouragement when life gets heavy",
  "Real connection, not clinical pressure",
];

const whatWeHelpWith = [
  "Recovery steps",
  "Housing and benefits navigation",
  "Appointments and community programs",
  "Job or school goals",
  "Stress, anxiety, and daily challenges",
  "Group therapy participation",
];

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Rise2Growth - Peer Support Services NYC</title>
        <meta 
          name="description" 
          content="Peer support built for New Yorkers. Flexible, real, and grounded in lived experience. Adult peer support services meeting people where they are." 
        />
        <meta 
          name="keywords" 
          content="peer support services NYC, 1:1 peer support, mental health services, recovery support, community-based support NYC" 
        />
        <link rel="canonical" href="https://rise2growth.org/services" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  Our <span className="text-primary">Services</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  <strong>Peer support built for New Yorkers.</strong>
                </p>
                <p className="text-muted-foreground mt-4">
                  Flexible, real, and grounded in lived experience.
                  <br />
                  Our services meet people where they are — at home, in the community, or anywhere they need support.
                </p>
              </div>
            </div>
          </section>

          {/* Adult Peer Support */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <Users className="h-10 w-10 text-primary" />
                  <h2 className="text-3xl font-display font-bold text-foreground">
                    Adult Peer Support (Ages 18+)
                  </h2>
                </div>

                {/* How It Works */}
                <div className="mb-12">
                  <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-secondary" />
                    How It Works
                  </h3>
                  <ul className="space-y-3">
                    {howItWorks.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Benefits */}
                <div className="mb-12">
                  <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    {keyBenefits.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Image + What We Help With */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div>
                  <img 
                    src={communityWork} 
                    alt="Rise2Growth community support in NYC"
                    className="w-full rounded-2xl shadow-xl"
                  />
                </div>
                
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
                    <Target className="h-6 w-6 text-secondary" />
                    What We Help With
                  </h3>
                  <ul className="space-y-3">
                    {whatWeHelpWith.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground mt-6">
                    Peer support helps reduce isolation and builds confidence for independence.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <Navigation className="h-10 w-10 mx-auto mb-4 opacity-80" />
              <h2 className="text-3xl font-display font-bold mb-4">
                Learn More About Our Approach
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-xl mx-auto">
                Reach out today to learn how peer support can help.
              </p>
              <Button size="lg" variant="secondary" asChild>
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

export default ServicesPage;