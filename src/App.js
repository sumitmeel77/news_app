import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<News category="general" />} />
          <Route path="/sports" element={<News category="sports" />} />
          <Route path="/business" element={<News category="business" />} />
          <Route path="/entertainment" element={<News category="entertainment" />} />
          <Route path="/health" element={<News category="health" />} />
          <Route path="/science" element={<News category="science" />} />
          <Route path="/technology" element={<News category="technology" />} />

        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
