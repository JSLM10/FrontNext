import { z } from "zod";

export const ContestantSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2),
  nickname: z.string(), 
  origin: z.string(),
  dictatorId: z.string().uuid(), 
  strength: z.number().min(1).max(100),
  agility: z.number().min(1).max(100),
  wins: z.number().min(0),
  losses: z.number().min(0),
  status: z.enum(["Alive", "Dead", "Escaped", "Free"]),
  created_at: z.string().datetime(), 
});

export type Contestant = z.infer<typeof ContestantSchema>;