import axios from "axios";
import { toast } from "react-toastify";
import { Failure, Start, Success } from "../redx/slices/itemSlice";

export const addItem = async (
  data: object,
  isLoading: Function,
  event: any
) => {
  isLoading(true);
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/items-api/items`,
      data
    );
    toast.success(response.data?.message);
    isLoading(false);
    event?.target.reset();
  } catch (error: any) {
    isLoading(false);
    toast.error(error.response.data?.message);
  }
};

export const getAllItems = async (dispatch: any, isLoading: Function, setAllItems : Function) => {
  dispatch(Start());
  isLoading(true); 
  try {
    const response = await axios.get(
       `${import.meta.env.VITE_API_URL}/items-api/items`
    );
    isLoading(false);
    dispatch(Success(response.data?.data?.items));
    setAllItems(response.data?.data?.items)
    return response.data;
  } catch (error: any) {
    isLoading(false);
    dispatch(Failure(error.response.data?.message));
    toast.error(error.response.data?.message);
  }
};

export const deleteItem = (id: string) => {
  try {
    axios.delete(`${import.meta.env.VITE_API_URL}/items-api/items/${id}`);
    toast.success("Item Deleted Successfully");
    return true
  } catch (error: any) {
    toast.error(error.response.data?.message);
  }
};
