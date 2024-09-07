"use server";

import { auth } from "@/utils/auth";
import { supabase } from "@/utils/supabase";

export async function POST(req: Request) {
  try {
    const session = await auth();
    const body = await req.json();

    const { data: workoutData, error } = await supabase
      .from("workouts")
      .insert([
        {
          goal_id: body.goalId,
          completed: body.completed,
          user_id: session?.user?.id,
        },
      ]);

    if (error) {
      return new Response(JSON.stringify({ message: "Error adding workout" }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ message: "Workout added" }), {
      status: 201,
    });
  } catch (error) {
    console.error("Error in POST /api/progress", error);
    return new Response(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500 }
    );
  }
}