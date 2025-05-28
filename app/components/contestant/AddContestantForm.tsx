"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContestantSchema } from "../../schemas/Contestant/contestant";
import { z } from "zod";
import { useContestantStore } from "../../stores/contestantStore";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect } from "react";

const formSchema = ContestantSchema.omit({ id: true });

export function AddContestantForm() {
  const { dictators, fetchDictators } = useDictatorStore();
  const { addContestant } = useContestantStore();

  useEffect(() => {
    fetchDictators();
  }, [fetchDictators]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      nickname: "",
      origin: "",
      dictatorId: "",
      strength: 50,
      agility: 50,
      wins: 0,
      losses: 0,
      status: "Alive",
      created_at: new Date().toISOString(), 
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await addContestant(values);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-white">
       
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Nombre completo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        
        <FormField
          control={form.control}
          name="nickname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apodo</FormLabel>
              <FormControl>
                <Input placeholder="Apodo del participante" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

       
        <FormField
          control={form.control}
          name="origin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Origen</FormLabel>
              <FormControl>
                <Input placeholder="Origen" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

       
        <FormField
          control={form.control}
          name="dictatorId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Dictador Responsable</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-gray-800 border-red-600 text-white placeholder-gray-400 focus:ring-red-600 focus:border-red-600">
                    <SelectValue placeholder="Selecciona un dictador" />
                  </SelectTrigger >
                </FormControl>
                <SelectContent className="bg-gray-900 border-red-600 text-white">
                  {dictators.map((dictator) => (
                    <SelectItem key={dictator.id} 
                    value={dictator.id}
                    className="text-white hover:bg-gray-800 focus:bg-gray-800">
                      {dictator.name
                      }
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        
        <FormField
          control={form.control}
          name="strength"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fuerza</FormLabel>
              <FormControl>
                <Input type="number" 
                min={1} max={100} {...field} 
                onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage className="text-red-400"/>
            </FormItem>
          )}
        />

        
        <FormField
          control={form.control}
          name="agility"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Agilidad</FormLabel>
              <FormControl>
                <Input type="number" 
                min={1} max={100} {...field} 
                 onChange={(e) => field.onChange(Number(e.target.value))}
                />
                
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

       
        <FormField
          control={form.control}
          name="wins"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Victorias</FormLabel>
              <FormControl>
                <Input type="number" min={0} {...field} 
                onChange={(e) => field.onChange(Number(e.target.value))}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        
        <FormField
          control={form.control}
          name="losses"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Derrotas</FormLabel>
              <FormControl>
                <Input type="number" min={0} {...field} 
                onChange={(e) => field.onChange(Number(e.target.value))}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

       
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estado</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {["Alive", "Dead", "Escaped", "Free"].map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        
        <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-2">
          Añadir Participante
        </Button>
      </form>
    </Form>
  );
}
