import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRegister from "./Components/UserRegister/UserRegister";
import UserProfileRegister from "./Components/UserProfileRegister/UserProfileRegister";
import { gapi } from "gapi-script";
gapi.load("client:auth2", () => {
  gapi.client.init({
    clientId:
      "735872497830-brt36pujgllrac6js688mtt6simebkio.apps.googleusercontent.com",
    plugin_name: "chat",
  });
});
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserRegister />}></Route>
          <Route path="/apply/aa" element={<UserProfileRegister />} />
          {/* <Route path="/register1" element={(<SecondRegisterForm />)} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
