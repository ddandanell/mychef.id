import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, FileText, ArrowRight, Sparkles } from 'lucide-react';
import { useLocation } from 'wouter';

interface ContactChoiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  source?: string;
}

export function ContactChoiceDialog({ open, onOpenChange, source = 'default' }: ContactChoiceDialogProps) {
  const [, setLocation] = useLocation();

  const handleGetQuote = () => {
    onOpenChange(false);
    setLocation('/quote');
  };

  const handleChatDirectly = () => {
    onOpenChange(false);
    setLocation(`/contact/confirm?source=${source}`);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl sm:text-3xl font-bold text-center">
            How would you like to proceed?
          </DialogTitle>
          <DialogDescription className="text-center text-base pt-2">
            Choose the option that works best for you
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 sm:gap-6 pt-4 pb-2">
          {/* Option 1: Get a Quote (Funnel) */}
          <Card 
            className="cursor-pointer transition-all overflow-visible hover-elevate active-elevate-2 border-2 hover:border-primary/50"
            onClick={handleGetQuote}
            data-testid="card-option-get-quote"
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Get a Detailed Quote</h3>
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Answer a few quick questions to help us understand your needs. We'll prepare a personalized quote and contact you within 24 hours.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 pt-2">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Takes only 2-3 minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Accurate pricing based on your requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Perfect chef match guaranteed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Option 2: Chat Directly */}
          <Card 
            className="cursor-pointer transition-all overflow-visible hover-elevate active-elevate-2 border-2 hover:border-primary/50"
            onClick={handleChatDirectly}
            data-testid="card-option-chat-directly"
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Chat with Us on WhatsApp</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Have questions or prefer to discuss your event directly? Start a conversation with our team on WhatsApp right now.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 pt-2">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Instant responses during business hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Ask any questions you have</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Flexible, conversational approach</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center text-xs text-muted-foreground pt-2">
          You can switch between options at any time
        </div>
      </DialogContent>
    </Dialog>
  );
}
