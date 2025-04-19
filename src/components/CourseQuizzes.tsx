
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Trophy } from "lucide-react";
import { quizzesData } from "@/data/quizzesData";
import { Quiz } from "./Quiz";

interface CourseQuizzesProps {
  courseId: string;
}

export const CourseQuizzes = ({ courseId }: CourseQuizzesProps) => {
  const [activeQuiz, setActiveQuiz] = useState<number | null>(null);
  const quizzes = quizzesData[courseId] || [];

  const handleQuizComplete = (score: number) => {
    // Here you could save the score to a backend/database
    setActiveQuiz(null);
  };

  if (activeQuiz !== null) {
    const quiz = quizzes.find(q => q.id === activeQuiz);
    if (!quiz) return null;
    return <Quiz quiz={quiz} onComplete={handleQuizComplete} />;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {quizzes.map((quiz) => (
        <Card key={quiz.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-4">
              <FileText className="w-6 h-6 text-brand-blue" />
              <div>
                <CardTitle className="text-lg">{quiz.title}</CardTitle>
                <CardDescription>{quiz.description}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <p>{quiz.questions.length} questions</p>
              <p>{quiz.timeLimit} minutes</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full"
              onClick={() => setActiveQuiz(quiz.id)}
            >
              Start Quiz
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
