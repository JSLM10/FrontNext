import { z } from "zod";

export const BattleSchema = z.object({
  id: z.string().uuid(),
  contestant_1_id: z.string().uuid(),
  contestant_2_id: z.string().uuid(),
  winner_id: z.string().uuid().nullable(),
  death_occurred: z.boolean().default(false),
  injuries: z.string().nullable().default(null),
  date: z.coerce.date() // Acepta string, number o Date y lo convierte a Date
});

export type Battle = z.infer<typeof BattleSchema>;