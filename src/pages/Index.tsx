import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Sobre } from "@/components/sections/Sobre";
import { Servicos } from "@/components/sections/Servicos";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { Contato } from "@/components/sections/Contato";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
