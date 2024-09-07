"use client";

import { createClient } from "@supabase/supabase-js";
import { auth } from "@/utils/auth";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl!, supabaseKey!);

export async function getGoals(userId: string) {
  try {
    const session = await auth();
    const { data, error } = await supabase
      .from("goals")
      .select("*")
      .eq("user_id", userId);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching goals:", error);
    throw error;
  }
}

export async function createGoal(goal: { name: string; description: string }) {
  try {
    const session = await auth();

    const { data, error } = await supabase
      .from("goals")
      .insert([
        {
          name: goal.name,
          description: goal.description,
          user_id: session?.user?.id,
        },
      ]);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error creating goal:", error);
    throw error;
  }
}

export async function getWorkouts(goalId: string, userId: string) {
  try {
    const session = await auth();
    const { data, error } = await supabase
      .from("workouts")
      .select("*")
      .eq("goal_id", goalId)
      .eq("user_id", userId);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching workouts:", error);
    throw error;
  }
}

export async function createWorkout(
  workout: { goalId: string; completed: boolean }
) {
  try {
    const session = await auth();

    const { data, error } = await supabase
      .from("workouts")
      .insert([
        {
          goal_id: workout.goalId,
          completed: workout.completed,
          user_id: session?.user?.id,
        },
      ]);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error creating workout:", error);
    throw error;
  }
}