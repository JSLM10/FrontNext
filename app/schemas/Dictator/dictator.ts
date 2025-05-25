import { z } from "zod";

export const DictatorSchema = z.object({
  id: z.string().uuid(), // generado por backend
  name: z.string().min(2),
  territory: z.string(),
  number_of_slaves: z.number().min(1),
  loyalty_to_carolina: z.number().min(1).max(3),
});

export type Dictator = z.infer<typeof DictatorSchema>;
