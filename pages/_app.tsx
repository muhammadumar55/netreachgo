import type { AppProps } from 'next/app'
import Head from 'next/head'
import { LanguageProvider } from '@/app/context/language-context'
import '@/styles/index.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Head>
        <meta name="Impact-Site-Verification" content="ccc796a3-8d24-4a1b-a6d0-3bd6b00902af" />
        <link rel="canonical" href="https://www.netreachgo.com" />
      </Head>
      <Component {...pageProps} />
    </LanguageProvider>
  )
}

// Disable static optimization — pages need client-side rendering for now
App.getInitialProps = async () => {
  return {}
}
