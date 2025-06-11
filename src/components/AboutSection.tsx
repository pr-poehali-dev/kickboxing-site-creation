import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
            О НАШЕЙ СЕКЦИИ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Мы создаем чемпионов не только в спорте, но и в жизни
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Наша философия
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Кикбоксинг — это не просто спорт, это образ жизни. Мы учим не
              только технике боя, но и дисциплине, самоконтролю и уважению к
              сопернику.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Наша секция работает с 2018 года и за это время подготовила
              множество успешных спортсменов различного уровня — от любителей до
              мастеров спорта.
            </p>

            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Профессиональные тренеры
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Современное оборудование
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Индивидуальный подход
              </Badge>
            </div>
          </div>

          <div className="relative">
            <Card className="bg-white shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏆</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">
                    Наши достижения
                  </h4>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Чемпионы России</span>
                    <span className="font-bold text-red-600">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">
                      Призеры международных турниров
                    </span>
                    <span className="font-bold text-red-600">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Мастера спорта</span>
                    <span className="font-bold text-red-600">8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">
                      Кандидаты в мастера спорта
                    </span>
                    <span className="font-bold text-red-600">25</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
