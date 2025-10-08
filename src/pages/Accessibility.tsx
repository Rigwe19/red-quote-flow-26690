import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Accessibility = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Accessibility Statement</h1>
          <div className="prose prose-lg max-w-4xl">
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            <div className="mt-8 space-y-6 text-foreground">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
                <p className="text-muted-foreground">
                  Cyonex Lab is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Conformance Status</h2>
                <p className="text-muted-foreground">
                  We aim to conform to WCAG 2.1 Level AA standards. We regularly test our website to identify and fix accessibility issues.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Feedback</h2>
                <p className="text-muted-foreground">
                  We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers at hello@cyonex.com
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Compatibility</h2>
                <p className="text-muted-foreground">
                  Our website is designed to be compatible with assistive technologies and recent versions of major browsers.
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

export default Accessibility;
