import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Globe, 
  ShoppingCart, 
  Database,
  Palette,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Starter Website',
      description: 'Perfect for freelancers, tradesmen, or startups needing a simple online presence.',
      features: ['Up to 3 sections', 'Mobile-friendly design', 'Contact form', 'Basic SEO setup', 'SSL certificate', 'Domain + hosting setup'],
      price: '£450 - £900',
      enterprisePrice: '£1,000 - £1,800',
      popular: false
    },
    {
      icon: Database,
      title: 'Professional Business Website',
      description: 'Growing businesses wanting more functionality and polish with 5-10 pages.',
      features: ['Up to 10 pages', 'Custom responsive layout', 'On-page SEO', 'Blog setup', 'Google Analytics', 'Basic security'],
      price: '£1,200 - £2,500',
      enterprisePrice: '£2,800 - £4,500',
      popular: true
    },
    {
      icon: Palette,
      title: 'Hospitality & Service Website',
      description: 'Ideal for restaurants, cafés, hotels, spas, or service providers.',
      features: ['Menu/service listings', 'Booking/reservation form', 'Gallery & reviews', 'Google Maps integration', 'Social media integration'],
      price: '£2,500 - £4,000',
      enterprisePrice: '£4,500 - £7,000',
      popular: false
    },
    {
      icon: ShoppingCart,
      title: 'Ecommerce Website',
      description: 'Complete online stores for businesses selling physical or digital products.',
      features: ['Product catalog', 'Secure checkout', 'Inventory management', 'Customer accounts', 'SEO + analytics', 'Marketing tools'],
      price: '£5,000 - £10,000+',
      enterprisePrice: '£10,000 - £18,000+',
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="services">
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
            
            return (
              <Card 
                key={index} 
                className={`relative shadow-medium hover:shadow-large transition-all duration-300 transform hover:scale-105 ${
                  service.popular ? 'ring-2 ring-primary ring-opacity-50' : ''
                }`}
              >
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="text-center space-y-2">
                      <div>
                        <span className="text-xs text-muted-foreground block mb-1">Standard</span>
                        <span className="text-xl font-bold text-primary">{service.price}</span>
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground block mb-1">Enterprise (UI/UX)</span>
                        <span className="text-xl font-bold text-primary">{service.enterprisePrice}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      variant={service.popular ? "hero" : "outline"} 
                      className="w-full group"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
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
    </section>
  );
};

export default Services;