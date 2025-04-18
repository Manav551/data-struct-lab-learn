
import { Code, Eye, Play, Layout, Rocket, Award } from "lucide-react";

export const FeatureSection = () => {
  const features = [
    {
      icon: <Code className="h-6 w-6 text-brand-blue" />,
      title: "Interactive Code Environments",
      description: "Write, compile, and run code directly in your browser with real-time feedback and error highlighting."
    },
    {
      icon: <Eye className="h-6 w-6 text-brand-blue" />,
      title: "Visual Demonstrations",
      description: "See data structures and algorithms come to life with step-by-step visual animations and illustrations."
    },
    {
      icon: <Play className="h-6 w-6 text-brand-blue" />,
      title: "Learn by Doing",
      description: "Solve coding challenges and quizzes to reinforce your learning and test your understanding."
    },
    {
      icon: <Layout className="h-6 w-6 text-brand-blue" />,
      title: "Structured Curriculum",
      description: "Follow a carefully designed learning path that builds your knowledge from fundamentals to advanced concepts."
    },
    {
      icon: <Rocket className="h-6 w-6 text-brand-blue" />,
      title: "Performance Analysis",
      description: "Understand time and space complexity with real performance measurements and Big O analysis."
    },
    {
      icon: <Award className="h-6 w-6 text-brand-blue" />,
      title: "Achievement System",
      description: "Earn badges and certificates as you progress through courses and complete challenges."
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Learn With DataStructLab?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Our platform offers unique features to make learning data structures effective and enjoyable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-200 hover:border-brand-blue hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-blue bg-opacity-10 mx-auto">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">{feature.title}</h3>
              <p className="mt-2 text-base text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
