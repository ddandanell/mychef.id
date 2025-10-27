import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, ChefHat, Clock } from 'lucide-react';
import { useState } from 'react';

interface QuoteSubmission {
  id: string;
  serviceType: string;
  
  // Common fields
  venueName: string | null;
  street: string | null;
  city: string | null;
  region: string | null;
  postalCode: string | null;
  country: string | null;
  addressSkipped: boolean;
  additionalNotes: string | null;
  
  // Single service fields
  occasion: string | null;
  guestCount: string | null;
  additionalServices: string[] | null;
  cuisine: string | null;
  dateMode: string | null;
  selectedDates: string[] | null;
  timeOfDay: string | null;
  foodPreferences: string | null;
  moodDescription: string | null;
  
  // Multiple service fields
  recurringServiceType: string | null;
  serviceDuration: string | null;
  peopleCount: string | null;
  dietaryFocus: string | null;
  chefQualities: string | null;
  budgetRange: string | null;
  startDate: string | null;
  
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
                        {quote.serviceType === 'single' 
                          ? quote.occasion?.replace(/-/g, ' ') || 'Single Service'
                          : quote.recurringServiceType?.replace(/-/g, ' ') || 'Multiple Services'
                        }
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
                    <div className="flex flex-col items-end gap-2">
                      <Badge
                        variant={quote.status === 'new' ? 'default' : 'secondary'}
                        data-testid={`badge-status-${quote.id}`}
                      >
                        {quote.status}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {quote.serviceType}
                      </Badge>
                    </div>
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
                    {quote.serviceType === 'single' ? (
                      <>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="w-4 h-4" />
                          <span>{quote.guestCount} guests</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <ChefHat className="w-4 h-4" />
                          <span className="capitalize">{quote.cuisine}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="w-4 h-4" />
                          <span>{quote.peopleCount} people</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{quote.serviceDuration?.replace(/-/g, ' ')}</span>
                        </div>
                      </>
                    )}
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
                    <p className="text-sm font-medium text-muted-foreground mb-1">Service Type</p>
                    <p className="capitalize">{selectedQuoteData.serviceType}</p>
                  </div>

                  {selectedQuoteData.serviceType === 'single' ? (
                    <>
                      {/* Single Service Details */}
                      {selectedQuoteData.occasion && (
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">Occasion</p>
                          <p className="capitalize">{selectedQuoteData.occasion.replace(/-/g, ' ')}</p>
                        </div>
                      )}

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

                      {selectedQuoteData.guestCount && (
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">Guest Count</p>
                          <p>{selectedQuoteData.guestCount} people</p>
                        </div>
                      )}

                      {selectedQuoteData.additionalServices && selectedQuoteData.additionalServices.length > 0 && (
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
                      )}

                      {selectedQuoteData.cuisine && (
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">Cuisine</p>
                          <p className="capitalize">{selectedQuoteData.cuisine}</p>
                        </div>
                      )}

                      {selectedQuoteData.selectedDates && selectedQuoteData.selectedDates.length > 0 && (
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
                      )}

                      {selectedQuoteData.timeOfDay && (
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">Time of Day</p>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span className="capitalize">{selectedQuoteData.timeOfDay}</span>
                          </div>
                        </div>
                      )}

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
                    </>
                  ) : (
                    <>
                      {/* Multiple Service Details */}
                      {selectedQuoteData.recurringServiceType && (
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">Recurring Service</p>
                          <p className="capitalize">{selectedQuoteData.recurringServiceType.replace(/-/g, ' ')}</p>
                        </div>
                      )}

                      {selectedQuoteData.serviceDuration && (
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">Duration</p>
                          <p className="capitalize">{selectedQuoteData.serviceDuration.replace(/-/g, ' ')}</p>
                        </div>
                      )}

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

                      {selectedQuoteData.peopleCount && (
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">People Count</p>
                          <p>{selectedQuoteData.peopleCount} people</p>
                        </div>
                      )}

                      {selectedQuoteData.dietaryFocus && (
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">Dietary Focus</p>
                          <p className="capitalize">{selectedQuoteData.dietaryFocus.replace(/-/g, ' ')}</p>
                        </div>
                      )}

                      {selectedQuoteData.chefQualities && (
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">Chef Requirements</p>
                          <p className="text-sm bg-muted p-3 rounded-md whitespace-pre-wrap">
                            {selectedQuoteData.chefQualities}
                          </p>
                        </div>
                      )}

                      {selectedQuoteData.budgetRange && (
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">Budget Range</p>
                          <p>{selectedQuoteData.budgetRange.replace(/-/g, ' ')}</p>
                        </div>
                      )}

                      {selectedQuoteData.startDate && (
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">Start Date</p>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>
                              {new Date(selectedQuoteData.startDate).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </span>
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {selectedQuoteData.additionalNotes && (
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Additional Notes</p>
                      <p className="text-sm bg-muted p-3 rounded-md whitespace-pre-wrap">
                        {selectedQuoteData.additionalNotes}
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
