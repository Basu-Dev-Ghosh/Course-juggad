import { create } from "zustand";

type LoginStore = {
  login_form_visible: boolean;
  set_login_form_visibility: (visibility: boolean) => void;
};

const useLoginStore = create<LoginStore>()((set) => ({
  login_form_visible: false,
  set_login_form_visibility: (visibility) =>
    set((state) => ({ login_form_visible: visibility })),
}));

export default useLoginStore;
