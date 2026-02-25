import { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { VideoIntro } from './components/VideoIntro';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { Skills } from './components/Skills';
import { Clients } from './components/Clients';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { WhatsAppButton } from './components/WhatsAppButton';
import { BookingSystem } from './components/BookingSystem';
import { EmailCapture } from './components/EmailCapture';
import { LiveChat } from './components/LiveChat';
import { Blog } from './components/Blog';
import { CaseStudies } from './components/CaseStudies';
import { Timeline } from './components/Timeline';
import { MediaPress } from './components/MediaPress';
import { SignatureFramework } from './components/SignatureFramework';
import { ClientFilter } from './components/ClientFilter';
import { InvestorPartners } from './components/InvestorPartners';
import { AuthorityContent } from './components/AuthorityContent';
import { TestimonialVideos } from './components/TestimonialVideos';
import { PremiumSignaling } from './components/PremiumSignaling';
import { Philosophy } from './components/Philosophy';
import { ResultsShowcase } from './components/ResultsShowcase';
import { SignatureStatement } from './components/SignatureStatement';
import { StrategicPopup } from './components/StrategicPopup';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <SignatureStatement />
      <ResultsShowcase />
      <ClientFilter />
      <About />
      <Philosophy />
      <Timeline />
      <SignatureFramework />
      <Services />
      <Portfolio />
      <CaseStudies />
      <VideoIntro />
      <TestimonialVideos />
      <Testimonials />
      <BookingSystem />
      <Pricing />
      <Process />
      <MediaPress />
      <AuthorityContent />
      <InvestorPartners />
      <Clients />
      <Skills />
      <Blog />
      <FAQ />
      <Contact />
      <WhatsAppButton />
      <StrategicPopup />
      <LiveChat />
      <EmailCapture />
    </div>
  );
}
