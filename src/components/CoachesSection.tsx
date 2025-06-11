import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CoachesSection = () => {
  const coaches = [
    {
      name: "Александр Петров",
      title: "Главный тренер",
      experience: "15 лет",
      achievements: [
        "Мастер спорта России",
        "Чемпион Европы 2015",
        "Тренер года 2020",
      ],
      specialization: "Профессиональная подготовка",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Елена Козлова",
      title: "Тренер по фитнес-кикбоксингу",
      experience: "8 лет",
      achievements: [
        "Кандидат в мастера спорта",
        "Призер чемпионата России",
        "Сертифицированный фитнес-тренер",
      ],
      specialization: "Женский кикбоксинг, фитнес",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0b22d3b2e66?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Дмитрий Волков",
      title: "Тренер по детскому кикбоксингу",
      experience: "10 лет",
      achievements: [
        "Мастер спорта",
        "Чемпион России среди юниоров",
        "Детский психолог",
      ],
      specialization: "Работа с детьми 6-16 лет",
      image:
        "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&h=400&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
            НАШИ ТРЕНЕРЫ
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Команда профессионалов с многолетним опытом и достижениями
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-red-600 text-white">
                  {coach.experience}
                </Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {coach.name}
                </h3>
                <p className="text-red-400 font-semibold mb-4">{coach.title}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                    Специализация
                  </h4>
                  <p className="text-gray-400">{coach.specialization}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                    Достижения
                  </h4>
                  <div className="space-y-2">
                    {coach.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-gray-400"
                      >
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></span>
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 text-lg">
            💪 Все наши тренеры регулярно повышают квалификацию и участвуют в
            семинарах
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;
