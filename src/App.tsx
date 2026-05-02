import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, Users, Mail, User, MessageSquare, Sparkles, Camera, Rotate3d, Layout, Smartphone, UserRound, Wand2, ArrowRight, Video, Film, Headphones, Zap } from "lucide-react";

const SERVICES = [
  {
    title: "Open-Air Booth",
    description: "DSLR camera, custom backdrops, and professional lighting for crisp, high-quality memories.",
    details: ["DSLR Camera", "Premium Backdrop + Lights", "Instant Prints + Digital"],
    price: "$400 – $900",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "360 Booth",
    description: "The ultimate immersive experience. A rotating arm captures high-energy slow-motion videos.",
    details: ["Rotating Camera", "Slow-motion videos", "Social sharing station"],
    price: "$650 – $1,400",
    icon: Rotate3d,
    image: "https://images.unsplash.com/photo-1541140134513-85a161dc4a00?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Mirror Booth",
    description: "A full-length interactive mirror that guides guests through their session with fun animations.",
    details: ["Touchscreen mirror", "Interactive animations", "Full-length captures"],
    price: "$750 – $1,500",
    icon: Layout,
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Digital Booth",
    description: "Sleek, slim, and fully social. Perfect for modern events focused on instant sharing.",
    details: ["No prints", "Instant social sharing", "Boomerangs & GIFs"],
    price: "$250 – $550",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Roaming Booth",
    description: "Our photographers move through the crowd, bringing the fun directly to your guests.",
    details: ["Photographer moves around", "Great for corporate", "High engagement"],
    price: "$400 – $900",
    icon: UserRound,
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Glam Booth",
    description: "The 'Kardashian' style filter. Flawless black & white portraits with high-end skin smoothing.",
    details: ["Skin smoothing filters", "High-contrast B&W", "Luxury aesthetic"],
    price: "$800 – $1,600",
    icon: Wand2,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
  },
];

const PHOTO_PACKAGES = [
  {
    title: "Basic Coverage",
    description: "Perfect for intimate gatherings, birthdays, or small parties where every moment counts.",
    details: ["1 Professional Photographer", "2–3 Hours Coverage", "Expertly Edited Photos"],
    price: "$250 – $500",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Standard Package",
    description: "The ideal choice for medium-sized celebrations, ensuring full coverage of your special day.",
    details: ["1 Professional Photographer", "4–5 Hours Coverage", "High-Resolution Digital Files"],
    price: "$500 – $900",
    icon: Layout,
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Premium Experience",
    description: "Comprehensive coverage for grand events, focusing on both wide shots and fine details.",
    details: ["1–2 Photographers", "6–8 Hours Coverage", "Priority Editing + Full Gallery"],
    price: "$900 – $1,800",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Wedding Story",
    description: "Cinematic storytelling of your journey, from the morning whispers to the final dance.",
    details: ["Full Day Coverage", "Cinematic Style Edits", "Online Gallery + Digital Keepsake"],
    price: "$1,500 – $3,500",
    icon: User,
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Engagement / Couple",
    description: "A romantic session capturing your unique chemistry in a beautiful outdoor or studio setting.",
    details: ["1–2 Hour Session", "Outdoor or Studio Location", "Artistically Edited Photos"],
    price: "$200 – $600",
    icon: MessageSquare,
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Corporate Identity",
    description: "Polished professional coverage highlighting branding, key moments, and corporate culture.",
    details: ["Professional Event Coverage", "Branding-Focused Shots", "Key Speaker & Guest Moments"],
    price: "$400 – $1,200",
    icon: UserRound,
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Limousine Identity",
    description: "High-end automotive photography for luxury travel and arrival moments.",
    details: ["Luxury Car Specialist", "Professional Lighting", "Dynamic Arrival Shots"],
    price: "$300 – $700",
    icon: UserRound,
    image: "https://images.unsplash.com/photo-1503376708782-95995589c362?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Graduation Story",
    description: "Capturing the pride and joy of academic achievements and family celebrations.",
    details: ["Portrait Sessions", "Ceremony Coverage", "Family Group Shots"],
    price: "$200 – $500",
    icon: MessageSquare,
    image: "https://images.unsplash.com/photo-1525921429573-05911ad2fc6b?auto=format&fit=crop&q=80&w=1200",
  },
];

