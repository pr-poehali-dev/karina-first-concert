import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-light mb-3 text-foreground tracking-wide">
            КАРИНА МИНОР
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground italic font-light">
            Приглашает на свой первый концерт
          </p>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-12"></div>

        <h2 className="text-4xl md:text-5xl font-light text-center mb-12 text-foreground/80">
          Я только начинаю...
        </h2>

        <Card className="bg-card border-border/50 shadow-lg p-8 md:p-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Calendar" size={24} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Дата</p>
                <p className="text-2xl font-medium">15 декабря</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Место</p>
                <p className="text-2xl font-medium">Ресторан «Кобзарь»</p>
                <p className="text-base text-muted-foreground mt-1">ул. Михайлова, 29, корпус 2</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Clock" size={24} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Время</p>
                <p className="text-2xl font-medium">19:00</p>
              </div>
            </div>
          </div>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-lg md:text-xl text-muted-foreground italic font-light max-w-lg mx-auto">
            Погрузитесь в атмосферу первых шагов, надежд и вдохновения.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
