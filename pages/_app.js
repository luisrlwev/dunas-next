import { appWithTranslation } from 'next-i18next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';
import '@/styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
      <Analytics />
      {/* HubSpot Embed Code */}
      <Script
        src="//js.hs-scripts.com/45318285.js"
        id="hs-script-loader"
        async
        defer
        strategy="afterInteractive"
      />
    </>
  );
}

export default appWithTranslation(App);