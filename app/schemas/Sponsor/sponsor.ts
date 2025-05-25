import { z } from "zod";

export const SponsorSchema = z.object({
  id: z.string().uuid(),
  company_name: z.string().min(1), 
  donated_items: z.string().min(1),
  preferred_fighter: z.string().uuid().nullable(), 
  
});

export type Sponsor = z.infer<typeof SponsorSchema>;