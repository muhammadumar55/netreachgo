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
        <script src="https://beta.leadconnectorhq.com/loader.js" data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js" data-widget-id="6931959121b060905eb0608c" />
      </Head>
      <Component {...pageProps} />
    </LanguageProvider>
  )
}
