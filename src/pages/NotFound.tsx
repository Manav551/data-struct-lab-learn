
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-md">
          <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">404</h1>
          <p className="mt-2 text-lg font-medium text-gray-600">Node not found in our data structure</p>
          <p className="mt-4 text-base text-gray-500">
            The page you're looking for doesn't exist or has been moved to another URL.
          </p>
          
          <div className="mt-6">
            <code className="block p-4 mb-4 bg-gray-100 rounded-md font-mono text-sm text-left">
              <span className="text-purple-600">function</span> <span className="text-blue-600">findPage</span>(<span className="text-orange-600">path</span>) {'{'}
              <br />
              &nbsp;&nbsp;<span className="text-green-600">// Error: Path not found in routing tree</span>
              <br />
              &nbsp;&nbsp;<span className="text-purple-600">throw new</span> <span className="text-red-600">Error</span>(<span className="text-green-600">"404: Page not found"</span>);
              <br />
              {'}'}
            </code>
          </div>
          
          <div className="mt-6">
            <Button asChild className="bg-brand-blue hover:bg-brand-darkBlue">
              <Link to="/" className="flex items-center justify-center">
                <Home className="mr-2 h-4 w-4" />
                Back to Homepage
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
