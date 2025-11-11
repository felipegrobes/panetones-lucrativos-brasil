import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import { PromoBanner } from '@/components/landing/PromoBanner';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Panettone Profits',
  description: 'Aprenda as receitas de panetones gourmet mais lucrativas e fáceis e ganhe dinheiro neste Natal.',
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn(poppins.variable)}>
      <body>
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '683636158144975');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=683636158144975&ev=PageView&noscript=1"
          />
        </noscript>
        <PromoBanner />
        <main className="font-body antialiased">
          {children}
          <Toaster />
        </main>
        <Script id="back-redirect" strategy="afterInteractive">
          {`
            var back_redirect_link = 'https://back-panetones-brasil-front.netlify.app/';
            var is_internal_navigation = false; // Flag para rastrear cliques em âncoras internas
            var redirect_executed = false; // Flag para garantir que o redirecionamento só ocorra uma vez

            // 1. GARANTE O history.pushState APÓS O CARREGAMENTO TOTAL
            // Isso é crucial para que o navegador registre a entrada de histórico corretamente no SPA.
            window.addEventListener('load', function () {
                // Adiciona a entrada extra no histórico que será consumida pelo botão "Voltar"
                history.pushState(null, null, location.href); 
            });

            // 2. Monitora TODOS os cliques na página para detectar âncoras
            document.addEventListener('click', function(e) {
                var target = e.target.closest('a');
                
                if (target) {
                    var href = target.getAttribute('href');
                    
                    // Se for um link de âncora (#)
                    if (href && href.startsWith('#')) {
                        is_internal_navigation = true;
                    } else {
                        // Se for um link externo ou o link de checkout
                        is_internal_navigation = false;
                    }
                }
            });

            // 3. Gerencia o evento de 'Voltar' (popstate)
            window.onpopstate = function() {
                
                // Verifica se a navegação foi interna (âncora) E se o redirecionamento ainda não ocorreu
                if (is_internal_navigation && !redirect_executed) {
                    is_internal_navigation = false; // Reseta a flag para o próximo clique
                    
                    // Re-adiciona a entrada no histórico. 
                    // Isso "consome" o popstate gerado pela âncora, mas mantém o back redirect ativo.
                    history.pushState(null, null, location.href); 
                    return; // Sai sem redirecionar!
                }

                // Se a navegação NÃO foi interna (is_internal_navigation é false)
                // E se o redirecionamento AINDA não foi executado
                if (!redirect_executed) {
                    redirect_executed = true; // Marca como executado
                    
                    setTimeout(function() {
                        window.location.href = back_redirect_link;
                    }, 0);
                }
            };
          `}
        </Script>
      </body>
    </html>
  );
}
