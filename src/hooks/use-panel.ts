import { useParentMeesageId } from "@/features/messages/store/use-parent-meesage-id";

export const usePanel = () => {
  const [parentMessageId, setParentMeesageId] = useParentMeesageId();

  const onOpenMessage = (messageId: string) => {
    setParentMeesageId(messageId);
  };

  const onClose = () => {
    setParentMeesageId(null);
  };

  return {
    parentMessageId,
    onOpenMessage,
    onClose,
  };
};
