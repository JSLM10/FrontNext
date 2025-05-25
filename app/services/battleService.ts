import apiClient from "../api/apiClient";
import { Battle } from "../schemas/Battle/battle";

export const getBattles = async (): Promise<Battle[]> => {
  const response = await apiClient.get("/battles");
  return response.data;
};

export const createBattle = async (battle: Omit<Battle, "id">) => {
  const response = await apiClient.post("/battles", battle);
  return response.data;
};

export const scheduleBattle = async (contestant1Id: string, contestant2Id: string, date: string) => {
  const response = await apiClient.post("/battles/schedule", {
    contestant_1: contestant1Id,
    contestant_2: contestant2Id,
    date,
  });
  return response.data;
};