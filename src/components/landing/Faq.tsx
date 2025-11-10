import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    question: 'Como receberei os livros após a compra?',
    answer: 'Assim que a compra for concluída, você receberá um link de acesso diretamente no seu e-mail. Se precisar de ajuda, escreva para: digitalpay.ofc@gmail.com',
  },
  {
    question: 'Os livros são físicos ou digitais?',
    answer: 'Os livros são 100% digitais (formato eBook PDF). Você pode lê-los no celular, tablet ou computador, onde e quando quiser.',
  },
  {
    question: 'É seguro comprar aqui?',
    answer: 'Sim, é 100% seguro! A transação é protegida por tecnologia de segurança avançada da Cartpanda (uma empresa de pagamentos e hospedagens de produtos online do Brasil).',
  },
  {
    question: 'E se eu não gostar do conteúdo?',
    answer: 'Você tem 30 dias de garantia incondicional. Se não gostar por qualquer motivo, devolvemos 100% do seu dinheiro, sem burocracia nem complicações.',
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-primary/5 py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">
            Perguntas Frequentes
          </h2>
        </div>
        <Accordion type="single" collapsible className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="rounded-lg border border-primary/10 bg-card shadow-sm">
              <AccordionTrigger className="px-6 text-left font-headline text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 text-base text-foreground/70">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-12 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="font-bold shadow-lg shadow-primary/30 transform transition-transform hover:scale-105">
                <a href="#pricing">Tirei minhas dúvidas, quero comprar!</a>
            </Button>
        </div>
      </div>
    </section>
  );
}
