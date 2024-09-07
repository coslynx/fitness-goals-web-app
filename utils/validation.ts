"use client";

import { z } from "zod";

export const goalSchema = z.object({
  name: z.string().min(3).max(50),
  description: z.string().min(10).max(250),
});

export const workoutSchema = z.object({
  goalId: z.string(),
  completed: z.boolean(),
});

export const goalInputSchema = goalSchema.extend({
  userId: z.string(),
});

export const workoutInputSchema = workoutSchema.extend({
  userId: z.string(),
});