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
        id="hs-script-loader"
        src="//js.hs-scripts.com/6797997.js"
        async
        defer
      />
    </>
  );
}

export default appWithTranslation(App);