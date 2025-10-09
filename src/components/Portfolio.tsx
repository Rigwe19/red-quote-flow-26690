import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import workspaceImage from '@/assets/workspace-portfolio.jpg';
const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const categories = [{
    id: 'all',
    name: 'All Projects'
  }, {
    id: 'ecommerce',
    name: 'E-commerce'
  }, {
    id: 'saas',
    name: 'SaaS'
  }, {
    id: 'corporate',
    name: 'Corporate'
  }, {
    id: 'portfolio',
    name: 'Portfolio'
  }];
  const projects = [{
    id: 1,
    title: 'IDEAS',
    category: 'NGO',
    description: 'Custom React website for NGO with PayPal integration and advanced analytics.',
    image: '/images/ideas.webp',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'PayPal'],
    client: 'TechCorp Inc.',
    duration: '2 weeks',
    impact: '+150% lead generation',
    liveUrl: 'https://ideas-empower.vercel.app',
    githubUrl: '#'
  }, {
    id: 2,
    title: 'ShopFlow E-commerce',
    category: 'ecommerce',
    description: 'Complete e-commerce platform with custom product configurator and payment integration.',
    image: workspaceImage,
    tags: ['Shopify', 'React', 'Node.js', 'Stripe'],
    client: 'ShopFlow Ltd.',
    duration: '8 weeks',
    impact: '+300% online sales',
    liveUrl: '#',
    githubUrl: '#'
  }, {
    id: 3,
    title: 'DataStream Analytics',
    category: 'saas',
    description: 'SaaS platform for real-time data analytics with interactive dashboards.',
    image: workspaceImage,
    tags: ['React', 'Python', 'PostgreSQL', 'AWS'],
    client: 'DataStream Inc.',
    duration: '12 weeks',
    impact: '+500% user engagement',
    liveUrl: '#',
    githubUrl: '#'
  }, {
    id: 4,
    title: 'Creative Studio Portfolio',
    category: 'portfolio',
    description: 'Stunning portfolio website for a creative agency with smooth animations.',
    image: workspaceImage,
    tags: ['React', 'GSAP', 'Three.js', 'Netlify'],
    client: 'Creative Studio',
    duration: '4 weeks',
    impact: '+200% client inquiries',
    liveUrl: '#',
    githubUrl: '#'
  }, {
    id: 5,
    title: 'FinTech Dashboard',
    category: 'saas',
    description: 'Financial management platform with real-time market data and trading tools.',
    image: workspaceImage,
    tags: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io'],
    client: 'FinTech Solutions',
    duration: '10 weeks',
    impact: '+400% user retention',
    liveUrl: '#',
    githubUrl: '#'
  }, {
    id: 6,
    title: 'Luxury Fashion Store',
    category: 'ecommerce',
    description: 'High-end fashion e-commerce with AR try-on features and luxury UX.',
    image: workspaceImage,
    tags: ['React', 'WebGL', 'Shopify Plus', 'AR.js'],
    client: 'Luxury Fashion',
    duration: '14 weeks',
    impact: '+250% conversion rate',
    liveUrl: '#',
    githubUrl: '#'
  }];
  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter);
  return <section className="py-20 bg-background" id="portfolio">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Our Portfolio
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore our recent work and see how we've helped businesses transform
          their digital presence and achieve remarkable results.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(category => <Button key={category.id} variant={activeFilter === category.id ? "hero" : "outline"} onClick={() => setActiveFilter(category.id)} className="transition-all duration-200">
          {category.name}
        </Button>)}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => <Card key={project.id} className="group shadow-medium hover:shadow-large transition-all duration-300 transform hover:scale-105 overflow-hidden">
          <div className="relative overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex space-x-4">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <Badge variant="outline" className="text-xs">
                {project.category}
              </Badge>
            </div>

            <p className="text-muted-foreground mb-4 text-sm">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>)}
            </div>

            <div className="space-y-2 mb-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Client:</span>
                <span className="font-medium">{project.client}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Duration:</span>
                <span className="font-medium">{project.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Impact:</span>
                <span className="font-medium text-primary">{project.impact}</span>
              </div>
            </div>
          </CardContent>
        </Card>)}
      </div>

      {/* Portfolio CTA */}
      <div className="mt-16 text-center">
        <Card className="bg-muted/50 border-primary/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how we can create an amazing digital experience
              that drives results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Start a Project
              </Button>

            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>;
};
export default Portfolio;