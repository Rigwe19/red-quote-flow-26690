import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Cookie Policy</h1>
          <div className="prose prose-lg max-w-4xl">
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            <div className="mt-8 space-y-6 text-foreground">
              <section>
                <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
                <p className="text-muted-foreground">
                  Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the website to recognize you and make your next visit easier.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
                <p className="text-muted-foreground">
                  We use cookies to understand how you use our website and to improve your experience. This includes personalizing content and analyzing our traffic.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
                <p className="text-muted-foreground">
                  You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable cookies, some parts of our website may become inaccessible or not function properly.
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

export default Cookies;
