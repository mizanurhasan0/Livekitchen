import { toast } from "react-toastify";

const AlertToster = (message, variant) => {
  if (!["success", "error", "warning"].includes(variant)) throw Error();
  toast[`${variant}`](message, {
    position: "top",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
export default AlertToster;
