import type { IconType } from "react-icons";

interface SidebarItemProps {
  href?: string;
  icon: IconType;
  label: string;
  onClick?: () => void;
}
export default function SidebarItem({
  href,
  icon: Icon,
  label,
  onClick,
}: SidebarItemProps) {
  return (
    <div className="flex flex-row items-center">
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
