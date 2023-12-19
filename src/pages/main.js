import Dashboard from "./dashboard";
import Sidebar from "../components/sidebar";
import "../styles/Main.scss";
import ClassModules from "./classModules";
import Classroom from "./classroom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom"; // For newer versions of react-router-dom
import ChatGPT from "../components/chatgpt";
import GroupDiscussions from "../components/groupDiscussions";

const Main = () => {
    return (
        <Router>
            <div className="rootMain">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="center">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />

                        <Route path="/classroom" element={<ClassModules />} />
                        <Route path="/library" element={<ChatGPT />} />
                        <Route
                            path="/groupDiscussion"
                            element={<GroupDiscussions />}
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default Main;
