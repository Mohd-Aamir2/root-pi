import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import IndustriesSection from '@/components/IndustriesSection';
import StatsStrip from '@/components/StatsStrip';
import PortfolioTeaser from '@/components/PortfolioTeaser';
import Testimonials from '@/components/Testimonials';
import ContactCTA from '@/components/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <IndustriesSection />
      <StatsStrip />
      <PortfolioTeaser />
      <Testimonials />
      <ContactCTA />
    </>
  );
}