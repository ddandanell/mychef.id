import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, ChefHat, Clock } from 'lucide-react';
import { useState } from 'react';

interface QuoteSubmission {
  id: string;
  serviceType: string;
  occasion: string;
  venueName: string | null;
  street: string | null;
  city: string | null;
  region: string | null;
  postalCode: string | null;
  country: string | null;
  addressSkipped: boolean;
  guestCount: string;
  additionalServices: string[];
  cuisine: string;
  dateMode: string;
  selectedDates: string[];
  timeOfDay: string;
  foodPreferences: string | null;
  moodDescription: string | null;
  status: string;
  createdAt: string;
}

export default function AdminQuotes() {
  const [selectedQuote, setSelectedQuote] = useState<string | null>(null);

  const { data: quotes, isLoading } = useQuery<QuoteSubmission[]>({
    queryKey: ['/api/quotes'],
  });

  const selectedQuoteData = quotes?.find(q => q.id === selectedQuote);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading quotes...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Quote Submissions</h1>
          <p className="text-muted-foreground">
            {quotes?.length || 0} total submissions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* List of quotes */}
          <div className="space-y-4">
            {quotes?.map((quote) => (
              <Card
                key={quote.id}
                className={`
                  cursor-pointer transition-all
                  hover-elevate active-elevate-2
                  ${selectedQuote === quote.id ? 'border-2 border-primary' : ''}
                `}
                onClick={() => setSelectedQuote(quote.id)}
                data-testid={`card-quote-${quote.id}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg capitalize">
                        {quote.occasion.replace(/-/g, ' ')}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {new Date(quote.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                    <Badge
                      variant={quote.status === 'new' ? 'default' : 'secondary'}
                      data-testid={`badge-status-${quote.id}`}
                    >
                      {quote.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>
                        {quote.addressSkipped 
                          ? 'Address TBD' 
                          : `${quote.venueName || 'No venue'}, ${quote.city || 'No city'}`
                        }
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{quote.guestCount} guests</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <ChefHat className="w-4 h-4" />
                      <span className="capitalize">{quote.cuisine}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {quotes?.length === 0 && (
              <Card>
                <CardContent className="pt-6 text-center text-muted-foreground">
                  No quote submissions yet
                </CardContent>
              </Card>
            )}
          </div>

          {/* Detail view */}
          <div className="lg:sticky lg:top-4 lg:self-start">
            {selectedQuoteData ? (
              <Card>
                <CardHeader>
                  <CardTitle>Quote Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Status</p>
                    <Badge variant={selectedQuoteData.status === 'new' ? 'default' : 'secondary'}>
                      {selectedQuoteData.status}
                    </Badge>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Occasion</p>
                    <p className="capitalize">{selectedQuoteData.occasion.replace(/-/g, ' ')}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Service Type</p>
                    <p className="capitalize">{selectedQuoteData.serviceType}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Location</p>
                    {selectedQuoteData.addressSkipped ? (
                      <p className="text-sm text-muted-foreground italic">Address to be provided later</p>
                    ) : (
                      <>
                        <p className="font-medium">{selectedQuoteData.venueName}</p>
                        <p className="text-sm">{selectedQuoteData.street}</p>
                        <p className="text-sm">{selectedQuoteData.city}, {selectedQuoteData.region}</p>
                        {selectedQuoteData.postalCode && (
                          <p className="text-sm">{selectedQuoteData.postalCode}</p>
                        )}
                        {selectedQuoteData.country && (
                          <p className="text-sm font-medium mt-1">{selectedQuoteData.country}</p>
                        )}
                      </>
                    )}
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Guest Count</p>
                    <p>{selectedQuoteData.guestCount} people</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Additional Services</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedQuoteData.additionalServices.map((service) => (
                        <Badge key={service} variant="outline">
                          {service.replace(/-/g, ' ')}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Cuisine</p>
                    <p className="capitalize">{selectedQuoteData.cuisine}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Event Dates</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedQuoteData.selectedDates.map((date, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm bg-muted px-3 py-1 rounded-md">
                          <Calendar className="w-3 h-3" />
                          {new Date(date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Time of Day</p>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="capitalize">{selectedQuoteData.timeOfDay}</span>
                    </div>
                  </div>

                  {selectedQuoteData.foodPreferences && (
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Food Preferences</p>
                      <p className="text-sm bg-muted p-3 rounded-md">
                        {selectedQuoteData.foodPreferences}
                      </p>
                    </div>
                  )}

                  {selectedQuoteData.moodDescription && (
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Mood & Atmosphere</p>
                      <p className="text-sm bg-muted p-3 rounded-md">
                        {selectedQuoteData.moodDescription}
                      </p>
                    </div>
                  )}

                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Submitted</p>
                    <p className="text-sm">
                      {new Date(selectedQuoteData.createdAt).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="pt-6 text-center text-muted-foreground">
                  Select a quote to view details
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
