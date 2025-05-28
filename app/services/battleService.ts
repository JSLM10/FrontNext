import apiClient from "../api/apiClient";
import { Battle, BattleSchema } from "../schemas/Battle/battle";

export const getBattles = async (): Promise<Battle[]> => {
  const response = await apiClient.get("/battles");
  return BattleSchema.array().parse(response.data);
};

export const createBattle = async (battle: Omit<Battle, "id">): Promise<Battle> => {
  const response = await apiClient.post("/battles", {
    ...battle,
    date: new Date(battle.date).toISOString()
  });
  return BattleSchema.parse(response.data);
};

export const scheduleBattle = async (
  contestant1Id: string,
  contestant2Id: string,
  date: string
): Promise<Battle> => {
  if (contestant1Id === contestant2Id) {
    throw new Error("No puede seleccionar el mismo contendiente para ambos lados");
  }

  const response = await apiClient.post("/battles", {
    contestant_1_id: contestant1Id,
    contestant_2_id: contestant2Id,
    date: new Date(date).toISOString(),
    death_occurred: false,
    injuries: null,
    winner_id: null
  });

  return BattleSchema.parse(response.data);
};