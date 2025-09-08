import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background pt-16">
      <div className="text-center space-y-6">
        <div className="text-8xl font-bold gradient-text">404</div>
        <h1 className="text-3xl font-bold text-foreground">Page Not Found</h1>
        <p className="text-xl text-muted-foreground">The quantum state you're looking for doesn't exist in this dimension.</p>
        <button 
          onClick={() => window.location.href = '/'}
          className="btn-quantum"
        >
          Return to Dashboard
        </button>
      </div>
    </div>
  );
};

export default NotFound;
