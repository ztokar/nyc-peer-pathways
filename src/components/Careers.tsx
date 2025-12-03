import { Briefcase, MapPin, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const positions = [
  {
    title: "Certified Peer Support Specialist",
    location: "Manhattan, Brooklyn, Queens",
    type: "Full-time / Part-time",
    description: "Support individuals in their mental health recovery journey using your lived experience.",
    requirements: ["NYS Peer Specialist Certification", "Lived experience with mental health recovery", "Strong communication skills"],
  },
  {
    title: "Peer Recovery Coach",
    location: "All NYC Boroughs",
    type: "Full-time",
    description: "Guide individuals through substance use recovery with compassion and understanding.",
    requirements: ["CRPA or equivalent certification", "Minimum 2 years in recovery", "Valid driver's license preferred"],
  },
  {
    title: "Youth Peer Advocate",
    location: "Bronx, Staten Island",
    type: "Part-time",
    description: "Connect with young people ages 13-21 as a mentor and role model.",
    requirements: ["Age 18-30", "Experience working with youth", "Training provided"],
  },
];

const Careers = () => {
  return (
    <section id="careers" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            <span className="text-primary">Join Our Team</span> – Make a Difference
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Are you a certified peer specialist or recovery coach looking for meaningful work? Rise2Growth is hiring compassionate individuals across NYC who want to help others grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {positions.map((position) => (
            <div
              key={position.title}
              className="bg-card rounded-xl p-6 shadow-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground">
                  {position.title}
                </h3>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {position.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {position.type}
                </div>
              </div>

              <p className="text-muted-foreground mb-4 text-sm">{position.description}</p>

              <div className="mb-6">
                <p className="text-sm font-semibold text-foreground mb-2">Requirements:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {position.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <Button asChild className="w-full">
                <a href="#contact">Apply Now</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Why Work With Us */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-6">
            Why Work With Rise2Growth?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <DollarSign className="h-8 w-8 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Competitive Pay</p>
                <p className="text-white/80 text-sm">Earn fair wages for meaningful work</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-8 w-8 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Flexible Hours</p>
                <p className="text-white/80 text-sm">Work schedules that fit your life</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Briefcase className="h-8 w-8 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Training & Growth</p>
                <p className="text-white/80 text-sm">Ongoing professional development</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-8 w-8 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Community Impact</p>
                <p className="text-white/80 text-sm">Make a real difference in NYC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
