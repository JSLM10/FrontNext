import { useEffect } from "react";
import { useContestantStore } from "../stores/contestantStore";
import { useBattleStore } from "../stores/battleStore";
import { useDictatorStore } from "../stores/dictatorStore";
import { useSponsorStore } from "../stores/sponsorStore";
import { useMarketStore } from "../stores/transactionStore";

export const useDashboardData = () => {
  const { fetchContestants } = useContestantStore();
  const { fetchBattles } = useBattleStore();
  const { fetchDictators } = useDictatorStore();
  const { fetchSponsors } = useSponsorStore();
  const { fetchTransactions } = useMarketStore();

  useEffect(() => {
    fetchContestants();
    fetchBattles();
    fetchDictators();
    fetchSponsors();
    fetchTransactions();
  }, [fetchContestants, fetchBattles, fetchDictators, fetchSponsors, fetchTransactions]);
};