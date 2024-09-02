import { Id } from "./../../../../convex/_generated/dataModel.d";
import { useQuery } from "convex/react";

import { api } from "../../../../convex/_generated/api";

interface UseGetWorkpspaceProps {
  id: Id<"workspaces">;
}

export const useGetWorkspace = ({ id }: UseGetWorkpspaceProps) => {
  const data = useQuery(api.workspaces.getById, { id });
  const isLoading = data === undefined;

  return { data, isLoading };
};
