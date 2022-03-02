import { Routes, Route } from "react-router-dom";
import {ProtectRoute,ProtectLogin} from "./routes/route"
import Login from "./views/Login";
import Home from './views/Home'
import Navbar from "./components/NavBar";
import ProductDetail from "./components/ProductDetail";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <Routes>
       <Route path="/" element={<ProtectRoute><Home/></ProtectRoute>} />
       <Route path="/login" element={<ProtectLogin><Login /></ProtectLogin>} />
       <Route path="/productdetail" element={<ProtectRoute><ProductDetail/></ProtectRoute>} />
      </Routes>
    </div>
  );
}

export default App;
