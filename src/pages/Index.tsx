import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ParticleBackground from '@/components/ParticleBackground'
import HeroSection from '@/components/sections/HeroSection'
import MissionSection from '@/components/sections/MissionSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import MentorSection from '@/components/sections/MentorSection'
import TeamSection from '@/components/sections/TeamSection'
import JoinSection from '@/components/sections/JoinSection'

gsap.registerPlugin(ScrollTrigger)

const Index = () => {
  useEffect(() => {
    // Smooth scrolling setup
    gsap.registerPlugin(ScrollTrigger)
    
    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <span className="text-primary">AI</span> Robotics Club
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="hover:text-primary transition-colors">Home</a>
              <a href="#mission" className="hover:text-primary transition-colors">Mission</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#mentors" className="hover:text-primary transition-colors">Mentors</a>
              <a href="#team" className="hover:text-primary transition-colors">Team</a>
              <a href="#join" className="hover:text-primary transition-colors">Join</a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Sections */}
      <div id="hero">
        <HeroSection />
      </div>
      <MissionSection />
      <ProjectsSection />
      <MentorSection />
      <TeamSection />
      <JoinSection />
      
      {/* Footer */}
      <footer className="relative z-10 bg-gradient-card backdrop-blur-sm border-t border-border/50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-primary">AI</span> Robotics Club
              </h3>
              <p className="text-muted-foreground mb-4 max-w-md">
                Building the future through artificial intelligence and robotics innovation. 
                Join our community of passionate creators and researchers.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors">
                  📧
                </button>
                <button className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors">
                  🐙
                </button>
                <button className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors">
                  💼
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#mission" className="hover:text-primary transition-colors">Our Mission</a></li>
                <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
                <li><a href="#mentors" className="hover:text-primary transition-colors">Mentors</a></li>
                <li><a href="#team" className="hover:text-primary transition-colors">Team</a></li>
                <li><a href="#join" className="hover:text-primary transition-colors">Join Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>ai-robotics@university.edu</li>
                <li>Building 42, Room 101</li>
                <li>University Campus</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 AI Robotics Club. Crafted with 💙 for the future of technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
