import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Tutorials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Tutorials</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Step-by-step guides to help you get the most out of our services.
          </p>
          <div className="mt-12">
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tutorials;
