"use client";

import { auth } from "@/utils/auth";
import { supabase } from "@/utils/supabase";

export const getUserData = async () => {
  try {
    const session = await auth();
    if (session) {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", session.user.id)
        .single();

      if (error) {
        throw error;
      }
      return data;
    }
    return null;
  } catch (error) {
    console.error("Error getting user data:", error);
    throw error;
  }
};

export const updateUserData = async (data: {
  firstName?: string;
  lastName?: string;
  email?: string;
  avatarUrl?: string;
}) => {
  try {
    const session = await auth();
    if (session) {
      const { error } = await supabase
        .from("users")
        .update(data)
        .eq("id", session.user.id);

      if (error) {
        throw error;
      }
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error updating user data:", error);
    throw error;
  }
};