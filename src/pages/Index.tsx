import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import CoachesSection from "@/components/CoachesSection";
import ScheduleSection from "@/components/ScheduleSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section id="hero">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="programs">
        <ProgramsSection />
      </section>

      <section id="coaches">
        <CoachesSection />
      </section>

      <section id="schedule">
        <ScheduleSection />
      </section>

      <section id="contacts">
        <ContactSection />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">🥊</span>
            </div>
            <span className="font-bold text-xl text-white font-montserrat">
              СЕКЦИЯ КИКБОКСИНГА
            </span>
          </div>
          <p className="text-sm mb-4">
            © 2024 Секция кикбоксинга. Все права защищены.
          </p>
          <p className="text-xs text-gray-500">
            Развивай силу, выносливость и боевой дух вместе с нами! 💪
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
