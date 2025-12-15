import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type SVGProps,
} from "react"
import { AnimatePresence, motion } from "framer-motion"

// --- Logos (Mock SVGs) ---
const LogoNvidia = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 120 30" fill="currentColor" {...props}>
     <path d="M15.4 22.6c.2-2.5 1.7-4.4 4.1-4.4 2.1 0 3.7 1.5 3.9 4.4h-8zm13.1-6.1c-1.3-1.4-3.4-2.2-5.7-2.2-5.1 0-8.6 3.8-8.6 9 0 5 3.5 8.9 8.6 8.9 2.4 0 4.5-.9 5.8-2.3l.1 2h4V14.5h-4.2v2zM60.6 8.7h-4.4v14.4h-5V14.5h-4.4v8.6h-5V8.7h-4.4v14.4h-5V14.5h-4.4v8.6h-4.9V4h4.9v8.4h4.4V4h5v8.4h4.4V4h5v8.4h4.4V4h4.9v19.1h-4.9V8.7z" />
  </svg>
)

const LogoAdobe = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 120 30" fill="currentColor" {...props}>
    <path d="M9.8 4h5.6l8.9 22H19l-2-5.4H9.5l-2 5.4H2.2L11.1 4h-1.3zm1.6 12.8h4.6l-2.3-6.5-2.3 6.5zm19.7 9.2h-4.8V4h8.3c5.8 0 9.2 3.6 9.2 8.7 0 5.6-4.1 9.4-10 9.4h-2.7v3.9zm3.5-7.7c2.8 0 4.7-1.8 4.7-5.5 0-3.3-1.7-5.1-4.6-5.1h-3.6v10.6h3.5zm18.3 7.7c-5.8 0-9.8-4.2-9.8-10.2s4-10.2 9.8-10.2 9.8 4.2 9.8 10.2-4 10.2-9.8 10.2zm0-3.9c3.2 0 5.1-2.6 5.1-6.3s-1.9-6.3-5.1-6.3-5.1 2.6-5.1 6.3 1.9 6.3 5.1 6.3z" />
  </svg>
)

const LogoVercel = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 120 30" fill="currentColor" {...props}>
    <path d="M30 4L15 26H45L30 4Z" />
    <path d="M60 12h3v14h-3V12zm9 0h3v14h-3V12zm9 0h9v3h-6v3h5v3h-5v5h-3V12zm14 0h8v3h-5v2h5v3h-5v3h5v3h-8V12z" />
  </svg>
)

const LogoStripe = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 120 30" fill="currentColor" {...props}>
    <path d="M10 15c0-1.5 1.2-2.5 3.5-2.5 1.5 0 2.8.5 3.8 1.1l.8-2.6C16.8 10.4 15.3 10 13.7 10c-4.4 0-7.3 2.3-7.3 6.2 0 6 8.3 5 8.3 7.6 0 1.6-1.5 2.3-3.6 2.3-1.8 0-3.4-.6-4.6-1.4l-.9 2.7c1.4.9 3.3 1.4 5.4 1.4 4.6 0 7.6-2.2 7.6-6.3 0-6.4-8.3-5.3-8.3-7.5" />
    <path d="M35 11h-4v10c0 1.4.3 2 1.3 2 .5 0 1-.1 1.4-.3l.6 2.6c-.8.5-1.9.7-2.9.7-2.6 0-4.1-1.3-4.1-4.2V11h-2V8h2V4h3.7v4H35v3zM42 8v3h.1c.8-1.7 2.6-3 4.8-3 1 0 1.9.2 2.5.5l-.8 3.3c-.5-.2-1.2-.4-1.9-.4-2.4 0-4.1 1.7-4.1 4.7v7H39V8h3zM53 8h3.8v15H53V8zm1.9-4.8c1.3 0 2.3.9 2.3 2.1s-1 2.1-2.3 2.1-2.3-.9-2.3-2.1 1-2.1 2.3-2.1" />
  </svg>
)

const LogoSpotify = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 120 30" fill="currentColor" {...props}>
     <circle cx="15" cy="15" r="12" />
     <path fill="#fff" d="M19.5 20.6c-.2.3-.6.4-1 .2-2.7-1.6-6.1-2-10.1-1.1-.4.1-.8-.1-.9-.5-.1-.4.1-.8.5-.9 4.4-1 8.2-.5 11.2 1.3.4.2.4.6.3 1zm1.1-2.5c-.3.4-.8.5-1.2.3-3.1-1.9-7.8-2.5-11.4-1.4-.5.1-1-.1-1.1-.6-.1-.5.1-1 .6-1.1 4.2-1.3 9.4-.6 12.9 1.6.4.2.5.7.2 1.2zm.1-2.7c-3.7-2.2-9.8-2.4-13.4-1.3-.6.2-1.2-.2-1.4-.7-.2-.6.2-1.2.7-1.4 4.1-1.2 10.9-1 15.1 1.5.5.3.7 1 .4 1.5-.3.5-.9.7-1.4.4z"/>
     <text x="35" y="21" fontFamily="sans-serif" fontWeight="bold" fontSize="16">Spotify</text>
  </svg>
)

