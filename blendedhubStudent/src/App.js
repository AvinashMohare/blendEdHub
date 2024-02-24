// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./pages/login";
// import LoginSelection from "./pages/loginselection";
// import Register from "./pages/register";
// import Dashboard from "./pages/dashboard";
import Main from "./pages/main";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";

function App() {
    return (
        <div className="app">
            <Main />
        </div>
    );
}

export default App;
