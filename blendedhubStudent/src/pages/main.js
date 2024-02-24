// import Dashboard from "./dashboard";
// import Sidebar from "../components/sidebar";
// import "../styles/Main.scss";
// import ClassModules from "./classModules";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Routes } from "react-router-dom"; // For newer versions of react-router-dom
// import ChatGPT from "../components/chatgpt";
// import GroupDiscussions from "../components/groupDiscussions";
// import Library from "./library";
// import Doubts from "./doubts";
// import Playground from "./playground";
// import Calendar from "./calendar";

// const Main = () => {
//     return (
//         <Router>
//             <div className="rootMain">
//                 <div className="sidebar">
//                     <Sidebar />
//                 </div>
//                 <div className="center">
//                     <Routes>
//                         <Route path="/" element={<Dashboard />} />

//                         <Route path="/classroom" element={<ClassModules />} />
//                         <Route path="/library" element={<Library />} />
//                         <Route
//                             path="/groupDiscussion"
//                             element={<GroupDiscussions />}
//                         />
//                         <Route path="/doubts" element={<Doubts />} />
//                         <Route path="/attendance" element={<Calendar />} />
//                         <Route path="/playground" element={<Playground />} />
//                     </Routes>
//                 </div>
//             </div>
//         </Router>
//     );
// };

// export default Main;

import Dashboard from "./dashboard";
import Sidebar from "../components/sidebar";
import "../styles/Main.scss";
import ClassModules from "./classModules";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom"; // For newer versions of react-router-dom
import ChatGPT from "../components/chatgpt";
import GroupDiscussions from "../components/groupDiscussions";
import Library from "./library";
import Doubts from "./doubts";
import Playground from "./playground";
import Calendar from "./calendar";

// Import the new layout component
import Login from "./login";
import Recommendations from "./recommendations";
import Cocurricular from "../components/cocurricular";

const Main = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>

            <div className="rootMain">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="center">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />

                        <Route path="/classroom" element={<ClassModules />} />
                        <Route path="/library" element={<Library />} />
                        <Route
                            path="/groupDiscussion"
                            element={<GroupDiscussions />}
                        />
                        <Route path="/doubts" element={<Doubts />} />
                        <Route path="/attendance" element={<Calendar />} />
                        <Route path="/playground" element={<Playground />} />
                        <Route
                            path="/recommendations"
                            element={<Recommendations />}
                        />
                        <Route
                            path="/co-curricular"
                            element={<Cocurricular />}
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default Main;
