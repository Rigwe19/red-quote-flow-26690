import Header from '@/components/Header';
import Footer from '@/components/Footer';

const GDPR = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">GDPR Compliance</h1>
          <div className="prose prose-lg max-w-4xl">
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            <div className="mt-8 space-y-6 text-foreground">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
                <p className="text-muted-foreground">
                  Cyonex Lab is committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR).
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                <p className="text-muted-foreground">
                  Under GDPR, you have the right to access, rectify, erase, restrict processing, data portability, and object to processing of your personal data.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk of processing your personal data.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Our DPO</h2>
                <p className="text-muted-foreground">
                  For any GDPR-related inquiries, please contact our Data Protection Officer at hello@cyonex.com
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

export default GDPR;
