import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight"
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid"
import { Timeline } from "@/components/ui/timeline"
import DisplayCards from "@/components/ui/display-cards";
import {
  Github, Mail, Phone, ExternalLink, Globe,
  TrendingUp, CheckCircle, Utensils, Layout,
  Apple, School, Camera, ShoppingBag,
  Zap, Cpu, Rocket, Sparkles
} from "lucide-react"

const projectItems: BentoItem[] = [
  {
    title: "Nomigo",
    description: "A niche social dining app for cataloging food experiences and exploring restaurant lists with friends.",
    icon: <Utensils className="w-5 h-5 text-orange-500" />,
    status: "Featured",
    tags: ["Flutter", "Firebase", "Social"],
    colSpan: 2,
  },
  {
    title: "Matters.ai",
    description: "Modular platform connecting users and vendors across messaging and event booking.",
    icon: <Layout className="w-5 h-5 text-blue-500" />,
    tags: ["Architecture", "B2B/C"],
  },
  {
    title: "Better Meal AI",
    description: "AI-based nutrition and gut-health recommendation app using nutritional score models.",
    icon: <Apple className="w-5 h-5 text-emerald-500" />,
    tags: ["AI", "Health"],
  },
  {
    title: "ABC (Atoms)",
    description: "School communication platform for schedules, grades, and announcements with offline support.",
    icon: <School className="w-5 h-5 text-indigo-500" />,
    link: "https://abc.kods.app/",
    tags: ["Education", "Sync"],
    colSpan: 2,
  },

];

const timelineData = [
  {
    title: "2025",
    content: (
      <div className="space-y-4">
        <h4 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          Flutter Developer - Codewave
        </h4>
        <ul className="space-y-2 text-sm md:text-base text-neutral-400">
          <li className="flex gap-3">
            <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-white/20 mt-2" />
            Architected scalable modular feature layers with clean state management.
          </li>
          <li className="flex gap-3">
            <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-white/20 mt-2" />
            Improved feed and listing performance by 25–40% via optimized rendering, API caching, and selective data refresh.
          </li>
          <li className="flex gap-3">
            <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-white/20 mt-2" />
            Implemented deep linking, multi-flavor configurations, and environment-based build flows.
          </li>
          <li className="flex gap-3">
            <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-white/20 mt-2" />
            Enhanced internal network package with reusable auto-refresh API logic.
          </li>
          <li className="flex gap-3">
            <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-white/20 mt-2" />
            Created animations & effects utility package for motion design consistency.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div className="space-y-4">
        <h4 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          Flutter Developer - Kods Technologies Pvt Ltd
        </h4>
        <ul className="space-y-2 text-sm md:text-base text-neutral-400">
          <li className="flex gap-3">
            <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-white/20 mt-2" />
            Led technical discussions and code reviews to maintain code quality.
          </li>
          <li className="flex gap-3">
            <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-white/20 mt-2" />
            Mentored junior developers in architecture patterns and state management.
          </li>
          <li className="flex gap-3">
            <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-white/20 mt-2" />
            Coordinated with UI/UX, backend, QA, and product teams for stable delivery.
          </li>
          <li className="flex gap-3">
            <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-white/20 mt-2" />
            Improved app performance by profiling builds and reducing unnecessary re-renders.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div className="space-y-4">
        <h4 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-500" />
          Flutter Developer - Ezy Click
        </h4>
        <ul className="space-y-2 text-sm md:text-base text-neutral-400">
          <li className="flex gap-3">
            <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-white/20 mt-2" />
            Built and refined core app screens, focusing on smooth navigation and clean UX.
          </li>
          <li className="flex gap-3">
            <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-white/20 mt-2" />
            Rewrote existing features in Flutter from older codebases, ensuring UI accuracy.
          </li>
          <li className="flex gap-3">
            <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-white/20 mt-2" />
            Coordinated with designers and backend engineers to align APIs and data flow.
          </li>
        </ul>
      </div>
    ),
  },
];

