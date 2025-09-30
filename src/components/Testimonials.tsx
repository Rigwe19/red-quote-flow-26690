import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';
import teamImage from '@/assets/team-collaboration.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechStart Inc.',
      image: teamImage,
      rating: 5,
      text: "Cyonex transformed our vision into reality. Their attention to detail and technical expertise exceeded our expectations. Our new platform has increased user engagement by 300%.",
      project: 'SaaS Platform',
      industry: 'Technology'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Marketing Director',
      company: 'E-commerce Plus',
      image: teamImage,
      rating: 5,
      text: "The team delivered an outstanding e-commerce solution that boosted our online sales by 250%. Their process was transparent, and they kept us informed every step of the way.",
      project: 'E-commerce Store',
      industry: 'Retail'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Founder',
      company: 'Creative Studio',
      image: teamImage,
      rating: 5,
      text: "Working with Cyonex was a game-changer. They created a stunning portfolio website that perfectly represents our brand. Client inquiries have increased by 200% since launch.",
      project: 'Portfolio Website',
      industry: 'Design'
    },
    {
      id: 4,
      name: 'David Kim',
      position: 'CTO',
      company: 'FinTech Solutions',
      image: teamImage,
      rating: 5,
      text: "Their technical expertise in building our financial dashboard was impressive. The platform is robust, secure, and user-friendly. Highly recommend their services.",
      project: 'Financial Dashboard',
      industry: 'Finance'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      position: 'Operations Manager',
      company: 'Healthcare Plus',
      image: teamImage,
      rating: 5,
      text: "Cyonex delivered a complex healthcare management system on time and within budget. Their support team is always available when we need assistance.",
      project: 'Management System',
      industry: 'Healthcare'
    },
    {
      id: 6,
      name: 'James Wilson',
      position: 'Brand Manager',
      company: 'Fashion Forward',
      image: teamImage,
      rating: 5,
      text: "The luxury e-commerce site they built for us is absolutely stunning. The AR features and smooth checkout process have significantly improved our conversion rates.",
      project: 'Luxury E-commerce',
      industry: 'Fashion'
    }
  ];

  const companyLogos = [
    'TechStart', 'E-commerce Plus', 'Creative Studio', 
    'FinTech Solutions', 'Healthcare Plus', 'Fashion Forward',
    'DataCorp', 'InnovateLab'
  ];

  return (
    <section className="py-20 bg-muted/30" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say 
            about their experience working with our team.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="shadow-medium hover:shadow-large transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary/20" />
                </div>

                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position} at {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="text-xs">
                    {testimonial.project}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.industry}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Trusted by Leading Companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {companyLogos.map((company, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-2 hover:bg-primary/10 transition-colors">
                  <span className="text-xs font-semibold text-muted-foreground">
                    {company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">150+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">5</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">24h</div>
            <div className="text-muted-foreground">Support Response</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;