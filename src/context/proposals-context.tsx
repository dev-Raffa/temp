import { InteractionResponse } from '@/types/interaction';
import { Contracts } from '@/types/proposals';
import React, { createContext, ReactNode, useState } from 'react';

interface ProposalsContextType {
  proposals: Contracts | null;
  setProposals: React.Dispatch<React.SetStateAction<Contracts | null>>;
  operatorInteraction: InteractionResponse | null;
  setOperatorInteraction: React.Dispatch<React.SetStateAction<InteractionResponse | null>>
}

export const ProposalsContext = createContext<ProposalsContextType | undefined>(undefined);

export function ProposalsProvider({ children }: { children: ReactNode }) {
  const [proposals, setProposals] = useState<Contracts | null>(null);
  const [operatorInteraction, setOperatorInteraction] = useState<InteractionResponse | null>(null);

  return (
    <ProposalsContext.Provider value={{
      proposals,
      setProposals,
      operatorInteraction,
      setOperatorInteraction,
    }}>
      {children}
    </ProposalsContext.Provider>
  );
}