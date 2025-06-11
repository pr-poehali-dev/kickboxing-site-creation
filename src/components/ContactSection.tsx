import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
            КОНТАКТЫ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Приходите к нам или свяжитесь для записи на тренировку
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Icon name="MapPin" className="text-red-600" size={28} />
                  Адрес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 mb-4">
                  г. Москва, ул. Спортивная, д. 25, стр. 1<br />
                  Спортивный комплекс "Победа", зал №3
                </p>
                <p className="text-gray-600">
                  🚇 Метро "Спортивная" — 5 минут пешком
                  <br />
                  🚗 Бесплатная парковка для учеников
                </p>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon
                    name="Phone"
                    className="text-red-600 mx-auto mb-3"
                    size={32}
                  />
                  <h3 className="font-bold text-gray-900 mb-2">Телефон</h3>
                  <p className="text-lg">+7 (495) 123-45-67</p>
                  <p className="text-sm text-gray-600">Ежедневно 9:00-22:00</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Icon
                    name="Mail"
                    className="text-red-600 mx-auto mb-3"
                    size={32}
                  />
                  <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-lg">info@kickbox.ru</p>
                  <p className="text-sm text-gray-600">
                    Ответим в течение часа
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-red-600 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  🥊 Запишись на пробную тренировку!
                </h3>
                <p className="mb-6 text-red-100">
                  Первое занятие абсолютно бесплатно. Приходи и попробуй!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-red-600 hover:bg-gray-100 font-semibold"
                  >
                    <Icon name="Phone" size={20} className="mr-2" />
                    Позвонить
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-red-600 font-semibold"
                  >
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Написать в WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Icon name="Clock" className="text-red-600" size={28} />
                  Режим работы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Понедельник - Пятница</span>
                    <span className="text-red-600 font-semibold">
                      17:00 - 22:00
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Суббота</span>
                    <span className="text-red-600 font-semibold">
                      10:00 - 16:00
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Воскресенье</span>
                    <span className="text-gray-500">Выходной</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Icon name="Users" className="text-red-600" size={28} />
                  Социальные сети
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="justify-start">
                    <span className="mr-2">📘</span>
                    ВКонтакте
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <span className="mr-2">📸</span>
                    Instagram
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <span className="mr-2">📺</span>
                    YouTube
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <span className="mr-2">💬</span>
                    Telegram
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  Следите за новостями и тренировочными видео
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
