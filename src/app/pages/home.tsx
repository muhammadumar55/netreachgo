import { HeroSection } from '@/app/components/hero-section';
import { FeaturedCard } from '@/app/components/featured-card';
import { WebsitesSection } from '@/app/components/websites-section';
import { TechStackSection } from '@/app/components/tech-stack-section';
import { AIAgentsSection } from '@/app/components/ai-agents-section';
import { TechShowcase } from '@/app/components/tech-showcase';
import { AcademySection } from '@/app/components/academy-section';
import { CTASection } from '@/app/components/cta-section';
import { ImageDividerSection } from '@/app/components/image-divider-section';
import { TrustedBySection } from '@/app/components/trusted-by-section';
import { ContactSection } from '@/app/components/contact-section';

export function HomePage() {
  return (
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
  );
}