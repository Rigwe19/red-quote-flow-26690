import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import ProcessTimeline from '@/components/ProcessTimeline';
import QuoteForm from '@/components/QuoteForm';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <section id="services">
        <Services />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="process">
        <ProcessTimeline />
      </section>
      <section id="about">
        <Testimonials />
      </section>
      <section id="quote">
        <QuoteForm />
      </section>
      <section id="contact">
        <Footer />
      </section>
      <ChatWidget />
    </div>
  );
};

export default Index;
