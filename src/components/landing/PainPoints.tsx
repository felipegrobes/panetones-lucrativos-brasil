import { CheckIcon, CrossIcon } from './icons';

const pains = [
  'Ver o Natal passar e não vender como deveria?',
  'Depender sempre das mesmas receitas que já não vendem tanto?',
  'Perder a oportunidade de aproveitar a época mais lucrativa do ano?',
];

export function PainPoints() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold text-primary">
              Você Está Cansado(a) de...
            </h2>
            <ul className="space-y-4">
              {pains.map((pain, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive mt-1">
                    <CrossIcon className="h-4 w-4" />
                  </div>
                  <span className="text-lg text-foreground/80">{pain}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center rounded-xl bg-accent/10 p-8 shadow-lg border border-accent/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent">
                <CheckIcon className="h-8 w-8" />
            </div>
            <h3 className="mt-6 font-headline text-3xl font-bold text-primary">
              Chegou a hora de mudar isso!
            </h3>
            <p className="mt-4 text-lg text-foreground/80">
              Com nossas variedades de receitas gourmet, você pode transformar este Natal no melhor de todos!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
