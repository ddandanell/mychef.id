import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface GeolocationContextType {
  city: string;
  isLoading: boolean;
}

const GeolocationContext = createContext<GeolocationContextType>({
  city: 'Bali',
  isLoading: true,
});

export const useGeolocation = () => useContext(GeolocationContext);

// Valid Bali cities we serve
const BALI_CITIES = [
  'Seminyak', 'Canggu', 'Ubud', 'Sanur', 'Nusa Dua', 'Uluwatu',
  'Jimbaran', 'Pererenan', 'Berawa', 'Umalas', 'Kerobokan',
  'Tanah Lot', 'Candidasa', 'Amed', 'Lovina', 'Denpasar',
  'Kuta', 'Legian', 'Tabanan', 'Gianyar', 'Klungkung'
];

export function GeolocationProvider({ children }: { children: ReactNode }) {
  const [city, setCity] = useState<string>('Bali');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if we already have the city in localStorage
    const cachedCity = localStorage.getItem('userCity');
    const cacheTimestamp = localStorage.getItem('userCityTimestamp');
    const now = Date.now();
    const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

    if (cachedCity && cacheTimestamp) {
      const timestamp = parseInt(cacheTimestamp, 10);
      if (now - timestamp < CACHE_DURATION) {
        setCity(cachedCity);
        setIsLoading(false);
        return;
      }
    }

    // Fetch geolocation data from our server endpoint
    // Server gets the user's real IP and calls ipapi.co for super-personalized location
    fetch('/api/geolocation')
      .then(response => response.json())
      .then(data => {
        const detectedCity = data.city || 'Bali';
        
        setCity(detectedCity);
        localStorage.setItem('userCity', detectedCity);
        localStorage.setItem('userCityTimestamp', now.toString());
        setIsLoading(false);
      })
      .catch(() => {
        // On error, default to Bali
        setCity('Bali');
        setIsLoading(false);
      });
  }, []);

  return (
    <GeolocationContext.Provider value={{ city, isLoading }}>
      {children}
    </GeolocationContext.Provider>
  );
}
