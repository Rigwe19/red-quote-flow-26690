import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Rocket, Sparkles, Building2, Briefcase, UtensilsCrossed, Coffee, ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import QuoteFormModal from '@/components/QuoteFormModal';
const Services = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const services = [{
    icon: Rocket,
    title: 'Starter Website',
    tier: 'Standard',
    description: 'Perfect for freelancers, tradesmen, or startups needing a simple online presence.',
    features: ['Up to 3 sections (Home, About, Contact)', 'Mobile-friendly responsive design', 'Contact form integration', 'Basic SEO setup', 'SSL certificate', 'Domain + hosting setup'],
    price: '£450 - £900',
    ongoing: '£150 - £250/year',
    popular: false
  }, {
    icon: Sparkles,
    title: 'Starter Website',
    tier: 'Enterprise',
    description: 'Perfect for freelancers, tradesmen, or startups needing a simple online presence with premium design.',
    features: ['All Standard features included', 'Professional UI/UX design mockups using Figma', '1–2 design concept options for approval', 'Custom animations and interaction effects', 'Faster delivery timeline', 'Dedicated account manager'],
    price: '£1,000 - £1,800',
    ongoing: '£250 - £350/year',
    popular: false
  }, {
    icon: Building2,
    title: 'Professional Business Website',
    tier: 'Standard',
    description: 'Growing businesses wanting more functionality and polish with 5-10 pages.',
    features: ['Up to 10 pages (Home, Services, Blog, etc.)', 'Custom responsive layout', 'On-page SEO', 'Blog setup', 'Google Analytics integration', 'Basic security'],
    price: '£1,200 - £2,500',
    ongoing: '£250 - £400/year',
    popular: true
  }, {
    icon: Briefcase,
    title: 'Professional Business Website',
    tier: 'Enterprise',
    description: 'Growing businesses wanting more functionality and polish with 5-10 pages and premium design.',
    features: ['All Standard features included', 'Custom UI/UX design strategy with wireframes', 'Interactive Figma prototype approval', 'Advanced animations & micro-interactions', 'Priority delivery', 'Dedicated project manager & revision rounds'],
    price: '£2,800 - £4,500',
    ongoing: '£350 - £500/year',
    popular: false
  }, {
    icon: UtensilsCrossed,
    title: 'Hospitality & Service Website',
    tier: 'Standard',
    description: 'Ideal for restaurants, cafés, hotels, spas, or service providers.',
    features: ['Menu/service listings', 'Booking or reservation form', 'Gallery, reviews, Google Maps', 'Blog or events section', 'Social media integration'],
    price: '£2,500 - £4,000',
    ongoing: '£300 - £600/year',
    popular: false
  }, {
    icon: Coffee,
    title: 'Hospitality & Service Website',
    tier: 'Enterprise',
    description: 'Ideal for restaurants, cafés, hotels, spas, or service providers with premium design.',
    features: ['All Standard features included', 'Bespoke UX flow and interface design', 'Design preview before build', 'Enhanced animations and transitions', 'Multi-device prototyping', 'Dedicated UX designer & project manager'],
    price: '£4,500 - £7,000',
    ongoing: '£500 - £700/year',
    popular: false
  }];
  return <section className="py-20 bg-muted/30" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to launch, we provide comprehensive digital solutions 
            that help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
          const IconComponent = service.icon;
          return <Card key={index} className={`relative h-full flex flex-col shadow-medium hover:shadow-large transition-all duration-300 transform hover:scale-105 ${service.popular ? 'ring-2 ring-primary ring-opacity-50' : ''}`}>
                {service.popular && <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${service.tier === 'Enterprise' ? 'bg-gradient-to-br from-primary via-primary/90 to-primary/70 shadow-lg' : 'bg-primary/10 border-2 border-primary/20'}`}>
                    <IconComponent className={`w-8 h-8 ${service.tier === 'Enterprise' ? 'text-primary-foreground' : 'text-primary'}`} />
                  </div>
                  <div className={`inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full font-semibold text-xs tracking-wide uppercase ${service.tier === 'Enterprise' ? 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-white shadow-md' : 'bg-secondary/80 text-secondary-foreground border border-border/50'}`}>
                    {service.tier === 'Enterprise' && <Sparkles className="w-3.5 h-3.5" />}
                    {service.tier}
                  </div>
                  <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 flex-1 flex flex-col">
                  <div className="space-y-4 flex-1 flex flex-col">
                    <div className={`rounded-xl p-4 ${service.tier === 'Enterprise' ? 'bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/20' : 'bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50'}`}>
                      <div className="text-center space-y-1">
                        <div className="text-3xl font-bold text-foreground">{service.price}</div>
                        <div className="text-xs text-muted-foreground font-medium">One-time setup</div>
                        <div className="pt-2 mt-2 border-t border-border/30">
                          <div className="text-sm font-semibold text-primary">{service.ongoing}</div>
                          <div className="text-xs text-muted-foreground">Annual maintenance</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 flex-1">
                      {service.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground leading-tight">{feature}</span>
                        </div>)}
                    </div>

                    <Button variant={service.popular ? "hero" : "outline"} className="w-full group mt-auto" onClick={() => setIsQuoteModalOpen(true)}>
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>;
        })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-primary text-primary-foreground shadow-soft">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Every business is unique. Let's discuss how we can create a tailored 
                solution that perfectly fits your specific requirements and goals.
              </p>
              <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Schedule a Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <QuoteFormModal open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen} />
    </section>;
};
export default Services;