import Head from 'next/head'
import { Navbar } from '@/app/components/navbar'
import { Footer } from '@/app/components/footer'
import { AboutPage as AboutPageContent } from '@/app/pages/about'

export default function About() {
  return (
    <>
      <Head>
        <title>About NetReachGo | AI Innovation Company</title>
        <meta name="description" content="NetReachGo builds autonomous AI agents and premium web solutions. Locations in New York, Florida, and Panama City. 20+ years of digital excellence." />
        <meta property="og:title" content="About NetReachGo | AI Innovation Company" />
        <meta property="og:description" content="NetReachGo builds autonomous AI agents and premium web solutions. 20+ years of digital excellence." />
        <meta property="og:url" content="https://www.netreachgo.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.netreachgo.com/about" />
      </Head>
      <div className="min-h-screen bg-[#020205] text-white overflow-x-hidden">
        <Navbar />
        <AboutPageContent />
        <Footer />
      </div>
    </>
  )
}
