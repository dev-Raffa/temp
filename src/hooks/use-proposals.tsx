import { ProposalsContext } from "@/context/proposals-context";
import { useContext } from "react";

export function useProposals() {
  const context = useContext(ProposalsContext);

  if (context === undefined) {
    throw new Error('useProposals must be used within a ProposalsProvider');
  }
  
  return context;
}