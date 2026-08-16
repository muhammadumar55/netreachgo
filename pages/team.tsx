import Head from 'next/head'
import { Navbar } from '@/app/components/navbar'
import { Footer } from '@/app/components/footer'
import { TeamPage as TeamPageContent } from '@/app/pages/team'

export default function Team() {
  return (
    <>
      <Head>
        <title>Our Team | NetReachGo</title>
        <meta name="description" content="Meet the NetReachGo team — AI engineers, developers, and strategists building autonomous AI solutions for businesses worldwide." />
        <meta property="og:title" content="Our Team | NetReachGo" />
        <meta property="og:description" content="Meet the team building autonomous AI solutions for businesses worldwide." />
        <meta property="og:url" content="https://www.netreachgo.com/team" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.netreachgo.com/team" />
      </Head>
      <div className="min-h-screen bg-[#020205] text-white overflow-x-hidden">
        <Navbar />
        <TeamPageContent />
        <Footer />
      </div>
    </>
  )
}
