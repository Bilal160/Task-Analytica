import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { aiChatPrompt } from "../apis/aiChat";
import Loader from "../components/Loader";

const AIChat = () => {
  const [isLoading, setisLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [data, setData] = useState({
    prompt: "",
  });
  const handleInputChange = (e: any) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    aiChatPrompt(data, setResponse, setisLoading);
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <ToastContainer />
      <form
        className="w-full max-w-sm shadow-xl px-4 py-5 rounded-xl bg-white"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label
            htmlFor="prompt"
            className="block mb-2 text-sm font-medium text-black"
          >
            Prompt
          </label>
          <input
            type="text"
            id="prompt"
            placeholder="Enter Your Prompt..."
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-5">
          <p className="font-semibold mb-2">Response : </p>
          {isLoading ? <Loader /> : <p>{response}</p>}
        </div>
        <button
          type="submit"
          className={`text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ${
            isLoading ? "cursor-wait" : "cursor-pointer"
          }`}
          disabled={isLoading}
        >
          Generate
        </button>
      </form>
    </div>
  );
};

export default AIChat;
