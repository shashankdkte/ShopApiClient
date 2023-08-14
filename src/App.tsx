
import { Header, Footer } from "./Components/Layout";
import { Home, NotFound } from "./Pages";


import './App.css';
import { Routes, Route} from "react-router-dom";

function App() {
 
  return (
    <div className="App">
      <Header />
      <div className="pb-5">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
      </Routes>

      </div>
      <Footer />
    </div>
  );
}

export default App;
