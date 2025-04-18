
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CodeDemo } from "@/components/CodeDemo";

const Playground = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
              Interactive Playground
            </h1>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Practice and experiment with data structures in our interactive code environment.
            </p>
            <CodeDemo />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Playground;
