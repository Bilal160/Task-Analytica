import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Items from "./pages/Items";
import AddItem from "./pages/AddItem";
import NotFound from "./pages/NotFound";
import AIChat from "./pages/AIChat";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/ai-chat" element={<AIChat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
