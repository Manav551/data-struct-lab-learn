
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Check, X, BookText } from "lucide-react";
import type { Quiz as QuizType, Question } from "@/data/quizzesData";

interface QuizProps {
  quiz: QuizType;
  onComplete: (score: number) => void;
}

export const Quiz = ({ quiz, onComplete }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = parseInt(value);
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (answers[currentQuestion] === undefined) {
      toast({
        description: "Please select an answer before proceeding",
      });
      return;
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleSubmit = () => {
    if (answers[currentQuestion] === undefined) {
      toast({
        description: "Please select an answer before submitting",
      });
      return;
    }
    
    const score = answers.reduce((acc, answer, index) => {
      return acc + (answer === quiz.questions[index].correctAnswer ? 1 : 0);
    }, 0);
    
    setIsSubmitted(true);
    onComplete(score);
    
    toast({
      title: "Quiz Completed!",
      description: `Your score: ${score}/${quiz.questions.length}`,
    });
  };

  const question: Question = quiz.questions[currentQuestion];
  const isCorrect = isSubmitted && answers[currentQuestion] === question.correctAnswer;
  const isIncorrect = isSubmitted && answers[currentQuestion] !== question.correctAnswer;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookText className="w-6 h-6" />
          <span>Question {currentQuestion + 1}/{quiz.questions.length}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <p className="text-lg font-medium">{question.text}</p>
          <RadioGroup
            onValueChange={handleAnswer}
            value={answers[currentQuestion]?.toString()}
            disabled={isSubmitted}
          >
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label 
                  htmlFor={`option-${index}`}
                  className={
                    isSubmitted
                      ? index === question.correctAnswer
                        ? "text-green-600 font-medium"
                        : answers[currentQuestion] === index
                        ? "text-red-600"
                        : ""
                      : ""
                  }
                >
                  {option}
                  {isSubmitted && index === question.correctAnswer && (
                    <Check className="inline ml-2 w-4 h-4 text-green-600" />
                  )}
                  {isIncorrect && answers[currentQuestion] === index && (
                    <X className="inline ml-2 w-4 h-4 text-red-600" />
                  )}
                </Label>
              </div>
            ))}
          </RadioGroup>
          {isSubmitted && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="font-medium text-green-600">
                Correct Answer: {question.options[question.correctAnswer]}
              </p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        {!isSubmitted && currentQuestion < quiz.questions.length - 1 ? (
          <Button onClick={handleNext}>Next Question</Button>
        ) : (
          !isSubmitted && <Button onClick={handleSubmit}>Submit Quiz</Button>
        )}
        {isSubmitted && currentQuestion < quiz.questions.length - 1 && (
          <Button onClick={() => setCurrentQuestion(currentQuestion + 1)}>Next Question</Button>
        )}
      </CardFooter>
    </Card>
  );
};
