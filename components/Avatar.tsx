import useUser from "@/hooks/useUser";
import Image from "next/image";
import { useRouter } from "next/router";
import { MouseEvent, useCallback } from "react";

interface AvatarProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

export default function Avatar({ hasBorder, isLarge, userId }: AvatarProps) {
  const { data: fetchedUser } = useUser(userId);
  const router = useRouter();

  const onClick = useCallback(
    (event: MouseEvent<HTMLImageElement, globalThis.MouseEvent>) => {
      event.stopPropagation();
      const url = `/users/${userId}`;
      router.push(url);
    },
    [router, userId]
  );
  return (
    <div
      className={`
   ${hasBorder && "border-4"}
   ${isLarge ? "w-32 h-32" : "h-12 w-12"}
   rounded-full
   hover:opacity-90
  cursor-pointer
  relative
  transition
  `}
    >
      <Image
        fill
        style={{ objectFit: "cover", borderRadius: "100%" }}
        alt="Avatar"
        onClick={onClick}
        src={fetchedUser?.profileImage ?? "/images/placeholder.png"}
      />
    </div>
  );
}
