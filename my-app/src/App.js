import "./App.css";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [userstate, setUserState] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              userstate && userstate._id ? (
                <Profile
                  setUserState={setUserState}
                  username={userstate.fname}
                />
              ) : (
                <Login setUserState={setUserState} />
              )
            }
          ></Route>
          <Route
            path="/login"
            element={<Login setUserState={setUserState} />}
          ></Route>
          <Route path="/signup" element={<Register />}></Route>
        </Routes>
      </Router>
      <ToastContainer/>
    </div>
  );
}

export default App;
