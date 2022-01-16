import logo from './logo.svg';
import './App.css';
import Home from './user/Index';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PlanList from './user/PlanList';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} exact />
            <Route path="planlist" element={<PlanList />} />
            {/* <Route path="login" element={<Login />} />
            <Route path="regist" element={<Regist />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
