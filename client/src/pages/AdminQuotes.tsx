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
  occasionCustom: string | null;
  guestCount: string | null;
  guestCountUnsure: boolean | null;
  guestCountCustom: string | null;
  cuisine: string | null;
  cuisineCustom: string | null;
  selectedDates: string[] | null;
  datesFlexible: boolean | null;
  datesNote: string | null;
  preMeetingRequested: boolean | null;
  
  // Multiple service fields
  recurringServiceType: string | null;
  recurringServiceCustom: string | null;
  serviceDuration: string | null;
  durationFlexible: boolean | null;
  durationNote: string | null;
  peopleCount: string | null;
  peopleCountUnsure: boolean | null;
  peopleCountCustom: string | null;
  startDate: string | null;
  startDateFlexible: boolean | null;
  startDateNote: string | null;
  
  // Full-time chef fields
  guestsPerMeal: string | null;
  guestsPerMealVaries: boolean | null;
  guestsPerMealCustom: string | null;
  mealsNeeded: string[] | null;
  mealTimes: { breakfast?: string; lunch?: string; dinner?: string } | null;
  groceryHandling: string | null;
  groceryPaymentMethod: string | null;
  dietaryRestrictions: string | null;
  workDays: string | null;
  workDaysCustom: string | null;
  
  status: string;
  createdAt: string;
}

