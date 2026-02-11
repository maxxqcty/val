import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Image as ImageIcon, ChevronRight, ChevronLeft, Gift } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for merging classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Page Data Interface
interface PageData {
  id: number;
  text: string;
  placeholderLabel: string;
  content: string;
  bgImage: string;
  pinImage?: string; // NEW
}

const pages: PageData[] = [
  { 
    id: 1, 
    text: "Happy Valentine's Day! 💜", 
    placeholderLabel: "Cover Image",
    content: "",
    bgImage: "/src/styles/assets/page1.jpg",
     pinImage: "/src/styles/assets/pin2.jpg"
  },
  { 
    id: 2, 
    text: "Adventure Awaits", 
    placeholderLabel: "Sweet Memory",
    content: "HAShahahahhahahaha hi hello ako pala eto ang your not so secret admirer/mego_nako_nah nga si axel the great. I just want to greet you happy valentine's day kay trip ra nako. Bitaw in all seriousness, I'd like to express my sincere gratitude for your existence through this sloppy digital card. Watch me cook ehehe",
    bgImage: "/src/styles/assets/paper.jpg",
     pinImage: "/src/styles/assets/pin1.jpg"
  },
  { 
    id: 3, 
    text: "Magic Moments ✨", 
    placeholderLabel: "Magic Moment",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    bgImage: "/src/styles/assets/paper.jpg",
     pinImage: "/src/styles/assets/pin1.jpg"
  },
  { 
    id: 4, 
    text: "Dream Big", 
    placeholderLabel: "Dream Big",
    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
    bgImage: "/src/styles/assets/paper.jpg",
     pinImage: "/src/styles/assets/pin1.jpg"
  },
  { 
    id: 5, 
    text: "Forever & Always 💫", 
    placeholderLabel: "Signature",
    content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    bgImage: "/src/styles/assets/paper.jpg",
     pinImage: "/src/styles/assets/pin1.jpg"
  },
];

type Stage = 'intro' | 'rotating' | 'stopping' | 'reveal';

