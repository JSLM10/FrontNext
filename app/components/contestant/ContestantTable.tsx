"use client";

// Update the path below to the correct relative path if needed, for example:
import { useContestantStore } from "../../stores/contestantStore";
import { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function ContestantTable() {
  const { contestants, loading, error, fetchContestants } = useContestantStore();

  useEffect(() => {
    fetchContestants();
  }, [fetchContestants]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Table className="text-white">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Nickname</TableHead>
          <TableHead>Strength</TableHead>
          <TableHead>Agility</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {contestants.map((contestant) => (
          <TableRow key={contestant.id}>
            <TableCell>{contestant.name}</TableCell>
            <TableCell>{contestant.nickname}</TableCell>
            <TableCell>{contestant.strength}</TableCell>
            <TableCell>{contestant.agility}</TableCell>
            <TableCell>{contestant.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}