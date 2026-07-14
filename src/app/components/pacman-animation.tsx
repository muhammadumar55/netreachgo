import { motion } from 'motion/react';

export function PacmanAnimation() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
      {/* Pac-Man */}
      <motion.div
        className="absolute"
        style={{
          top: '30%',
          left: '-100px',
        }}
        animate={{
          left: ['-100px', 'calc(100% + 100px)'],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "linear",
        }}
      >
        {/* Pac-Man mouth animation */}
        <motion.div
          className="relative w-16 h-16"
          animate={{
            rotate: [0, 0, 0, 0],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {/* Pac-Man body */}
          <div className="absolute inset-0 bg-yellow-400 rounded-full"
               style={{
                 clipPath: 'polygon(100% 50%, 50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 50% 50%)'
               }}
          />
          {/* Pac-Man mouth (animated) */}
          <motion.div
            className="absolute inset-0 bg-black origin-left"
            style={{
              clipPath: 'polygon(0% 50%, 100% 0%, 100% 100%)',
              transformOrigin: '0% 50%',
            }}
            animate={{
              scaleY: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          {/* Eye */}
          <div className="absolute w-2 h-2 bg-black rounded-full top-3 right-3" />
        </motion.div>
      </motion.div>

      {/* Ghost 1 - Red */}
      <motion.div
        className="absolute"
        style={{
          top: '30%',
          left: '-180px',
        }}
        animate={{
          left: ['-180px', 'calc(100% + 180px)'],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "linear",
          delay: 0.3,
        }}
      >
        <div className="relative w-14 h-14">
          {/* Ghost body */}
          <div className="absolute top-0 left-0 w-14 h-10 bg-red-500 rounded-t-full" />
          <div className="absolute bottom-0 left-0 w-14 h-6 bg-red-500" />
          {/* Ghost wave bottom */}
          <div className="absolute bottom-0 left-0 w-full h-2 flex">
            <div className="w-1/3 h-full bg-red-500 rounded-b-full" />
            <div className="w-1/3 h-full bg-black" />
            <div className="w-1/3 h-full bg-red-500 rounded-b-full" />
          </div>
          {/* Eyes */}
          <div className="absolute top-2 left-2 w-2 h-3 bg-white rounded-full">
            <div className="absolute w-1 h-1 bg-blue-900 rounded-full top-1 left-0.5" />
          </div>
          <div className="absolute top-2 right-2 w-2 h-3 bg-white rounded-full">
            <div className="absolute w-1 h-1 bg-blue-900 rounded-full top-1 left-0.5" />
          </div>
        </div>
      </motion.div>

      {/* Ghost 2 - Pink */}
      <motion.div
        className="absolute"
        style={{
          top: '30%',
          left: '-260px',
        }}
        animate={{
          left: ['-260px', 'calc(100% + 260px)'],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "linear",
          delay: 0.6,
        }}
      >
        <div className="relative w-14 h-14">
          {/* Ghost body */}
          <div className="absolute top-0 left-0 w-14 h-10 bg-pink-400 rounded-t-full" />
          <div className="absolute bottom-0 left-0 w-14 h-6 bg-pink-400" />
          {/* Ghost wave bottom */}
          <div className="absolute bottom-0 left-0 w-full h-2 flex">
            <div className="w-1/3 h-full bg-pink-400 rounded-b-full" />
            <div className="w-1/3 h-full bg-black" />
            <div className="w-1/3 h-full bg-pink-400 rounded-b-full" />
          </div>
          {/* Eyes */}
          <div className="absolute top-2 left-2 w-2 h-3 bg-white rounded-full">
            <div className="absolute w-1 h-1 bg-blue-900 rounded-full top-1 left-0.5" />
          </div>
          <div className="absolute top-2 right-2 w-2 h-3 bg-white rounded-full">
            <div className="absolute w-1 h-1 bg-blue-900 rounded-full top-1 left-0.5" />
          </div>
        </div>
      </motion.div>

      {/* Ghost 3 - Cyan */}
      <motion.div
        className="absolute"
        style={{
          top: '30%',
          left: '-340px',
        }}
        animate={{
          left: ['-340px', 'calc(100% + 340px)'],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "linear",
          delay: 0.9,
        }}
      >
        <div className="relative w-14 h-14">
          {/* Ghost body */}
          <div className="absolute top-0 left-0 w-14 h-10 bg-cyan-400 rounded-t-full" />
          <div className="absolute bottom-0 left-0 w-14 h-6 bg-cyan-400" />
          {/* Ghost wave bottom */}
          <div className="absolute bottom-0 left-0 w-full h-2 flex">
            <div className="w-1/3 h-full bg-cyan-400 rounded-b-full" />
            <div className="w-1/3 h-full bg-black" />
            <div className="w-1/3 h-full bg-cyan-400 rounded-b-full" />
          </div>
          {/* Eyes */}
          <div className="absolute top-2 left-2 w-2 h-3 bg-white rounded-full">
            <div className="absolute w-1 h-1 bg-blue-900 rounded-full top-1 left-0.5" />
          </div>
          <div className="absolute top-2 right-2 w-2 h-3 bg-white rounded-full">
            <div className="absolute w-1 h-1 bg-blue-900 rounded-full top-1 left-0.5" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
