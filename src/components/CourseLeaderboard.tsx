
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Trophy, Medal } from "lucide-react";

interface CourseLeaderboardProps {
  courseId: string;
}

export const CourseLeaderboard = ({ courseId }: CourseLeaderboardProps) => {
  const leaderboardData = [
    { rank: 1, name: "Sarah Johnson", score: 980, completed: 15 },
    { rank: 2, name: "Mike Chen", score: 945, completed: 14 },
    { rank: 3, name: "Emily Davis", score: 920, completed: 13 },
    { rank: 4, name: "Alex Kim", score: 890, completed: 12 },
    { rank: 5, name: "Chris Lee", score: 860, completed: 12 },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Medal className="w-5 h-5 text-amber-600" />;
      default:
        return rank;
    }
  };

  return (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Rank</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="text-right">Score</TableHead>
            <TableHead className="text-right">Completed</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leaderboardData.map((entry) => (
            <TableRow key={entry.rank}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  {getRankIcon(entry.rank)}
                </div>
              </TableCell>
              <TableCell>{entry.name}</TableCell>
              <TableCell className="text-right">{entry.score}</TableCell>
              <TableCell className="text-right">{entry.completed} lessons</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
