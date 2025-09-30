import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Globe, 
  ShoppingCart, 
  Smartphone, 
  Database,
  Search,
  Palette,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Custom Web Development',
      description: 'Bespoke websites tailored to your unique business needs and goals.',
      features: ['React/Next.js Development', 'Custom CMS Solutions', 'API Integrations', 'Performance Optimization'],
      price: 'From $2,500',
      popular: false
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online stores that drive sales and provide exceptional user experiences.',
      features: ['Shopify/WooCommerce', 'Payment Gateway Setup', 'Inventory Management', 'Order Processing'],
      price: 'From $3,500',
      popular: true
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native Development', 'Native iOS/Android', 'App Store Deployment', 'Push Notifications'],
      price: 'From $5,000',
      popular: false
    },
    {
      icon: Database,
      title: 'SaaS Platform Development',
      description: 'Scalable software-as-a-service platforms built for growth.',
      features: ['User Management', 'Subscription Billing', 'Multi-tenant Architecture', 'Analytics Dashboard'],
      price: 'From $7,500',
      popular: false
    },
    {
      icon: Search,
      title: 'SEO & Digital Marketing',
      description: 'Comprehensive SEO and digital marketing strategies to boost your online presence.',
      features: ['Technical SEO Audit', 'Content Strategy', 'Google Ads Management', 'Analytics Setup'],
      price: 'From $1,200/mo',
      popular: false
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, user-centered designs that convert visitors into customers.',
      features: ['User Research', 'Wireframing & Prototyping', 'Visual Design', 'Usability Testing'],
      price: 'From $1,500',
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
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-white">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-red">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="text-center">
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
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
          <Card className="bg-gradient-primary text-white shadow-red">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Every business is unique. Let's discuss how we can create a tailored 
                solution that perfectly fits your specific requirements and goals.
              </p>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-foreground">
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