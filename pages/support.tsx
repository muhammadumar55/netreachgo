import Head from 'next/head'
import { Navbar } from '@/app/components/navbar'
import { Footer } from '@/app/components/footer'
import { SupportPage as SupportPageContent } from '@/app/pages/support'

export default function Support() {
  return (
    <>
      <Head>
        <title>Support & Help Center | NetReachGo</title>
        <meta name="description" content="Get support for your AI agents, web development projects, and automation tools. Contact NetReachGo support team 24/7." />
        <meta property="og:title" content="Support & Help Center | NetReachGo" />
        <meta property="og:description" content="Get support for your AI agents and web development projects. 24/7 support available." />
        <meta property="og:url" content="https://www.netreachgo.com/support" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.netreachgo.com/support" />
      </Head>
      <div className="min-h-screen bg-[#020205] text-white overflow-x-hidden">
        <Navbar />
        <SupportPageContent />
        <Footer />
      </div>
    </>
  )
}
