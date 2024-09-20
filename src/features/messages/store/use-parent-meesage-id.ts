import { useQueryState } from "nuqs";

export const useParentMeesageId = () => {
  return useQueryState("parentMessageId");
};
