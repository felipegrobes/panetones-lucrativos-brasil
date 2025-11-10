import { TrendingUp, Target, Handshake } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container text-center">
        <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">Quem Somos?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80 text-balance">
          Somos uma empresa em constante crescimento. Nosso objetivo é te ajudar com nossas receitas e oferecer o suporte necessário para que você alcance seus resultados.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80 text-balance">
          Você não está sozinho(a) e pode contar com a gente sempre que precisar. 😉
        </p>
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center gap-2">
            <TrendingUp className="h-10 w-10 text-accent" />
            <p className="font-headline text-lg font-semibold">Mais de 5.000 vendas</p>
            <p className="text-sm text-muted-foreground">Somente no último ano.</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Target className="h-10 w-10 text-accent" />
            <p className="font-headline text-lg font-semibold">Seu Sucesso é o Nosso Objetivo</p>
            <p className="text-sm text-muted-foreground">Ajudamos você a alcançar suas metas.</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Handshake className="h-10 w-10 text-accent" />
            <p className="font-headline text-lg font-semibold">Suporte Contínuo</p>
            <p className="text-sm text-muted-foreground">Você pode contar com a gente.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