export function Flipbook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [stage, setStage] = useState<Stage>('intro');

  // Sequence Controller
  useEffect(() => {
    if (stage === 'rotating') {
      // Rotate for 4 seconds then stop (Slower, longer rotation)
      const timer = setTimeout(() => {
        setStage('stopping');
      }, 4000);
      return () => clearTimeout(timer);
    }
    if (stage === 'stopping') {
      // Pause for a moment (1s) before explosion
      const timer = setTimeout(() => {
        setStage('reveal');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <div 
  style={{ backgroundImage: "url(src/styles/assets/bg3.jpg)" }}
  className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-purple-100 p-4 font-sans overflow-hidden relative"
>
      {/* Ambient Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-900/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-900/20 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Floating Sparkles (Background) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkle id="s1" className="top-10 left-10 text-purple-400" delay={0} />
        <Sparkle id="s2" className="top-1/3 right-8 text-pink-400" delay={2} />
        <Sparkle id="s3" className="bottom-20 left-12 text-violet-400" delay={1} />
        <Sparkle id="s4" className="top-20 right-1/2 text-purple-300" size={12} delay={3} />
      </div>

      <AnimatePresence mode="wait">
        {stage === 'intro' && (
          <motion.div 
            key="intro"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="z-50 flex flex-col items-center justify-center gap-6 cursor-pointer"
            onClick={() => setStage('rotating')}
          >
             <motion.div 
               animate={{ 
                 y: [0, -10, 0],
                 rotate: [0, 5, -5, 0],
                 scale: [1, 1.1, 1]
               }}
               transition={{ 
                 duration: 4, 
                 repeat: Infinity,
                 ease: "easeInOut"
               }}
               className="p-6 rounded-full bg-purple-500/10 border border-purple-400/30 backdrop-blur-md shadow-[0_0_30px_rgba(168,85,247,0.4)]"
             >
                <Gift size={48} className="text-purple-300" />
             </motion.div>
             
             <div className="text-center space-y-2">
               <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent animate-pulse">
                 Click for a surprise ✨
               </h1>
               <p className="text-purple-300/60 text-sm tracking-widest uppercase">
                 Tap to open
               </p>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Animated Div (The "Surprise" Box) */}
      {stage !== 'intro' && (
        <>
          <motion.div
          className={cn(
  "fixed z-50 flex items-center justify-center rounded-2xl overflow-hidden",
  "bg-purple-500/10 backdrop-blur-sm shadow-[0_0_40px_rgba(168,85,247,0.3)]"
)}

            initial={{ 
              top: '50%', 
              left: '50%', 
              x: '-50%', 
              y: '-50%', 
              width: 200, 
              height: 200,
              rotate: 0,
              scale: 0
            }}
            animate={{
              scale: 1,
              // Rotation Logic: Spin during 'rotating', stop at 'stopping', maybe tilt at 'exploding'
              rotate: stage === 'rotating' ? 360 : 0,
              
              // Movement Logic: Move to top-left during 'reveal'
              top: (stage === 'reveal') ? '40px' : '50%',
              left: (stage === 'reveal') ? '40px' : '50%',
              x: (stage === 'reveal') ? '0%' : '-50%',
              y: (stage === 'reveal') ? '0%' : '-50%',
              width: (stage === 'reveal') ? 70 : 260,
              height: (stage === 'reveal') ? 70 : 260,
              borderRadius: (stage === 'reveal') ? '50%' : '16px',
            }}
            transition={{
              rotate: stage === 'rotating' ? { duration: 4, ease: "linear", repeat: Infinity } : { duration: 0.5 },
              default: { duration: 1.5, ease: [0.34, 1.56, 0.64, 1] } // Slower movement
            }}
          >
           <img
    src="src/styles/assets/flower2.jpg"
    alt="Logo"
  className={cn(
    "w-full h-full object-contain transition-all duration-500",
    stage === "reveal" ? "p-1" : "p-4"
  )}
/>
          </motion.div>

          {/* Rose Explosion */}
          {stage === 'reveal' && (
            <div className="fixed inset-0 pointer-events-none z-40 flex items-center justify-center">
               {Array.from({ length: 40 }).map((_, i) => (
                 <RoseParticle key={i} index={i} total={40} />
               ))}
            </div>
          )}
        </>
      )}

      {/* Main Flipbook Card */}
      <AnimatePresence>
        {stage === 'reveal' && (
          <motion.div
            key="card-container"
            className="flex flex-col items-center justify-center z-10 w-full"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          >
            {/* Main Card Container with Perspective */}
            <div className="relative w-full max-w-[340px] aspect-[3/4] perspective-[1500px] rotate-[-3deg]">
              {pages.map((page, index) => (
                <FlipPage 
                  key={page.id} 
                  data={page} 
                  index={index} 
                  currentPage={currentPage}
                  zIndex={pages.length - index}
                  onNext={handleNext}
                />
              ))}
            </div>

            {/* Navigation / Pagination */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-12 flex flex-col items-center gap-4"
            >
              <div className="flex gap-2">
                {pages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      i === currentPage 
                        ? "bg-purple-400 scale-125 shadow-[0_0_10px_rgba(192,132,252,0.6)]" 
                        : "bg-purple-900/50 hover:bg-purple-700"
                    )}
                    aria-label={`Go to page ${i + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex items-center gap-6 text-purple-300">
                <button 
                  onClick={handlePrev}
                  disabled={currentPage === 0}
                  className="p-3 rounded-full hover:bg-white/5 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                >
                  <ChevronLeft size={28} />
                </button>
                <span className="text-sm font-medium tracking-widest uppercase opacity-70">
                  {currentPage + 1} / {pages.length}
                </span>
                <button 
                  onClick={handleNext}
                  disabled={currentPage === pages.length - 1}
                  className="p-3 rounded-full hover:bg-white/5 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                >
                  <ChevronRight size={28} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function RoseParticle({ index, total }: { index: number, total: number }) {
  // Random angle and distance
  const angle = (Math.random() * 360) * (Math.PI / 180);
  const distance = 200 + Math.random() * 500; // Fly out between 200px and 700px
  
  const tx = Math.cos(angle) * distance;
  const ty = Math.sin(angle) * distance;
  
  return (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
      animate={{ 
        x: tx, 
        y: ty, 
        opacity: [0, 1, 1, 0], 
        scale: [0, 1.5, 0.5],
        rotate: Math.random() * 720
      }}
      transition={{ 
        duration: 3 + Math.random() * 2, 
        ease: "easeOut",
        times: [0, 0.1, 0.8, 1] 
      }}
      className="absolute text-2xl"
    >
      🌹
    </motion.div>
  )
}

function FlipPage({ data, index, currentPage, zIndex, onNext }: { 
  data: PageData; 
  index: number; 
  currentPage: number; 
  zIndex: number;
  onNext: () => void;
}) {
  const isFlipped = index < currentPage;
  
  return (
    <motion.div
      onClick={() => { if (index === currentPage) onNext() }}
      className={cn(
        "absolute inset-0 w-full h-full cursor-pointer",
        "bg-gradient-to-br from-violet-900 to-black", 
        "border border-white/10 rounded-[32px]",
        "shadow-[0_4px_20px_-2px_rgba(0,0,0,0.6)]",
        // Enhanced shadow for depth
        "[backface-visibility:hidden] overflow-hidden origin-left" 
      )}
      style={{ 
        zIndex,
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateY: isFlipped ? -180 : 0,
        x: isFlipped ? -40 : 0, 
        // Subtle random rotation for stack effect when active
        rotateZ: index === currentPage ? 0 : (index - currentPage) * 1.5,
        scale: index === currentPage ? 1 : 0.95 + (0.01 * (pages.length - index)),
      }}
      transition={{
        // Slower, smoother spring animation
        type: "spring",
        stiffness: 45,
        damping: 18,
        mass: 1.2,
        restDelta: 0.001
      }}
    >
      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-white/[0.03] pointer-events-none" />
      
      {/* Decorative Pinned Image Corners */}
      {/* Top Right Corner Pin */}
      <div className={cn(
        "absolute top-10 right-10 w-20 h-20 bg-white/5 border-6 border-white shadow-lg transform rotate-6 z-10",
        "flex items-center justify-center rounded-sm"
      )}>
    <div className="w-full h-full bg-purple-900/40 flex items-center justify-center overflow-hidden rounded-sm">
  <img 
    src={data.pinImage}   // Or a separate property like `pinImage`
    alt="Pinned"
    className="w-full h-full object-cover rounded-sm"
  />
</div>

        {/* Pin Head */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-400 shadow-[2px_2px_4px_rgba(0,0,0,0.3)] z-20 flex items-center justify-center">
             <div className="w-1 h-1 bg-white/60 rounded-full ml-1 mb-1" />
        </div>
      </div>

       {/* Bottom Left Corner Pin (Only on some pages for variety) */}
       {index % 2 !== 0 && (
         <div className={cn(
          "absolute bottom-20 left-4 w-16 h-16 bg-white/5 border-4 border-white p-1 shadow-lg transform -rotate-12 z-10",
          "flex items-center justify-center rounded-sm"
        )}>
          <div className="w-full h-full bg-indigo-900/40" />
           {/* Pin Head */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-yellow-400 shadow-[2px_2px_4px_rgba(0,0,0,0.3)] z-20 flex items-center justify-center">
               <div className="w-1 h-1 bg-white/60 rounded-full ml-1 mb-1" />
          </div>
        </div>
       )}

      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center p-8 gap-8">
        
        {/* Main Note Card */}
        <div className="relative group cursor-pointer transform rotate-1 transition-transform hover:scale-[1.02] hover:rotate-0 duration-300">
           {/* Tape element */}
           <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/20 backdrop-blur-sm transform -rotate-2 z-20 shadow-sm" />
           
           <div className={cn(
             "w-64 h-64 bg-white p-3 shadow-xl rounded-sm flex flex-col gap-2",
             "transform transition-all"
           )}>
             {/* Text Content Area inside the Polaroid */}
             <div
  className="flex-1 p-6 overflow-hidden relative rounded-sm flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: `url(${data.bgImage})` }}
>

                <div className="absolute inset-0 bg-purple-500/5" />
            <p
  className={cn(
    "relative z-10 text-purple-900/80 font-serif leading-relaxed text-center italic",
    data.content.length > 150 ? "text-xs" : "text-sm"
  )}
>
  "{data.content}"
</p>

             </div>
             
             {/* Caption space on polaroid */}
             <div className="h-6 flex items-center justify-center">
                <div className="h-2 w-1/3 bg-purple-100 rounded-full" />
             </div>
           </div>
        </div>

        {/* Heading Text Content */}
        <div className="text-center space-y-4 max-w-[280px] z-10">
          <h2 className="text-3l font-extrabold text-white leading-tight drop-shadow-[0_2px_10px_rgba(168,85,247,0.5)]">
            {data.text}
          </h2>
          <p className="text-purple-200/80 text-sm font-medium">
             Tap to flip ✨
          </p>
        </div>

      </div>

      {/* Edge Highlight (Spine) */}
      <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-gradient-to-r from-white/10 to-transparent" />
      
      {/* Shine Effect on turn */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 pointer-events-none"
        animate={{ opacity: isFlipped ? [0, 1, 0] : 0 }}
        transition={{ duration: 0.8 }}
      />
    </motion.div>
  );
}

// Sparkle Component
function Sparkle({ className, delay = 0, size = 16, id }: { className?: string, delay?: number, size?: number, id: string }) {
  return (
    <motion.div
      className={cn("absolute", className)}
      animate={{
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
        rotate: [0, 45, 90]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    >
      <Sparkles size={size} />
    </motion.div>
  );
}
