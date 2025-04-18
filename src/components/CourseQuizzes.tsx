
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Trophy } from "lucide-react";

interface CourseQuizzesProps {
  courseId: string;
}

export const CourseQuizzes = ({ courseId }: CourseQuizzesProps) => {
  const quizzes = [
    {
      id: 1,
      title: "Fundamentals Quiz",
      description: "Test your understanding of basic concepts",
      questions: 10,
      timeLimit: 15,
      completed: false,
    },
    {
      id: 2,
      title: "Advanced Concepts",
      description: "Challenge yourself with advanced problems",
      questions: 15,
      timeLimit: 20,
      completed: false,
    },
  ];

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
              <p>{quiz.questions} questions</p>
              <p>{quiz.timeLimit} minutes</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Start Quiz</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
