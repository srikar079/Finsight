import { Toaster, toast } from "sonner";
export function toaster({ data, state, title }) {
  let errors = typeof data === "object" && !Array.isArray(data) ? [data] : data;
  switch (state) {
    case "error":
      errors.forEach((err) => {
        toast.error("Error", {
          title: title,
          description: err.msg,
        });
      });
      break;
    case "success":
      toast.success("Success", {
        title: title,
        description: data.msg,
      });
      break;
    case "info":
      errors.forEach((err) => {
        toast.info("Info", {
          title: title,
          description: err.msg,
        });
      });
      break;
    case "warning":
      toast.warning("Warning", {
        title: title,
        description: data.msg,
      });
      break;
    default:
      console.log("Invalid state:", state);
      toast.warning(data.msg);
  }
}
export const Toast = () => {
  return (
    <>
      <Toaster richColors />
    </>
  );
};
