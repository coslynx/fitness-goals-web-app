"use client";

import { useState } from "react";
import { useGoalStore } from "@/hooks/useGoalStore";
import { useSession } from "next-auth/react";
import { supabase } from "@/utils/supabase";

interface GoalInputProps {
  onSubmit: (goal: { name: string; description: string }) => void;
}

const GoalInput: React.FC<GoalInputProps> = ({ onSubmit }) => {
  const { data: session } = useSession();
  const [goalName, setGoalName] = useState("");
  const [goalDescription, setGoalDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { data: goalData, error: supabaseError } = await supabase
        .from("goals")
        .insert([
          {
            name: goalName,
            description: goalDescription,
            user_id: session?.user?.id,
          },
        ]);

      if (supabaseError) {
        throw supabaseError;
      }

      onSubmit({ name: goalName, description: goalDescription });
      setGoalName("");
      setGoalDescription("");
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold mb-2">Set a New Goal</h2>
      <div>
        <label htmlFor="goalName" className="block mb-2 text-gray-700">
          Goal Name:
        </label>
        <input
          type="text"
          id="goalName"
          value={goalName}
          onChange={(e) => setGoalName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div>
        <label
          htmlFor="goalDescription"
          className="block mb-2 text-gray-700"
        >
          Description:
        </label>
        <textarea
          id="goalDescription"
          value={goalDescription}
          onChange={(e) => setGoalDescription(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline">{error.message}</span>
        </div>
      )}
      <button
        type="submit"
        className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        disabled={isLoading}
      >
        {isLoading ? "Adding Goal..." : "Add Goal"}
      </button>
    </form>
  );
};

export default GoalInput;