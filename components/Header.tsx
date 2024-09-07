"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { useUserStore } from "@/hooks/useUserStore";
import { supabase } from "@/utils/supabase";

const Header: React.FC = () => {
  const { data: session } = useSession();
  const { user } = useUserStore();

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="bg-white shadow-md py-4 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Track Your Fitness Goals
        </Link>
        <nav className="flex space-x-4">
          <Link href="/goals" className="text-gray-600 hover:text-gray-800">
            Goals
          </Link>
          <Link href="/progress" className="text-gray-600 hover:text-gray-800">
            Progress
          </Link>
          {session && (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;