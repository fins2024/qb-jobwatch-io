import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Clock, BarChart3, Rocket, Users, 
  Zap, Shield, Gauge, Globe 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Real-time Insights",
      description: "Monitor quantum job execution with live status updates, progress tracking, and instant notifications.",
      benefits: [
        "Live job status monitoring",
        "Queue position tracking", 
        "Execution time estimates",
        "Instant failure alerts"
      ]
    },
    {
      icon: BarChart3,
      title: "Transparency",
      description: "Complete visibility into quantum computing workflows with detailed analytics and comprehensive reporting.",
      benefits: [
        "Detailed execution metrics",
        "Resource utilization reports",
        "Historical performance data",
        "Queue analytics dashboard"
      ]
    },
    {
      icon: Rocket,
      title: "Innovation Boost",
      description: "Accelerate quantum research and development with optimized workflow management and enhanced productivity.",
      benefits: [
        "Faster iteration cycles",
        "Optimized resource allocation",
        "Enhanced debugging capabilities",
        "Streamlined development process"
      ]
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Enable seamless team collaboration with shared dashboards, project tracking, and communication tools.",
      benefits: [
        "Team project visibility",
        "Shared resource management",
        "Collaborative debugging",
        "Knowledge sharing platform"
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized for speed with minimal latency monitoring and efficient data processing."
    },
    {
      icon: Shield,
      title: "Secure Access",
      description: "Enterprise-grade security with role-based access control and data encryption."
    },
    {
      icon: Gauge,
      title: "Scalable Architecture", 
      description: "Built to handle thousands of concurrent jobs with auto-scaling capabilities."
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Access your quantum jobs from anywhere with responsive web design."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 gradient-text">
          Powerful Features for Quantum Computing
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive tools and insights to revolutionize your quantum computing workflow
        </p>
      </div>

      {/* Main Features */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {features.map((feature, index) => (
          <Card key={feature.title} className="card-quantum group hover:scale-105 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-accent glow-quantum">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </div>
              <CardDescription className="text-base leading-relaxed">
                {feature.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-accent">Key Benefits:</h4>
                <ul className="space-y-1">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Features Grid */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Additional Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalFeatures.map((feature, index) => (
            <Card key={feature.title} className="card-quantum text-center group hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="mx-auto p-3 rounded-lg bg-gradient-to-r from-primary to-accent glow-quantum w-fit">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="bg-secondary/30 rounded-2xl p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Who Benefits?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center space-y-4">
            <div className="p-4 rounded-full bg-quantum-purple/20 w-16 h-16 mx-auto flex items-center justify-center">
              <Users className="h-8 w-8 text-quantum-purple" />
            </div>
            <h3 className="font-semibold">Researchers</h3>
            <p className="text-sm text-muted-foreground">
              Track experiment progress, optimize quantum algorithms, and collaborate with global teams.
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="p-4 rounded-full bg-quantum-blue/20 w-16 h-16 mx-auto flex items-center justify-center">
              <Rocket className="h-8 w-8 text-quantum-blue" />
            </div>
            <h3 className="font-semibold">Developers</h3>
            <p className="text-sm text-muted-foreground">
              Debug quantum circuits, monitor performance, and streamline development workflows.
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="p-4 rounded-full bg-quantum-green/20 w-16 h-16 mx-auto flex items-center justify-center">
              <BarChart3 className="h-8 w-8 text-quantum-green" />
            </div>
            <h3 className="font-semibold">Organizations</h3>
            <p className="text-sm text-muted-foreground">
              Manage quantum computing resources, track ROI, and scale quantum initiatives.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Quantum Workflow?</h2>
        <p className="text-muted-foreground mb-8">
          Experience the future of quantum computing monitoring with our comprehensive dashboard.
        </p>
        <button className="btn-quantum">
          Get Started Today
        </button>
      </div>
    </div>
  );
};

export default Features;