const VIDEO_PACKAGES = [
  {
    title: "Basic Highlight",
    description: "A beautiful short recap of your event, capturing the core essence and joyful atmosphere.",
    details: ["1 Videographer", "2–3 Hours Coverage", "1–2 min Highlight Video"],
    price: "$500 – $800",
    icon: Video,
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Standard Feature",
    description: "More time to capture the details, speeches, and atmosphere with an extended highlight film.",
    details: ["1 Videographer", "4–5 Hours Coverage", "2–4 min Highlight Video"],
    price: "$600 – $1,000",
    icon: Film,
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Premium Cinema",
    description: "The complete cinematic treatment. Two angles ensuring no moment is missed.",
    details: ["1–2 Videographers", "6–8 Hours Coverage", "Cinematic Highlight + Full Recording"],
    price: "$1,000 – $2,000",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Wedding Film",
    description: "An heirloom-quality film documenting your entire wedding day in breathtaking cinematic style.",
    details: ["Full Day Coverage", "Cinematic Film + Highlight Reel", "Luxury Digital Delivery"],
    price: "$1,800 – $4,000",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Reels & Social",
    description: "Designed for the modern era. Trendy, high-energy edits perfect for instant sharing.",
    details: ["Short-Form Video (30-60s)", "Trendy Edits", "Ultra-Fast Delivery"],
    price: "$300 – $800",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Corporate Vision",
    description: "Professional storytelling for brands. Focused on interviews, key moments, and messaging.",
    details: ["Branding Focused", "Interviews & Key Moments", "Professional Audio Setup"],
    price: "$500 – $1,500",
    icon: UserRound,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
  },
];

