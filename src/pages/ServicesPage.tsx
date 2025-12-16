import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Users, Heart, Target, CheckCircle, Clock, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import communityWork from "@/assets/community-work.png";

const howItWorks = [
  "You're paired with individuals who need support",
  "Sessions match their needs (10-20 hours a week)",
  "Support happens in the community: subways, appointments, parks, wherever help is needed",
  "You move at their pace",
];

const whatYoullProvide = [
  "Guidance from someone who has lived it",
  "Help with goals and daily routines",
  "Navigation of NYC systems",
  "Encouragement when life gets heavy",
  "Real connection, not clinical pressure",
];

const whatYoullHelpWith = [
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
        <title>The Work You'll Do | Rise2Growth - Peer Support Services NYC</title>
        <meta 
          name="description" 
          content="As a peer specialist with Rise2Growth, you'll provide flexible, real support grounded in lived experience. Meet people where they are across NYC." 
        />
        <meta 
          name="keywords" 
          content="peer support services NYC, 1:1 peer support, peer specialist job duties, community-based support NYC" 
        />
        <link rel="canonical" href="https://rise2growth.com/services" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  The Work <span className="text-primary">You'll Do</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  <strong>The work you'll do as a peer specialist.</strong>
                </p>
                <p className="text-muted-foreground mt-4">
                  Our peer specialists provide flexible, real support grounded in lived experience.
                  <br />
                  You'll meet people where they are — at home, in the community, or anywhere they need help.
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

                {/* What You'll Provide */}
                <div className="mb-12">
                  <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    What You'll Provide
                  </h3>
                  <ul className="space-y-3">
                    {whatYoullProvide.map((item) => (
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

          {/* Image + What You'll Help With */}
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
                    What You'll Help With
                  </h3>
                  <ul className="space-y-3">
                    {whatYoullHelpWith.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground mt-6">
                    Your work helps reduce isolation and builds confidence for independence.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* This Could Be You CTA */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <Briefcase className="h-10 w-10 mx-auto mb-4 opacity-80" />
              <h2 className="text-3xl font-display font-bold mb-4">
                This Could Be You
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-xl mx-auto">
                If you're certified and ready to use your experience to help others, we want to hear from you.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/jobs">Apply for Open Positions</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link to="/about">Learn More About the Role</Link>
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

export default ServicesPage;