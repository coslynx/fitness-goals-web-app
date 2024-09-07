"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { UserProvider } from "@/hooks/useUserStore";
import { GoalProvider } from "@/hooks/useGoalStore";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import Layout from "@/components/Layout";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: {
  Component: React.ComponentType<any>;
  pageProps: { session: Session | null } & Record<string, any>;
}) {
  return (
    <SessionProvider session={session}>
      <UserProvider>
        <GoalProvider>
          <ThemeProvider attribute="class">
            <html lang="en">
              <body className="bg-gray-100 font-sans">
                <Header />
                <Layout>{<Component {...pageProps} />}</Layout>
                <Toaster />
              </body>
            </html>
          </ThemeProvider>
        </GoalProvider>
      </UserProvider>
    </SessionProvider>
  );
}