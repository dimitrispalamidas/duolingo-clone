import { auth } from "@clerk/nextjs";

const adminIds = ["user_2f98XzVvH4BVEjOsWv6qzMc3kSy"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
