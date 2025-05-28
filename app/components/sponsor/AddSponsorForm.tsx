"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SponsorSchema } from "../../schemas/Sponsor/sponsor";
import { z } from "zod";
import { useSponsorStore } from "../../stores/sponsorStore";
import { useContestantStore } from "../../stores/contestantStore";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = SponsorSchema.omit({ id: true });

export function AddSponsorForm() {
  const { addSponsor } = useSponsorStore();
  const { contestants } = useContestantStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company_name: "",
      donated_items: "",
      preferred_fighter: null,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await addSponsor({
      ...values,
      preferred_fighter: values.preferred_fighter === "none" ? null : values.preferred_fighter,
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-white">
        
        <FormField
          control={form.control}
          name="company_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Nombre de la Empresa *</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ej: TechCorp Internacional"
                  {...field}
                  className="bg-gray-800 border-red-600 text-white placeholder-gray-400 focus:ring-red-600 focus:border-red-600"
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        
        <FormField
          control={form.control}
          name="donated_items"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Artículos Donados *</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ej: Armas, Medicinas, Equipo"
                  {...field}
                  className="bg-gray-800 border-red-600 text-white placeholder-gray-400 focus:ring-red-600 focus:border-red-600"
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

      
        <FormField
          control={form.control}
          name="preferred_fighter"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Luchador Patrocinado (opcional)</FormLabel>
              <Select
                onValueChange={(value) => field.onChange(value === "none" ? null : value)}
                value={field.value || "none"}
              >
                <FormControl>
                  <SelectTrigger className="bg-gray-800 border-red-600 text-white placeholder-gray-400 focus:ring-red-600 focus:border-red-600 mt-2">
                    <SelectValue placeholder="Selecciona un luchador (opcional)" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-gray-900 border-red-600 text-white">
                  <SelectItem
                    value="none"
                    className="text-white hover:bg-gray-800 focus:bg-gray-800"
                  >
                    Ningún luchador
                  </SelectItem>
                  {contestants.map((contestant) => (
                    <SelectItem
                      key={contestant.id}
                      value={contestant.id}
                      className="text-white hover:bg-gray-800 focus:bg-gray-800"
                    >
                      {contestant.name} ({contestant.nickname || "Sin apodo"}) - {contestant.status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <div className="pt-4">
          <Button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg focus:ring-red-600 focus:border-red-600"
          >
            REGISTRAR PATROCINADOR
          </Button>
        </div>
      </form>
    </Form>
  );
}