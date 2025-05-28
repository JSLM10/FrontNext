
import { z } from "zod";

export const DictatorSchema = z.object({
  id: z.string().uuid(), 
  name: z.string().min(2, "Mínimo 2 caracteres"),
  territory: z.string().min(1, "Requerido"),
  number_of_slaves: z.number().min(1, "Mínimo 1 esclavo"),
  loyalty_to_carolina: z.number().min(1).max(100, "Máximo 100"),
});

export type Dictator = z.infer<typeof DictatorSchema>;