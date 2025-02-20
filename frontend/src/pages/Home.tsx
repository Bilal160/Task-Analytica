import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex md:flex-row sm:flex-col items-center gap-4">
        <Link to="/items">
          <div className="border-4 border-blue-400 rounded-xl px-10 py-4 cursor-pointer">
            <p className="text-2xl font-extralight text-blue-400">Items</p>
          </div>
        </Link>
        <Link to="/ai-chat">
          <div className="border-4 border-blue-400 rounded-xl px-10 py-4 cursor-pointer">
            <p className="text-2xl font-extralight text-blue-400">AI Chat</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
