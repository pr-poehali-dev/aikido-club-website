import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedHall, setSelectedHall] = useState<string>('all');
  const [bookingDialog, setBookingDialog] = useState(false);
  const [selectedClass, setSelectedClass] = useState<any>(null);

  const schedule = [
    { id: 1, day: 'Понедельник', time: '18:00 - 19:30', level: 'Начинающие', hall: 'Зал 1', trainer: 'Сергей Иванов', spots: 5 },
    { id: 2, day: 'Понедельник', time: '19:30 - 21:00', level: 'Продвинутые', hall: 'Зал 1', trainer: 'Анна Петрова', spots: 3 },
    { id: 3, day: 'Вторник', time: '17:00 - 18:30', level: 'Дети 8-12', hall: 'Зал 2', trainer: 'Михаил Смирнов', spots: 8 },
    { id: 4, day: 'Среда', time: '18:00 - 19:30', level: 'Средний', hall: 'Зал 1', trainer: 'Сергей Иванов', spots: 6 },
    { id: 5, day: 'Четверг', time: '19:00 - 20:30', level: 'Начинающие', hall: 'Зал 2', trainer: 'Анна Петрова', spots: 4 },
    { id: 6, day: 'Пятница', time: '18:00 - 19:30', level: 'Продвинутые', hall: 'Зал 1', trainer: 'Сергей Иванов', spots: 2 },
    { id: 7, day: 'Суббота', time: '10:00 - 11:30', level: 'Дети 6-10', hall: 'Зал 2', trainer: 'Михаил Смирнов', spots: 10 },
    { id: 8, day: 'Суббота', time: '12:00 - 13:30', level: 'Все уровни', hall: 'Зал 1', trainer: 'Анна Петрова', spots: 7 },
  ];

  const trainers = [
    {
      name: 'Сергей Иванов',
      rank: '5 дан',
      experience: '20 лет',
      specialization: 'Традиционное айкидо',
      image: 'https://cdn.poehali.dev/projects/c0ada27e-453c-4fd8-b119-70610a84d4c7/files/594a081c-4309-42e9-9609-ac7e2ef9e489.jpg'
    },
    {
      name: 'Анна Петрова',
      rank: '4 дан',
      experience: '15 лет',
      specialization: 'Айкидо для женщин',
      image: 'https://cdn.poehali.dev/projects/c0ada27e-453c-4fd8-b119-70610a84d4c7/files/594a081c-4309-42e9-9609-ac7e2ef9e489.jpg'
    },
    {
      name: 'Михаил Смирнов',
      rank: '3 дан',
      experience: '12 лет',
      specialization: 'Детское айкидо',
      image: 'https://cdn.poehali.dev/projects/c0ada27e-453c-4fd8-b119-70610a84d4c7/files/594a081c-4309-42e9-9609-ac7e2ef9e489.jpg'
    }
  ];

  const prices = [
    {
      name: 'Пробное занятие',
      price: 'Бесплатно',
      features: ['1 тренировка', 'Знакомство с клубом', 'Консультация тренера']
    },
    {
      name: 'Разовое посещение',
      price: '800 ₽',
      features: ['1 тренировка', 'Доступ в раздевалку', 'Без ограничений по залам']
    },
    {
      name: 'Абонемент 8 занятий',
      price: '5 600 ₽',
      features: ['8 тренировок', 'Действует 30 дней', 'Все залы', 'Скидка 12%'],
      popular: true
    },
    {
      name: 'Безлимит',
      price: '12 000 ₽',
      features: ['Неограниченно', 'Действует 30 дней', 'Все залы и группы', 'Участие в семинарах']
    }
  ];

  const news = [
    {
      title: 'Открытие нового зала',
      date: '15 октября 2025',
      description: 'Мы рады объявить об открытии второго зала с улучшенным покрытием и оборудованием'
    },
    {
      title: 'Семинар с мастером из Японии',
      date: '20 ноября 2025',
      description: 'Приглашаем на специальный семинар с сенсеем Ямада Кенджи, 7 дан'
    },
    {
      title: 'Детский турнир',
      date: '5 декабря 2025',
      description: 'Проводим внутренний турнир для юных айкидок. Участие бесплатное'
    }
  ];

  const gallery = [
    'https://cdn.poehali.dev/projects/c0ada27e-453c-4fd8-b119-70610a84d4c7/files/bf818fe9-a6b4-4a9f-959d-5dd8d761ed72.jpg',
    'https://cdn.poehali.dev/projects/c0ada27e-453c-4fd8-b119-70610a84d4c7/files/db1ef61b-2e99-46e9-90e1-774d027d2b95.jpg',
    'https://cdn.poehali.dev/projects/c0ada27e-453c-4fd8-b119-70610a84d4c7/files/bf818fe9-a6b4-4a9f-959d-5dd8d761ed72.jpg',
    'https://cdn.poehali.dev/projects/c0ada27e-453c-4fd8-b119-70610a84d4c7/files/db1ef61b-2e99-46e9-90e1-774d027d2b95.jpg',
  ];

  const filteredSchedule = schedule.filter(item => {
    const levelMatch = selectedLevel === 'all' || item.level === selectedLevel;
    const hallMatch = selectedHall === 'all' || item.hall === selectedHall;
    return levelMatch && hallMatch;
  });

  const handleBooking = (classItem: any) => {
    setSelectedClass(classItem);
    setBookingDialog(true);
  };

  const confirmBooking = () => {
    toast.success(`Вы записаны на ${selectedClass.day} в ${selectedClass.time}!`);
    setBookingDialog(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-heading font-bold text-primary-foreground">АЙКИДО КЛУБ</h1>
          <div className="hidden md:flex gap-6">
            <a href="#schedule" className="text-primary-foreground hover:text-secondary transition-colors">Расписание</a>
            <a href="#trainers" className="text-primary-foreground hover:text-secondary transition-colors">Тренеры</a>
            <a href="#prices" className="text-primary-foreground hover:text-secondary transition-colors">Цены</a>
            <a href="#news" className="text-primary-foreground hover:text-secondary transition-colors">Новости</a>
            <a href="#gallery" className="text-primary-foreground hover:text-secondary transition-colors">Галерея</a>
            <a href="#contacts" className="text-primary-foreground hover:text-secondary transition-colors">Контакты</a>
          </div>
          <Button variant="secondary" size="sm">
            <Icon name="Phone" size={16} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://cdn.poehali.dev/projects/c0ada27e-453c-4fd8-b119-70610a84d4c7/files/bf818fe9-a6b4-4a9f-959d-5dd8d761ed72.jpg" 
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
            Путь Гармонии
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Традиционное айкидо для всех возрастов. Развитие тела, духа и разума
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на пробное
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Расписание</h2>
            <p className="text-lg text-muted-foreground">Выберите удобное время и запишитесь онлайн</p>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Уровень" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все уровни</SelectItem>
                <SelectItem value="Начинающие">Начинающие</SelectItem>
                <SelectItem value="Средний">Средний</SelectItem>
                <SelectItem value="Продвинутые">Продвинутые</SelectItem>
                <SelectItem value="Дети 6-10">Дети 6-10</SelectItem>
                <SelectItem value="Дети 8-12">Дети 8-12</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedHall} onValueChange={setSelectedHall}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Зал" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все залы</SelectItem>
                <SelectItem value="Зал 1">Зал 1</SelectItem>
                <SelectItem value="Зал 2">Зал 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSchedule.map((item, index) => (
              <Card key={item.id} className="hover:shadow-lg transition-all hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-heading">{item.day}</CardTitle>
                    <Badge variant={item.spots > 5 ? "default" : "secondary"}>
                      {item.spots} мест
                    </Badge>
                  </div>
                  <CardDescription className="text-2xl font-bold text-primary">{item.time}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Award" size={16} className="text-secondary" />
                      <span>{item.level}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="MapPin" size={16} className="text-secondary" />
                      <span>{item.hall}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="User" size={16} className="text-secondary" />
                      <span>{item.trainer}</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    onClick={() => handleBooking(item)}
                    disabled={item.spots === 0}
                  >
                    <Icon name="Calendar" size={16} className="mr-2" />
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="trainers" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Наши тренеры</h2>
            <p className="text-lg text-muted-foreground">Опытные мастера с международными сертификатами</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">{trainer.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-secondary">{trainer.rank}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={18} className="text-muted-foreground" />
                      <span className="text-sm">Опыт: {trainer.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Target" size={18} className="text-muted-foreground" />
                      <span className="text-sm">{trainer.specialization}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Цены</h2>
            <p className="text-lg text-muted-foreground">Выберите подходящий тариф</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {prices.map((price, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-xl transition-all hover:-translate-y-2 animate-scale-in ${
                  price.popular ? 'border-secondary border-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {price.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-secondary">Популярно</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl font-heading">{price.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-primary mt-2">{price.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {price.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={price.popular ? "default" : "outline"}>
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Новости</h2>
            <p className="text-lg text-muted-foreground">События и анонсы клуба</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Icon name="Calendar" size={16} />
                    <span>{item.date}</span>
                  </div>
                  <CardTitle className="text-xl font-heading">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                  <Button variant="link" className="mt-4 px-0 text-secondary">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Галерея</h2>
            <p className="text-lg text-muted-foreground">Моменты тренировок и мероприятий</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.map((image, index) => (
              <div 
                key={index} 
                className="aspect-square overflow-hidden rounded-lg hover:shadow-xl transition-all animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={image} 
                  alt={`Галерея ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground">Приходите к нам на тренировку</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="font-heading">Наши залы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Зал 1 (Основной)</h4>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Icon name="MapPin" size={16} className="mt-0.5" />
                    <span>ул. Спортивная, д. 15, Москва</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Зал 2 (Детский)</h4>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Icon name="MapPin" size={16} className="mt-0.5" />
                    <span>ул. Ленина, д. 42, Москва</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="font-heading">Связаться с нами</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-secondary" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-secondary" />
                  <span>info@aikido-club.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={20} className="text-secondary" />
                  <span>Ежедневно 10:00 - 22:00</span>
                </div>
                <div className="flex gap-3 mt-6">
                  <Button size="icon" variant="outline">
                    <Icon name="Facebook" size={20} />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Icon name="Youtube" size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2025 Айкидо Клуб. Все права защищены.</p>
        </div>
      </footer>

      <Dialog open={bookingDialog} onOpenChange={setBookingDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-heading">Запись на тренировку</DialogTitle>
            <DialogDescription>
              Вы записываетесь на {selectedClass?.day} в {selectedClass?.time}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <p className="text-sm"><strong>Уровень:</strong> {selectedClass?.level}</p>
              <p className="text-sm"><strong>Зал:</strong> {selectedClass?.hall}</p>
              <p className="text-sm"><strong>Тренер:</strong> {selectedClass?.trainer}</p>
              <p className="text-sm"><strong>Свободных мест:</strong> {selectedClass?.spots}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button className="flex-1" onClick={confirmBooking}>
              Подтвердить запись
            </Button>
            <Button variant="outline" onClick={() => setBookingDialog(false)}>
              Отмена
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
