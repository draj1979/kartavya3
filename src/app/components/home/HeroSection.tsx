import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Empowering Small Businesses in the Digital Age
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            We craft bespoke mobile solutions tailored to your unique needs, combining technical expertise with deep business understanding to exceed expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
              Start Your Project
            </Button>
            <Button href="/portfolio" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-700">
              View Our Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
