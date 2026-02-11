/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export const HeroVisual = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Subtle rotation based on mouse position
  const rotateX = useTransform(springY, [-300, 300], [10, -10]);
  const rotateY = useTransform(springX, [-300, 300], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        style={{
          rotateX,
          rotateY,
          perspective: 1000,
        }}
        className="relative w-64 h-64 md:w-96 md:h-96"
      >
        {/* Core Glow */}
        <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full animate-pulse" />

        {/* Floating Rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border border-accent/20 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: {
                duration: 10 + i * 5,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              },
            }}
            style={{
              padding: `${i * 20}px`,
              margin: `${i * 10}px`,
            }}
          />
        ))}

        {/* Central Core */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-32 h-32 md:w-48 md:h-48 glass-card border-accent/30 flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />

            {/* Inner Rotating Shape */}
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-16 h-16 md:w-24 md:h-24 border-2 border-dashed border-accent/50 rounded-xl"
            />

            {/* Floating Particles/Dots */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-accent rounded-full"
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.5, 1],
                  x: [0, (i % 2 === 0 ? 1 : -1) * 40, 0],
                  y: [0, (i % 3 === 0 ? 1 : -1) * 40, 0],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* External Decorative Elements */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 glass-card border-accent/40" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent/40" />
        </motion.div>

        {/* Floating Chat Bubbles & Tags */}
        <FloatingElement
          delay={0}
          className="top-0 -right-12 md:-right-20"
          mouseX={springX}
          mouseY={springY}
          parallaxFactor={0.15}
        >
          <div className="px-4 py-2 glass-card border-accent/30 text-[10px] md:text-xs font-semibold text-accent flex items-center gap-2 whitespace-nowrap shadow-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Vibe: Creative Logic
          </div>
        </FloatingElement>

        <FloatingElement
          delay={1.5}
          className="bottom-12 -left-16 md:-left-24"
          mouseX={springX}
          mouseY={springY}
          parallaxFactor={-0.1}
        >
          <div className="px-4 py-2 glass-card border-white/10 text-[10px] md:text-xs font-medium text-white/80 backdrop-blur-md shadow-xl rotate-[-5deg]">
            Crafting Experiences ⚡️
          </div>
        </FloatingElement>

        <FloatingElement
          delay={3}
          className="top-1/2 -translate-y-1/2 -right-24 md:-right-32"
          mouseX={springX}
          mouseY={springY}
          parallaxFactor={0.2}
        >
          <div className="p-3 glass-card border-accent/20 rounded-2xl flex flex-col gap-1 shadow-2xl scale-90 md:scale-100">
            <div className="w-8 h-1 bg-accent/30 rounded-full" />
            <div className="w-12 h-1 bg-white/10 rounded-full" />
            <div className="w-6 h-1 bg-white/10 rounded-full" />
          </div>
        </FloatingElement>

        <FloatingElement
          delay={4.5}
          className="-top-10 -left-10"
          mouseX={springX}
          mouseY={springY}
          parallaxFactor={0.05}
        >
          <div className="w-10 h-10 md:w-12 md:h-12 glass-card border-accent/40 rounded-full flex items-center justify-center text-lg shadow-inner">
            ✨
          </div>
        </FloatingElement>
      </motion.div>
    </div>
  );
};

// Helper component for floating animation with parallax
const FloatingElement = ({
  children,
  className,
  delay = 0,
  mouseX,
  mouseY,
  parallaxFactor = 0.05,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  mouseX: any;
  mouseY: any;
  parallaxFactor?: number;
}) => {
  const x = useTransform(mouseX, (val: number) => val * parallaxFactor);
  const y = useTransform(mouseY, (val: number) => val * parallaxFactor);

  return (
    <motion.div
      style={{ x, y }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        opacity: { duration: 1, delay },
        scale: { duration: 1, delay },
      }}
      className={`absolute z-20 ${className}`}
    >
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
          x: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
