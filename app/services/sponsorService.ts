import apiClient from "../api/apiClient";
import { Sponsor } from "../schemas/Sponsor/sponsor";

export const getSponsors = async (): Promise<Sponsor[]> => {
  const response = await apiClient.get("/sponsors");
  return response.data;
};

export const createSponsor = async (sponsor: Omit<Sponsor, "id">) => {
  const response = await apiClient.post("/sponsors", sponsor);
  return response.data;
};

export const donateItems = async (sponsorId: string, items: string) => {
  const response = await apiClient.patch(`/sponsors/${sponsorId}/donate`, { items });
  return response.data;
};