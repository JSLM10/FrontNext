"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DictatorSchema } from "../../schemas/Dictator/dictator";
import { z } from "zod";
import { useDictatorStore } from "../../stores/dictatorStore";
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

const formSchema = DictatorSchema.omit({ id: true });

export function AddDictatorForm() {
  const { addDictator } = useDictatorStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      territory: "",
      number_of_slaves: 1,
      loyalty_to_carolina: 2,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Enviando valores:", values);
    try {
      await addDictator(values);
      console.log("Dictador creado con éxito");
      form.reset();
    } catch (error) {
      console.error("Error al crear dictador:", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-white">
        {/* Nombre */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre Completo</FormLabel>
              <FormControl>
                <Input placeholder="Nombre del dictador" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Territorio */}
        <FormField
          control={form.control}
          name="territory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Territorio</FormLabel>
              <FormControl>
                <Input placeholder="Territorio" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Número de esclavos */}
        <FormField
          control={form.control}
          name="number_of_slaves"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Esclavos</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  value={field.value ?? ""}
                  onChange={(e) =>
                    field.onChange(e.target.valueAsNumber || 1)
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Lealtad */}
        <FormField
          control={form.control}
          name="loyalty_to_carolina"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lealtad a Carolina</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  value={field.value ?? ""}
                  onChange={(e) =>
                    field.onChange(e.target.valueAsNumber || 1)
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
          REGISTRAR DICTADOR
        </Button>
      </form>
    </Form>
  );
}
