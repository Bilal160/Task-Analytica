import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteItem, getAllItems } from "../apis/itemApis";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
const Items = () => {
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();
  const [allItems, setAllItems] = useState([])
  const dispatch = useDispatch();
  useEffect(() => {
    getAllItems(dispatch, setisLoading,setAllItems);
  }, []);

  const handleDelete = async (id: string) => {
    const isDeleted = deleteItem(id);
    if (isDeleted) {
      setAllItems((prevItems) => prevItems.filter((item) => item?._id !== id));
    }
  };
  return (
    <div className="overflow-x-auto p-8 space-y-4">
      <div className="flex justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate("/add-item")}
        >
          Add Item
        </button>
      </div>
      {!isLoading ? (
        <>
          {allItems?.length === 0 ? (
            <div>
              <p>No Data Found</p>
            </div>
          ) : (
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="w-full bg-gray-100">
                  <th className="py-2 px-4 border-b text-left">Name</th>
                  <th className="py-2 px-4 border-b text-left">Description</th>
                  <th className="py-2 px-4 border-b text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {allItems?.map((item: object, index: number) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">{item?.name}</td>
                    <td className="py-2 px-4 border-b">{item?.description}</td>
                    <td className="py-2 px-4 border-b ">
                      <MdOutlineDelete
                        className="hover:text-red-500 cursor-pointer"
                        onClick={() => {
                          handleDelete(item?._id);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Items;
