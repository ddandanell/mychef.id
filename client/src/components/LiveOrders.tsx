import { useEffect, useState } from 'react';
import { TrendingUp, MapPin } from 'lucide-react';

interface Order {
  id: string;
  family: string;
  location: string;
  timestamp: number;
}

const FAMILIES = [
  { family: 'Ubud Family', location: 'Ubud' },
  { family: 'Seminyak Guests', location: 'Seminyak' },
  { family: 'Canggu Celebration', location: 'Canggu' },
  { family: 'Sanur Visitors', location: 'Sanur' },
  { family: 'Jimbaran Group', location: 'Jimbaran' },
  { family: 'Kuta Party', location: 'Kuta' },
  { family: 'Legian Friends', location: 'Legian' },
  { family: 'Uluwatu Gathering', location: 'Uluwatu' },
];

export default function LiveOrders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Add initial order
    const initialOrder: Order = {
      id: '1',
      family: FAMILIES[0].family,
      location: FAMILIES[0].location,
      timestamp: Date.now(),
    };
    setOrders([initialOrder]);

    // Add new order every 2 minutes (120000ms)
    const interval = setInterval(() => {
      setOrders(prev => {
        const randomFamily = FAMILIES[Math.floor(Math.random() * FAMILIES.length)];
        const newOrder: Order = {
          id: String(Date.now()),
          family: randomFamily.family,
          location: randomFamily.location,
          timestamp: Date.now(),
        };
        
        // Dispatch custom event for notification
        const chefs = ['Sushi', 'French', 'Italian', 'Indonesian', 'Thai', 'Spanish', 'Mediterranean', 'Fusion', 'Indian'];
        const randomChef = chefs[Math.floor(Math.random() * chefs.length)];
        
        window.dispatchEvent(new CustomEvent('orderUpdate', {
          detail: {
            id: newOrder.id,
            family: newOrder.family,
            location: newOrder.location,
            chef: randomChef,
          }
        }));
        
        // Keep only last 3 orders
        return [newOrder, ...prev.slice(0, 2)];
      });
    }, 120000); // 2 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-4 md:p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-primary animate-pulse" />
        <h3 className="text-sm md:text-base font-bold">New Bookings in Real-Time</h3>
      </div>

      <div className="space-y-2">
        {orders.map((order, index) => (
          <div
            key={order.id}
            className="flex items-center gap-3 p-3 bg-white dark:bg-slate-950 rounded-lg border border-primary/20 animate-slide-in hover-elevate transition-all"
            style={{
              animation: `slideIn 0.3s ease-out ${index * 0.1}s both`,
            }}
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <div className="flex-1 min-w-0">
              <p className="text-xs md:text-sm font-semibold truncate">{order.family}</p>
              <div className="flex items-center gap-1 text-xs text-foreground/60">
                <MapPin className="w-3 h-3 flex-shrink-0" />
                <span className="truncate">{order.location}</span>
              </div>
            </div>
            <span className="text-xs text-primary font-semibold whitespace-nowrap">Just now</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
