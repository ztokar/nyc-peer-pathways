import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Peer support specialists helping each other climb towards success"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 animate-fade-in">
            <span className="text-primary">Peer Support</span> Specialist Jobs in NYC
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Guidance, Mentorship, and Support from Those Who Understand
          </p>
          <p className="text-lg text-white/80 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Join Rise2Growth and make a difference in the lives of others across Manhattan, Brooklyn, Queens, The Bronx, and Staten Island.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" asChild className="text-lg px-8">
              <a href="#careers">View Open Positions</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-foreground">
              <a href="tel:1212-470-7439">Call Us</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Circle Image */}
      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 z-10">
        <div className="relative">
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
            <img
              src={heroImage}
              alt="Peer support community"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
            <span className="text-secondary-foreground font-display font-bold text-center text-sm leading-tight">
              Join<br />Today
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
