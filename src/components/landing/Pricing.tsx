import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const offerItems = [
  '+100 Receitas de Panetones Lucrativos',
  'Tabela de Preços',
  'Guia para Vender Panetones',
  '15 Receitas de Panetones Fitness',
  'Guia de Embalagens Elegantes e Lucrativas',
  'Planilha de Custos + Simulador de Lucros',
  'Instagram Lucrativo',
  'Acesso Vitalício',
  'Suporte Exclusivo',
];

export function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24" style={{ backgroundColor: '#921C1C' }}>
      <div className="container px-4 sm:px-6">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12" style={{ backgroundColor: '#F3D2D1' }}>
              <h3 className="font-headline text-2xl font-bold text-primary">
                ATENÇÃO!
              </h3>
              <p className="mt-2 text-foreground/80">
                Esta oferta pode acabar a qualquer momento! O Natal está chegando e o tempo para começar está acabando...
              </p>
              <h4 className="mt-8 font-headline text-xl font-semibold text-primary">Tudo o que você vai receber:</h4>
              <ul className="mt-4 space-y-2">
                {offerItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-600 mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center bg-background p-6 sm:p-8 text-center">
                <p className="mt-4 text-xl text-muted-foreground line-through">
                    De R$ 150,00
                </p>
                <p className="mt-1 text-lg text-muted-foreground">por apenas 4x de</p>
                <p className="font-headline text-5xl font-bold text-primary">
                    R$ 5,53
                </p>
                <p className="text-sm text-muted-foreground mt-1">(ou R$ 19,90 à vista!)</p>
                <Button asChild size="lg" className="mt-8 w-full font-bold text-lg py-7 shadow-lg shadow-primary/30 transform transition-transform hover:scale-105">
                  <a href="https://digitalpay.mycartpanda.com/checkout/202229851:1">QUERO COMPRAR AGORA!</a>
                </Button>
                <p className="mt-4 text-sm text-muted-foreground">Compra 100% segura. 30 dias de garantia.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
