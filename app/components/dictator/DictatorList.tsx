"use client";

import { useDictatorStore } from "../../stores/dictatorStore";
import { Edit, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export function DictatorList() {
  const { dictators } = useDictatorStore();
  const router = useRouter();

  const getLoyaltyBadge = (loyalty: number) => {
    if (loyalty >= 70) {
      return (
        <span className="px-2 py-1 bg-green-900/30 text-green-400 rounded-full">
          Alta
        </span>
      );
    } else if (loyalty >= 40) {
      return (
        <span className="px-2 py-1 bg-yellow-900/30 text-yellow-400 rounded-full">
          Media
        </span>
      );
    } else {
      return (
        <span className="px-2 py-1 bg-red-900/30 text-red-400 rounded-full">
          Baja
        </span>
      );
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white">Lista Completa de Dictadores</h3>

      <div className="border border-red-600 rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-red-600">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-red-400 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-red-400 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-red-400 uppercase tracking-wider">Territorio</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-red-400 uppercase tracking-wider">Esclavos</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-red-400 uppercase tracking-wider">Lealtad</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-red-400 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-gray-900 divide-y divide-red-600/50">
            {dictators.map((dictator) => (
              <tr key={dictator.id} className="hover:bg-gray-800/50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-mono">{dictator.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  {dictator.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {dictator.territory}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  <span className="px-2 py-1 bg-red-900/30 text-red-400 rounded-full">
                    {dictator.number_of_slaves}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {getLoyaltyBadge(dictator.loyalty_to_carolina)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  <button 
                    className="text-white hover:text-red-400 mr-3"
                    onClick={() => router.push(`/dictators/edit/${dictator.id}`)}
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-white hover:text-red-400">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
