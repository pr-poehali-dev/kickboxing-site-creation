import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-600 via-red-700 to-orange-600 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-montserrat animate-fade-in">
            СЕКЦИЯ
            <span className="block text-6xl md:text-8xl text-orange-400">
              КИКБОКСИНГА
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-2xl mx-auto leading-relaxed">
            Профессиональные тренировки для всех уровней подготовки. Развивай
            силу, выносливость и боевой дух!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              🥊 ЗАПИСАТЬСЯ НА ТРЕНИРОВКУ
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              📞 УЗНАТЬ ПОДРОБНЕЕ
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">5+</div>
              <div className="text-sm uppercase tracking-wide">лет опыта</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">
                200+
              </div>
              <div className="text-sm uppercase tracking-wide">учеников</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">3</div>
              <div className="text-sm uppercase tracking-wide">
                мастера спорта
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
