import classes from "./App.module.scss";
import Dashboard from "./pages/dashboard";
import MyComponent from "./pages/dashboard";
import Studymaterial from "./pages/studymaterial";
function App() {
    return (
        <div className={classes.App}>
            <Studymaterial/>
        </div>
    );
}

export default App;
