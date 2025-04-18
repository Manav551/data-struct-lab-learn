
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Check, BookOpen } from "lucide-react";

interface TopicsListProps {
  topics: string[];
}

export const TopicsList = ({ topics }: TopicsListProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {topics.map((topic, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center gap-4">
            <BookOpen className="w-6 h-6 text-brand-blue" />
            <CardTitle className="text-lg">{topic}</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Check className="w-4 h-4" />
              <span>0/3 lessons completed</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
