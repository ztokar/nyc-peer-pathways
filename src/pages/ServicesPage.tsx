import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Users, Heart, Target, BookOpen, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import communitySupport from "@/assets/community-support.png";

const services = [
  {
    icon: Users,
    title: "1:1 Peer Support",
    description: "One-on-one conversations that help you feel supported, understood, and not alone.",
  },
  {
    icon: Heart,
    title: "Community Support",
    description: "Help with daily tasks, appointments, routines, and confidence in real-life situations.",
  },
  {
    icon: Target,
    title: "Goal Planning",
    description: "Support with setting goals for wellness, recovery, work, school, or daily life.",
  },
  {
    icon: BookOpen,
    title: "Skill Building",
    description: "Practice life skills like communication, coping skills, organization, and self-advocacy.",
  },
  {
    icon: MapPin,
    title: "Resource Support",
    description: "Help finding mental health services, housing supports, community programs, and benefits information.",
  },
];

const whatMakesUsDifferent = [
  "Lived experience",
  "No pressure",
  "No judgment",
  "Real talk",
  "Real support",
  "Real results",
];

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Rise2Growth - Peer Support Services NYC</title>
        <meta 
          name="description" 
          content="Rise2Growth offers 1:1 peer support, community support, goal planning, skill building, and resource support across all 5 NYC boroughs." 
        />
        <meta 
          name="keywords" 
          content="peer support services NYC, 1:1 peer support, mental health services, recovery support, skill building, goal planning NYC" 
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
                  Our <span className="text-primary">Services</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  <strong>Our peer support services are simple, real, and built around you.</strong>
                </p>
                <p className="text-muted-foreground mt-4">
                  We offer support in-person, in the community, and through flexible meetings across NYC.
                </p>
              </div>
            </div>
          </section>

          {/* Services List */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="grid gap-8">
                  {services.map(({ icon: Icon, title, description }) => (
                    <div 
                      key={title} 
                      className="bg-card rounded-xl p-6 shadow-sm border border-border flex items-start gap-5"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-xl font-display font-bold text-foreground mb-2">
                          {title}
                        </h2>
                        <p className="text-muted-foreground">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Image + What Makes Us Different */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div>
                  <img 
                    src={communitySupport} 
                    alt="Rise2Growth community support session"
                    className="w-full rounded-2xl shadow-xl"
                  />
                </div>
                
                <div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                    What Makes Us Different
                  </h2>
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
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-display font-bold mb-4">
                If you want support, we're here.
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Reach out today to get started.
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
