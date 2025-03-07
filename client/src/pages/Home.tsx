import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain } from "lucide-react";
import { Code2, BarChart2, FileCode, Shield, TestTubeIcon, Zap } from "lucide-react";
import { OrbitingCircles } from "@/components/OrbitingCircles";
import { Link } from "wouter";

import { GridBackground, ScrollLines, FloatingParticles } from "@/components/ui/background-effects";
import { Navbar } from "@/components/ui/navbar";

interface FeatureCardProps {
  href: string;
  icon: React.ElementType;
  title: string;
  description: string;
  buttonText: string;
}

// Card Components
const FeatureCard = ({ href, icon: Icon, title, description, buttonText }: FeatureCardProps) => (
  <Link href={href}>
    <Card className="h-full w-full bg-purple-900/10 border border-purple-500/20
      hover:-translate-y-1 transition-all duration-300 group">
      <CardHeader className="space-y-2 p-8 sm:p-10">
        <CardTitle className="flex items-center space-x-3 text-xl">
          <div className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-r from-purple-400/20 to-purple-600/20
            transition-all duration-300 group-hover:from-purple-400/30 group-hover:to-purple-600/30">
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
          </div>
          <span className="font-semibold text-lg sm:text-xl text-white/90">
            {title}
          </span>
        </CardTitle>
        <CardDescription className="text-sm sm:text-base text-white/60">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8 sm:p-10 pt-0 sm:pt-0">
        <Button className="w-full bg-purple-600/90 text-white hover:bg-purple-500 border border-purple-500/30
              shadow-lg shadow-purple-500/20 transition-all duration-300 group-hover:scale-[1.02]">
          <span className="mr-2">{buttonText}</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  </Link>
);

interface StatCardProps {
  value: string;
  label: string;
  icon: React.ElementType;
}

