import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, Database, Palette, ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import QuoteFormModal from '@/components/QuoteFormModal';
const Services = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const services = [{
    icon: Globe,
    title: 'Starter Website',
    description: 'Perfect for freelancers, tradesmen, or startups needing a simple online presence.',
    standardFeatures: ['Up to 3 sections (Home, About, Contact)', 'Mobile-friendly responsive design', 'Contact form integration', 'Basic SEO setup', 'SSL certificate', 'Domain + hosting setup'],
    enterpriseFeatures: ['Professional UI/UX design mockups using Figma', '1–2 design concept options for approval', 'Custom animations and interaction effects', 'Faster delivery timeline', 'Dedicated account manager'],
    price: '£450 - £900',
    ongoing: '£150 - £250/year',
    enterprisePrice: '£1,000 - £1,800',
    enterpriseOngoing: '£250 - £350/year',
    popular: false
  }, {
    icon: Database,
    title: 'Professional Business Website',
    description: 'Growing businesses wanting more functionality and polish with 5-10 pages.',
    standardFeatures: ['Up to 10 pages (Home, Services, Blog, etc.)', 'Custom responsive layout', 'On-page SEO', 'Blog setup', 'Google Analytics integration', 'Basic security'],
    enterpriseFeatures: ['Custom UI/UX design strategy with wireframes', 'Interactive Figma prototype approval', 'Advanced animations & micro-interactions', 'Priority delivery', 'Dedicated project manager & revision rounds'],
    price: '£1,200 - £2,500',
    ongoing: '£250 - £400/year',
    enterprisePrice: '£2,800 - £4,500',
    enterpriseOngoing: '£350 - £500/year',
    popular: true
  }, {
    icon: Palette,
    title: 'Hospitality & Service Website',
    description: 'Ideal for restaurants, cafés, hotels, spas, or service providers.',
    standardFeatures: ['Menu/service listings', 'Booking or reservation form', 'Gallery, reviews, Google Maps', 'Blog or events section', 'Social media integration'],
    enterpriseFeatures: ['Bespoke UX flow and interface design', 'Design preview before build', 'Enhanced animations and transitions', 'Multi-device prototyping', 'Dedicated UX designer & project manager'],
    price: '£2,500 - £4,000',
    ongoing: '£300 - £600/year',
    enterprisePrice: '£4,500 - £7,000',
    enterpriseOngoing: '£500 - £700/year',
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
          const IconComponent = service.icon;
          return <Card key={index} className={`relative h-full flex flex-col shadow-medium hover:shadow-large transition-all duration-300 transform hover:scale-105 ${service.popular ? 'ring-2 ring-primary ring-opacity-50' : ''}`}>
                {service.popular && <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 flex-1 flex flex-col">
                  <div className="space-y-6 flex-1 flex flex-col">
                    {/* Standard Plan */}
                    <div className="space-y-3">
                      <div className="bg-muted/50 rounded-lg p-3">
                        <h4 className="text-sm font-semibold text-foreground mb-1">Standard Plan</h4>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-bold text-primary">{service.price}</span>
                          <span className="text-xs text-muted-foreground">+ {service.ongoing}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2 pl-2">
                        {service.standardFeatures.map((feature, featureIndex) => <div key={featureIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground leading-tight">{feature}</span>
                          </div>)}
                      </div>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="space-y-3 border-t pt-4 flex-1 flex flex-col">
                      <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
                        <h4 className="text-sm font-semibold text-foreground mb-1">Enterprise (UI/UX Focused)</h4>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-bold text-primary">{service.enterprisePrice}</span>
                          <span className="text-xs text-muted-foreground">+ {service.enterpriseOngoing}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 italic">Includes all Standard features, plus:</p>
                      </div>
                      
                      <div className="space-y-2 pl-2">
                        {service.enterpriseFeatures.map((feature, featureIndex) => <div key={featureIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground leading-tight">{feature}</span>
                          </div>)}
                      </div>
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