'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto group">
      {/* Main carousel container */}
      <div className="relative h-[520px] md:h-[640px] overflow-hidden rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] bg-gradient-to-br from-zinc-900 via-zinc-800 to-black">
        {/* Decorative gradient ring */}
        <div className="pointer-events-none absolute -inset-20 bg-[radial-gradient(circle_at_30%_-10%,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_70%_120%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_10%_120%,rgba(236,72,153,0.2),transparent_40%)]" />
        {/* Slides */}
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-10" />
              
              {/* Slide image */}
              {slide.image && (
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              )}
              
              {/* Slide content */}
              <div className="absolute inset-0 z-20 flex items-center justify-start p-8 md:p-16">
                <div className="max-w-2xl text-white">
                  <h2 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)]">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl mb-6 opacity-90 leading-relaxed">
                    {slide.description}
                  </p>
                  {slide.cta && (
                    <button className="btn btn-primary btn-lg rounded-full shadow-[0_10px_30px_rgba(59,130,246,0.45)] hover:shadow-[0_14px_40px_rgba(59,130,246,0.6)] transition-shadow">
                      {slide.cta}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/15 backdrop-blur-md hover:bg-white/25 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 border border-white/20"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/15 backdrop-blur-md hover:bg-white/25 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 border border-white/20"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 border border-white/50 ${
                index === currentSlide 
                  ? 'bg-white scale-125 shadow-[0_0_0_4px_rgba(255,255,255,0.25)]' 
                  : 'bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/15 z-30">
          <div 
            className="h-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500 transition-all duration-100 ease-linear"
            style={{ 
              width: isAutoPlaying ? `${((currentSlide + 1) / slides.length) * 100}%` : '0%'
            }}
          />
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute top-4 right-4 z-30 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default Carousel;