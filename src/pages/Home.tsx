import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Activity, BarChart3, Clock, Rocket, 
  Users, Zap, ArrowRight, Play 
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Clock,
      title: "Real-time Insights",
      description: "Monitor quantum job execution with live status updates and progress tracking."
    },
    {
      icon: BarChart3, 
      title: "Transparency",
      description: "Complete visibility into quantum workflows with detailed analytics and reporting."
    },
    {
      icon: Rocket,
      title: "Innovation Boost",
      description: "Accelerate quantum research with optimized workflow management and productivity tools."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Enable seamless team collaboration with shared dashboards and project tracking."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_0%,transparent_50%)] opacity-10" />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            {/* Logo Animation */}
            <div className="flex justify-center mb-8">
              <div className="p-6 rounded-2xl bg-gradient-to-r from-primary to-accent glow-quantum quantum-float">
                <Activity className="h-16 w-16 text-primary-foreground" />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              <span className="gradient-text">Quantum Jobs</span>
              <br />
              <span className="text-foreground">Tracker</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up">
              Track, monitor, and analyze IBM Quantum jobs in real-time.
              <br />
              <span className="text-accent font-semibold">The future of quantum computing transparency.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up">
              <Link to="/dashboard">
                <Button className="btn-quantum group text-lg px-8 py-4">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  View Dashboard
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/features">
                <Button className="btn-accent text-lg px-8 py-4">
                  <Play className="h-5 w-5 mr-2" />
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in-up">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">15+</div>
                <div className="text-sm text-muted-foreground">Active Jobs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">5s</div>
                <div className="text-sm text-muted-foreground">Update Frequency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">127</div>
                <div className="text-sm text-muted-foreground">Max Qubits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">Quantum Jobs Tracker</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the next generation of quantum computing monitoring with our comprehensive platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="card-quantum text-center group hover:scale-105 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="mx-auto p-4 rounded-lg bg-gradient-to-r from-primary to-accent glow-quantum w-fit mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for the <span className="gradient-text">Quantum Era</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leveraging cutting-edge technologies to deliver unparalleled quantum computing insights.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-secondary/50">
                <Zap className="h-8 w-8 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Real-time Data Streaming</h3>
                  <p className="text-muted-foreground">Live updates with WebSocket connections and intelligent caching.</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-secondary/50">
                <Activity className="h-8 w-8 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">IBM Quantum Integration</h3>
                  <p className="text-muted-foreground">Direct API integration with all IBM Quantum devices and services.</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-secondary/50">
                <BarChart3 className="h-8 w-8 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Advanced Analytics</h3>
                  <p className="text-muted-foreground">Comprehensive visualizations and performance insights.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-3xl opacity-20" />
              <Card className="card-quantum relative z-10 p-8">
                <CardContent className="text-center space-y-6">
                  <div className="text-6xl font-bold gradient-text">100%</div>
                  <h3 className="text-2xl font-bold">Quantum Ready</h3>
                  <p className="text-muted-foreground">
                    Designed specifically for quantum computing workflows with deep IBM Quantum ecosystem integration.
                  </p>
                  <Link to="/technical">
                    <Button variant="outline" className="mt-4">
                      View Technical Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your <span className="gradient-text">Quantum Workflow</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join researchers and developers worldwide who are already experiencing the future of quantum computing monitoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/dashboard">
              <Button className="btn-quantum text-lg px-8 py-4">
                Start Monitoring Now
              </Button>
            </Link>
            <Link to="/impact">
              <Button className="btn-accent text-lg px-8 py-4">
                Explore Global Impact
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;