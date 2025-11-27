import { motion } from 'framer-motion';

export function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-64 h-64 rounded-full mix-blend-multiply opacity-20"
          style={{
            background: `hsl(142, 76%, ${36 + i * 5}%)`,
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            left: `${i * 20}%`,
            top: `${i * 15}%`,
          }}
        />
      ))}
    </div>
  );
}

export function SideAccents() {
  return (
    <>
      {/* Left side accent */}
      <motion.div
        className="fixed left-0 top-1/4 w-1 h-48 bg-gradient-to-b from-primary to-transparent pointer-events-none hidden lg:block"
        animate={{ height: [200, 300, 200] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Right side accent */}
      <motion.div
        className="fixed right-0 top-1/2 w-1 h-48 bg-gradient-to-b from-primary to-transparent pointer-events-none hidden lg:block"
        animate={{ height: [200, 250, 200] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
    </>
  );
}
