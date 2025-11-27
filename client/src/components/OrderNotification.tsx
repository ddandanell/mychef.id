import { useEffect, useState } from 'react';
import { X, Star } from 'lucide-react';

interface OrderNotificationData {
  id: string;
  family: string;
  location: string;
  chef: string;
  timestamp: number;
}

interface OrderNotificationProps {
  order: OrderNotificationData | null;
}

export default function OrderNotification({ order }: OrderNotificationProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (order) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 25000); // 25 seconds

      return () => clearTimeout(timer);
    }
  }, [order]);

  if (!visible || !order) return null;

  return (
    <div
      className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-50 animate-slide-in-left"
      style={{
        animation: 'slideInLeft 0.3s ease-out forwards',
      }}
    >
      <div className="bg-white dark:bg-slate-950 border border-primary/30 rounded-lg shadow-lg p-3 md:p-4 max-w-xs hover-elevate transition-all">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-2 flex-1 min-w-0">
            <Star className="w-4 h-4 text-primary flex-shrink-0 mt-0.5 fill-primary" />
            <div className="min-w-0">
              <p className="text-xs md:text-sm font-semibold text-foreground truncate">
                {order.family} - {order.location}
              </p>
              <p className="text-xs text-foreground/60 truncate">
                {order.chef} chef ordering
              </p>
              <p className="text-xs text-primary mt-1">Just now</p>
            </div>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="flex-shrink-0 text-foreground/40 hover:text-foreground/60 transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
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
