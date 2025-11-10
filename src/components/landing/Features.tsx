import { BookCopy, Target, Wallet } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const features = [
  {
    icon: BookCopy,
    title: '+100 Receitas de Panetones Lucrativos',
    description: 'Mais de 100 receitas de panetones gourmet deliciosos e que vendem muito.',
  },
  {
    icon: Target,
    title: 'Tabela de Preços',
    description: 'Não precisa se preocupar com a precificação, nós iremos te ajudar a colocar o preço justo para que tenha lucro.',
  },
  {
    icon: Wallet,
    title: 'Guia para Vender Panetones',
    description: 'Vamos te ensinar o passo a passo das melhores estratégias de vendas para você vender muito nesse Natal.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">
            POR QUE VOCÊ DEVERIA COMPRAR?
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Este combo foi calculadamente criado para o seu sucesso neste Natal:
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, i) => (
            <Card key={i} className="flex flex-col bg-card shadow-sm text-left transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
              <CardHeader className="flex-grow">
                <div className="mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                <CardDescription className="pt-2 text-base text-foreground/70">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
