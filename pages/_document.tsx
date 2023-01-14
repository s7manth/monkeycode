import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
      <link href='https://fonts.googleapis.com/css?family=Inconsolata' rel='stylesheet'></link>
      </Head>
      <body style={{ margin: 0, height: '100vh' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
