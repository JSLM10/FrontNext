"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionSchema } from "../../schemas/Transaction/transaction";
import { z } from "zod";
import { useTransactionStore } from "../../stores/transactionStore";
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

const formSchema = TransactionSchema.omit({ id: true, status: true });

export function AddTransactionForm() {
  const { addTransaction } = useTransactionStore();
  const { dictators } = useDictatorStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      buyer_id: "",
      seller_id: "",
      item: "",
      amount: 0,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await addTransaction({ ...values, status: "Completed" });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-white">
        {/* Buyer ID */}
        <FormField
          control={form.control}
          name="buyer_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Comprador *</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-gray-800 border-red-600 text-white placeholder-gray-400 focus:ring-red-600 focus:border-red-600">
                    <SelectValue placeholder="Selecciona un comprador" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-gray-900 border-red-600 text-white">
                  {dictators.map((dictator) => (
                    <SelectItem
                      key={dictator.id}
                      value={dictator.id}
                      className="text-white hover:bg-gray-800 focus:bg-gray-800"
                    >
                      {dictator.name} ({dictator.territory})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        {/* Seller ID */}
        <FormField
          control={form.control}
          name="seller_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Vendedor *</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-gray-800 border-red-600 text-white placeholder-gray-400 focus:ring-red-600 focus:border-red-600">
                    <SelectValue placeholder="Selecciona un vendedor" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-gray-900 border-red-600 text-white">
                  {dictators.map((dictator) => (
                    <SelectItem
                      key={dictator.id}
                      value={dictator.id}
                      className="text-white hover:bg-gray-800 focus:bg-gray-800"
                    >
                      {dictator.name} ({dictator.territory})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        {/* Item */}
        <FormField
          control={form.control}
          name="item"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Artículo *</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ej: Armas, veneno, soborno..."
                  {...field}
                  className="bg-gray-800 border-red-600 text-white placeholder-gray-400 focus:ring-red-600 focus:border-red-600"
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        {/* Amount */}
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Monto *</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="0.00"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  className="bg-gray-800 border-red-600 text-white placeholder-gray-400 focus:ring-red-600 focus:border-red-600"
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 focus:ring-red-600 focus:border-red-600"
        >
          Procesar Transacción
        </Button>
      </form>
    </Form>
  );
}