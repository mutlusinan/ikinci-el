import { toast } from "react-toastify";


export const loginErrorNotify = () =>
  toast.error("Hatalı giriş.", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    closeButton: false,
    className: "errorToast",
  });

export const signinErrorNotify = () =>
  toast.error("Bu isimde bir kullanıcı mevcut.", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    closeButton: false,
    className: "errorToast",
  });
  
export const buySuccessNotify = () =>
  toast.success("Satın alındı.", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    closeButton: false,
    className: "successToast",
  });
