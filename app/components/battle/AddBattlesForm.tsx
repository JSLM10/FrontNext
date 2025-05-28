"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BaseBattleSchema } from "../../schemas/Battle/battle";
import { z } from "zod";
import { useBattleStore } from "../../stores/battleStore";
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
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Esquema del formulario corregido - death_occurred debe ser boolean, no opcional
const formSchema = BaseBattleSchema.omit({
  id: true,
  injuries: true,
  winner_id: true,
}).extend({
  date: z.string().nonempty("La fecha es requerida"),
  death_occurred: z.boolean(), // Asegurar que sea boolean, no opcional
}).refine(
  (data) => data.contestant_1_id !== data.contestant_2_id,
  {
    message: "Los contendientes deben ser diferentes",
    path: ["contestant_2_id"],
  }
);

type FormSchema = z.infer<typeof formSchema>;

export function AddBattlesForm() {
  const { scheduleNewBattle } = useBattleStore();
  const { contestants } = useContestantStore();

  const aliveContestants = contestants.filter((c) => c.status === "Alive");

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contestant_1_id: "",
      contestant_2_id: "",
      date: "",
      death_occurred: false, 
    },
  });

  const selectedC1 = form.watch("contestant_1_id");
  const availableC2 = aliveContestants.filter((c) => c.id !== selectedC1);

  async function onSubmit(values: FormSchema) {

    const parsedDate = new Date(values.date);
    await scheduleNewBattle(
      values.contestant_1_id,
      values.contestant_2_id,
      parsedDate
    );

    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-white">

        {/* Contendiente 1 */}
        <FormField
          control={form.control}
          name="contestant_1_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Contendiente 1 *</FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value || ""}
                defaultValue=""
              >
                <FormControl>
                  <SelectTrigger className="bg-gray-800 border-red-600 text-white">
                    <SelectValue placeholder="Selecciona un contendiente" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-gray-900 border-red-600 text-white">
                  {aliveContestants.map((contestant) => (
                    <SelectItem
                      key={contestant.id}
                      value={contestant.id}
                      className="hover:bg-gray-800"
                    >
                      {contestant.name} ({contestant.nickname || "Sin apodo"})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        {/* Contendiente 2 */}
        <FormField
          control={form.control}
          name="contestant_2_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Contendiente 2 *</FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value || ""}
                defaultValue=""
              >
                <FormControl>
                  <SelectTrigger className="bg-gray-800 border-red-600 text-white">
                    <SelectValue placeholder="Selecciona un contendiente" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-gray-900 border-red-600 text-white">
                  {availableC2.map((contestant) => (
                    <SelectItem
                      key={contestant.id}
                      value={contestant.id}
                      className="hover:bg-gray-800"
                    >
                      {contestant.name} ({contestant.nickname || "Sin apodo"})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        {/* Fecha */}
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Fecha del Combate *</FormLabel>
              <FormControl>
                <Input
                  type="datetime-local"
                  {...field}
                  className="bg-gray-800 border-red-600 text-white"
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        {/* Combate a muerte */}
        <FormField
          control={form.control}
          name="death_occurred"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-2">
              <FormControl>
                <input
                  id="death_occurred"
                  type="checkbox"
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                  className="h-4 w-4 text-red-600 bg-gray-800 border-red-600 rounded focus:ring-red-500"
                />
              </FormControl>
              <FormLabel htmlFor="death_occurred" className="text-white">
                Combate a muerte (el perdedor será eliminado)
              </FormLabel>
            </FormItem>
          )}
        />

        <div className="pt-4">
          <Button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg"
          >
            PROGRAMAR COMBATE
          </Button>
        </div>
      </form>
    </Form>
  );
}