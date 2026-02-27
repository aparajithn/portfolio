import Image from "next/image";
import { Coffee, Bike, Mountain, Gamepad2, Video, Mail, Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 via-stone-900 to-amber-950">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-600 to-orange-700 flex items-center justify-center text-6xl font-bold text-white shadow-2xl shadow-amber-900/50">
              A
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-orange-300 to-amber-400 bg-clip-text text-transparent">
            Aparajith Nagarajan
          </h1>
          <p className="text-2xl md:text-3xl text-amber-100/90 mb-4 font-light">
            Abu
          </p>
          <p className="text-xl md:text-2xl text-stone-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Founder. Coffee Enthusiast. Adventurer. Building something special, one cup at a time.
          </p>
          <div className="flex gap-6 justify-center">
            <a href="#about" className="px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg">
              Learn More
            </a>
            <a href="#contact" className="px-8 py-3 border-2 border-amber-500 text-amber-400 hover:bg-amber-500/10 rounded-lg transition-all">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-amber-300">About Me</h2>
          <div className="space-y-6 text-lg text-stone-200 leading-relaxed">
            <p>
              Hey there! I'm Abu (Aparajith Nagarajan), based in the beautiful city of Calgary, Alberta, Canada. 
              I recently started a new chapter in my professional journey in February 2026, while continuing to build 
              and grow my passion project.
            </p>
            <p>
              With roots in Tamil heritage, I bring a unique perspective to everything I do. I believe in 
              creating experiences that matter, whether that's through exceptional coffee, thoughtful engineering, 
              or meaningful connections.
            </p>
            <p>
              When I'm not working, you'll find me exploring the Rocky Mountains on two wheels, hiking through 
              breathtaking trails, competing on the badminton court, diving into the latest games, or creating 
              content that inspires others.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-amber-300">Projects</h2>
          
          {/* Dabara Coffee - Featured */}
          <div className="mb-12 bg-gradient-to-br from-amber-900/40 to-orange-900/30 rounded-2xl p-8 border border-amber-700/30 shadow-2xl hover:shadow-amber-900/50 transition-all">
            <div className="flex items-start gap-4 mb-6">
              <Coffee className="w-12 h-12 text-amber-400" />
              <div>
                <h3 className="text-3xl font-bold text-amber-200 mb-2">Dabara Coffee</h3>
                <p className="text-amber-400/80 text-sm">Founder & Creator</p>
              </div>
            </div>
            <p className="text-stone-200 text-lg mb-6 leading-relaxed">
              A specialty South Indian coffee e-commerce business bringing authentic filter coffee culture to homes 
              across North America. Dabara Coffee celebrates the rich tradition of South Indian coffee-making, 
              offering premium blends and the tools to create the perfect cup.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-1 bg-amber-800/50 text-amber-200 rounded-full text-sm">E-commerce</span>
              <span className="px-4 py-1 bg-amber-800/50 text-amber-200 rounded-full text-sm">Coffee Culture</span>
              <span className="px-4 py-1 bg-amber-800/50 text-amber-200 rounded-full text-sm">Tamil Heritage</span>
              <span className="px-4 py-1 bg-amber-800/50 text-amber-200 rounded-full text-sm">Shopify</span>
            </div>
            <a 
              href="https://dabaracoffee.ca" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-lg transition-all transform hover:scale-105"
            >
              Visit Dabara Coffee
              <span className="text-xl">→</span>
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* More projects can be added here */}
            <div className="bg-stone-800/30 rounded-xl p-6 border border-stone-700/50 hover:border-amber-700/50 transition-all">
              <h4 className="text-xl font-bold text-amber-300 mb-3">More Projects Coming Soon</h4>
              <p className="text-stone-300">
                Always building, always learning. Stay tuned for more exciting ventures at the intersection of 
                technology, culture, and passion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="py-24 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-amber-300">Passions & Interests</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-900/30 to-stone-900/30 rounded-xl p-6 border border-amber-700/20 hover:border-amber-600/50 transition-all">
              <Coffee className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="text-xl font-bold text-amber-200 mb-3">Coffee Culture</h3>
              <p className="text-stone-300">
                From bean to cup, I'm passionate about specialty coffee and the rich traditions of South Indian filter coffee.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-900/30 to-stone-900/30 rounded-xl p-6 border border-orange-700/20 hover:border-orange-600/50 transition-all">
              <Bike className="w-10 h-10 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-orange-200 mb-3">Motorcycles</h3>
              <p className="text-stone-300">
                Two wheels, endless roads. There's nothing like the freedom of riding through scenic routes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-stone-900/30 rounded-xl p-6 border border-green-700/20 hover:border-green-600/50 transition-all">
              <Mountain className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-green-200 mb-3">Hiking</h3>
              <p className="text-stone-300">
                Exploring the Rocky Mountains and discovering breathtaking trails is my way of recharging.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-stone-900/30 rounded-xl p-6 border border-blue-700/20 hover:border-blue-600/50 transition-all">
              <Gamepad2 className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-blue-200 mb-3">Gaming</h3>
              <p className="text-stone-300">
                From strategy to adventure, gaming is my go-to for relaxation and staying competitive.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-stone-900/30 rounded-xl p-6 border border-purple-700/20 hover:border-purple-600/50 transition-all">
              <Video className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-purple-200 mb-3">Content Creation</h3>
              <p className="text-stone-300">
                Sharing stories and experiences through content that inspires and connects with others.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-900/30 to-stone-900/30 rounded-xl p-6 border border-red-700/20 hover:border-red-600/50 transition-all">
              <div className="w-10 h-10 mb-4 flex items-center justify-center">
                <span className="text-4xl">🏸</span>
              </div>
              <h3 className="text-xl font-bold text-red-200 mb-3">Badminton</h3>
              <p className="text-stone-300">
                Fast-paced, competitive, and always fun. Badminton keeps me sharp and energized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-amber-300">Let's Connect</h2>
          <p className="text-xl text-stone-300 mb-12 max-w-2xl mx-auto">
            Whether you want to talk about coffee, collaborate on a project, or just say hi — I'd love to hear from you.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <a 
              href="https://github.com/aparajithn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-stone-800 hover:bg-stone-700 text-white rounded-lg transition-all"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a 
              href="mailto:hello@aparajith.dev" 
              className="flex items-center gap-3 px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-lg transition-all"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black/40 border-t border-stone-800">
        <div className="max-w-6xl mx-auto text-center text-stone-400">
          <p>© 2026 Aparajith Nagarajan. Built with passion and coffee.</p>
        </div>
      </footer>
    </main>
  );
}
