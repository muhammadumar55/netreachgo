import Head from 'next/head'
import { Navbar } from '@/app/components/navbar'
import { Footer } from '@/app/components/footer'
import { ServicesPage as ServicesPageContent } from '@/app/pages/services'

export default function Services() {
  return (
    <>
      <Head>
        <title>AI Services & Solutions | NetReachGo</title>
        <meta name="description" content="AI agents, premium web development, marketing automation, AI consultancy, and workflow automation services. Custom solutions for businesses in New York, Florida, and Panama." />
        <meta property="og:title" content="AI Services & Solutions | NetReachGo" />
        <meta property="og:description" content="AI agents, premium web development, marketing automation, and custom AI solutions for businesses." />
        <meta property="og:url" content="https://www.netreachgo.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Services & Solutions | NetReachGo" />
        <meta name="twitter:description" content="AI agents, premium web development, marketing automation, and custom AI solutions." />
        <link rel="canonical" href="https://www.netreachgo.com/services" />
      </Head>
      <div className="min-h-screen bg-[#020205] text-white overflow-x-hidden">
        <Navbar />
        <ServicesPageContent />
        <Footer />
      </div>
    </>
  )
}
