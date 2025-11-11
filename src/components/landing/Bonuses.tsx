"use client";

import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const bonuses = [
  {
    image: '/images/regalo1.webp',
    title: '15 Receitas de Panetones Fitness',
    description: 'Aumente suas vendas com panetones saudáveis para pessoas que desejam cuidar da saúde.',
    number: 1,
    width: 144,
    height: 144,
  },
  {
    image: '/images/regalo2.webp',
    title: 'Guia de Embalagens Elegantes e Lucrativas',
    description: 'Aumente sua margem de lucro com embalagens sofisticadas e econômicas.',
    number: 2,
    width: 144,
    height: 144,
  },
  {
    image: '/images/regalo3.webp',
    title: 'Planilha de Custos + Simulador de Lucros',
    description: 'Saiba exatamente quanto está gastando e quanto está lucrando em cada venda.',
    number: 3,
    width: 144,
    height: 144,
  },
  {
    image: '/images/regalo4.webp',
    title: 'Instagram Lucrativo',
    description: 'Venda mais no Instagram e atraia novos clientes com estratégias de marketing comprovadas.',
    number: 4,
    width: 144,
    height: 144,
  },
];

export function Bonuses() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl text-balance">
            E se você comprar hoje, receberá 4 bônus exclusivos:
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {bonuses.map((bonus) => (
            <Card key={bonus.number} className="flex flex-col bg-card shadow-sm text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-lg border border-primary/20">
              <CardHeader className="flex-grow">
                <Image src={bonus.image} alt={bonus.title} width={bonus.width} height={bonus.height} loading="lazy" className="object-contain rounded-xl shadow-lg shadow-primary/20 mx-auto mb-4" />
                <CardTitle className="font-headline text-xl text-center">Bônus #{bonus.number}: {bonus.title}</CardTitle>
                <CardDescription className="pt-2 text-base text-foreground/70 text-center">{bonus.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
