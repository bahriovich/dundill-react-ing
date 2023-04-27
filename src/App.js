import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserRegister from "./Components/UserRegister/UserRegister";
import UserProfileRegister from "./Components/UserProfileRegister/UserProfileRegister";


function App() {


  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/apply" element={(<UserRegister />)}></Route>
          <Route path="/apply/aa" element={( <UserProfileRegister /> )} />
          {/* <Route path="/register1" element={(<SecondRegisterForm />)} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
