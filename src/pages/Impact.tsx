import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Globe, GraduationCap, Building, Lightbulb,
  TrendingUp, Users, BookOpen, Rocket
} from "lucide-react";

const Impact = () => {
  const globalBenefits = [
    {
      icon: GraduationCap,
      title: "Educational Excellence",
      description: "Empowering students and researchers worldwide with hands-on quantum computing experience",
      stats: "500K+ Students",
      benefits: [
        "Interactive learning platform",
        "Real-world quantum experiments",
        "Research collaboration tools",
        "Career development opportunities"
      ]
    },
    {
      icon: Building,
      title: "Industry Advancement",
      description: "Accelerating quantum adoption across industries with transparent and accessible tools",
      stats: "1000+ Companies",
      benefits: [
        "Reduced development costs",
        "Faster time-to-market",
        "Enhanced R&D capabilities",
        "Competitive advantages"
      ]
    },
    {
      icon: Lightbulb,
      title: "Innovation Catalyst",
      description: "Fostering breakthrough discoveries through improved quantum computing accessibility",
      stats: "10K+ Innovations",
      benefits: [
        "Streamlined research workflows",
        "Cross-disciplinary collaboration",
        "Rapid prototyping capabilities",
        "Knowledge democratization"
      ]
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Breaking down barriers to quantum computing for researchers worldwide",
      stats: "150+ Countries",
      benefits: [
        "Equal access to quantum resources",
        "Reduced geographical limitations",
        "Cultural knowledge exchange",
        "Inclusive innovation ecosystem"
      ]
    }
  ];

  const futureReadiness = [
    {
      title: "Quantum Workforce Development",
      description: "Preparing the next generation of quantum professionals",
      icon: Users,
      impact: "Creating millions of quantum-ready jobs by 2030"
    },
    {
      title: "Research Acceleration", 
      description: "Speeding up quantum research and development cycles",
      icon: TrendingUp,
      impact: "3x faster breakthrough discoveries in quantum science"
    },
    {
      title: "Knowledge Democratization",
      description: "Making quantum computing accessible to all skill levels",
      icon: BookOpen,
      impact: "Reducing quantum learning curve by 70%"
    },
    {
      title: "Innovation Ecosystem",
      description: "Building a thriving quantum innovation community",
      icon: Rocket,
      impact: "Supporting 100K+ quantum startups globally"
    }
  ];

  const sectors = [
    {
      name: "Healthcare",
      description: "Drug discovery and medical research",
      potential: "Revolutionary treatments and personalized medicine"
    },
    {
      name: "Finance",
      description: "Risk analysis and fraud detection", 
      potential: "Secure transactions and market optimization"
    },
    {
      name: "Energy",
      description: "Optimization and smart grid management",
      potential: "Sustainable energy solutions and efficiency"
    },
    {
      name: "Materials",
      description: "Molecular simulation and design",
      potential: "Next-generation materials and nanotechnology"
    },
    {
      name: "AI & ML",
      description: "Quantum machine learning algorithms",
      potential: "Exponential AI capabilities and insights"
    },
    {
      name: "Cryptography",
      description: "Quantum-safe security protocols",
      potential: "Unbreakable encryption and privacy protection"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 gradient-text">
          Global Impact & Future Vision
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Transforming the quantum computing landscape and creating opportunities for a quantum-powered future
        </p>
      </div>

      {/* Global Benefits */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Worldwide Benefits</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {globalBenefits.map((benefit, index) => (
            <Card key={benefit.title} className="card-quantum group hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-accent glow-quantum">
                      <benefit.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                      <div className="text-sm font-bold text-accent">{benefit.stats}</div>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed mb-4">
                  {benefit.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {benefit.benefits.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Future Readiness */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Building Tomorrow's Quantum Future</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {futureReadiness.map((item, index) => (
            <Card key={item.title} className="card-quantum text-center group hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="mx-auto p-4 rounded-lg bg-gradient-to-r from-primary to-accent glow-quantum w-fit mb-4">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription className="text-sm">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm font-semibold text-accent">
                  {item.impact}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Industry Sectors */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Transforming Industries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <Card key={sector.name} className="card-quantum group hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-center">{sector.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <p className="text-sm text-muted-foreground">
                  {sector.description}
                </p>
                <div className="border-t border-border pt-3">
                  <p className="text-xs font-semibold text-accent">
                    Potential Impact:
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {sector.potential}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Statistics Dashboard */}
      <div className="bg-secondary/30 rounded-2xl p-8 mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Impact by Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold gradient-text">2030</div>
            <div className="text-sm text-muted-foreground">Quantum Advantage Year</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold gradient-text">$850B</div>
            <div className="text-sm text-muted-foreground">Market Value by 2040</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold gradient-text">1M+</div>
            <div className="text-sm text-muted-foreground">Jobs Created</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold gradient-text">100x</div>
            <div className="text-sm text-muted-foreground">Speed Improvement</div>
          </div>
        </div>
      </div>

      {/* Vision Statement */}
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          We envision a world where quantum computing is accessible, transparent, and collaborative. 
          By democratizing quantum technologies, we're not just building tools – we're building the 
          foundation for humanity's next great technological leap.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
          <button className="btn-quantum">
            Join the Quantum Revolution
          </button>
          <button className="btn-accent">
            Explore Partnership Opportunities
          </button>
        </div>
      </div>
    </div>
  );
};

export default Impact;