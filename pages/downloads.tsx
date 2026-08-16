import Head from 'next/head'
import { Navbar } from '@/app/components/navbar'
import { Footer } from '@/app/components/footer'
import { DownloadsPage as DownloadsPageContent } from '@/app/pages/downloads'

export default function Downloads() {
  return (
    <>
      <Head>
        <title>Free Downloads & Premium Books | NetReachGo</title>
        <meta name="description" content="Download free AI business guides, automation checklists, and AI agents overviews. Premium books on AI implementation, scaling, and customer service." />
        <meta property="og:title" content="Free Downloads & Premium Books | NetReachGo" />
        <meta property="og:description" content="Free AI business guides and premium books on AI implementation, scaling, and customer service." />
        <meta property="og:url" content="https://www.netreachgo.com/downloads" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.netreachgo.com/downloads" />
      </Head>
      <div className="min-h-screen bg-[#020205] text-white overflow-x-hidden">
        <Navbar />
        <DownloadsPageContent />
        <Footer />
      </div>
    </>
  )
}
