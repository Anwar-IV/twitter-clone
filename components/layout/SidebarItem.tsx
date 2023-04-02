import useCurrentUser from "@/hooks/useCurrentUser";
import { useLoginModal } from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import { useCallback } from "react";
import type { IconType } from "react-icons";

interface SidebarItemProps {
  href?: string;
  icon: IconType;
  label: string;
  onClick?: () => void;
  auth?: boolean;
}
export default function SidebarItem({
  href,
  icon: Icon,
  label,
  onClick,
  auth,
}: SidebarItemProps) {
  const { data: currentUser } = useCurrentUser();
  const loginModal = useLoginModal();
  const router = useRouter();
  const handleClick = useCallback(() => {
    console.log("onclick clicked");
    if (onClick) return onClick();
    if (auth && !currentUser) return loginModal.onOpen();
    if (href) return router.push(href);
  }, [router, onClick, href, currentUser, auth, loginModal]);
  return (
    <div onClick={handleClick} className="flex flex-row items-center">
      <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
        <Icon size={28} color="white" />
      </div>
      <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer">
        <Icon size={24} color="white" />
        <p className="hidden lg:block text-white text-xl">{label}</p>
      </div>
    </div>
  );
}
