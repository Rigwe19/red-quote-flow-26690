import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import ProcessTimeline from '@/components/ProcessTimeline';
import QuoteFormModal from '@/components/QuoteFormModal';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import CookieConsent from '@/components/CookieConsent';

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
      <section id="quote" className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Get a detailed quote tailored to your specific needs and requirements.
          </p>
          <QuoteFormModal />
        </div>
      </section>
      <section id="contact">
        <Footer />
      </section>
      <ChatWidget />
      <CookieConsent />
    </div>
  );
};

export default Index;
