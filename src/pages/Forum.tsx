
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Forum = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
              Community Forum
            </h1>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Join discussions, ask questions, and share your knowledge with fellow learners.
            </p>
            <div className="text-center">
              <p className="text-gray-600">Forum features coming soon!</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Forum;