const DJ_PACKAGES = [
  {
    title: "Essential Tempo",
    description: "High-quality sound and lighting for intimate gatherings and private celebrations.",
    details: ["Professional Sound System", "Basic Intelligent Lighting", "Curated Playlist Management"],
    price: "$500 – $800",
    icon: Headphones,
    image: "https://images.unsplash.com/photo-1514525253344-f814d0c9e583?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Signature Rhythm",
    description: "The gold standard for weddings and corporate events. Fully immersive audio-visuals.",
    details: ["Club-Grade Audio", "Enhanced Dancefloor Lighting", "Professional Emcee Services"],
    price: "$800 – $1,500",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Grand Aria",
    description: "Concert-level production with custom lighting design and premium sound reinforcement.",
    details: ["Line Array Sound System", "Advanced Truss Lighting", "Live Percussion / Musician Hybrid"],
    price: "$1,500 – $3,500",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecbb4ee?auto=format&fit=crop&q=80&w=800",
  },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState<"booth" | "photo" | "video" | "dj">("booth");

  const getActivePackages = () => {
    switch (activeCategory) {
      case "photo": return PHOTO_PACKAGES;
      case "video": return VIDEO_PACKAGES;
      case "dj": return DJ_PACKAGES;
      default: return SERVICES;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a050f] font-sans overflow-x-hidden relative selection:bg-fuchsia-500/30 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 lg:px-24 py-6">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto flex items-center justify-between bg-black/20 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 shadow-2xl"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-fuchsia-800 flex items-center justify-center shadow-lg shadow-fuchsia-500/20">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg text-white tracking-widest uppercase italic leading-none">Event4Ever</span>
              <span className="text-[6px] text-fuchsia-400 font-bold tracking-[0.2em] uppercase">Where Your Vision Becomes Reality</span>
            </div>
          </div>
          
          <div className="flex items-center gap-8 lg:gap-12">
            {[
              { name: "Home", href: "#home" },
              { name: "Services", href: "#services" },
              { name: "About", href: "#about" },
              { name: "Contact", href: "#contact" }
            ].map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-fuchsia-200/50 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <Button className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white rounded-full px-6 py-2 text-[10px] font-bold uppercase tracking-widest hidden md:flex">
            Book Now
          </Button>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 lg:px-24 overflow-hidden">
        {/* Cinematic Video/Slideshow Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {/* Using a high-end ambient luxury event video loop */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2000"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-celebration-at-a-party-with-confetti-and-lights-34509-large.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a050f]" />
          </motion.div>
        </div>

        {/* Branding - Centered & Premium */}
        <div className="relative z-10 text-center max-w-5xl">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="flex items-center justify-center gap-3 text-fuchsia-400 mb-8">
              <Sparkles className="w-6 h-6 animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-[0.6em]">Elite Experiences</span>
            </div>
            
            <h1 className="font-serif text-7xl lg:text-[12rem] leading-none tracking-tighter text-white mb-4 uppercase">
              Event4Ever
            </h1>
            <p className="text-sm lg:text-xl font-light tracking-[0.5em] uppercase text-fuchsia-200/80 italic pb-12">
              Where Your Vision Becomes Reality
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-12 py-8 rounded-full text-lg font-bold uppercase tracking-widest transition-all shadow-[0_0_40px_rgba(217,70,239,0.3)] hover:scale-105 active:scale-95 group">
                Begin The Experience
                <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-12 py-8 rounded-full text-lg font-bold uppercase tracking-widest backdrop-blur-md transition-all hover:border-fuchsia-500/50">
                Contact An Artisan
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Services Spotlight */}
      <section className="bg-[#0a050f] py-20 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Elite Photo Booths", icon: Camera, desc: "Interactive memory-making.", img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3" },
              { title: "Artistic Photography", icon: Sparkles, desc: "Capturing the soul of events.", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32" },
              { title: "Cinematic Videography", icon: Video, desc: "Motion stories worth sharing.", img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4" },
              { title: "Elite DJ Services", icon: Headphones, desc: "Sonic energy for every floor.", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745" }
            ].map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-48 rounded-2xl overflow-hidden border border-white/10"
              >
                <img src={`${service.img}?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover brightness-50 group-hover:brightness-75 transition-all duration-700" alt={service.title} />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <service.icon className="w-6 h-6 text-fuchsia-400 mb-2" />
                  <h3 className="text-white font-serif text-xl">{service.title}</h3>
                  <p className="text-fuchsia-200/40 text-[10px] uppercase tracking-widest">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-[#0a050f] py-32 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl lg:text-7xl text-white mb-8">Curated Experiences</h2>
              
              {/* Category Toggle */}
              <div className="flex justify-center mb-12">
                <div className="inline-flex p-1 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 flex-wrap justify-center">
                  <button
                    onClick={() => setActiveCategory("booth")}
                    className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                      activeCategory === "booth" 
                        ? "bg-fuchsia-600 text-white shadow-lg shadow-fuchsia-600/20" 
                        : "text-fuchsia-200/40 hover:text-fuchsia-200"
                    }`}
                  >
                    Booths
                  </button>
                  <button
                    onClick={() => setActiveCategory("photo")}
                    className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                      activeCategory === "photo" 
                        ? "bg-fuchsia-600 text-white shadow-lg shadow-fuchsia-600/20" 
                        : "text-fuchsia-200/40 hover:text-fuchsia-200"
                    }`}
                  >
                    Photography
                  </button>
                  <button
                    onClick={() => setActiveCategory("video")}
                    className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                      activeCategory === "video" 
                        ? "bg-fuchsia-600 text-white shadow-lg shadow-fuchsia-600/20" 
                        : "text-fuchsia-200/40 hover:text-fuchsia-200"
                    }`}
                  >
                    Videography
                  </button>
                  <button
                    onClick={() => setActiveCategory("dj")}
                    className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                      activeCategory === "dj" 
                        ? "bg-fuchsia-600 text-white shadow-lg shadow-fuchsia-600/20" 
                        : "text-fuchsia-200/40 hover:text-fuchsia-200"
                    }`}
                  >
                    DJ Services
                  </button>
                </div>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.p 
                  key={activeCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-fuchsia-200/60 text-xl max-w-2xl mx-auto font-light italic"
                >
                  {activeCategory === "booth" 
                    ? "Elevating events with interactive, high-tech installations guests love."
                    : activeCategory === "photo"
                    ? "Timeless storytelling captured through a sophisticated lens."
                    : activeCategory === "video"
                    ? "Cinematic movement and sound that brings your celebration back to life."
                    : "The heartbeat of your event. Curated sounds and immersive energy."}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </div>

          <div className="relative min-h-[800px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {(activeCategory === "booth" ? SERVICES : getActivePackages()).map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full bg-white/5 border-white/10 hover:border-fuchsia-500/50 transition-all duration-500 group overflow-hidden">
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a050f] via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-fuchsia-600 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                          <service.icon className="w-3 h-3" /> {service.title}
                        </div>
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-center mb-3">
                           <CardTitle className="text-2xl font-serif text-white tracking-wide">{service.title}</CardTitle>
                           <span className="text-fuchsia-400 font-mono text-sm border border-fuchsia-400/20 px-2 py-0.5 rounded italic whitespace-nowrap">
                             {service.price}
                           </span>
                        </div>
                        <CardDescription className="text-fuchsia-100/60 leading-relaxed min-h-[3rem] font-light">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 mb-8">
                          {service.details.map((detail) => (
                            <li key={detail} className="text-[11px] text-fuchsia-200/40 flex items-center gap-2 uppercase tracking-widest">
                              <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 shadow-[0_0_8px_rgba(217,70,239,0.8)]" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <Button variant="link" className="text-fuchsia-300 p-0 hover:text-fuchsia-100 transition-colors group/btn font-bold uppercase tracking-widest text-[10px]">
                          Reserve Session <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            {activeCategory !== "booth" && (
              <motion.div 
                key={activeCategory + "-extras"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-16 border-t border-white/5"
              >
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 font-serif text-xl italic">H</div>
                  <div>
                    <h4 className="text-white text-sm font-bold uppercase tracking-widest">Extra Hours</h4>
                    <p className="text-fuchsia-200/40 text-xs mt-1">{activeCategory === "photo" ? "$100 – $200" : "$150 – $300"} / hr</p>
                  </div>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 font-serif text-xl italic">
                    {activeCategory === "photo" ? "E" : "D"}
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold uppercase tracking-widest">
                      {activeCategory === "photo" ? "Express Feed" : "Drone Coverage"}
                    </h4>
                    <p className="text-fuchsia-200/40 text-xs mt-1">{activeCategory === "photo" ? "$100 – $300" : "$200 – $500"}</p>
                  </div>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 font-serif text-xl italic">
                    {activeCategory === "photo" ? "S" : "E"}
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold uppercase tracking-widest">
                      {activeCategory === "photo" ? "Second Shooter" : "Express Delivery"}
                    </h4>
                    <p className="text-fuchsia-200/40 text-xs mt-1">{activeCategory === "photo" ? "$200 – $500" : "$150 – $400"}</p>
                  </div>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 font-serif text-xl italic">
                    {activeCategory === "photo" ? "A" : "R"}
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold uppercase tracking-widest">
                      {activeCategory === "photo" ? "Photo Albums" : "Raw Footage"}
                    </h4>
                    <p className="text-fuchsia-200/40 text-xs mt-1">{activeCategory === "photo" ? "Custom Pricing" : "$100 – $300"}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#0a050f] py-32 px-6 lg:px-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500/20 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-15px_rgba(217,70,239,0.25)] border border-white/10 group aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200" 
                  alt="Elite Event Heritage" 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 brightness-75 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a050f] via-transparent to-transparent" />
                
                {/* HDR Floating Label */}
                <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-fuchsia-600 flex items-center justify-center shadow-lg">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-fuchsia-200">Established 2018</span>
                  </div>
                  <p className="text-white font-serif text-xl italic">"Preserving the essence of every celebration with absolute artistic precision."</p>
                </div>
              </div>
              
              {/* Decorative floating element */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-fuchsia-600/10 blur-[120px] rounded-full"
              />
              <div className="absolute -top-10 -left-10 w-32 h-32 border-t-4 border-l-4 border-fuchsia-500/20 rounded-tl-[3rem]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h4 className="text-fuchsia-400 text-xs font-bold uppercase tracking-[0.5em]">The Heritage</h4>
              <h2 className="font-serif text-5xl lg:text-7xl text-white leading-tight">
                Crafting <span className="italic text-fuchsia-200">Extraordinary</span> <br /> Memories
              </h2>
              <p className="text-fuchsia-100/60 text-lg font-light leading-relaxed italic">
                "At Event4Ever, we don't just capture moments; we curate experiences that linger in the heart forever."
              </p>
              <div className="space-y-6 text-fuchsia-200/40 text-sm leading-relaxed font-light">
                <p>
                  Every event has a story, and our mission is to capture, design, and elevate those moments into memories that last a lifetime. Driven by passion and committed to excellence, we transform ordinary events into truly unforgettable experiences.
                </p>
                <p>
                  Our team handles every detail—from concept to execution—so you can focus on enjoying your celebration while we ensure everything runs seamlessly. Whether it's weddings, corporate events, or private celebrations, we bring your vision to life beautifully and professionally.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Pillars Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Our Vision",
                    text: "To set a higher standard in our industry by delivering excellence that people trust and remember.",
                    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200",
                    icon: Sparkles
                  },
                  {
                    title: "Our Approach",
                    text: "We focus on understanding every client's need and delivering tailored solutions without compromise.",
                    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
                    icon: Wand2
                  },
                  {
                    title: "Our Goals",
                    text: "To grow sustainably while maintaining top-tier service and strong client relationships globally.",
                    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
                    icon: Users
                  }
                ].map((pillar, idx) => (
                    <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="group relative h-[500px] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(217,70,239,0.15)] bg-black/40"
                  >
                    <img 
                      src={pillar.image} 
                      alt={pillar.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-90 group-hover:brightness-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                    <div className="absolute inset-0 p-10 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-4">
                      <motion.div 
                        whileHover={{ rotateY: 180 }}
                        className="w-16 h-16 rounded-2xl bg-fuchsia-600 flex items-center justify-center mb-6 border border-white/20 shadow-[0_0_30px_rgba(217,70,239,0.5)]"
                      >
                        <pillar.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-3xl font-serif text-white mb-3 tracking-wide">{pillar.title}</h3>
                      <p className="text-fuchsia-100/60 text-sm leading-relaxed font-light italic">
                        {pillar.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
        </div>
      </section>

      {/* Facts & Spotlight Section */}
      <section className="bg-[#0a050f] py-24 px-6 lg:px-24 relative overflow-hidden">
        {/* HDR Glow Elements */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-fuchsia-600/10 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-fuchsia-900/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {[
              { label: "Featured Events", value: 320, suffix: "+" },
              { label: "Loyal Customers", value: 156, suffix: "" },
              { label: "Good Comments", value: 594, suffix: "" },
              { label: "Trophies Won", value: 167, suffix: "" },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="text-5xl lg:text-7xl font-serif text-white mb-2 tracking-tighter group-hover:text-fuchsia-300 transition-colors duration-500">
                  {stat.value}{stat.suffix}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-8 h-px bg-fuchsia-500/30 group-hover:w-12 transition-all duration-500" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-fuchsia-200/40">
                    {stat.label}
                  </span>
                  <div className="w-8 h-px bg-fuchsia-500/30 group-hover:w-12 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl lg:text-7xl text-white mb-6">Expertise Across <span className="italic text-fuchsia-200">Spectrums</span></h2>
            <p className="text-fuchsia-200/40 uppercase tracking-[0.4em] text-xs font-bold">Unforgettable Celebrations Curated Daily</p>
          </div>

          {/* Event Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { 
                name: "Birthday", 
                img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1200",
                tag: "Vibrant Celebrations"
              },
              { 
                name: "Corporate Events", 
                img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
                tag: "Executive Excellence"
              },
              { 
                name: "Elite DJ's", 
                img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1200",
                tag: "Sonic Artistry"
              },
              { 
                name: "Graduations", 
                img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
                tag: "Academic Milestones"
              },
              { 
                name: "Premium Occasions", 
                img: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=1200",
                tag: "Bespoke Affairs"
              },
              { 
                name: "Limousine Services", 
                img: "https://images.unsplash.com/photo-1533281808624-e9b07b42940e?auto=format&fit=crop&q=80&w=1200",
                tag: "Luxury Logistics"
              },
              { 
                name: "Wedding", 
                img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
                tag: "Timeless Love"
              },
              { 
                name: "Specialty Services", 
                img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200",
                tag: "Unique Experiences"
              }
            ].map((cat, idx) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                whileHover={{ y: -15 }}
                className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] border border-white/5"
              >
                <img src={cat.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-75 group-hover:brightness-100" alt={cat.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                {/* Floating Content Overlays */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="space-y-2"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-fuchsia-400 bg-fuchsia-400/10 px-3 py-1 rounded-full backdrop-blur-md inline-block mb-2">
                      {cat.tag}
                    </span>
                    <h3 className="text-white font-serif text-3xl group-hover:text-fuchsia-200 transition-colors italic leading-tight">{cat.name}</h3>
                  </motion.div>
                </div>
                
                {/* HDR Dynamic Glow Border */}
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-fuchsia-500/40 transition-all duration-700 pointer-events-none rounded-[2.5rem] opacity-0 group-hover:opacity-100 shadow-[inset_0_0_50px_rgba(217,70,239,0.2)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Journey Section */}
      <section className="bg-[#0a050f] py-32 px-6 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-fuchsia-900/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          {/* NYC / NJ Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
            {[
              { city: "New York", img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1200", desc: "The height of Manhattan luxury." },
              { city: "New Jersey", img: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=1200", desc: "Sophisticated NJ Venues & Skyline." }
            ].map((loc) => (
              <motion.div 
                key={loc.city}
                whileHover={{ scale: 1.02 }}
                className="relative h-96 rounded-[3rem] overflow-hidden group shadow-2xl border border-white/10"
              >
                <img src={loc.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={loc.city} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <h3 className="font-serif text-5xl text-white italic mb-2">{loc.city}</h3>
                  <p className="text-fuchsia-200/60 uppercase tracking-widest text-xs font-bold">{loc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl lg:text-7xl text-white mb-6"
            >
              The <span className="italic text-fuchsia-200">Journey</span>
            </motion.h2>
            <p className="text-fuchsia-200/40 uppercase tracking-[0.5em] text-xs font-bold">A Three-Phase Experience</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative mb-32 z-10">
            {/* Brightened Flow Path */}
            <div className="hidden lg:block absolute top-[25%] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-fuchsia-400/50 to-transparent shadow-[0_0_20px_rgba(232,121,249,0.3)]" />
            
            {[
              {
                step: "01",
                title: "The Vision",
                description: "We begin with a deep dive into your dreams. Every detail, from lighting to layout, is meticulously planned to match your unique event aesthetic.",
                icon: Sparkles
              },
              {
                step: "02",
                title: "The Experience",
                description: "Our team integrates seamlessly into your celebration, capturing moments with an invisible hand and professional precision.",
                icon: Camera
              },
              {
                step: "03",
                title: "The Artifact",
                description: "Your memories are curated, edited, and delivered as timeless digital and physical masterpieces, preserved for generations.",
                icon: Wand2
              }
            ].map((phase, idx) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative z-10 text-center space-y-10 group perspective-1000"
              >
                {/* 3D Motion Sphere Icon */}
                <motion.div 
                  whileHover={{ rotateX: 10, rotateY: 10, scale: 1.1 }}
                  className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-fuchsia-400/20 to-purple-900/40 border border-white/20 flex items-center justify-center relative shadow-[0_0_50px_rgba(217,70,239,0.4)] backdrop-blur-2xl group-hover:border-fuchsia-400/50 transition-all duration-700 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent animate-pulse" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-full h-full border border-dashed border-fuchsia-500/20 rounded-full scale-125"
                  />
                  <phase.icon className="w-12 h-12 text-white relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                  
                  {/* Floating Step Number */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-fuchsia-600 border-2 border-[#0a050f] flex items-center justify-center text-xs font-bold text-white tracking-widest shadow-xl">
                    {phase.step}
                  </div>
                </motion.div>

                <div className="space-y-6 pt-4">
                  <h3 className="font-serif text-4xl text-white tracking-wide drop-shadow-sm">{phase.title}</h3>
                  <div className="w-12 h-px bg-fuchsia-500/40 mx-auto" />
                  <p className="text-fuchsia-100/60 text-base leading-relaxed font-light italic max-w-sm mx-auto">
                    {phase.description}
                  </p>
                </div>

                {/* HDR Floor Shadow */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-4 bg-fuchsia-600/5 blur-xl rounded-full" />
              </motion.div>
            ))}
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-16 border-t border-white/5">
             {[
               { title: "Our Services", desc: "Premium event solutions including photography, videography, and full-scale planning.", icon: Layout },
               { title: "Our Work", desc: "A reflection of artistry and detail. Every event is transformed into a visual story.", icon: Sparkles },
               { title: "What We Handle", desc: "From concept to final execution, we manage every detail with absolute expertise.", icon: Users },
               { title: "What We Do", desc: "We capture and elevate events into unforgettable masterpieces that last forever.", icon: Wand2 }
             ].map((cap, idx) => (
               <motion.div 
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-fuchsia-500/5 transition-all duration-500"
               >
                 <cap.icon className="w-8 h-8 text-fuchsia-500 mb-6" />
                 <h4 className="text-white font-serif text-xl mb-3">{cap.title}</h4>
                 <p className="text-fuchsia-200/40 text-xs leading-relaxed font-light">{cap.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Contact & Inquiry Hub */}
      <section id="contact" className="relative py-32 px-6 lg:px-24 overflow-hidden bg-[#0a050f]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b2e] to-[#0a050f] pointer-events-none" />
        
        {/* HDR Light Orb Backgrounds */}
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-fuchsia-600/5 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-fuchsia-900/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Side: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="text-fuchsia-400 text-xs font-bold uppercase tracking-[0.5em] mb-4">Inquiry</h4>
                <h2 className="font-serif text-5xl lg:text-7xl text-white leading-tight mb-8">
                  Get in <span className="italic text-fuchsia-200">Touch</span>
                </h2>
                <p className="text-fuchsia-200/50 text-lg font-light leading-relaxed mb-12">
                  Our artisans are dedicated to crafting your perfect event. Reach out to start the collaboration.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 gap-6">
                {[
                  { icon: Mail, label: "E-mail Artifacts", value: "info@event4ever.com", detail: "Inquiries & Proposals" },
                  { icon: Smartphone, label: "Direct Connection", value: "(201) 355-0708", detail: "Mon - Fri, 9am - 6pm" },
                  { icon: Layout, label: "Headquarters", value: "07001 Avenel NJ", detail: "By Appointment Only" }
                ].map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-3xl group hover:border-fuchsia-500/40 transition-all duration-500"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-fuchsia-600/10 flex items-center justify-center text-fuchsia-400 group-hover:bg-fuchsia-600 group-hover:text-white transition-all duration-500 shadow-xl">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-fuchsia-200/30 mb-1">{item.label}</p>
                        <p className="text-white text-lg font-serif tracking-wide">{item.value}</p>
                        <p className="text-[10px] text-fuchsia-200/20 italic">{item.detail}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side: High-End Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-3xl shadow-2xl p-8 lg:p-12 rounded-[2.5rem] overflow-hidden relative">
                {/* Subtle form gloss effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rotate-45 translate-x-32 -translate-y-32 pointer-events-none" />
                
                <h3 className="font-serif text-3xl text-white mb-2">Detailed Proposal Request</h3>
                <p className="text-fuchsia-100/40 text-sm mb-10 italic">Please provide your details, and our lead coordinator will contact you shortly.</p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <Label className="text-[10px] uppercase tracking-widest text-fuchsia-200/40 ml-1">Full Name</Label>
                       <Input className="h-14 bg-black/20 border-white/5 text-white placeholder:text-white/10 rounded-xl" placeholder="Alexander Pierce" />
                    </div>
                    <div className="space-y-2">
                       <Label className="text-[10px] uppercase tracking-widest text-fuchsia-200/40 ml-1">Email Address</Label>
                       <Input className="h-14 bg-black/20 border-white/5 text-white placeholder:text-white/10 rounded-xl" placeholder="alex@prestige.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <Label className="text-[10px] uppercase tracking-widest text-fuchsia-200/40 ml-1">Event Date</Label>
                       <Input type="date" className="h-14 bg-black/20 border-white/5 text-white rounded-xl [color-scheme:dark]" />
                    </div>
                    <div className="space-y-2">
                       <Label className="text-[10px] uppercase tracking-widest text-fuchsia-200/40 ml-1">Guests</Label>
                       <Input type="number" className="h-14 bg-black/20 border-white/5 text-white placeholder:text-white/10 rounded-xl" placeholder="150+" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase tracking-widest text-fuchsia-200/40 ml-1">Primary Interest</Label>
                    <Select>
                      <SelectTrigger className="h-14 bg-black/20 border-white/5 text-white rounded-xl">
                        <SelectValue placeholder="Select Service Category" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0a050f] border-white/10 text-white">
                        <SelectItem value="booth">Elite Photo Booths</SelectItem>
                        <SelectItem value="photo">Artistic Photography</SelectItem>
                        <SelectItem value="video">Cinematic Videography</SelectItem>
                        <SelectItem value="full">The Full Experience</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase tracking-widest text-fuchsia-200/40 ml-1">Your Vision</Label>
                    <Textarea className="min-h-[120px] bg-black/20 border-white/5 text-white placeholder:text-white/10 rounded-xl resize-none p-4" placeholder="Briefly describe the atmosphere you wish to create..." />
                  </div>

                  <Button className="w-full h-16 bg-white text-fuchsia-950 hover:bg-fuchsia-50 font-bold text-lg rounded-xl transition-all shadow-xl group">
                    Submit Enquiry
                    <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  
                  <div className="text-center pt-4">
                    <p className="text-[9px] uppercase tracking-[0.4em] text-fuchsia-100/20">Secure & Confidential Inquiries</p>
                  </div>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="relative bg-[#0a050f] border-t border-white/5 pt-32 pb-12 px-6 lg:px-24 overflow-hidden">
        {/* Layered 3D Background Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Main Footer Background Image - Dark & Blurred */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2000" 
              alt="" 
              className="w-full h-full object-cover opacity-10 blur-[80px] scale-110"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a050f] via-[#0a050f]/80 to-transparent" />
          </div>

          {/* Deep Fuchsia Mesh Glows */}
          <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-fuchsia-900/10 blur-[120px] rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-[600px] h-[600px] bg-fuchsia-800/5 blur-[150px] rounded-full" />
          
          {/* Subtle animated floating particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -40, 0],
                x: [0, 20, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-1 h-1 bg-fuchsia-400 rounded-full"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 20}%`,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            {/* Branding Column */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-fuchsia-800 flex items-center justify-center shadow-lg shadow-fuchsia-500/20">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-2xl text-white tracking-widest uppercase italic leading-none">Event4Ever</span>
                  <span className="text-[10px] text-fuchsia-400 font-bold tracking-[0.3em] uppercase mt-1">Where Your Vision Becomes Reality</span>
                </div>
              </div>
              <p className="text-fuchsia-200/40 text-sm leading-relaxed font-light italic">
                "Excellence isn't an act, it's a habit. We curate memories that transcend time."
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-fuchsia-300/50 hover:text-white hover:border-fuchsia-500 hover:bg-fuchsia-500/10 transition-all duration-500 group">
                  <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.267-.07-1.646-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.44-.645 1.44-1.441-.645-1.44-1.44-1.44z"/></svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-fuchsia-300/50 hover:text-white hover:border-fuchsia-500 hover:bg-fuchsia-500/10 transition-all duration-500 group">
                  <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
              </div>
            </div>

            {/* Links Columns */}
            <div className="space-y-10">
              <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.4em] flex items-center gap-3">
                <div className="h-px w-6 bg-fuchsia-50" /> Navigation
              </h4>
              <ul className="space-y-5">
                {["Our Heritage", "Curated Gallery", "Craftsmanship", "Press", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-fuchsia-200/30 hover:text-white text-sm transition-all duration-300 flex items-center gap-3 group">
                      <div className="w-1 h-1 rounded-full bg-fuchsia-500 opacity-0 group-hover:opacity-100 transition-all" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-10">
              <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.4em] flex items-center gap-3">
                <div className="h-px w-6 bg-fuchsia-50" /> Services
              </h4>
              <ul className="space-y-5">
                {["Photography", "Videography", "360 Experience", "Mirror Booths", "Digital Social"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-fuchsia-200/30 hover:text-white text-sm transition-all duration-300 flex items-center gap-3 group">
                      <div className="w-1 h-1 rounded-full bg-fuchsia-500 opacity-0 group-hover:opacity-100 transition-all" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* High-End Newsletter */}
            <div className="space-y-10">
              <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.4em] flex items-center gap-3">
                <div className="h-px w-6 bg-fuchsia-50" /> The Inner Circle
              </h4>
              <div className="relative p-8 rounded-3xl overflow-hidden group shadow-2xl">
                {/* Newseller Card Background Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800" 
                    alt="Luxury Event" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-purple-950/80 backdrop-blur-sm" />
                </div>

                <div className="relative z-10 space-y-6">
                  <p className="text-white text-xs leading-relaxed font-light italic opacity-90">
                    Subscribe to receive seasonal inspiration and priority access to our new installations.
                  </p>
                  <div className="space-y-3">
                    <Input 
                      placeholder="E-mail Address" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/30 h-14 rounded-xl focus:ring-fuchsia-500/30 text-xs tracking-widest border-0 backdrop-blur-md"
                    />
                    <Button className="w-full bg-white text-fuchsia-950 hover:bg-fuchsia-50 font-bold py-7 rounded-xl transition-all shadow-lg group/btn">
                      Join Today
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex gap-12">
               {["NYC", "Dubai", "London", "Paris"].map(city => (
                 <div key={city} className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.5em] text-fuchsia-200/20">
                   <div className="w-1 h-1 rounded-full bg-fuchsia-500/40 animate-pulse" />
                   {city}
                 </div>
               ))}
            </div>
            <div className="flex flex-col items-center md:items-end gap-2 text-[9px] text-fuchsia-200/20 uppercase tracking-[0.4em]">
              <p>&copy; 2026 Elite Events Co. All Rights Reserved.</p>
              <p className="italic font-serif opacity-50">Designed for Excellence.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
