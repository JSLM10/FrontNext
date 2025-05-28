import apiClient from "../api/apiClient";
import { Battle, BattleSchema } from "../schemas/Battle/battle";

interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
  message?: string;
}

export const getBattles = async (): Promise<Battle[]> => {
  try {
    const response = await apiClient.get("/battles");
    return BattleSchema.array().parse(response.data);
  } catch (error) {
    const err = error as ApiError;
    console.error("Error fetching battles:", err.response?.data || err.message);
    throw new Error(err.response?.data?.message || "Failed to fetch battles");
  }
};

export const createBattle = async (battle: Omit<Battle, "id">): Promise<Battle> => {
  try {
    const response = await apiClient.post("/battles", {
      ...battle,
      date: battle.date.toISOString()
    });
    return BattleSchema.parse(response.data);
  } catch (error) {
    const err = error as ApiError;
    console.error("Error creating battle:", err.response?.data || err.message);
    throw new Error(err.response?.data?.message || "Failed to create battle");
  }
};

export const scheduleBattle = async (
  contestant1Id: string,
  contestant2Id: string,
  date: Date
): Promise<Battle> => {
  if (contestant1Id === contestant2Id) {
    throw new Error("No puede seleccionar el mismo contendiente para ambos lados");
  }

  try {
    const response = await apiClient.post("/battles", {
      contestant_1_id: contestant1Id,
      contestant_2_id: contestant2Id,
      date: date.toISOString(),
      death_occurred: false,
      injuries: null,
      winner_id: null
    });

    return BattleSchema.parse(response.data);
  } catch (error) {
    const err = error as ApiError;
    console.error("Error scheduling battle:", err.response?.data || err.message);
    
    // Mensaje personalizado para errores de validación
    const errorMessage = err.response?.data?.message 
      || (err.response?.data ? JSON.stringify(err.response.data) : err.message)
      || "Failed to schedule battle";
    
    throw new Error(errorMessage);
  }
};