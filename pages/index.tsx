import Head from 'next/head'
import { Navbar } from '@/app/components/navbar'
import { Footer } from '@/app/components/footer'
import { HeroSection } from '@/app/components/hero-section'
import { FeaturedCard } from '@/app/components/featured-card'
import { WebsitesSection } from '@/app/components/websites-section'
import { TechStackSection } from '@/app/components/tech-stack-section'
import { AIAgentsSection } from '@/app/components/ai-agents-section'
import { TechShowcase } from '@/app/components/tech-showcase'
import { AcademySection } from '@/app/components/academy-section'
import { CTASection } from '@/app/components/cta-section'
import { ImageDividerSection } from '@/app/components/image-divider-section'
import { TrustedBySection } from '@/app/components/trusted-by-section'
import { ContactSection } from '@/app/components/contact-section'

export default function Home() {
  return (
    <>
      <Head>
        <title>NetReachGo | Autonomous AI Agents, Web Development & Marketing Automation</title>
        <meta name="description" content="Deploy autonomous AI agents that work 24/7 — sales, support, marketing, finance. Premium web development and marketing automation for businesses in New York, Florida, and Panama." />
        <meta name="keywords" content="AI agents, autonomous AI agents, AI automation, WhatsApp AI agent, AI customer support, web development, marketing automation, AI business automation Panama" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NetReachGo | Autonomous AI Agents, Web Development & Marketing Automation" />
        <meta property="og:description" content="Deploy autonomous AI agents that work 24/7. Premium web development and marketing automation for businesses." />
        <meta property="og:url" content="https://www.netreachgo.com" />
        <meta property="og:site_name" content="NetReachGo" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="es_PA" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NetReachGo | Autonomous AI Agents, Web Development & Marketing Automation" />
        <meta name="twitter:description" content="Deploy autonomous AI agents that work 24/7. Premium web development and marketing automation for businesses." />
        
        {/* Hreflang */}
        <link rel="alternate" hrefLang="en" href="https://www.netreachgo.com" />
        <link rel="alternate" hrefLang="es" href="https://www.netreachgo.com/?lang=es" />
        <link rel="alternate" hrefLang="x-default" href="https://www.netreachgo.com" />
      </Head>
      <div className="min-h-screen bg-[#020205] text-white overflow-x-hidden">
        <Navbar />
        <main>
          <HeroSection />
          <TrustedBySection />
          <FeaturedCard />
          <AIAgentsSection />
          <ImageDividerSection />
          <WebsitesSection />
          <TechStackSection />
          <TechShowcase />
          <AcademySection />
          <CTASection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
