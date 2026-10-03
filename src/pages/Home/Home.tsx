import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero';
import { About } from '../../components/About/About';
import { Modalities } from '../../components/Modalities/Modalities';
import { Plans } from '../../components/Plans/Plans';
import { Equipment } from '../../components/Equipment/Equipment';
import { MediaSection } from '../../components/MediaSection/MediaSection';
import { FinalCTA } from '../../components/FinalCTA/FinalCTA';
import { Footer } from '../../components/Footer/Footer';
import { WhatsAppButton } from '../../components/WhatsAppButton/WhatsAppButton';
import { Loadscreen } from '../../components/Loadscreen/Loadscreen';
import { useReveal } from '../../hooks/useReveal';

export function Home() {
  useReveal();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loadscreen onComplete={() => setIsLoading(false)} />}
      <Header />
      <main>
        <Hero />
        <About />
        <Modalities />
        <Plans />
        <Equipment />
        <MediaSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
