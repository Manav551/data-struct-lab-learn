
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FeaturedCourses } from "@/components/FeaturedCourses";

const Courses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
              All Courses
            </h1>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Explore our comprehensive collection of data structure courses, from fundamentals to advanced concepts.
            </p>
            <FeaturedCourses />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
