import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Upload, DollarSign, Clock, Mail } from 'lucide-react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    websiteType: '',
    pages: '',
    features: [],
    budget: '',
    deadline: '',
    description: ''
  });

  const [estimatedPrice, setEstimatedPrice] = useState(0);

  const websiteTypes = [
    { value: 'ecommerce', label: 'E-commerce Store', basePrice: 3000 },
    { value: 'portfolio', label: 'Portfolio Website', basePrice: 1500 },
    { value: 'blog', label: 'Blog/Content Site', basePrice: 1200 },
    { value: 'saas', label: 'SaaS Platform', basePrice: 5000 },
    { value: 'corporate', label: 'Corporate Website', basePrice: 2500 },
    { value: 'booking', label: 'Booking System', basePrice: 3500 },
    { value: 'marketplace', label: 'Marketplace', basePrice: 7000 },
    { value: 'custom', label: 'Custom Solution', basePrice: 4000 }
  ];

  const pageRanges = [
    { value: '1-5', label: '1-5 pages', multiplier: 1 },
    { value: '6-10', label: '6-10 pages', multiplier: 1.5 },
    { value: '11-20', label: '11-20 pages', multiplier: 2 },
    { value: '21-50', label: '21-50 pages', multiplier: 3 },
    { value: '50+', label: '50+ pages', multiplier: 4 }
  ];

  const features = [
    { id: 'seo', label: 'SEO Optimization', price: 500 },
    { id: 'payment', label: 'Payment Integration', price: 800 },
    { id: 'booking', label: 'Booking System', price: 1200 },
    { id: 'cms', label: 'Content Management', price: 600 },
    { id: 'analytics', label: 'Analytics Setup', price: 300 },
    { id: 'social', label: 'Social Media Integration', price: 400 },
    { id: 'multilingual', label: 'Multi-language Support', price: 700 },
    { id: 'api', label: 'API Integration', price: 900 },
    { id: 'mobile', label: 'Mobile App', price: 2500 },
    { id: 'maintenance', label: '6 Months Maintenance', price: 1000 }
  ];

  const budgetRanges = [
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+'
  ];

  const calculateEstimate = () => {
    let total = 0;
    
    // Base price from website type
    const selectedType = websiteTypes.find(type => type.value === formData.websiteType);
    if (selectedType) {
      total += selectedType.basePrice;
    }

    // Page multiplier
    const selectedPageRange = pageRanges.find(range => range.value === formData.pages);
    if (selectedPageRange) {
      total *= selectedPageRange.multiplier;
    }

    // Add feature costs
    formData.features.forEach(featureId => {
      const feature = features.find(f => f.id === featureId);
      if (feature) {
        total += feature.price;
      }
    });

    setEstimatedPrice(total);
  };

  const handleFeatureChange = (featureId: string, checked: boolean) => {
    const updatedFeatures = checked 
      ? [...formData.features, featureId]
      : formData.features.filter(id => id !== featureId);
    
    setFormData(prev => ({ ...prev, features: updatedFeatures }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateEstimate();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-muted/30" id="quote">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Your Project Quote
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tell us about your project and get an instant estimate. Our team will review your requirements 
            and provide a detailed proposal within 24 hours.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-large">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Project Requirements
              </CardTitle>
              <CardDescription>
                Fill out the form below to get started with your project quote
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="websiteType">Type of Website *</Label>
                      <Select 
                        value={formData.websiteType} 
                        onValueChange={(value) => setFormData(prev => ({ ...prev, websiteType: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select website type" />
                        </SelectTrigger>
                        <SelectContent>
                          {websiteTypes.map(type => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pages">Number of Pages *</Label>
                      <Select 
                        value={formData.pages} 
                        onValueChange={(value) => setFormData(prev => ({ ...prev, pages: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select page range" />
                        </SelectTrigger>
                        <SelectContent>
                          {pageRanges.map(range => (
                            <SelectItem key={range.value} value={range.value}>
                              {range.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    <Label>Required Features</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {features.map(feature => (
                        <div key={feature.id} className="flex items-center space-x-3">
                          <Checkbox
                            id={feature.id}
                            checked={formData.features.includes(feature.id)}
                            onCheckedChange={(checked) => handleFeatureChange(feature.id, checked as boolean)}
                          />
                          <Label htmlFor={feature.id} className="flex-1 cursor-pointer">
                            {feature.label}
                          </Label>
                          <Badge variant="outline" className="text-xs">
                            +${feature.price}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select 
                        value={formData.budget} 
                        onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map(range => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="deadline">Preferred Deadline</Label>
                      <Input
                        id="deadline"
                        type="date"
                        value={formData.deadline}
                        onChange={(e) => setFormData(prev => ({ ...prev, deadline: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Tell us more about your project, goals, and any specific requirements..."
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    />
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <Label>Upload Files (Optional)</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Drop your moodboards, briefs, or reference files here
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Max 10MB - PDF, DOC, PPT, JPG, PNG
                      </p>
                    </div>
                  </div>
                </div>

                {/* Price Estimate */}
                {estimatedPrice > 0 && (
                  <Card className="bg-gradient-primary text-white">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Estimated Project Cost</h3>
                          <p className="text-white/80 text-sm">
                            This is a preliminary estimate. Final pricing may vary based on specific requirements.
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-6 h-6" />
                            <span className="text-3xl font-bold">
                              {estimatedPrice.toLocaleString()}
                            </span>
                          </div>
                          <p className="text-white/80 text-sm">Starting from</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={calculateEstimate} 
                    className="flex-1"
                  >
                    <DollarSign className="w-4 h-4 mr-2" />
                    Calculate Estimate
                  </Button>
                  <Button type="submit" variant="hero" className="flex-1">
                    <Clock className="w-4 h-4 mr-2" />
                    Send Quote Request
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;