const StatCard = ({ value, label, icon: Icon }: StatCardProps) => (
  <div className="px-4 py-5 sm:p-6 rounded-2xl bg-purple-900/10 border border-purple-500/20 backdrop-blur-sm 
    hover:scale-105 transition-all duration-300">
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
        <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-400 to-purple-600
          bg-clip-text text-transparent">
          {value}
        </span>
      </div>
      <p className="text-sm sm:text-base text-gray-300 font-medium">{label}</p>
    </div>
  </div>
);

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      href: "/contract-builder",
      icon: Code2,
      title: "Contract Builder",
      description: "AI-powered smart contract development and analysis",
      buttonText: "Get Started"
    },
    {
      href: "/decoder",
      icon: Code2,
      title: "Transaction Decoder",
      description: "Analyze and understand smart contracts with AI",
      buttonText: "Decode Contract"
    },
    {
      href: "/templates",
      icon: FileCode,
      title: "Templates",
      description: "Pre-built smart contract templates and patterns",
      buttonText: "Browse Templates"
    },
    {
      href: "/explorer",
      icon: BarChart2,
      title: "Contract Explorer",
      description: "Chat with and analyze deployed contracts",
      buttonText: "Explore Contracts"
    },
    {
      href: "/test-suite",
      icon: TestTubeIcon,
      title: "Test Suite Generator",
      description: "AI-powered smart contract test generation",
      buttonText: "Generate Tests"
    },
    {
      href: "/assistant",
      icon: Brain,
      title: "Mantle AI Agent",
      description: "Get instant help with Mantle development",
      buttonText: "Chat Now"
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white">
      <GridBackground />
      <ScrollLines />
      <FloatingParticles />
      <Navbar isScrolled={isScrolled} />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/20 blur-3xl rounded-full"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Column - Text Content */}
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-1 w-12 bg-purple-500"></div>
                  <span className="text-purple-400 font-medium tracking-wide">POWERED BY AI AGENTS</span>
                </div>
                
                <h1 className="text-5xl sm:text-6xl font-black mb-6 leading-tight">
                  <span className="text-white">Intelligent </span>
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    Smart Contract
                  </span>
                  <span className="text-white"> Solutions</span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 max-w-lg">
                  Revolutionize your blockchain development with Mantle's AI agents. 
                  Build, analyze, and deploy contracts with unprecedented speed and security.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button className="bg-purple-500 hover:bg-purple-400 text-black font-bold px-8 py-4 rounded-lg
                    transition-all duration-300 flex items-center">
                    <span>Deploy Now</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button className="bg-black border border-purple-500/50 text-purple-400 hover:bg-purple-950 
                    font-medium px-8 py-4 rounded-lg transition-all duration-300">
                    <span>Explore Features</span>
                  </Button>
                </div>
                
                <div className="flex items-center gap-8">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-purple-400">100+</span>
                    <span className="text-gray-400 text-sm">Contracts Created</span>
                  </div>
                  <div className="h-8 w-px bg-purple-500/30"></div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-purple-400">99.8%</span>
                    <span className="text-gray-400 text-sm">Security Rating</span>
                  </div>
                  <div className="h-8 w-px bg-purple-500/30"></div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-purple-400">24/7</span>
                    <span className="text-gray-400 text-sm">AI Support</span>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Visual Element with Improved Logo */}
              <div className="order-1 lg:order-2 flex justify-center items-center">
                <div className="relative w-full max-w-xl aspect-square">
                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] border-2 border-purple-500/30 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] border border-purple-500/20 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[55%] border-2 border-purple-500/40 rounded-full animate-pulse" style={{animationDelay: "1s"}}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] border-2 border-purple-500/30 rounded-full animate-pulse" style={{animationDelay: "2s"}}></div>
                  </div>
                  
                  {/* Improved Logo - No solid background, gradient fill, better glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] flex items-center justify-center">
                    {/* Subtle radial gradient instead of solid background */}
                    <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-purple-500/10 to-transparent blur-xl"></div>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" className="w-3/4 h-3/4 relative z-10">
                      <defs>
                        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#9333ea" />
                        </linearGradient>
                        <filter id="improved-glow">
                          <feGaussianBlur stdDeviation="3" result="blur" />
                          <feFlood floodColor="#a855f7" floodOpacity="0.6" result="color" />
                          <feComposite in="color" in2="blur" operator="in" result="glow" />
                          <feMerge>
                            <feMergeNode in="glow" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      <g fill="url(#logoGradient)" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}} filter="url(#improved-glow)">
                        <g transform="scale(5.12,5.12)">
                          <path d="M25,1c-1.29724,0.00027 -2.37875,0.99272 -2.49023,2.28516l-15.25586,8.83398c-0.24372,-0.07807 -0.49799,-0.11825 -0.75391,-0.11914c-1.075,0.00112 -2.02893,0.68933 -2.36901,1.70912c-0.34008,1.01979 0.00985,2.14281 0.86901,2.78893v17.00586c-0.85747,0.64658 -1.20619,1.76856 -0.86632,2.78729c0.33987,1.01873 1.29239,1.70658 2.36632,1.70881c0.25647,-0.00006 0.51141,-0.03959 0.75586,-0.11719l15.25781,8.83398c0.1123,1.29017 1.19128,2.281 2.48633,2.2832c1.29724,-0.00027 2.37875,-0.99272 2.49023,-2.28516l15.25586,-8.83398c0.24372,0.07807 0.49799,0.11825 0.75391,0.11914c1.075,-0.00112 2.02893,-0.68933 2.36901,-1.70912c0.34008,-1.01979 -0.00985,-2.14281 -0.86901,-2.78893v-17.00586c0.85747,-0.64658 1.20619,-1.76856 0.86632,-2.78729c-0.33987,-1.01873 -1.29239,-1.70658 -2.36632,-1.70881c-0.25647,0.00006 -0.51141,0.03959 -0.75586,0.11719l-15.25781,-8.83398c-0.1123,-1.29017 -1.19128,-2.281 -2.48633,-2.2832zM22.27148,5.73633l-7.13672,12.39453l-6.13867,-3.55273c0.01117,-0.35814 -0.05477,-0.7145 -0.19336,-1.04492zM27.73047,5.73633l13.4668,7.79687c-0.13954,0.33088 -0.20615,0.68794 -0.19531,1.04688l-6.13477,3.55273zM24.46094,5.93945c0.17696,0.03967 0.35771,0.05998 0.53906,0.06055c0.18135,-0.00057 0.3621,-0.02087 0.53906,-0.06055l7.5957,13.19531l-6.6543,3.85156c-0.42907,-0.3157 -0.94777,-0.48609 -1.48047,-0.48633c-0.53225,0.00122 -1.05022,0.17228 -1.47852,0.48828l-6.65625,-3.85352zM8.13477,16.39063l6.00195,3.47461l-7.13672,12.39453v-15.31055c0.41988,-0.08585 0.81064,-0.27821 1.13477,-0.55859zM41.86719,16.39063c0.32378,0.27938 0.71381,0.47104 1.13281,0.55664v15.31445l-7.13477,-12.39648zM15.86719,20.86719l6.65234,3.85156c-0.12299,1.0886 0.47711,2.13047 1.48047,2.57031v7.71094h-15.05273c-0.08579,-0.42146 -0.27886,-0.81365 -0.56055,-1.13867zM34.13281,20.86719l7.48242,12.99414c-0.28169,0.32502 -0.47476,0.71722 -0.56055,1.13867h-15.05469v-7.71094c1.00412,-0.43921 1.6051,-1.48122 1.48242,-2.57031zM9.72266,37h14.27734v7.21094c-0.3097,0.13528 -0.58876,0.33195 -0.82031,0.57812zM26,37h14.27734l-13.45703,7.78906c-0.23155,-0.24617 -0.51061,-0.44284 -0.82031,-0.57812z"></path>
                        </g>
                      </g>
                    </svg>
                    
                    {/* Subtle pulse animations for added depth */}
                    <div className="absolute w-3/4 h-3/4 rounded-full border border-purple-400/20 animate-pulse"></div>
                    <div className="absolute w-full h-full rounded-full border border-purple-400/10 animate-pulse" style={{animationDelay: "0.5s"}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom curve */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-12 sm:py-20 border-y border-purple-500/10">
          <div className="mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-start">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}