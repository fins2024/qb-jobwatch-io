import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, Database, Cloud, Shield, 
  Zap, Layers, GitBranch, Monitor 
} from "lucide-react";

const Technical = () => {
  const architectureComponents = [
    {
      icon: Code,
      title: "Frontend Architecture",
      description: "Modern React application with TypeScript for type safety and enhanced developer experience.",
      technologies: ["React 18", "TypeScript", "Tailwind CSS", "Vite", "React Query"],
      features: [
        "Component-based architecture",
        "Real-time state management", 
        "Responsive design system",
        "Progressive web app capabilities"
      ]
    },
    {
      icon: Database,
      title: "Backend Integration", 
      description: "Scalable backend services with robust API integration and data processing capabilities.",
      technologies: ["Node.js", "Express", "WebSocket", "Redis", "PostgreSQL"],
      features: [
        "RESTful API design",
        "Real-time data streaming",
        "Caching strategies",
        "Database optimization"
      ]
    },
    {
      icon: Cloud,
      title: "IBM Quantum Integration",
      description: "Direct integration with IBM Quantum services for real-time job monitoring and management.",
      technologies: ["IBM Quantum API", "Qiskit", "OAuth 2.0", "WebHooks"],
      features: [
        "Real-time job tracking",
        "Circuit analysis",
        "Device status monitoring",
        "Queue management"
      ]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with comprehensive data protection and access control.",
      technologies: ["JWT", "OAuth 2.0", "HTTPS", "Rate Limiting"],
      features: [
        "Secure authentication",
        "Role-based access",
        "Data encryption",
        "Audit logging"
      ]
    }
  ];

  const challengesAndSolutions = [
    {
      challenge: "API Rate Limits",
      solution: "Intelligent caching and request batching with Redis-based rate limiting.",
      icon: Zap
    },
    {
      challenge: "Real-time Updates",
      solution: "WebSocket connections with fallback polling for reliable data streams.",
      icon: Monitor
    },
    {
      challenge: "Scalability",
      solution: "Microservices architecture with auto-scaling and load balancing.",
      icon: Layers
    },
    {
      challenge: "Data Consistency",
      solution: "Event-driven architecture with eventual consistency patterns.",
      icon: GitBranch
    }
  ];

  const implementationPhases = [
    {
      phase: "Phase 1",
      title: "Core Infrastructure",
      duration: "2-3 weeks",
      deliverables: [
        "Basic dashboard setup",
        "IBM Quantum API integration",
        "User authentication system",
        "Real-time job monitoring"
      ]
    },
    {
      phase: "Phase 2", 
      title: "Advanced Features",
      duration: "3-4 weeks",
      deliverables: [
        "Analytics and reporting",
        "Advanced visualizations",
        "Team collaboration tools",
        "Performance optimization"
      ]
    },
    {
      phase: "Phase 3",
      title: "Production Deployment",
      duration: "2-3 weeks", 
      deliverables: [
        "Security hardening",
        "Load testing",
        "CI/CD pipeline setup",
        "Production monitoring"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 gradient-text">
          Technical Architecture & Implementation
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A comprehensive technical approach to building a scalable quantum job monitoring platform
        </p>
      </div>

      {/* Architecture Overview */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">System Architecture</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {architectureComponents.map((component, index) => (
            <Card key={component.title} className="card-quantum">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-accent glow-quantum">
                    <component.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{component.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {component.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-accent mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {component.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-accent mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {component.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Challenges and Solutions */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Technical Challenges & Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challengesAndSolutions.map((item, index) => (
            <Card key={item.challenge} className="card-quantum">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-accent glow-quantum">
                    <item.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">Challenge: {item.challenge}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-accent">Solution:</span> {item.solution}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Implementation Roadmap */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Implementation Roadmap</h2>
        <div className="space-y-6">
          {implementationPhases.map((phase, index) => (
            <Card key={phase.phase} className="card-quantum">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                      {phase.phase}
                    </Badge>
                    <CardTitle className="text-xl">{phase.title}</CardTitle>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    {phase.duration}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {phase.deliverables.map((deliverable, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="bg-secondary/30 rounded-2xl p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6">Performance Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-accent">&lt; 100ms</div>
            <div className="text-sm text-muted-foreground">API Response Time</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-accent">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-accent">10K+</div>
            <div className="text-sm text-muted-foreground">Concurrent Jobs</div>
          </div>
        </div>
      </div>

      {/* Open Source Commitment */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Open Source & Community</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Built with open-source technologies and designed for community contribution. 
          Our modular architecture enables easy extension and customization.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="btn-quantum">
            View Documentation
          </button>
          <button className="btn-accent">
            Contribute on GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Technical;