import { Link } from "wouter";
import { 
  Circuit, Menu, X, ChevronDown, Cpu, Code, BarChart2, FileCode, 
  Shield, Network, Braces, GanttChart, Workflow, Lightbulb
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { WalletConnector } from "../WalletConnector";

interface NavbarProps {
  isScrolled?: boolean;
}

export function Navbar({ isScrolled = false }: NavbarProps) {
  const [internalScrolled, setInternalScrolled] = useState(isScrolled);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [highlighted, setHighlighted] = useState<number | null>(null);

  useEffect(() => {
    if (isScrolled === undefined) {
      const handleScroll = () => {
        setInternalScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isScrolled]);

  useEffect(() => {
    // Animating circuit nodes
    const interval = setInterval(() => {
      setHighlighted(Math.floor(Math.random() * 5));
      setTimeout(() => setHighlighted(null), 1000);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const scrollState = isScrolled ?? internalScrolled;

  const navItems = [
    { 
      name: 'Capabilities', 
      hasDropdown: true,
      items: [
        { name: 'Contract Builder', icon: Code, description: 'AI-powered contract creation', href: '/contract-builder' },
        { name: 'Neural Explorer', icon: Network, description: 'Visualize contract interactions', href: '/explorer' },
        { name: 'Template Forge', icon: FileCode, description: 'Advanced contract templates', href: '/templates' },
        { name: 'Quantum Shield', icon: Shield, description: 'Security & vulnerability detection', href: '/security' },
      ]
    },
    { 
      name: 'Solutions',
      hasDropdown: true,
      items: [
        { name: 'DeFi Systems', icon: GanttChart, description: 'Financial protocol solutions', href: '/solutions/defi' },
        { name: 'DAO Governance', icon: Workflow, description: 'Decentralized organization tools', href: '/solutions/dao' },
        { name: 'NFT Ecosystems', icon: Cpu, description: 'Digital asset infrastructure', href: '/solutions/nft' },
        { name: 'Enterprise Web3', icon: Braces, description: 'Business blockchain integration', href: '/solutions/enterprise' },
      ]
    },
    { name: 'Resources', href: '/resources' },
    { name: 'Quantum Lab', href: '/lab' },
  ];

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50
      transition-all duration-300 ${scrollState 
        ? 'bg-black/75 backdrop-blur-xl py-3' 
        : 'bg-transparent py-5'}`}>
      {/* Top Circuit Line */}
      <div className="absolute top-0 left-0 w-full h-0.5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/0 via-green-600/80 to-green-600/0"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo - Updated */}
          <Link href="/" className="flex items-center space-x-3 group">
            {/* Logo */}
            <div className="w-12 h-12 relative">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" className="w-full h-full">
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feFlood floodColor="#00ff4c" floodOpacity="0.5" result="color" />
                    <feComposite in="color" in2="blur" operator="in" result="glow" />
                    <feMerge>
                      <feMergeNode in="glow" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <g fill="#00ff4c" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}} filter="url(#glow)">
                  <g transform="scale(5.12,5.12)">
                    <path d="M25,1c-1.29724,0.00027 -2.37875,0.99272 -2.49023,2.28516l-15.25586,8.83398c-0.24372,-0.07807 -0.49799,-0.11825 -0.75391,-0.11914c-1.075,0.00112 -2.02893,0.68933 -2.36901,1.70912c-0.34008,1.01979 0.00985,2.14281 0.86901,2.78893v17.00586c-0.85747,0.64658 -1.20619,1.76856 -0.86632,2.78729c0.33987,1.01873 1.29239,1.70658 2.36632,1.70881c0.25647,-0.00006 0.51141,-0.03959 0.75586,-0.11719l15.25781,8.83398c0.1123,1.29017 1.19128,2.281 2.48633,2.2832c1.29724,-0.00027 2.37875,-0.99272 2.49023,-2.28516l15.25586,-8.83398c0.24372,0.07807 0.49799,0.11825 0.75391,0.11914c1.075,-0.00112 2.02893,-0.68933 2.36901,-1.70912c0.34008,-1.01979 -0.00985,-2.14281 -0.86901,-2.78893v-17.00586c0.85747,-0.64658 1.20619,-1.76856 0.86632,-2.78729c-0.33987,-1.01873 -1.29239,-1.70658 -2.36632,-1.70881c-0.25647,0.00006 -0.51141,0.03959 -0.75586,0.11719l-15.25781,-8.83398c-0.1123,-1.29017 -1.19128,-2.281 -2.48633,-2.2832zM22.27148,5.73633l-7.13672,12.39453l-6.13867,-3.55273c0.01117,-0.35814 -0.05477,-0.7145 -0.19336,-1.04492zM27.73047,5.73633l13.4668,7.79687c-0.13954,0.33088 -0.20615,0.68794 -0.19531,1.04688l-6.13477,3.55273zM24.46094,5.93945c0.17696,0.03967 0.35771,0.05998 0.53906,0.06055c0.18135,-0.00057 0.3621,-0.02087 0.53906,-0.06055l7.5957,13.19531l-6.6543,3.85156c-0.42907,-0.3157 -0.94777,-0.48609 -1.48047,-0.48633c-0.53225,0.00122 -1.05022,0.17228 -1.47852,0.48828l-6.65625,-3.85352zM8.13477,16.39063l6.00195,3.47461l-7.13672,12.39453v-15.31055c0.41988,-0.08585 0.81064,-0.27821 1.13477,-0.55859zM41.86719,16.39063c0.32378,0.27938 0.71381,0.47104 1.13281,0.55664v15.31445l-7.13477,-12.39648zM15.86719,20.86719l6.65234,3.85156c-0.12299,1.0886 0.47711,2.13047 1.48047,2.57031v7.71094h-15.05273c-0.08579,-0.42146 -0.27886,-0.81365 -0.56055,-1.13867zM34.13281,20.86719l7.48242,12.99414c-0.28169,0.32502 -0.47476,0.71722 -0.56055,1.13867h-15.05469v-7.71094c1.00412,-0.43921 1.6051,-1.48122 1.48242,-2.57031zM9.72266,37h14.27734v7.21094c-0.3097,0.13528 -0.58876,0.33195 -0.82031,0.57812zM26,37h14.27734l-13.45703,7.78906c-0.23155,-0.24617 -0.51061,-0.44284 -0.82031,-0.57812z"></path>
                  </g>
                </g>
              </svg>
            </div>
            
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider">
                <span className="text-white font-mono">AGENTIC</span>
                <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent font-mono">MINDS</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Redesigned with Circuit Aesthetic */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center space-x-1 bg-black/30 backdrop-blur-md rounded-full border border-green-500/20 p-1 mr-4">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`px-4 py-2 text-base font-medium rounded-full flex items-center
                        transition-all duration-200
                        ${activeDropdown === item.name 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'text-white/80 hover:bg-green-500/10'}`}
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200
                        ${activeDropdown === item.name ? 'rotate-180 text-green-400' : ''}`} 
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-4 py-2 text-base font-medium rounded-full
                        text-white/80 hover:text-green-400 hover:bg-green-500/10
                        transition-all duration-200 block"
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Redesigned Dropdown Panel with Circuit Aesthetic */}
                  {item.hasDropdown && (
                    <div 
                      className={`absolute top-full left-0 mt-2 w-72 bg-black/90 backdrop-blur-lg border border-green-500/20
                        rounded-xl shadow-xl shadow-green-900/20 overflow-hidden transition-all duration-300 origin-top-left
                        ${activeDropdown === item.name 
                          ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
                          : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
                    >
                      {/* Circuit Style Background */}
                      <div className="absolute inset-0 overflow-hidden">
                        <svg width="100%" height="100%" className="absolute opacity-10">
                          <pattern id="circuitPattern" patternUnits="userSpaceOnUse" width="50" height="50" patternTransform="rotate(45)">
                            <line x1="25" y1="0" x2="25" y2="50" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="0.5" />
                            <line x1="0" y1="25" x2="50" y2="25" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="0.5" />
                          </pattern>
                          <rect width="100%" height="100%" fill="url(#circuitPattern)" />
                        </svg>
                      </div>
                      
                      <div className="p-2 relative z-10">
                        {item.items?.map((subItem, i) => (
                          <Link key={subItem.name} href={subItem.href}>
                            <div className="flex items-start space-x-3 p-3 hover:bg-green-500/10 rounded-lg transition-colors duration-200 group">
                              <div className="p-2 mt-0.5 rounded-md bg-green-900/40 border border-green-500/20 group-hover:bg-green-800/40 
                                transition-colors duration-200">
                                <subItem.icon className="h-4 w-4 text-green-400" />
                              </div>
                              <div>
                                <div className="font-medium text-sm text-white group-hover:text-green-400 transition-colors duration-200">
                                  {subItem.name}
                                </div>
                                <div className="text-xs text-gray-400 mt-0.5">{subItem.description}</div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Portal Button */}
            <Link href="/assistant" className="mr-2 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-green-400/20 blur-md 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-110"></div>
                
              <Button
                variant="default"
                className="bg-black/40 hover:bg-black/60 text-white border border-green-500/30
                  flex items-center space-x-2 pl-3 pr-5 py-5 rounded-full
                  transition-all duration-300 backdrop-blur-lg"
              >
                <div className="w-6 h-6 rounded-full flex items-center justify-center
                  bg-gradient-to-r from-green-600 to-green-800 shadow-inner shadow-green-500/50">
                  <Lightbulb className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="text-sm tracking-wide font-medium">AI PORTAL</span>
              </Button>
            </Link>

            <div>
              <WalletConnector />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <Link href="/assistant">
              <Button
                variant="ghost"
                size="sm"
                className="p-1.5 text-green-400 hover:text-green-300 hover:bg-green-500/10 rounded-full"
              >
                <Lightbulb className="h-5 w-5" />
              </Button>
            </Link>
            
            <WalletConnector />
            
            <Button
              variant="ghost"
              size="sm"
              className="p-1.5 text-white hover:text-green-400 hover:bg-green-500/10 rounded-full focus:ring-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Circuit Themed */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out transform ${
            isMobileMenuOpen
              ? "max-h-[36rem] opacity-100 pointer-events-auto"
              : "max-h-0 opacity-0 pointer-events-none"
          } overflow-hidden relative`}
        >
          {/* Mobile menu circuit pattern background */}
          <div className="absolute inset-0 overflow-hidden">
            <svg width="100%" height="100%" className="absolute opacity-5">
              <pattern id="mobilecircuitPattern" patternUnits="userSpaceOnUse" width="30" height="30" patternTransform="rotate(45)">
                <line x1="15" y1="0" x2="15" y2="30" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="0.5" />
                <line x1="0" y1="15" x2="30" y2="15" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#mobilecircuitPattern)" />
            </svg>
          </div>
          
          <div className="px-3 pt-3 pb-3 space-y-1 border-t border-green-500/20 mt-3 backdrop-blur-sm relative z-10">
            {navItems.map((item) => (
              <div key={item.name} className="py-1">
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full px-3 py-2 text-base font-medium 
                        rounded-lg border border-transparent
                        text-white hover:bg-green-500/10 hover:text-green-400 
                        hover:border-green-500/20 transition-colors duration-200"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`h-5 w-5 transition-transform duration-200
                        ${activeDropdown === item.name ? 'rotate-180 text-green-400' : ''}`} 
                      />
                    </button>
                    
                    <div className={`mt-1 space-y-1 transition-all duration-300 ease-in-out
                      ${activeDropdown === item.name ? 'max-h-96 opacity-100 pl-4 border-l border-green-500/20 ml-3' : 'max-h-0 opacity-0 pointer-events-none overflow-hidden'}`}>
                      {item.items?.map((subItem) => (
                        <Link key={subItem.name} href={subItem.href}>
                          <div className="flex items-center space-x-2 px-3 py-3 text-sm text-gray-300 
                            hover:text-green-400 rounded-lg transition-colors duration-200">
                            <div className="p-1 rounded-md bg-green-900/30 border border-green-500/20">
                              <subItem.icon className="h-3.5 w-3.5 text-green-400" />
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-white/80">{subItem.name}</div>
                              <div className="text-xs text-green-400/60 mt-0.5">{subItem.description}</div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={item.href}>
                    <div className="block px-3 py-2 text-base font-medium rounded-lg border border-transparent
                      text-white hover:bg-green-500/10 hover:text-green-400 hover:border-green-500/20 transition-colors duration-200">
                      {item.name}
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Circuit Line */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/0 via-green-600/30 to-green-600/0"></div>
      </div>
    </nav>
  );
}