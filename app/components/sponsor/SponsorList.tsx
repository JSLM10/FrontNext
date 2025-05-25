"use client";

import { useSponsorStore } from "../../stores/sponsorStore";
import { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function SponsorList() {
  const { sponsors, loading, error, fetchSponsors } = useSponsorStore();

  useEffect(() => {
    fetchSponsors();
  }, [fetchSponsors]);

  if (loading) return <div>Loading sponsors...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Table className= "text-white">
      <TableHeader>
        <TableRow>
          <TableHead>Company</TableHead>
          <TableHead>Donations</TableHead>
          <TableHead>Supported Fighter</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sponsors.map((sponsor) => (
          <TableRow key={sponsor.id}>
            <TableCell className="font-medium">{sponsor.company_name}</TableCell>
            <TableCell>
              <div className="bg-gray-900 text-white">
                {sponsor.donated_items.split(",").map((item, index) => (
                  <Badge key={index} variant="outline" className="border-rust">
                    {item.trim()}
                  </Badge>
                ))}
              </div>
            </TableCell>
            <TableCell>
              <Badge className="bg-steel">
                #{sponsor.preferred_fighter ? sponsor.preferred_fighter.substring(0, 5) : "N/A"}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}