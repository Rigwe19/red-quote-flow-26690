import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ApiDocs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">API Reference</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Complete API documentation for developers integrating with our services.
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

export default ApiDocs;
