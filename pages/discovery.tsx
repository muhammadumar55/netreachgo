import Head from 'next/head'
import { Navbar } from '@/app/components/navbar'
import { Footer } from '@/app/components/footer'
import { DiscoveryPage as DiscoveryPageContent } from '@/app/pages/discovery'

export default function Discovery() {
  return (
    <>
      <Head>
        <title>Discovery Call | NetReachGo</title>
        <meta name="description" content="Book a discovery call with NetReachGo. Learn how autonomous AI agents can transform your business operations and scale your growth." />
        <meta property="og:title" content="Discovery Call | NetReachGo" />
        <meta property="og:description" content="Book a discovery call and learn how AI agents can transform your business." />
        <meta property="og:url" content="https://www.netreachgo.com/discovery" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.netreachgo.com/discovery" />
      </Head>
      <div className="min-h-screen bg-[#020205] text-white overflow-x-hidden">
        <Navbar />
        <DiscoveryPageContent />
        <Footer />
      </div>
    </>
  )
}
