import { z } from "zod";

export const BattleSchema = z.object({
  id: z.string().uuid(),
  contestant_1_id: z.string().uuid(),
  contestant_2_id: z.string().uuid(),
  winner_id: z.string().uuid().nullable(),
  death_occurred: z.boolean(),
  injuries: z.string().nullable(),

  date: z
    .string()
    .nonempty("La fecha es obligatoria")
    .refine(val => !isNaN(Date.parse(val)), {
      message: "Formato de fecha inválido",
    }),
});

export type Battle = z.infer<typeof BattleSchema>;
