import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user.user);
      toast.success(
        "Account successfull created. Please verify the new account from the users email address"
      );
    },
  });

  return { signup, isLoading };
}
