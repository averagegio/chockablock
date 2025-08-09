import Image from "next/image";
import Carousel from "./components/Carousel";

const carouselSlides = [
  {
    title: "Welcome to Chockablack",
    description: "Experience the future of AI apps with our cutting‑edge platform. Build, deploy, and scale on Chockablack with unprecedented ease.",
    cta: "Get Started",
    image: "/eye-spy.png"
  },
  {
    title: "Chockablack Features",
    description: "Unlock powerful tools for creators and developers. Automate, analyze, and monetize your AI on Chockablack.",
    cta: "Explore Features",
    image: "/gye-spy.png"
  },
  {
    title: "Join Chockablack",
    description: "Connect with builders worldwide. Collaborate and grow inside the Chockablack ecosystem.",
    cta: "Join Now",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop&crop=center"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            {/* Company Logo */}
            <Image
              src="/openart-image_DxAhnuEO_1754685199640_raw.jpg"
              alt="Chockablock logo"
              width={140}
              height={140}
              className="mx-auto mb-4"
              priority
            />
          </div>

          {/* Carousel - The focal point */}
          <Carousel slides={carouselSlides} />

          {/* CTA Buttons */}
          <div className="flex gap-4 items-center justify-center flex-col sm:flex-row mt-12">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign up
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dev login
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-8 bg-foreground/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            About us
          </h2>
          
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-background shadow-sm border border-foreground/10">
              <div className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Lightning Fast</h3>
              <p className="text-foreground/70">Optimized for speed and performance with cutting-edge technology.</p>
            </div>
            
            <div className="p-6 rounded-lg bg-background shadow-sm border border-foreground/10">
              <div className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Secure</h3>
              <p className="text-foreground/70">Enterprise-grade security to keep your data and applications safe.</p>
            </div>
            
            <div className="p-6 rounded-lg bg-background shadow-sm border border-foreground/10">
              <div className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Scalable</h3>
              <p className="text-foreground/70">Built to grow with your business, from startup to enterprise.</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
