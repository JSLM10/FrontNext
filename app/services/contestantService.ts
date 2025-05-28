import apiClient from "../api/apiClient";
import { Contestant } from "../schemas/Contestant/contestant";

export const getContestants = async (): Promise<Contestant[]> => {
  const response = await apiClient.get("/contestants");
  return response.data;
};

export const createContestant = async (contestant: Omit<Contestant, "id">) => {
  const response = await apiClient.post("/contestants", contestant);
  return response.data;
};

