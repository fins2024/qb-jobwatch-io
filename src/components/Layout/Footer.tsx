import { Link } from "react-router-dom";
import { Activity, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const resources = [
    { name: "IBM Quantum Docs", url: "https://docs.quantum.ibm.com/" },
    { name: "Quantum Computing Research", url: "https://research.ibm.com/quantum-computing" },
    { name: "Qiskit Documentation", url: "https://qiskit.org/documentation/" },
    { name: "Quantum Network", url: "https://quantum-network.ibm.com/" },
  ];

  return (
    <footer className="bg-secondary/50 backdrop-blur-sm border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-accent glow-quantum">
                <Activity className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold gradient-text">Quantum Jobs Tracker</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Real-time monitoring and visualization of IBM Quantum computing jobs. 
              Empowering researchers and developers with transparent quantum workflow insights.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/dashboard" className="block text-sm text-muted-foreground hover:text-accent transition-colors">
                Dashboard
              </Link>
              <Link to="/features" className="block text-sm text-muted-foreground hover:text-accent transition-colors">
                Features
              </Link>
              <Link to="/technical" className="block text-sm text-muted-foreground hover:text-accent transition-colors">
                Technical Approach
              </Link>
              <Link to="/impact" className="block text-sm text-muted-foreground hover:text-accent transition-colors">
                Global Impact
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Resources & References</h3>
            <div className="space-y-2">
              {resources.map((resource) => (
                <a
                  key={resource.name}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-colors group"
                >
                  <span>{resource.name}</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Quantum Jobs Tracker. Built for the quantum computing community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;