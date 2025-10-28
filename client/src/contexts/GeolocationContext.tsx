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

    // Fetch geolocation data
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        const detectedCity = data.city || '';
        const detectedRegion = data.region || '';
        
        // Check if the detected city is in Bali
        if (BALI_CITIES.some(baliCity => 
          detectedCity.toLowerCase().includes(baliCity.toLowerCase())
        )) {
          setCity(detectedCity);
          localStorage.setItem('userCity', detectedCity);
          localStorage.setItem('userCityTimestamp', now.toString());
        } else if (detectedRegion && detectedRegion.toLowerCase().includes('bali')) {
          // If region is Bali but city not recognized, use generic "Bali"
          setCity('Bali');
          localStorage.setItem('userCity', 'Bali');
          localStorage.setItem('userCityTimestamp', now.toString());
        } else {
          // Default to Bali for non-Bali visitors
          setCity('Bali');
        }
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
