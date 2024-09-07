"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useGoalStore } from "@/hooks/useGoalStore";
import { useUserStore } from "@/hooks/useUserStore";
import { supabase } from "@/utils/supabase";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const { user, setUser } = useUserStore();

  useEffect(() => {
    if (session?.user) {
      setUser(session.user);
    }
  }, [session, setUser]);

  useEffect(() => {
    const fetchGoals = async () => {
      if (user) {
        const { data: goals, error } = await supabase
          .from("goals")
          .select("*")
          .eq("user_id", user.id);

        if (error) {
          console.error("Error fetching goals:", error);
          return;
        }
        if (goals) {
          useGoalStore.setState({ goals });
        }
      }
    };

    fetchGoals();
  }, [user]);

  if (!user) {
    router.push("/login");
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-md py-4 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Track Your Fitness Goals</h1>
          <nav className="flex space-x-4">
            <a href="/goals" className="text-gray-600 hover:text-gray-800">
              Goals
            </a>
            <a href="/progress" className="text-gray-600 hover:text-gray-800">
              Progress
            </a>
            <button
              onClick={() => {
                router.push("/login");
                supabase.auth.signOut();
              }}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </nav>
        </div>
      </header>
      <main className="container mx-auto py-4">{children}</main>
      <footer className="bg-gray-200 text-center py-4">
        <p className="text-gray-600">&copy; 2024 Track Your Fitness Goals</p>
      </footer>
    </div>
  );
};

export default Layout;