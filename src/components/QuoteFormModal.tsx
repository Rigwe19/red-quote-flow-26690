import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import QuoteForm from '@/components/QuoteForm';
import { useIsMobile } from '@/hooks/use-mobile';

interface QuoteFormModalProps {
  triggerText?: string;
  triggerVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "hero" | "cta" | "gradient";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const QuoteFormModal = ({ 
  triggerText = "Get Quote", 
  triggerVariant = "hero",
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange
}: QuoteFormModalProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // Use controlled state if provided, otherwise use internal state
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = controlledOnOpenChange || setInternalOpen;

  if (!isMobile) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        {!controlledOpen && (
          <DialogTrigger asChild>
            <Button variant={triggerVariant} size="lg">
              {triggerText}
            </Button>
          </DialogTrigger>
        )}
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Get a Quote</DialogTitle>
          </DialogHeader>
          <QuoteForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      {!controlledOpen && (
        <DrawerTrigger asChild>
          <Button variant={triggerVariant} size="lg">
            {triggerText}
          </Button>
        </DrawerTrigger>
      )}
      <DrawerContent className="max-h-[90vh]">
        <DrawerHeader>
          <DrawerTitle>Get a Quote</DrawerTitle>
        </DrawerHeader>
        <div className="overflow-y-auto px-4 pb-4">
          <QuoteForm />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default QuoteFormModal;