export default function Home() {
  const skillCards = [
    {
      title: "Core Architecture",
      description: "Flutter SDK, Dart, Clean Architecture",
      date: "3+ Years Exp",
      icon: <Cpu className="size-4 text-blue-300" />,
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-500",
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      title: "State & Tooling",
      description: "Bloc, Provider, Firebase, CI/CD",
      date: "Professional",
      icon: <Zap className="size-4 text-emerald-300" />,
      iconClassName: "text-emerald-500",
      titleClassName: "text-emerald-500",
      className:
        "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      title: "Specialized",
      description: "WebRTC, Sockets, Perf Optimization",
      date: "Advanced",
      icon: <Rocket className="size-4 text-purple-300" />,
      iconClassName: "text-purple-500",
      titleClassName: "text-purple-500",
      className:
        "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black antialiased">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          {/* Left content */}
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight tracking-tighter">
              Sooryajith Sajeev
            </h1>
            <p className="mt-6 text-xl text-neutral-400 max-w-lg leading-relaxed font-light">
              Turning product ideas into fast, responsive mobile applications with clean architecture.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="mailto:sooryajithsajeev5@gmail.com" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
                <Mail size={22} />
              </a>
              <a href="https://github.com/sooryx" target="_blank" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
                <Github size={22} />
              </a>
              <a href="https://sooryx.github.io/" target="_blank" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
                <Globe size={22} />
              </a>
            </div>
          </div>

          {/* Right content (3D Scene) */}
          <div className="flex-1 w-full h-[400px] md:h-[600px] relative mt-12 md:mt-0">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Skills Section (Replaced Performance section) */}
      <section className="py-24 border-y border-white/10 bg-zinc-950/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 tracking-tighter">Flutter <span className="text-neutral-500">Developer.</span></h2>
              <p className="text-xl text-neutral-400 leading-relaxed max-w-xl">
                I build robust mobile ecosystems using **Flutter** and **Clean Architecture**. My focus lies in delivering
                high-performance apps that scale, ensuring maintainable codebases for long-term product success.
              </p>
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div className="flex items-center gap-3 text-neutral-300">
                  <CheckCircle className="text-emerald-500 size-5" />
                  <span className="font-medium">Clean State Management</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-300">
                  <CheckCircle className="text-emerald-500 size-5" />
                  <span className="font-medium">WebRTC & Sockets</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-300">
                  <CheckCircle className="text-emerald-500 size-5" />
                  <span className="font-medium">Performance Profiling</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-300">
                  <CheckCircle className="text-emerald-500 size-5" />
                  <span className="font-medium">Modular Architecture</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center py-10 lg:py-0">
              <div className="scale-90 md:scale-100">
                <DisplayCards cards={skillCards} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section (Bento Grid) */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">Featured Projects</h2>
              <p className="text-neutral-500 text-lg">A selection of my best work in mobile development.</p>
            </div>
            <a href="https://github.com/sooryx" target="_blank" className="flex items-center gap-2 text-white hover:text-neutral-400 transition-colors group">
              View all on GitHub <TrendingUp size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <BentoGrid items={projectItems} />
        </div>
      </section>

      {/* Experience Section (Timeline) */}
      <section className="border-t border-white/10">
        <Timeline data={timelineData} />
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/10 text-center">
        <div className="mb-8 flex justify-center gap-6">
          <a href="mailto:sooryajithsajeev5@gmail.com" className="text-neutral-400 hover:text-white transition-colors">Email</a>
          <a href="https://github.com/sooryx" target="_blank" className="text-neutral-400 hover:text-white transition-colors">GitHub</a>
          <a href="https://sooryx.github.io/" target="_blank" className="text-neutral-400 hover:text-white transition-colors">Portfolio</a>
        </div>
        <p className="text-neutral-600 font-mono text-sm tracking-widest uppercase">
          © {new Date().getFullYear()} Sooryajith Sajeev • Crafted with Next.js
        </p>
      </footer>
    </main>
  );
}

