
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/CourseCard";
import { coursesData } from "@/data/coursesData";
import { Brackets, Link, Layers, Database, GitBranch, Triangle, Network, FolderTree, Milestone } from "lucide-react";

export const FeaturedCourses = () => {
  const [filter, setFilter] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');
  
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'brackets': return <Brackets className="w-6 h-6" />;
      case 'link': return <Link className="w-6 h-6" />;
      case 'layers': return <Layers className="w-6 h-6" />;
      case 'database': return <Database className="w-6 h-6" />;
      case 'git-branch': return <GitBranch className="w-6 h-6" />;
      case 'triangle': return <Triangle className="w-6 h-6" />;
      case 'network': return <Network className="w-6 h-6" />;
      case 'folder-tree': return <FolderTree className="w-6 h-6" />;
      case 'milestone': return <Milestone className="w-6 h-6" />;
      default: return <Brackets className="w-6 h-6" />;
    }
  };

  const filteredCourses = coursesData.filter(
    course => filter === 'all' || course.level === filter
  );

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Start Your Learning Journey
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Explore our comprehensive data structure courses designed for all skill levels.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <Button 
              variant={filter === 'all' ? 'default' : 'outline'} 
              onClick={() => setFilter('all')}
              className="min-w-[100px]"
            >
              All
            </Button>
            <Button 
              variant={filter === 'beginner' ? 'default' : 'outline'} 
              onClick={() => setFilter('beginner')}
              className="min-w-[100px]"
            >
              Beginner
            </Button>
            <Button 
              variant={filter === 'intermediate' ? 'default' : 'outline'} 
              onClick={() => setFilter('intermediate')}
              className="min-w-[100px]"
            >
              Intermediate
            </Button>
            <Button 
              variant={filter === 'advanced' ? 'default' : 'outline'} 
              onClick={() => setFilter('advanced')}
              className="min-w-[100px]"
            >
              Advanced
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              lessonCount={course.lessonCount}
              completedLessons={course.completedLessons}
              level={course.level}
              icon={getIconComponent(course.icon)}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <a href="/courses">
              View All Courses
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
