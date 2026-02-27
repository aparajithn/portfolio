'use client';

import { Coffee, Bike, Mountain, Gamepad2, Video, Mail, Github, ChevronDown, Sparkles, Baby, Briefcase } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Scroll reveal animation
      const reveals = document.querySelectorAll('.scroll-reveal');
      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
          element.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      {/* Hero Section - Cinematic */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D1D15] via-[#1A1410] to-[#0A0604] animate-gradient"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-[#D5AA62] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-[#F5E6D3] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Noise texture */}
        <div className="absolute inset-0 noise opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-[#D5AA62] text-sm font-medium animate-fadeIn">
            <Sparkles className="w-4 h-4" />
            <span>Available for opportunities</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-bold mb-6 leading-none">
            <span className="block gradient-text">Aparajith</span>
            <span className="block gradient-text">Nagarajan</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-[#D7C2A4] mb-4 font-light tracking-wide animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Abu
          </p>
          
          <p className="text-xl md:text-2xl text-stone-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            Founder of Dabara Coffee • Building meaningful experiences • Calgary, AB
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <a 
              href="#projects" 
              className="group px-8 py-4 bg-[#D5AA62] hover:bg-[#E5BA72] text-[#2D1D15] font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-[#D5AA62]/20"
            >
              <span>View My Work</span>
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 glass hover:bg-white/10 text-[#D7C2A4] font-semibold rounded-full transition-all"
            >
              Get in Touch
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-[#D5AA62]" />
          </div>
        </div>
      </section>

      {/* About Section - Split Layout */}
      <section id="about" className="relative py-32 px-6 bg-gradient-to-b from-[#0A0A0A] to-[#1A1410]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <div className="scroll-reveal space-y-8">
              <div>
                <p className="text-[#D5AA62] font-semibold mb-4 tracking-wider uppercase text-sm">About</p>
                <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                  Building with <span className="gradient-text">passion</span> and <span className="gradient-text">purpose</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-stone-300 leading-relaxed">
                <p>
                  Hey there! I'm Abu (Aparajith Nagarajan), based in the beautiful city of <strong className="text-[#D7C2A4]">Calgary, Alberta, Canada</strong>. 
                  I bring a unique perspective rooted in my Tamil heritage to everything I create.
                </p>
                <p>
                  As the founder of <strong className="text-[#D7C2A4]">Dabara Coffee</strong>, I'm on a mission to share the rich tradition 
                  of South Indian filter coffee with the world. From sourcing premium beans to perfecting the brew, 
                  every cup tells a story.
                </p>
                <p>
                  When I'm not working, you'll find me exploring the Rocky Mountains on two wheels, hiking through 
                  breathtaking trails, competing on the badminton court, or creating content that inspires.
                </p>
              </div>
            </div>
            
            {/* Right - Stats/Highlights */}
            <div className="scroll-reveal space-y-6" style={{ transitionDelay: '0.2s' }}>
              <div className="glass-dark rounded-3xl p-8 hover:scale-105 transition-transform">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-[#D5AA62]/20 rounded-xl">
                    <Coffee className="w-8 h-8 text-[#D5AA62]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#D7C2A4] mb-2">Founded Dabara Coffee</h3>
                    <p className="text-stone-400">2024 • Specialty South Indian filter coffee</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-dark rounded-3xl p-8 hover:scale-105 transition-transform">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-[#D5AA62]/20 rounded-xl">
                    <Briefcase className="w-8 h-8 text-[#D5AA62]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#D7C2A4] mb-2">New Chapter</h3>
                    <p className="text-stone-400">February 2026 • Exciting professional journey</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-dark rounded-3xl p-8 hover:scale-105 transition-transform">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-[#D5AA62]/20 rounded-xl">
                    <Baby className="w-8 h-8 text-[#D5AA62]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#D7C2A4] mb-2">Growing Family</h3>
                    <p className="text-stone-400">March 2026 • Expecting a baby girl</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 border-l-4 border-[#D5AA62] bg-[#D5AA62]/5 rounded-r-2xl">
                <p className="text-xl italic text-[#D7C2A4] leading-relaxed">
                  "I believe in creating experiences that matter — whether through exceptional coffee, 
                  thoughtful engineering, or meaningful connections."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Glassmorphism Cards */}
      <section id="projects" className="relative py-32 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-reveal">
            <p className="text-[#D5AA62] font-semibold mb-4 tracking-wider uppercase text-sm">Portfolio</p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Featured Projects</h2>
            <p className="text-xl text-stone-400 max-w-2xl mx-auto">
              Building products that blend tradition with innovation
            </p>
          </div>
          
          {/* Dabara Coffee - Hero Card */}
          <div className="scroll-reveal mb-12">
            <div className="group relative glass-dark rounded-3xl p-1 bg-gradient-to-br from-[#D5AA62] via-[#E5BA72] to-[#D5AA62] hover:shadow-2xl hover:shadow-[#D5AA62]/30 transition-all duration-500">
              <div className="bg-[#1A1410] rounded-3xl p-10 md:p-12 h-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-[#D5AA62]/20 rounded-2xl">
                        <Coffee className="w-12 h-12 text-[#D5AA62]" />
                      </div>
                      <div>
                        <h3 className="text-4xl font-bold text-[#D7C2A4]">Dabara Coffee</h3>
                        <p className="text-[#D5AA62] font-medium mt-1">Founder & Creator</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-stone-300 mb-8 leading-relaxed">
                      A specialty South Indian coffee e-commerce business bringing authentic filter coffee culture 
                      to homes across North America. Dabara Coffee celebrates the rich tradition of South Indian 
                      coffee-making, offering premium blends and the tools to create the perfect cup.
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mb-8">
                      <span className="px-4 py-2 bg-[#D5AA62]/10 border border-[#D5AA62]/30 text-[#D7C2A4] rounded-full text-sm font-medium">E-commerce</span>
                      <span className="px-4 py-2 bg-[#D5AA62]/10 border border-[#D5AA62]/30 text-[#D7C2A4] rounded-full text-sm font-medium">Coffee Culture</span>
                      <span className="px-4 py-2 bg-[#D5AA62]/10 border border-[#D5AA62]/30 text-[#D7C2A4] rounded-full text-sm font-medium">Tamil Heritage</span>
                      <span className="px-4 py-2 bg-[#D5AA62]/10 border border-[#D5AA62]/30 text-[#D7C2A4] rounded-full text-sm font-medium">Shopify</span>
                    </div>
                    
                    <a 
                      href="https://dabaracoffee.ca" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-[#D5AA62] hover:bg-[#E5BA72] text-[#2D1D15] font-semibold rounded-full transition-all transform hover:scale-105"
                    >
                      <span>Visit Dabara Coffee</span>
                      <span className="text-xl">→</span>
                    </a>
                  </div>
                  
                  {/* Mock Browser */}
                  <div className="relative">
                    <div className="glass rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                      {/* Browser chrome */}
                      <div className="bg-stone-900/50 px-4 py-3 flex items-center gap-2 border-b border-white/10">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                        </div>
                        <div className="flex-1 mx-4 px-4 py-1 bg-stone-800/50 rounded text-xs text-stone-500">
                          dabaracoffee.ca
                        </div>
                      </div>
                      {/* Mock content */}
                      <div className="aspect-video bg-gradient-to-br from-[#2D1D15] to-[#1A1410] flex items-center justify-center">
                        <Coffee className="w-24 h-24 text-[#D5AA62] opacity-40" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Projects Placeholder */}
          <div className="grid md:grid-cols-2 gap-8 scroll-reveal">
            <div className="glass-dark rounded-2xl p-8 hover:scale-105 transition-transform">
              <div className="h-full flex flex-col">
                <div className="mb-6">
                  <Sparkles className="w-10 h-10 text-[#D5AA62] mb-4" />
                  <h4 className="text-2xl font-bold text-[#D7C2A4] mb-3">More Coming Soon</h4>
                  <p className="text-stone-400 leading-relaxed">
                    Always building, always learning. Stay tuned for more exciting ventures at the intersection of 
                    technology, culture, and passion.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-dark rounded-2xl p-8 hover:scale-105 transition-transform">
              <div className="h-full flex flex-col">
                <div className="mb-6">
                  <Github className="w-10 h-10 text-[#D5AA62] mb-4" />
                  <h4 className="text-2xl font-bold text-[#D7C2A4] mb-3">Open Source</h4>
                  <p className="text-stone-400 leading-relaxed mb-4">
                    Check out my GitHub for code, experiments, and contributions to the developer community.
                  </p>
                  <a 
                    href="https://github.com/aparajithn" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#D5AA62] hover:text-[#E5BA72] font-medium transition-colors"
                  >
                    <span>View GitHub</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section - Bento Grid */}
      <section id="interests" className="relative py-32 px-6 bg-gradient-to-b from-[#0A0A0A] to-[#1A1410]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-reveal">
            <p className="text-[#D5AA62] font-semibold mb-4 tracking-wider uppercase text-sm">What Drives Me</p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Passions & Interests</h2>
            <p className="text-xl text-stone-400 max-w-2xl mx-auto">
              Life is about balance — here's what keeps me inspired
            </p>
          </div>
          
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 scroll-reveal">
            {/* Large card - Coffee */}
            <div className="md:col-span-2 lg:row-span-2 group glass-dark rounded-3xl p-8 hover:bg-gradient-to-br hover:from-[#D5AA62]/20 hover:to-transparent transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D5AA62] rounded-full filter blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <Coffee className="w-16 h-16 text-[#D5AA62] mb-6" />
                <h3 className="text-3xl font-bold text-[#D7C2A4] mb-4">Coffee Culture</h3>
                <p className="text-stone-300 text-lg leading-relaxed">
                  From bean to cup, I'm passionate about specialty coffee and the rich traditions of South Indian 
                  filter coffee. It's not just a drink — it's an experience, a ritual, and a connection to heritage.
                </p>
              </div>
            </div>
            
            {/* Motorcycles */}
            <div className="md:col-span-1 group glass-dark rounded-3xl p-8 hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-transparent transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500 rounded-full filter blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <Bike className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-2xl font-bold text-orange-200 mb-3">Motorcycles</h3>
                <p className="text-stone-300 leading-relaxed">
                  Two wheels, endless roads. The freedom of riding through scenic routes.
                </p>
              </div>
            </div>
            
            {/* Hiking */}
            <div className="md:col-span-1 group glass-dark rounded-3xl p-8 hover:bg-gradient-to-br hover:from-green-500/20 hover:to-transparent transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-green-500 rounded-full filter blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <Mountain className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold text-green-200 mb-3">Hiking</h3>
                <p className="text-stone-300 leading-relaxed">
                  Exploring the Rocky Mountains and discovering breathtaking trails.
                </p>
              </div>
            </div>
            
            {/* Gaming */}
            <div className="md:col-span-1 group glass-dark rounded-3xl p-8 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-transparent transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500 rounded-full filter blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <Gamepad2 className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold text-blue-200 mb-3">Gaming</h3>
                <p className="text-stone-300 leading-relaxed">
                  From strategy to adventure — my go-to for relaxation.
                </p>
              </div>
            </div>
            
            {/* Content Creation */}
            <div className="md:col-span-2 group glass-dark rounded-3xl p-8 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-transparent transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500 rounded-full filter blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <Video className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold text-purple-200 mb-3">Content Creation</h3>
                <p className="text-stone-300 leading-relaxed">
                  Sharing stories and experiences through content that inspires and connects with others. 
                  Every piece is an opportunity to create something meaningful.
                </p>
              </div>
            </div>
            
            {/* Badminton */}
            <div className="md:col-span-1 group glass-dark rounded-3xl p-8 hover:bg-gradient-to-br hover:from-red-500/20 hover:to-transparent transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-500 rounded-full filter blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4">🏸</div>
                <h3 className="text-2xl font-bold text-red-200 mb-3">Badminton</h3>
                <p className="text-stone-300 leading-relaxed">
                  Fast-paced and competitive — keeps me sharp and energized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Premium CTA */}
      <section id="contact" className="relative py-32 px-6 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto">
          <div className="scroll-reveal relative glass-dark rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, #D5AA62 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D5AA62]/10 border border-[#D5AA62]/30 rounded-full text-[#D5AA62] text-sm font-medium mb-8">
                <Mail className="w-4 h-4" />
                <span>Open to collaboration</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                Let's Connect
              </h2>
              
              <p className="text-xl md:text-2xl text-stone-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                Whether you want to talk about coffee, collaborate on a project, or just say hi — 
                I'd love to hear from you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:hello@aparajith.dev" 
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D5AA62] hover:bg-[#E5BA72] text-[#2D1D15] font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-[#D5AA62]/20"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Email</span>
                </a>
                <a 
                  href="https://github.com/aparajithn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 glass hover:bg-white/10 text-[#D7C2A4] font-semibold rounded-full transition-all"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-stone-800/50 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-stone-500">
              <p>© 2026 Aparajith Nagarajan. Built with passion and coffee.</p>
            </div>
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/aparajithn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-[#D5AA62] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="mailto:hello@aparajith.dev"
                className="text-stone-500 hover:text-[#D5AA62] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
