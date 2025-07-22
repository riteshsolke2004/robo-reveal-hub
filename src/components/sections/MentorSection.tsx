import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

gsap.registerPlugin(ScrollTrigger)

const mentors = [
  {
    id: 1,
    name: "Dr. P.D. Lambhate",
    role: "Head Of Department",
    department: "Computer Engineering",
    expertise: ["Machine Learning", "Neural Networks", "Deep Learning"],
    image: "",
    bio: "Leading researcher in artificial intelligence with 15+ years of experience in ML and robotics integration.",
    contact: "s.chen@university.edu"
  },

  {
    id: 3,
    name: "Prof. Minal Bade",
    role: "Club Coordinator",
    department: "Computer Engineering",
    expertise: ["AI Ethics","ML"],
    image: "",
    bio: "Pioneering work in responsible AI development and ethical considerations in robotics.",
    contact: "e.watson@university.edu"
  },
    {
    id: 3,
    name: "Mr. Tanish Devhare",
    role: "Club Advisor",
    department: "Computer Engineering",
    expertise: ["Autonomous Systems", "Computer Vision", "AIML"],
    image: "",
    bio: "Industry veteran with expertise in autonomous robotics and real-world AI applications.",
    contact: "taneshdevhare07@gmail.com"
  },
  

  // {
  //   id: 4,
  //   name: "Dr. James Liu",
  //   role: "Innovation Lead",
  //   department: "Mechanical Engineering",
  //   expertise: ["Hardware Design", "Mechatronics", "3D Printing"],
  //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  //   bio: "Expert in robotics hardware design and rapid prototyping for AI-driven mechanical systems.",
  //   contact: "j.liu@university.edu"
  // }
]

const MentorSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const cards = cardsRef.current

    if (!section || !title || !cards) return

    // Title animation
    gsap.fromTo(title, 
      { 
        opacity: 0, 
        y: 50,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Cards stagger animation
    const mentorCards = cards.querySelectorAll('.mentor-card')
    gsap.fromTo(mentorCards,
      {
        opacity: 0,
        y: 80,
        rotateX: 45,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cards,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Hover effects for cards
    mentorCards.forEach((card) => {
      const cardElement = card as HTMLElement
      
      cardElement.addEventListener('mouseenter', () => {
        gsap.to(cardElement, {
          y: -10,
          rotateY: 5,
          scale: 1.02,
          boxShadow: "0 20px 60px rgba(0, 255, 255, 0.3)",
          duration: 0.3,
          ease: "power2.out"
        })
      })

      cardElement.addEventListener('mouseleave', () => {
        gsap.to(cardElement, {
          y: 0,
          rotateY: 0,
          scale: 1,
          boxShadow: "0 10px 30px rgba(0, 255, 255, 0.1)",
          duration: 0.3,
          ease: "power2.out"
        })
      })
    })

  }, [])

  return (
    <section 
      id="mentors" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 neural-bg opacity-30"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-glow">Mentors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our experienced faculty and industry experts guide our journey through the cutting-edge world of AI and robotics
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor) => (
            <Card 
              key={mentor.id} 
              className="mentor-card bg-gradient-card backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 group cursor-pointer"
              style={{ boxShadow: "0 10px 30px rgba(0, 255, 255, 0.1)" }}
            >
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name}
                      className="w-full h-full rounded-full object-cover border-2 border-primary/30 group-hover:border-primary transition-colors duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-glow opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-lg mb-1 text-foreground">{mentor.name}</h3>
                    <p className="text-primary font-medium mb-1">{mentor.role}</p>
                    <p className="text-sm text-muted-foreground mb-3">{mentor.department}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {mentor.expertise.map((skill, index) => (
                      <Badge 
                        key={index}
                        variant="secondary" 
                        className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground text-center mb-4 leading-relaxed">
                  {mentor.bio}
                </p>

                <div className="text-center">
                  <a 
                    href={`mailto:${mentor.contact}`}
                    className="text-xs text-primary hover:text-accent transition-colors duration-300 underline"
                  >
                    {mentor.contact}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block p-6 bg-gradient-card backdrop-blur-sm rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              Want to <span className="text-transparent bg-clip-text bg-gradient-glow">Connect</span>?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Our mentors are here to guide you through your AI and robotics journey. 
              Reach out for research opportunities, project guidance, or career advice.
            </p>
            <button className="px-8 py-3 bg-gradient-glow text-background font-semibold rounded-lg hover:scale-105 transition-transform duration-300 shadow-neon">
              Schedule a Meeting
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MentorSection