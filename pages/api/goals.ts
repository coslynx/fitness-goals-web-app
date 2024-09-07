"use server";

import { auth } from "@/utils/auth";
import { supabase } from "@/utils/supabase";

export async function POST(req: Request) {
  try {
    const session = await auth();
    const body = await req.json();

    const { data: goalData, error } = await supabase
      .from("goals")
      .insert([
        {
          name: body.name,
          description: body.description,
          user_id: session?.user?.id,
        },
      ]);

    if (error) {
      return new Response(
        JSON.stringify({ message: "Error creating goal" }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ message: "Goal created successfully" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in POST /api/goals", error);
    return new Response(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500 }
    );
  }
}