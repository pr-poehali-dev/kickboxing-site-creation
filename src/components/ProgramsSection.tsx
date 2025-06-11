import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProgramsSection = () => {
  const programs = [
    {
      title: "Начинающие",
      description:
        "Идеально для новичков. Изучаем основы техники и базовую физическую подготовку",
      duration: "60 мин",
      level: "Начальный",
      price: "3000₽/мес",
      features: [
        "Базовая техника",
        "Общая физподготовка",
        "Растяжка",
        "Основы самообороны",
      ],
      color: "bg-green-500",
    },
    {
      title: "Продвинутые",
      description:
        "Для тех, кто освоил базу. Сложные комбинации и спарринг-подготовка",
      duration: "75 мин",
      level: "Средний",
      price: "4000₽/мес",
      features: [
        "Комбинации ударов",
        "Работа в парах",
        "Спарринг",
        "Тактическая подготовка",
      ],
      color: "bg-blue-500",
    },
    {
      title: "Профессионалы",
      description:
        "Подготовка к соревнованиям. Интенсивные тренировки и индивидуальная работа",
      duration: "90 мин",
      level: "Высокий",
      price: "6000₽/мес",
      features: [
        "Соревновательная подготовка",
        "Индивидуальные тренировки",
        "Психологическая подготовка",
        "Диетология",
      ],
      color: "bg-red-500",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
            ТРЕНИРОВОЧНЫЕ ПРОГРАММЫ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите программу, соответствующую вашему уровню подготовки
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 ${program.color}`}
              ></div>

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  {program.description}
                </CardDescription>

                <div className="flex justify-center gap-2 mb-4">
                  <Badge variant="outline">{program.duration}</Badge>
                  <Badge variant="outline">{program.level}</Badge>
                </div>

                <div className="text-3xl font-bold text-red-600">
                  {program.price}
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold">
                  Записаться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="inline-block bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                🎯 Пробная тренировка
              </h3>
              <p className="text-gray-700 mb-4">
                Не уверены в выборе программы? Приходите на бесплатную пробную
                тренировку!
              </p>
              <Button
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white"
              >
                Записаться на пробную
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