export default function AdminQuotes() {
  const [selectedQuote, setSelectedQuote] = useState<string | null>(null);

  const { data: quotes, isLoading } = useQuery<QuoteSubmission[]>({
    queryKey: ['/api/quotes'],
  });

  const selectedQuoteData = quotes?.find(q => q.id === selectedQuote);

  const formatGuestCount = (guestCount: string | null) => {
    if (!guestCount) return '';
    // Only format if the entire string is numeric (custom guest count)
    if (/^\d+$/.test(guestCount)) {
      const num = parseInt(guestCount);
      return `${num} ${num === 1 ? 'person' : 'people'}`;
    }
    // Return as-is for predefined options like "3-6", "13+", etc.
    return guestCount;
  };

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
                          : quote.serviceType === 'fulltime'
                          ? 'Full-time or Part-time Chef'
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
                          <span>{formatGuestCount(quote.guestCount)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <ChefHat className="w-4 h-4" />
                          <span className="capitalize">{quote.cuisine}</span>
                        </div>
                      </>
                    ) : quote.serviceType === 'fulltime' ? (
                      <>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="w-4 h-4" />
                          <span>{quote.guestsPerMeal} {parseInt(quote.guestsPerMeal || '0') === 1 ? 'person' : 'people'} per meal</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{quote.workDays?.replace(/-/g, ' ')}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="w-4 h-4" />
                          <span>{quote.peopleCount} {parseInt(quote.peopleCount || '0') === 1 ? 'person' : 'people'}</span>
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
                          {selectedQuoteData.occasionCustom && (
                            <p className="text-sm text-muted-foreground italic mt-1 bg-muted p-2 rounded">
                              {selectedQuoteData.occasionCustom}
                            </p>
                          )}
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

                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Guest Count</p>
                        {selectedQuoteData.guestCountUnsure && selectedQuoteData.guestCountCustom ? (
                          <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 p-2 rounded">
                            <p className="font-medium text-sm">Flexible / Varies</p>
                            <p className="text-sm text-muted-foreground italic mt-1">
                              {selectedQuoteData.guestCountCustom}
                            </p>
                          </div>
                        ) : selectedQuoteData.guestCount ? (
                          <p>{formatGuestCount(selectedQuoteData.guestCount)}</p>
                        ) : null}
                      </div>

                      {selectedQuoteData.cuisine && (
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">Cuisine</p>
                          <p className="capitalize">{selectedQuoteData.cuisine}</p>
                          {selectedQuoteData.cuisineCustom && (
                            <p className="text-sm text-muted-foreground italic mt-1 bg-muted p-2 rounded">
                              {selectedQuoteData.cuisineCustom}
                            </p>
                          )}
                        </div>
                      )}

                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Pre-Meeting with Chef</p>
                        <div className={`p-3 rounded-md ${selectedQuoteData.preMeetingRequested ? 'bg-primary/10' : 'bg-muted'}`}>
                          <p className="font-medium">
                            {selectedQuoteData.preMeetingRequested ? 'Yes - Pre-meeting requested' : 'No pre-meeting'}
                          </p>
                          {selectedQuoteData.preMeetingRequested && (
                            <p className="text-sm text-muted-foreground mt-1">
                              Chef will arrive 2 hours early for menu planning and grocery shopping (included in hourly rate)
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-2">Event Dates</p>
                        {selectedQuoteData.datesFlexible && selectedQuoteData.datesNote ? (
                          <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 p-2 rounded">
                            <p className="font-medium text-sm">Flexible Dates</p>
                            <p className="text-sm text-muted-foreground italic mt-1">
                              {selectedQuoteData.datesNote}
                            </p>
                          </div>
                        ) : selectedQuoteData.selectedDates && selectedQuoteData.selectedDates.length > 0 ? (
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
                        ) : null}
                      </div>
                    </>
                  ) : selectedQuoteData.serviceType === 'fulltime' ? (
                    <>
                      {/* Full-time Chef Details */}
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Guests per Meal</p>
                        {selectedQuoteData.guestsPerMealVaries && selectedQuoteData.guestsPerMealCustom ? (
                          <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 p-2 rounded">
                            <p className="font-medium text-sm">Number Varies</p>
                            <p className="text-sm text-muted-foreground italic mt-1">
                              {selectedQuoteData.guestsPerMealCustom}
                            </p>
                          </div>
                        ) : selectedQuoteData.guestsPerMeal ? (
                          <p>{selectedQuoteData.guestsPerMeal} {parseInt(selectedQuoteData.guestsPerMeal) === 1 ? 'person' : 'people'}</p>
                        ) : null}
                      </div>

                      {selectedQuoteData.mealsNeeded && selectedQuoteData.mealsNeeded.length > 0 && (
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-2">Meals Needed</p>
                          <div className="space-y-2">
                            {selectedQuoteData.mealsNeeded.map((meal, idx) => {
                              const time = selectedQuoteData.mealTimes?.[meal as 'breakfast' | 'lunch' | 'dinner'];
                              return (
                                <div key={idx} className="flex items-center justify-between bg-muted px-3 py-2 rounded-md">
                                  <span className="capitalize font-medium">{meal}</span>
                                  <span className="text-sm text-muted-foreground">{time ? `${time} WIB` : 'Time TBD'}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {selectedQuoteData.workDays && (
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">Work Days</p>
                          <p className="capitalize">{selectedQuoteData.workDays.replace(/-/g, ' ')}</p>
                          {selectedQuoteData.workDaysCustom && (
                            <p className="text-sm text-muted-foreground italic mt-1 bg-muted p-2 rounded">
                              {selectedQuoteData.workDaysCustom}
                            </p>
                          )}
                        </div>
                      )}

                      {selectedQuoteData.groceryHandling && (
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">Grocery Shopping</p>
                          <div className="bg-muted p-3 rounded-md space-y-2">
                            <p className="font-medium">
                              {selectedQuoteData.groceryHandling === 'mychef-handles' 
                                ? 'myCHEF handles shopping' 
                                : 'Client handles shopping'}
                            </p>
                            {selectedQuoteData.groceryHandling === 'mychef-handles' && (
                              <>
                                <p className="text-sm text-muted-foreground">
                                  Shopping time (1-2 hours) included in working hours
                                </p>
                                {selectedQuoteData.groceryPaymentMethod && (
                                  <p className="text-sm">
                                    <span className="font-medium">Payment: </span>
                                    {selectedQuoteData.groceryPaymentMethod === 'upfront-payment' 
                                      ? 'Client pays upfront to myCHEF' 
                                      : 'Daily/regular cash to chef'}
                                  </p>
                                )}
                              </>
                            )}
                          </div>
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

                      {selectedQuoteData.dietaryRestrictions && (
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">Dietary Restrictions</p>
                          <p className="text-sm bg-muted p-3 rounded-md whitespace-pre-wrap">
                            {selectedQuoteData.dietaryRestrictions}
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
                          {selectedQuoteData.recurringServiceCustom && (
                            <p className="text-sm text-muted-foreground italic mt-1 bg-muted p-2 rounded">
                              {selectedQuoteData.recurringServiceCustom}
                            </p>
                          )}
                        </div>
                      )}

                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Duration</p>
                        {selectedQuoteData.durationFlexible && selectedQuoteData.durationNote ? (
                          <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 p-2 rounded">
                            <p className="font-medium text-sm">Flexible Duration</p>
                            <p className="text-sm text-muted-foreground italic mt-1">
                              {selectedQuoteData.durationNote}
                            </p>
                          </div>
                        ) : selectedQuoteData.serviceDuration ? (
                          <p className="capitalize">{selectedQuoteData.serviceDuration.replace(/-/g, ' ')}</p>
                        ) : null}
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
                        <p className="text-sm font-medium text-muted-foreground mb-1">People Count</p>
                        {selectedQuoteData.peopleCountUnsure && selectedQuoteData.peopleCountCustom ? (
                          <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 p-2 rounded">
                            <p className="font-medium text-sm">Flexible / Varies</p>
                            <p className="text-sm text-muted-foreground italic mt-1">
                              {selectedQuoteData.peopleCountCustom}
                            </p>
                          </div>
                        ) : selectedQuoteData.peopleCount ? (
                          <p>{selectedQuoteData.peopleCount} {parseInt(selectedQuoteData.peopleCount) === 1 ? 'person' : 'people'}</p>
                        ) : null}
                      </div>

                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Start Date</p>
                        {selectedQuoteData.startDateFlexible && selectedQuoteData.startDateNote ? (
                          <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 p-2 rounded">
                            <p className="font-medium text-sm">Flexible Start Date</p>
                            <p className="text-sm text-muted-foreground italic mt-1">
                              {selectedQuoteData.startDateNote}
                            </p>
                          </div>
                        ) : selectedQuoteData.startDate ? (
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
                        ) : null}
                      </div>
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
