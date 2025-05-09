import { useEffect } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Script from "next/script";
import Layout from "@/components/layout";

export default function IDX() {
  // Traducciones
  const { t } = useTranslation()

  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window !== 'undefined' && window.ihfKestrel && typeof window.ihfKestrel.render === 'function') {
        const idxContainer = document.getElementById('idx-container');
        if (idxContainer) {
          idxContainer.innerHTML = ''; // Limpia primero
          idxContainer.appendChild(window.ihfKestrel.render());
          clearInterval(interval);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout
      title={"IDX"}
      description={t('cabos_descripcion')}
    >
      {/* Evento de pixel de Cabos */}
      <Script
        id="script-pixel-cabos"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '254729565941530');
              fbq('track', 'Cabos');
          `,
        }}
      />
      <div className="portada-cabos flex relative justify-center">
        <div className="portada-ciudades flex justify-center items-end relative">
          <h1 className="text-white font-bold text-center uppercase text-160 letter-spacing-25 leading-none z-0 -mb-6 max-lg:text-5xl max-lg:-mb-2">Los Cabos</h1>
        </div>
      </div>
      <section>
        <div id="idx-container" />
      </section>
    </Layout>
  );
}

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  }
}