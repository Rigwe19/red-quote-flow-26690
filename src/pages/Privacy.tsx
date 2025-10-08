import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Privacy Policy</h1>
          <div className="prose prose-lg max-w-4xl">
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            <div className="mt-8 space-y-6 text-foreground">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                <p className="text-muted-foreground">
                  At Cyonex Lab, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                <p className="text-muted-foreground">
                  We collect information that you provide directly to us, including name, email address, phone number, and any other information you choose to provide when requesting a quote or contacting us.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground">
                  We use the information we collect to provide, maintain, and improve our services, communicate with you, and send you updates about our services.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy, please contact us at hello@cyonex.com
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

export default Privacy;
