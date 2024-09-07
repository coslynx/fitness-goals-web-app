"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useGoalStore } from "@/hooks/useGoalStore";
import { supabase } from "@/utils/supabase";
import GoalInput from "@/components/GoalInput";
import ProgressChart from "@/components/ProgressChart";
import SocialShareButton from "@/components/SocialShareButton";
import { useUserStore } from "@/hooks/useUserStore";
import Button from "@/components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const DashboardPage: React.FC = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { user } = useUserStore();
  const goals = useGoalStore((state) => state.goals);

  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGoalClick = (goalId: string) => {
    setSelectedGoal(goalId);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  useEffect(() => {
    const fetchGoals = async () => {
      if (user) {
        setIsLoading(true);
        setError(null);

        try {
          const { data: goals, error } = await supabase
            .from("goals")
            .select("*")
            .eq("user_id", user.id);

          if (error) {
            throw error;
          }

          if (goals) {
            useGoalStore.setState({ goals });
          }
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchGoals();
  }, [user]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        Track Your Fitness Goals
      </h1>

      <div className="flex justify-between items-center mb-4">
        <GoalInput
          onSubmit={(goal) => {
            useGoalStore.setState({
              goals: [...goals, { ...goal, id: Date.now().toString() }],
            });
          }}
        />
        <Button onClick={handleLogout} variant="danger">
          Logout
        </Button>
      </div>

      {isLoading && (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-4 border-t-4 border-blue-500"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline">{error.message}</span>
        </div>
      )}

      {!isLoading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
              onClick={() => handleGoalClick(goal.id)}
            >
              <h2 className="text-lg font-semibold mb-2">{goal.name}</h2>
              <p className="text-gray-600 text-sm">{goal.description}</p>
            </div>
          ))}
        </div>
      )}

      {selectedGoal && (
        <div className="mt-8">
          <div className="flex justify-between mb-4">
            <h2 className="text-2xl font-semibold">
              {goals.find((g) => g.id === selectedGoal)?.name}
            </h2>
            <Button
              onClick={() => setSelectedGoal(null)}
              variant="outline"
              arrow="left"
            >
              Back
            </Button>
          </div>

          <ProgressChart goalId={selectedGoal} />

          <div className="mt-4">
            <SocialShareButton
              url={`https://www.your-app.com/goals/${selectedGoal}`}
              title={`Check out my progress on ${
                goals.find((g) => g.id === selectedGoal)?.name
              }`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;