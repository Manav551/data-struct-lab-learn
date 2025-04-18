
import { Star } from "lucide-react";

export const TestimonialSection = () => {
  const testimonials = [
    {
      content: "DataStructLab helped me ace my technical interviews! The interactive visualizations made complex concepts like tree balancing and graph traversal much easier to understand.",
      author: "Sarah J.",
      role: "Software Engineer at Google",
      rating: 5
    },
    {
      content: "As a self-taught programmer, I struggled with data structures until I found this platform. The step-by-step approach and practice problems helped me build a solid foundation.",
      author: "Michael T.",
      role: "Frontend Developer",
      rating: 5
    },
    {
      content: "I teach computer science at university, and I recommend DataStructLab to all my students. The visual explanations complement my lectures perfectly.",
      author: "Dr. Lee Chen",
      role: "Computer Science Professor",
      rating: 5
    }
  ];

  return (
    <section className="py-12 bg-brand-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            What Our Users Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-brand-lightBlue">
            Join thousands of learners who have transformed their understanding of data structures
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="bg-brand-blue text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="text-gray-900 font-medium">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
