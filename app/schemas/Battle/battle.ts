import { z } from "zod";


export const BaseBattleSchema = z.object({
  id: z.string().uuid(),
  contestant_1_id: z.string().min(1, "Contendiente requerido"),
  contestant_2_id: z.string().min(1, "Contendiente requerido"),
  winner_id: z.string().uuid().nullable(),
  death_occurred: z.boolean().default(false),
  injuries: z.string().nullable().default(null),
  date: z.coerce.date(),
});


export const BattleSchema = BaseBattleSchema.refine(
  (data) => data.contestant_1_id !== data.contestant_2_id,
  {
    message: "Los contendientes deben ser diferentes",
    path: ["contestant_2_id"],
  }
);

export type Battle = z.infer<typeof BattleSchema>;
