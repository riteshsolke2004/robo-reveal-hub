import ScrollReveal from '@/components/ScrollReveal'
import { Github, Linkedin, Mail } from 'lucide-react'
import teamPhotoImage from '@/assets/team-photo.jpg'

const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'AI Research Lead',
    bio: 'Specializing in deep learning and neural networks with 5+ years in AI research.',
    avatar: '🤖',
    skills: ['Deep Learning', 'Computer Vision', 'Research']
  },
  {
    name: 'Sarah Johnson',
    role: 'Robotics Engineer',
    bio: 'Expert in autonomous systems and robotic control with a passion for innovation.',
    avatar: '🔬',
    skills: ['Robotics', 'Control Systems', 'SLAM']
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Software Architect',
    bio: 'Full-stack developer focused on AI integration and scalable system design.',
    avatar: '💻',
    skills: ['Software Architecture', 'AI Integration', 'Backend Systems']
  },
  {
    name: 'Emily Zhang',
    role: 'Project Manager',
    bio: 'Orchestrating innovation with agile methodologies and strategic planning.',
    avatar: '📊',
    skills: ['Project Management', 'Strategy', 'Team Leadership']
  }
]

const stats = [
  { label: 'Active Members', value: '50+' },
  { label: 'Projects Completed', value: '25' },
  { label: 'Research Papers', value: '12' },
  { label: 'Innovation Awards', value: '8' }
]

export default function TeamSection() {
  return (
    <section id="team" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={teamPhotoImage} 
          alt="Team working" 
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <ScrollReveal animation="fadeUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Meet Our <span className="text-hologram">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse group of passionate innovators, researchers, and engineers united by our shared vision 
            of advancing AI and robotics for the betterment of humanity.
          </p>
        </ScrollReveal>
        
        {/* Stats */}
        <ScrollReveal animation="fadeUp" delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="bg-gradient-card backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-glow transition-all duration-300 hover:scale-105 hover:border-primary/50">
                  <div className="text-3xl md:text-4xl font-bold text-primary group-hover:text-hologram transition-colors mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
        
        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <ScrollReveal 
              key={member.name}
              animation="zoomIn"
              delay={index * 0.2}
              className="group"
            >
              <div className="bg-gradient-card backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:shadow-hologram transition-all duration-500 hover:scale-105 hover:border-primary/50">
                <div className="mb-4">
                  <div className="w-20 h-20 bg-gradient-glow rounded-full flex items-center justify-center text-4xl mx-auto mb-4 group-hover:animate-glow-pulse">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-hologram font-medium mb-3">
                    {member.role}
                  </p>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {member.skills.map(skill => (
                    <span 
                      key={skill}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-center gap-2">
                  <button className="p-2 hover:bg-primary/20 rounded-lg transition-colors group/icon">
                    <Github className="h-4 w-4 text-muted-foreground group-hover/icon:text-primary transition-colors" />
                  </button>
                  <button className="p-2 hover:bg-primary/20 rounded-lg transition-colors group/icon">
                    <Linkedin className="h-4 w-4 text-muted-foreground group-hover/icon:text-primary transition-colors" />
                  </button>
                  <button className="p-2 hover:bg-primary/20 rounded-lg transition-colors group/icon">
                    <Mail className="h-4 w-4 text-muted-foreground group-hover/icon:text-primary transition-colors" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Call to Action */}
        <ScrollReveal animation="fadeUp" delay={0.8} className="text-center">
          <div className="bg-gradient-card backdrop-blur-sm border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Want to <span className="text-primary">Join Our Team?</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals who share our vision. 
              Whether you're a researcher, engineer, designer, or enthusiast, there's a place for you here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-glow text-background rounded-lg font-medium hover:scale-105 transition-transform shadow-glow hover:shadow-hologram">
                Apply Now
              </button>
              <button className="px-6 py-3 border border-hologram text-hologram rounded-lg font-medium hover:bg-hologram/10 hover:scale-105 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}