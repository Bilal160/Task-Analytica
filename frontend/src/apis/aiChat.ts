import axios from "axios";
import { toast } from "react-toastify";

export const aiChatPrompt = async (data: any, setResponse : Function, setIsLoading : Function) => {
    setIsLoading(true);
  try {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/chat/generate`,data);
    setResponse(res.data?.data?.response);
    setIsLoading(false);
  } catch (error: any) {
    setIsLoading(false);
    toast.error(error.response?.data?.message);
  }
};
