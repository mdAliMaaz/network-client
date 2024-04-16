import { toast } from "sonner";

const useToast = () => {
  return (message: string) => toast(message);
};

export default useToast;
