import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [selectedTable, setSelectedTable] = useState<number | null>(null);

  const salesData = [
    { month: 'Янв', revenue: 450000, orders: 234 },
    { month: 'Фев', revenue: 520000, orders: 267 },
    { month: 'Мар', revenue: 680000, orders: 312 },
    { month: 'Апр', revenue: 590000, orders: 289 },
    { month: 'Май', revenue: 750000, orders: 356 },
    { month: 'Июн', revenue: 820000, orders: 398 },
  ];

  const popularDishes = [
    { name: 'Трюфельная паста', orders: 156, revenue: 234000, trend: '+12%', image: '🍝' },
    { name: 'Стейк рибай', orders: 142, revenue: 426000, trend: '+8%', image: '🥩' },
    { name: 'Морской окунь', orders: 128, revenue: 320000, trend: '+15%', image: '🐟' },
    { name: 'Утиная грудка', orders: 98, revenue: 245000, trend: '+5%', image: '🦆' },
  ];

  const staff = [
    { name: 'Александр Петров', role: 'Шеф-повар', shift: 'Утро', status: 'active' },
    { name: 'Мария Иванова', role: 'Су-шеф', shift: 'Утро', status: 'active' },
    { name: 'Дмитрий Смирнов', role: 'Сомелье', shift: 'Вечер', status: 'scheduled' },
    { name: 'Елена Кузнецова', role: 'Официант', shift: 'Вечер', status: 'scheduled' },
  ];

  const tables = [
    { id: 1, capacity: 2, status: 'available', time: null },
    { id: 2, capacity: 4, status: 'occupied', time: '19:30' },
    { id: 3, capacity: 4, status: 'reserved', time: '20:00' },
    { id: 4, capacity: 6, status: 'available', time: null },
    { id: 5, capacity: 2, status: 'occupied', time: '19:00' },
    { id: 6, capacity: 8, status: 'reserved', time: '21:00' },
    { id: 7, capacity: 4, status: 'available', time: null },
    { id: 8, capacity: 2, status: 'available', time: null },
  ];

  const maxRevenue = Math.max(...salesData.map(d => d.revenue));

  const getTableColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-100 border-green-300 hover:bg-green-200';
      case 'occupied': return 'bg-red-100 border-red-300';
      case 'reserved': return 'bg-amber-100 border-amber-300';
      default: return 'bg-gray-100 border-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-primary mb-1">Le Gourmet</h1>
              <p className="text-sm text-muted-foreground">Система управления рестораном</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Icon name="Bell" size={16} className="mr-2" />
                Уведомления
              </Button>
              <Avatar>
                <AvatarFallback>АД</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <Tabs defaultValue="analytics" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl">
            <TabsTrigger value="analytics">
              <Icon name="BarChart3" size={16} className="mr-2" />
              Аналитика
            </TabsTrigger>
            <TabsTrigger value="bookings">
              <Icon name="Calendar" size={16} className="mr-2" />
              Бронирование
            </TabsTrigger>
            <TabsTrigger value="staff">
              <Icon name="Users" size={16} className="mr-2" />
              Персонал
            </TabsTrigger>
            <TabsTrigger value="menu">
              <Icon name="UtensilsCrossed" size={16} className="mr-2" />
              Меню
            </TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Выручка за месяц</CardTitle>
                  <Icon name="TrendingUp" className="text-accent" size={20} />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">820 000 ₽</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="text-green-600">+9.2%</span> к прошлому месяцу
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Средний чек</CardTitle>
                  <Icon name="DollarSign" className="text-accent" size={20} />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">2 060 ₽</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="text-green-600">+4.1%</span> к прошлому месяцу
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Заказов</CardTitle>
                  <Icon name="ShoppingBag" className="text-accent" size={20} />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">398</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="text-green-600">+5.8%</span> к прошлому месяцу
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Динамика продаж</CardTitle>
                  <CardDescription>Выручка за последние 6 месяцев</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {salesData.map((data, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium">{data.month}</span>
                          <span className="text-muted-foreground">
                            {data.revenue.toLocaleString('ru-RU')} ₽
                          </span>
                        </div>
                        <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                          <div
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
                            style={{ width: `${(data.revenue / maxRevenue) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Популярные блюда</CardTitle>
                  <CardDescription>Топ-4 блюда по количеству заказов</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {popularDishes.map((dish, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="text-4xl">{dish.image}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-medium text-sm truncate">{dish.name}</p>
                            <Badge variant="secondary" className="ml-2">{dish.trend}</Badge>
                          </div>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>{dish.orders} заказов</span>
                            <span>{dish.revenue.toLocaleString('ru-RU')} ₽</span>
                          </div>
                          <Progress value={(dish.orders / 156) * 100} className="h-1.5 mt-2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="bookings" className="animate-fade-in">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>План зала</CardTitle>
                    <CardDescription>Текущая загрузка столиков</CardDescription>
                  </div>
                  <Button>
                    <Icon name="Plus" size={16} className="mr-2" />
                    Новое бронирование
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {tables.map((table) => (
                    <button
                      key={table.id}
                      onClick={() => setSelectedTable(table.id)}
                      className={`p-6 rounded-xl border-2 transition-all ${getTableColor(table.status)} ${
                        selectedTable === table.id ? 'ring-2 ring-primary scale-105' : ''
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-2xl font-bold mb-1">Стол {table.id}</div>
                        <div className="text-sm text-muted-foreground mb-2">
                          <Icon name="Users" size={14} className="inline mr-1" />
                          {table.capacity} мест
                        </div>
                        {table.time && (
                          <div className="text-xs font-medium">
                            <Icon name="Clock" size={12} className="inline mr-1" />
                            {table.time}
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                <Separator className="my-6" />

                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-green-200 border-2 border-green-300" />
                    <span className="text-sm">Свободен</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-amber-200 border-2 border-amber-300" />
                    <span className="text-sm">Забронирован</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-red-200 border-2 border-red-300" />
                    <span className="text-sm">Занят</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="staff" className="animate-fade-in">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Управление персоналом</CardTitle>
                    <CardDescription>Расписание смен на сегодня</CardDescription>
                  </div>
                  <Button>
                    <Icon name="UserPlus" size={16} className="mr-2" />
                    Добавить сотрудника
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {staff.map((member, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg border hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{member.name}</p>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-sm font-medium">{member.shift}</p>
                          <Badge
                            variant={member.status === 'active' ? 'default' : 'secondary'}
                            className="mt-1"
                          >
                            {member.status === 'active' ? 'На смене' : 'По графику'}
                          </Badge>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Icon name="MoreVertical" size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="menu" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularDishes.map((dish, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="aspect-video bg-gradient-to-br from-muted to-accent/20 flex items-center justify-center">
                    <div className="text-8xl">{dish.image}</div>
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{dish.name}</CardTitle>
                      <Badge variant="outline">{dish.trend}</Badge>
                    </div>
                    <CardDescription>
                      {dish.orders} заказов • {(dish.revenue / dish.orders).toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Button className="flex-1">
                        <Icon name="Edit" size={16} className="mr-2" />
                        Редактировать
                      </Button>
                      <Button variant="outline" size="icon">
                        <Icon name="Eye" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Card className="border-dashed hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="flex flex-col items-center justify-center h-full min-h-[300px]">
                  <Button variant="ghost" size="lg" className="flex-col h-auto py-8">
                    <Icon name="Plus" size={48} className="mb-4 text-muted-foreground" />
                    <span className="text-lg">Добавить блюдо</span>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
