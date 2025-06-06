import { z } from "zod";

export const TransactionSchema = z.object({
  id: z.string().uuid(),
  buyer_id: z.string().uuid(),
  seller_id: z.string().uuid(),
  item: z.string(),
  amount: z.number(),
  status: z.enum(["Completed", "Failed", "Discovered"]),
});

export type Transaction = z.infer<typeof TransactionSchema>;