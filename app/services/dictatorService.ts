import apiClient from "../api/apiClient";
import { Dictator } from "../schemas/Dictator/dictator";


export const getDictators = async (): Promise<Dictator[]> => {
  const response = await apiClient.get("/dictators");
  return response.data;
};


export const createDictator = async (dictator: Omit<Dictator, "id">) => {
  const response = await apiClient.post("/dictators", dictator);
  return response.data;
};


export const assignSlaves = async (dictatorId: string, count: number) => {
  const response = await apiClient.patch(`/dictators/${dictatorId}/assign`, {
    count,
  });
  return response.data;
};