const LogoSlack = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 120 30" fill="currentColor" {...props}>
    <path d="M14.5 4h-4v14.4h4V4zm5.5 14.4h4.4v-4.9h-4.4v4.9zm-9.9 0H5.7v-4.9h4.4v4.9zm4.4 4.5h-4.4v4.9h4.4v-4.9zm5.5 0h4.4v4.9h-4.4v-4.9z" />
    <text x="35" y="21" fontFamily="sans-serif" fontWeight="bold" fontSize="16">Slack</text>
  </svg>
)

const LogoNotion = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 120 30" fill="currentColor" {...props}>
     <rect x="5" y="5" width="20" height="20" rx="2" />
     <text x="35" y="21" fontFamily="sans-serif" fontWeight="bold" fontSize="16">Notion</text>
  </svg>
)

const LogoLinear = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 120 30" fill="currentColor" {...props}>
     <circle cx="15" cy="15" r="10" stroke="currentColor" strokeWidth="3" fill="none"/>
     <path d="M15 8v14" stroke="currentColor" strokeWidth="3"/>
     <text x="35" y="21" fontFamily="sans-serif" fontWeight="bold" fontSize="16">Linear</text>
  </svg>
)


interface Logo {
  name: string
  id: number
  img: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

interface LogoColumnProps {
  logos: Logo[]
  index: number
  currentTime: number
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  const shuffled = shuffleArray(allLogos)
  const columns: Logo[][] = Array.from({ length: columnCount }, () => [])

  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo)
  })

  const maxLength = Math.max(...columns.map((col) => col.length))
  columns.forEach((col) => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)])
    }
  })

  return columns
}

const LogoColumn: React.FC<LogoColumnProps> = React.memo(
  ({ logos, index, currentTime }) => {
    const cycleInterval = 3000 // Slower cycle for better readability
    const columnDelay = index * 400 // Stagger columns
    const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length)
    const currentIndex = Math.floor(adjustedTime / cycleInterval)
    const CurrentLogo = useMemo(() => logos[currentIndex].img, [logos, currentIndex])

    return (
      <motion.div
        className="relative h-16 w-full overflow-hidden flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.1,
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${logos[currentIndex].id}-${currentIndex}`}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ y: "20%", opacity: 0, filter: "blur(4px)" }}
            animate={{
              y: "0%",
              opacity: 0.6, // Muted opacity for logos
              filter: "blur(0px)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 25,
                mass: 1,
                bounce: 0.2,
                duration: 0.6,
              },
            }}
            exit={{
              y: "-20%",
              opacity: 0,
              filter: "blur(4px)",
              transition: {
                type: "tween",
                ease: "easeIn",
                duration: 0.3,
              },
            }}
            whileHover={{ opacity: 1, transition: { duration: 0.2 } }}
          >
            <CurrentLogo className="h-full w-full max-h-[40px] max-w-[120px] object-contain text-stone-900" />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    )
  }
)

LogoColumn.displayName = "LogoColumn";

interface LogoCarouselProps {
  columnCount?: number
  logos: Logo[]
}

function LogoCarousel({ columnCount = 2, logos }: LogoCarouselProps) {
  const [logoSets, setLogoSets] = useState<Logo[][]>([])
  const [currentTime, setCurrentTime] = useState(0)

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100)
  }, [])

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100)
    return () => clearInterval(intervalId)
  }, [updateTime])

  useEffect(() => {
    const distributedLogos = distributeLogos(logos, columnCount)
    setLogoSets(distributedLogos)
  }, [logos, columnCount])

  return (
    <div className="flex gap-4 md:gap-8 w-full">
      {logoSets.map((logos, index) => (
        <div key={index} className="flex-1 flex justify-center">
            <LogoColumn
            logos={logos}
            index={index}
            currentTime={currentTime}
            />
        </div>
      ))}
    </div>
  )
}

// --- Main Feature Component ---

const allLogos: Logo[] = [
  { id: 1, name: "Nvidia", img: LogoNvidia },
  { id: 2, name: "Adobe", img: LogoAdobe },
  { id: 3, name: "Vercel", img: LogoVercel },
  { id: 4, name: "Stripe", img: LogoStripe },
  { id: 5, name: "Spotify", img: LogoSpotify },
  { id: 6, name: "Slack", img: LogoSlack },
  { id: 7, name: "Notion", img: LogoNotion },
  { id: 8, name: "Linear", img: LogoLinear },
]

export const IntegrationsFeature: React.FC<{ lang: 'en' | 'pt' }> = ({ lang }) => {
  const [columns, setColumns] = useState(2);

  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth >= 1024) setColumns(4);
        else if (window.innerWidth >= 640) setColumns(3);
        else setColumns(2);
    };
    
    // Set initial
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const t = {
    en: { text: 'Trusted by innovative teams worldwide' },
    pt: { text: 'Confiado por times inovadores no mundo todo' }
  }[lang];

  return (
    <div className="py-12 md:py-16 border-y border-stone-100 bg-[#FDFBF7] relative">
      <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-center text-xs font-bold text-stone-400 uppercase tracking-widest mb-10">
              {t.text}
          </h3>
          <div className="w-full max-w-5xl mx-auto">
             <LogoCarousel columnCount={columns} logos={allLogos} />
          </div>
      </div>
    </div>
  );
};
