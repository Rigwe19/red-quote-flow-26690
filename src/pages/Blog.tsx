import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Stay updated with the latest insights, trends, and news from Cyonex Lab.
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

export default Blog;
