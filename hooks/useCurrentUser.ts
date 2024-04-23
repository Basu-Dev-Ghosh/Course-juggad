import { getCurrentUserData } from "@/app/__actions__/auth";
import { useQuery } from "@tanstack/react-query";

export default function useCurrentUser() {
  // ------------------Queries------------------

  // Query for getting current user information
  const { data: user, isLoading } = useQuery({
    queryFn: async () => await getCurrentUserData(),
    queryKey: ["current_user"], //Array according to Documentation
  });

  return { user, isLoading };
}
