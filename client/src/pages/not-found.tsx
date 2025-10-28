import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  const [, setLocation] = useLocation();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setLocation('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [setLocation]);

  const handleGoHome = () => {
    setLocation('/');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6 pb-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
              <AlertCircle className="h-8 w-8 text-destructive" />
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-4" data-testid="text-404-title">
            404 - Page Not Found
          </h1>

          <p className="text-base text-foreground/70 mb-6">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>

          <div className="bg-muted rounded-lg p-4 mb-6">
            <p className="text-sm text-foreground/80">
              Redirecting to homepage in <span className="font-bold text-primary text-lg">{countdown}</span> seconds...
            </p>
          </div>

          <Button
            size="lg"
            onClick={handleGoHome}
            className="w-full hover-elevate active-elevate-2"
            data-testid="button-go-home"
          >
            <Home className="w-5 h-5 mr-2" />
            Go to Homepage Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
