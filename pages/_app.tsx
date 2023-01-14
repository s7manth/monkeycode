import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      {' '}
      <Head>
        <title>Monkey Code</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Component
        {...pageProps}
        styles={{ backgroundColor: 'black', color: 'white' }}
      />
    </div>
  )
}
