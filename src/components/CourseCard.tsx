
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  lessonCount: number;
  completedLessons: number;
  level: "beginner" | "intermediate" | "advanced";
  icon: React.ReactNode;
  className?: string;
}

export const CourseCard = ({
  id,
  title,
  description,
  lessonCount,
  completedLessons,
  level,
  icon,
  className,
}: CourseCardProps) => {
  const progressPercent = Math.round((completedLessons / lessonCount) * 100);
  const isStarted = completedLessons > 0;
  const isCompleted = completedLessons === lessonCount;

  const getLevelColor = () => {
    switch (level) {
      case "beginner":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-blue-100 text-blue-800";
      case "advanced":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className={cn("bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:border-brand-blue transition-all duration-300 hover:shadow-lg", className)}>
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-brand-blue bg-opacity-10 text-brand-blue rounded-lg">
              {icon}
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1", getLevelColor())}>
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </span>
            </div>
          </div>
          {isCompleted && (
            <span className="flex-shrink-0 flex items-center text-green-600">
              <Check className="w-5 h-5 mr-1" />
              <span className="text-sm font-medium">Completed</span>
            </span>
          )}
        </div>
        
        <p className="mt-3 text-sm text-gray-600 line-clamp-2">{description}</p>
        
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">{lessonCount} lessons</span>
            <span className="text-gray-500">{progressPercent}% complete</span>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div 
              className={cn(
                "h-2 rounded-full", 
                isCompleted ? "bg-green-500" : "bg-brand-blue"
              )} 
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
        
        <div className="mt-5">
          <Button asChild className="w-full">
            <Link to={`/course/${id}`} className="flex items-center justify-center">
              {isStarted && !isCompleted ? "Continue" : isCompleted ? "Review" : "Start Learning"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
