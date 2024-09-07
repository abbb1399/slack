import { Id } from "../../../../convex/_generated/dataModel";
import { useQuery } from "convex/react";

import { api } from "../../../../convex/_generated/api";

interface UseGetWorkpspaceInfoProps {
  id: Id<"workspaces">;
}

export const useGetWorkspaceInfo = ({ id }: UseGetWorkpspaceInfoProps) => {
  const data = useQuery(api.workspaces.getInfoById, { id });
  const isLoading = data === undefined;

  return { data, isLoading };
};
