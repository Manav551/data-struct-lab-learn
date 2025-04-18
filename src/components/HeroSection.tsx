
import { ArrowRight, ChevronRight, Code, Layers, BarChart2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Master</span>{" "}
                <span className="block text-brand-blue">Data Structures</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Learn, visualize, and practice data structures with interactive lessons, code playgrounds, and real-world examples. The most effective way to understand algorithms and ace your interviews.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-darkBlue w-full">
                    <Link to="/courses" className="flex items-center justify-center">
                      Start Learning
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button asChild variant="outline" size="lg" className="w-full">
                    <Link to="/playground" className="flex items-center justify-center">
                      Try Playground
                      <Code className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <div className="flex items-center text-sm text-gray-500">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  No credit card required
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Progress tracking across devices
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Interactive visualizations
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full bg-brand-blue object-cover sm:h-72 md:h-96 lg:w-full lg:h-full p-8 flex items-center justify-center">
          <div className="text-white">
            <div className="flex items-center justify-center mb-8">
              <Layers className="h-16 w-16" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-xl font-semibold mb-2">Arrays</div>
                <div className="text-sm opacity-80">Fundamental data structure for storing collections of elements</div>
              </div>
              <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-xl font-semibold mb-2">Linked Lists</div>
                <div className="text-sm opacity-80">Sequential collection of elements with dynamic size</div>
              </div>
              <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-xl font-semibold mb-2">Trees</div>
                <div className="text-sm opacity-80">Hierarchical structure with a root value and subtrees</div>
              </div>
              <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-xl font-semibold mb-2">Graphs</div>
                <div className="text-sm opacity-80">Non-linear data structure consisting of vertices and edges</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
