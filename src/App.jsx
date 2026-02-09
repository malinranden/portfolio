import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./main.scss";
import Home from "./pages/Home.jsx";
import Home2 from "./pages/Home2.jsx";
import Portfolio from "./pages/Portfolio.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home2 />}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
