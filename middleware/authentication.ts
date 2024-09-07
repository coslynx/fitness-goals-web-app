"use server";

import { auth } from "@/utils/auth";

export const GET = async (req: Request) => {
  try {
    const session = await auth();
    
    if (session) {
      return new Response(JSON.stringify({ user: session.user, session: session }), {
        status: 200,
      });
    } else {
      return new Response(JSON.stringify({ message: "No active session" }), {
        status: 401,
      });
    }
  } catch (error) {
    console.error("Error in GET /api/auth", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
};

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { error } = await supabase.auth.signInWithPassword({
      email: body.email,
      password: body.password,
    });

    if (error) {
      return new Response(JSON.stringify({ message: error.message }), {
        status: 401,
      });
    }

    return new Response(JSON.stringify({ message: "Login successful" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error in POST /api/auth", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
};

export const DELETE = async (req: Request) => {
  try {
    await supabase.auth.signOut();

    return new Response(JSON.stringify({ message: "Logout successful" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error in DELETE /api/auth", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
};