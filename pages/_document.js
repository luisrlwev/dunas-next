import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Metaetiqueta de Verificación de Google */}
        <meta name="google-site-verification" content="Dfir-KQF4bfaxxUpPb9KmX0UKIPfsc9TWylYo-Y2wps" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'}/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
        {/* Meta tags de Open Graph */}
        <meta property="og:image" content="https://loscabos.fromskyrealtors.com/img/logo-cuadrado.jpg"/>
        <meta property="og:url" content="https://loscabos.fromskyrealtors.com/"/>
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
