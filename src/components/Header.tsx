import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [{
    name: 'Services',
    href: '#services'
  }, {
    name: 'Portfolio',
    href: '#portfolio'
  }, {
    name: 'Process',
    href: '#process'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="/logo.webp" alt="Cyonex Lab" className="h-16" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <a key={item.name} href={item.href} className="text-foreground hover:text-primary transition-colors duration-200">
                {item.name}
              </a>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            
            <Button variant="hero" size="sm" onClick={() => document.getElementById('quote')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Start Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navItems.map(item => <a key={item.name} href={item.href} className="text-foreground hover:text-primary transition-colors duration-200 px-2 py-1" onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </a>)}
              <div className="flex flex-col space-y-2 pt-0 rounded-none">
                
                <Button variant="hero" size="sm" onClick={() => {
              document.getElementById('quote')?.scrollIntoView({
                behavior: 'smooth'
              });
              setIsMenuOpen(false);
            }}>
                  Start Project
                </Button>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;