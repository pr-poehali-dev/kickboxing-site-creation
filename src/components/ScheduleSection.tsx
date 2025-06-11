import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ScheduleSection = () => {
  const schedule = [
    {
      day: "Понедельник",
      sessions: [
        {
          time: "18:00-19:00",
          program: "Начинающие",
          trainer: "Е. Козлова",
          available: 8,
        },
        {
          time: "19:15-20:30",
          program: "Продвинутые",
          trainer: "А. Петров",
          available: 3,
        },
        {
          time: "20:45-22:00",
          program: "Профессионалы",
          trainer: "А. Петров",
          available: 12,
        },
      ],
    },
    {
      day: "Среда",
      sessions: [
        {
          time: "17:00-18:00",
          program: "Детская группа",
          trainer: "Д. Волков",
          available: 5,
        },
        {
          time: "18:15-19:15",
          program: "Начинающие",
          trainer: "Е. Козлова",
          available: 12,
        },
        {
          time: "19:30-20:45",
          program: "Продвинутые",
          trainer: "А. Петров",
          available: 7,
        },
      ],
    },
    {
      day: "Пятница",
      sessions: [
        {
          time: "18:00-19:00",
          program: "Фитнес-кикбоксинг",
          trainer: "Е. Козлова",
          available: 15,
        },
        {
          time: "19:15-20:30",
          program: "Продвинутые",
          trainer: "Д. Волков",
          available: 6,
        },
        {
          time: "20:45-22:00",
          program: "Спарринг",
          trainer: "А. Петров",
          available: 8,
        },
      ],
    },
    {
      day: "Суббота",
      sessions: [
        {
          time: "10:00-11:00",
          program: "Детская группа",
          trainer: "Д. Волков",
          available: 10,
        },
        {
          time: "11:15-12:15",
          program: "Начинающие",
          trainer: "Е. Козлова",
          available: 12,
        },
        {
          time: "12:30-14:00",
          program: "Мастер-класс",
          trainer: "А. Петров",
          available: 20,
        },
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
            РАСПИСАНИЕ ТРЕНИРОВОК
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите удобное время для занятий
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {schedule.map((day, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="bg-red-600 text-white text-center">
                <CardTitle className="text-xl font-bold">{day.day}</CardTitle>
              </CardHeader>

              <CardContent className="p-0">
                {day.sessions.map((session, idx) => (
                  <div
                    key={idx}
                    className="p-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-semibold text-gray-900">
                        {session.time}
                      </div>
                      <Badge
                        variant={
                          session.available > 10
                            ? "secondary"
                            : session.available > 5
                              ? "default"
                              : "destructive"
                        }
                        className="text-xs"
                      >
                        {session.available} мест
                      </Badge>
                    </div>

                    <div className="text-sm text-red-600 font-medium mb-1">
                      {session.program}
                    </div>

                    <div className="text-xs text-gray-500">
                      Тренер: {session.trainer}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="font-bold text-gray-900 mb-2">
                Гибкое расписание
              </h3>
              <p className="text-sm text-gray-600">
                Тренировки проходят 4 дня в неделю в удобное время
              </p>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="font-bold text-gray-900 mb-2">Малые группы</h3>
              <p className="text-sm text-gray-600">
                До 15 человек в группе для максимального внимания к каждому
              </p>
            </CardContent>
          </Card>

          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <div className="text-3xl mb-3">🔥</div>
              <h3 className="font-bold text-gray-900 mb-2">Интенсивность</h3>
              <p className="text-sm text-gray-600">
                60-90 минут эффективной тренировки для максимального результата
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
