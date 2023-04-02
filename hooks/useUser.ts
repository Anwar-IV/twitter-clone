import useSWR from "swr";

import fetcher from "@/libs/fetcher";
import { User } from "@prisma/client";

const useUser = (userId: string) => {
  const { data, error, isLoading, mutate } = useSWR<
    User & { followersCount: number }
  >(userId && `/api/user/${userId}`, fetcher);

  return { data, error, isLoading, mutate };
};

export default useUser;
