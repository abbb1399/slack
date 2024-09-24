import { useParentMeesageId } from "@/features/messages/store/use-parent-meesage-id";
import { useProfileMemberId } from "@/features/members/store/use-profile-member-id";

export const usePanel = () => {
  const [parentMessageId, setParentMeesageId] = useParentMeesageId();
  const [profileMemberId, setProfileMemberId] = useProfileMemberId();

  const onOpenProfile = (memberId: string) => {
    setProfileMemberId(memberId);
    setParentMeesageId(null);
  };

  const onOpenMessage = (messageId: string) => {
    setParentMeesageId(messageId);
    setProfileMemberId(null);
  };

  const onClose = () => {
    setParentMeesageId(null);
    setProfileMemberId(null);
  };

  return {
    parentMessageId,
    profileMemberId,
    onOpenMessage,
    onOpenProfile,
    onClose,
  };
};
