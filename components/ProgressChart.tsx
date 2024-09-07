"use client";

import { useState, useEffect } from "react";
import { useGoalStore } from "@/hooks/useGoalStore";
import { useSession } from "next-auth/react";
import { supabase } from "@/utils/supabase";

interface ProgressChartProps {
  goalId: string;
}

const ProgressChart: React.FC<ProgressChartProps> = ({ goalId }) => {
  const [progressData, setProgressData] = useState<{
    completedWorkouts: number;
    totalWorkouts: number;
  }[]>([]);
  const { data: session } = useSession();
  const goals = useGoalStore((state) => state.goals);
  const goal = goals.find((g) => g.id === goalId);

  useEffect(() => {
    if (session?.user?.id && goalId) {
      const fetchProgressData = async () => {
        try {
          const { data: workoutData, error } = await supabase
            .from("workouts")
            .select("id, completed")
            .eq("goal_id", goalId)
            .eq("user_id", session.user.id);

          if (error) {
            console.error("Error fetching workout data:", error);
            return;
          }

          if (workoutData) {
            const completedWorkouts = workoutData.filter(
              (workout) => workout.completed
            ).length;
            const totalWorkouts = workoutData.length;
            setProgressData([
              { completedWorkouts, totalWorkouts },
            ]);
          }
        } catch (error) {
          console.error("Error fetching workout data:", error);
        }
      };

      fetchProgressData();
    }
  }, [session, goalId]);

  const progressPercentage =
    progressData.length > 0 && goal
      ? Math.round(
          (progressData[0].completedWorkouts /
            progressData[0].totalWorkouts) *
            100
        )
      : 0;

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold mb-2">
        Progress: {goal?.name}
      </h2>
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-xl font-bold">{progressPercentage}%</span>
          <span className="text-sm">Completed</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-primary rounded-full h-4"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
      <p className="text-gray-600 text-sm">
        {progressData[0]?.completedWorkouts || 0} of{" "}
        {progressData[0]?.totalWorkouts || 0} workouts completed.
      </p>
    </div>
  );
};

export default ProgressChart;