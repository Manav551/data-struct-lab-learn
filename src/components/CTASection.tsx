
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-darkBlue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to master data structures?
          </h2>
          <p className="mt-4 text-xl text-white opacity-90">
            Join DataStructLab today and transform the way you understand algorithms and code.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-brand-darkBlue hover:bg-gray-100">
              <Link to="/courses" className="flex items-center">
                Start Learning Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-darkBlue">
              <Link to="/playground">
                Try Playground
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
