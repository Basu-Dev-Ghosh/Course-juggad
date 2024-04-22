import { create } from "zustand";

type SignupStore = {
  signup_form_visible: boolean;
  set_signup_form_visibility: (visibility: boolean) => void;
};

const useSignupStore = create<SignupStore>()((set) => ({
  signup_form_visible: false,
  set_signup_form_visibility: (visibility) =>
    set((state) => ({ signup_form_visible: visibility })),
}));

export default useSignupStore;
