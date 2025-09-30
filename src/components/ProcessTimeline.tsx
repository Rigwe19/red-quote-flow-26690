import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  PenTool, 
  Palette, 
  Code, 
  TestTube, 
  Rocket,
  HeadphonesIcon,
  CheckCircle 
} from 'lucide-react';

const ProcessTimeline = () => {
  const phases = [
    {
      id: 1,
      title: 'Discovery & Consultation',
      duration: '2-4 days',
      icon: Search,
      description: 'We dive deep into your business goals, target audience, and project requirements.',
      whatWeDoTitle: "What we'll do:",
      whatWeDo: [
        'Stakeholder interviews',
        'Competitor analysis',
        'Technical requirements gathering',
        'Project scope definition'
      ],
      whatYouDoTitle: "What you'll provide:",
      whatYouDo: [
        'Brand materials and guidelines',
        'Content and copy',
        'Access to key stakeholders',
        'Any existing systems information'
      ],
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'Wireframing & Planning',
      duration: '3-5 days',
      icon: PenTool,
      description: 'We create detailed wireframes and plan the information architecture.',
      whatWeDoTitle: "What we'll do:",
      whatWeDo: [
        'Site architecture planning',
        'User flow mapping',
        'Wireframe creation',
        'Technical specification document'
      ],
      whatYouDoTitle: "What you'll provide:",
      whatYouDo: [
        'Feedback on wireframes',
        'Content structure preferences',
        'Feature priority ranking',
        'Integration requirements'
      ],
      color: 'bg-purple-500'
    },
    {
      id: 3,
      title: 'Design',
      duration: '5-8 days',
      icon: Palette,
      description: 'Our designers create stunning visual designs that align with your brand.',
      whatWeDoTitle: "What we'll do:",
      whatWeDo: [
        'Visual design concepts',
        'UI/UX design systems',
        'Responsive design layouts',
        'Interactive prototypes'
      ],
      whatYouDoTitle: "What you'll provide:",
      whatYouDo: [
        'Design feedback and revisions',
        'Brand asset approval',
        'Content for key pages',
        'Image and media assets'
      ],
      color: 'bg-pink-500'
    },
    {
      id: 4,
      title: 'Development',
      duration: '7-14 days',
      icon: Code,
      description: 'We bring your designs to life with clean, efficient, and scalable code.',
      whatWeDoTitle: "What we'll do:",
      whatWeDo: [
        'Frontend development',
        'Backend development',
        'CMS integration',
        'Third-party integrations'
      ],
      whatYouDoTitle: "What you'll provide:",
      whatYouDo: [
        'Content for all pages',
        'API keys and credentials',
        'Hosting account access',
        'Domain management access'
      ],
      color: 'bg-green-500'
    },
    {
      id: 5,
      title: 'Testing & QA',
      duration: '2-3 days',
      icon: TestTube,
      description: 'Rigorous testing ensures everything works perfectly across all devices.',
      whatWeDoTitle: "What we'll do:",
      whatWeDo: [
        'Cross-browser testing',
        'Mobile responsiveness testing',
        'Performance optimization',
        'Security audits'
      ],
      whatYouDoTitle: "What you'll provide:",
      whatYouDo: [
        'User acceptance testing',
        'Content review and approval',
        'Feedback on functionality',
        'Final content updates'
      ],
      color: 'bg-orange-500'
    },
    {
      id: 6,
      title: 'Launch',
      duration: '1-2 days',
      icon: Rocket,
      description: 'We deploy your website and ensure everything is running smoothly.',
      whatWeDoTitle: "What we'll do:",
      whatWeDo: [
        'Production deployment',
        'DNS configuration',
        'SSL certificate setup',
        'Analytics implementation'
      ],
      whatYouDoTitle: "What you'll provide:",
      whatYouDo: [
        'Final approval for launch',
        'Social media announcements',
        'Press release preparation',
        'Team training coordination'
      ],
      color: 'bg-primary'
    },
    {
      id: 7,
      title: 'Post-Launch Support',
      duration: 'Ongoing',
      icon: HeadphonesIcon,
      description: 'We provide ongoing support and maintenance to keep your site optimal.',
      whatWeDoTitle: "What we'll do:",
      whatWeDo: [
        'Technical support',
        'Performance monitoring',
        'Security updates',
        'Backup management'
      ],
      whatYouDoTitle: "What you'll provide:",
      whatYouDo: [
        'Usage feedback',
        'Feature requests',
        'Content updates as needed',
        'Team training needs'
      ],
      color: 'bg-teal-500'
    }
  ];

  return (
    <section className="py-20 bg-background" id="process">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Development Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven 7-phase approach that ensures your project is delivered on time, 
            on budget, and exceeds your expectations.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-primary h-full"></div>

          <div className="space-y-12 lg:space-y-16">
            {phases.map((phase, index) => {
              const IconComponent = phase.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={phase.id} className="relative">
                  {/* Timeline dot - hidden on mobile */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-red">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`lg:w-1/2 ${isEven ? 'lg:pr-16' : 'lg:pl-16 lg:ml-auto'}`}>
                    <Card className="shadow-medium hover:shadow-large transition-all duration-300 transform hover:scale-105">
                      <CardContent className="p-8">
                        {/* Mobile icon */}
                        <div className="lg:hidden w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-6 shadow-red">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>

                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <Badge variant="outline" className="mb-3">
                              Phase {phase.id}
                            </Badge>
                            <h3 className="text-2xl font-bold text-foreground mb-2">
                              {phase.title}
                            </h3>
                            <Badge variant="secondary" className="bg-primary/10 text-primary">
                              {phase.duration}
                            </Badge>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-6">
                          {phase.description}
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center">
                              <CheckCircle className="w-4 h-4 text-primary mr-2" />
                              {phase.whatWeDoTitle}
                            </h4>
                            <ul className="space-y-2">
                              {phase.whatWeDo.map((item, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-start">
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center">
                              <CheckCircle className="w-4 h-4 text-primary mr-2" />
                              {phase.whatYouDoTitle}
                            </h4>
                            <ul className="space-y-2">
                              {phase.whatYouDo.map((item, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-start">
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary stats */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">21-42</div>
              <div className="text-muted-foreground">Days Average Timeline</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">7</div>
              <div className="text-muted-foreground">Structured Phases</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">On-Time Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;