import { toast } from "react-toastify";

export const loginErrorNotify = () =>
  toast.error("Hatalı giriş.", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  export const signinErrorNotify = () =>
  toast.error("Bu adrese kayıtlı bir kullanıcı mevcut.", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

