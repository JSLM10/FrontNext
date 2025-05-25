import { create } from "zustand";
import { Sponsor } from "../schemas/Sponsor/sponsor";
import { getSponsors, createSponsor, donateItems } from "../services/sponsorService";

interface SponsorState {
  sponsors: Sponsor[];
  loading: boolean;
  error: string | null;
  fetchSponsors: () => Promise<void>;
  addSponsor: (sponsor: Omit<Sponsor, "id">) => Promise<void>;
  makeDonation: (sponsorId: string, items: string) => Promise<void>;
}

export const useSponsorStore = create<SponsorState>((set) => ({
  sponsors: [],
  loading: false,
  error: null,
  fetchSponsors: async () => {
    set({ loading: true });
    try {
      const sponsors = await getSponsors();
      set({ sponsors, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch sponsors", loading: false });
    }
  },
  addSponsor: async (sponsor) => {
    set({ loading: true });
    try {
      const newSponsor = await createSponsor(sponsor);
      set((state) => ({
        sponsors: [...state.sponsors, newSponsor],
        loading: false,
      }));
    } catch (error) {
      set({ error: "Failed to add sponsor", loading: false });
    }
  },
  makeDonation: async (sponsorId, items) => {
    set({ loading: true });
    try {
      await donateItems(sponsorId, items);
      set((state) => ({
        sponsors: state.sponsors.map((s) =>
          s.id === sponsorId ? { ...s, donated_items: `${s.donated_items}, ${items}` } : s
        ),
        loading: false,
      }));
    } catch (error) {
      set({ error: "Failed to make donation", loading: false });
    }
  },
}));