import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html data-theme="corporate">
      <Head>
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:creator" content="@oliveroxenham" />
        <meta name="description" content="Templates built with DaisyUI Tailwind components." />
        <meta property="og:url" content="https://daisyuitemplates.com" />
        <meta property="og:title" content="DaisyUI Templates" />
        <meta property="og:description" content="Templates built with DaisyUI Tailwind components." />
        <meta property="og:image" content="https://daisyuitemplates.com/logo.svg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
