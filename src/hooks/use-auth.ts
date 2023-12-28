import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const router = useRouter();

  const signout = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/logout`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        throw new Error("Signout failed");
      }
      toast.success("Signout success");
      router.push("/sign-in");
      router.refresh();
    } catch (err) {
      toast.error("Signout failed");
    }
  };

  return { signout };
};
