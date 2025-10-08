import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-300">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-foreground text-white rounded-lg shadow-2xl p-6 md:p-8 relative border border-white/10">
          <button
            onClick={declineCookies}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            aria-label="Close cookie consent"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Cookie className="w-6 h-6 text-primary" />
              </div>
            </div>

            <div className="flex-1 pr-8 md:pr-0">
              <h3 className="text-lg font-semibold mb-2">We Value Your Privacy</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                By clicking "Accept All", you consent to our use of cookies.{' '}
                <Link to="/cookies" className="text-primary hover:underline">
                  Learn more
                </Link>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button
                variant="outline"
                onClick={declineCookies}
                className="bg-transparent border-white/20 text-white hover:bg-white/10"
              >
                Decline
              </Button>
              <Button
                variant="hero"
                onClick={acceptCookies}
              >
                Accept All
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
