
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TopicsList } from "@/components/TopicsList";
import { CourseQuizzes } from "@/components/CourseQuizzes";
import { CourseLeaderboard } from "@/components/CourseLeaderboard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { coursesData } from "@/data/coursesData";

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = coursesData.find((c) => c.id === courseId);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-8">{course.title}</h1>
            <p className="text-xl text-gray-600 mb-12">{course.description}</p>

            <Tabs defaultValue="topics" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="topics">Learning Topics</TabsTrigger>
                <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
                <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
              </TabsList>
              
              <TabsContent value="topics">
                <TopicsList topics={course.topics} />
              </TabsContent>
              
              <TabsContent value="quizzes">
                <CourseQuizzes courseId={course.id} />
              </TabsContent>
              
              <TabsContent value="leaderboard">
                <CourseLeaderboard courseId={course.id} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
