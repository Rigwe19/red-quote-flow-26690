import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Terms of Service</h1>
          <div className="prose prose-lg max-w-4xl">
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            <div className="mt-8 space-y-6 text-foreground">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using Cyonex Lab's services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Use License</h2>
                <p className="text-muted-foreground">
                  Permission is granted to temporarily use our services for personal, non-commercial transitory viewing only.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Service Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify or discontinue our services at any time without notice. We shall not be liable to you or any third party for any modification or discontinuance of our services.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms, please contact us at hello@cyonex.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
