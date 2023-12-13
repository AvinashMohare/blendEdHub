import classes from "./App.module.scss";
import Dashboard from "./pages/dashboard";
import MyComponent from "./pages/dashboard";
function App() {
    return (
        <div className={classes.App}>
            <Dashboard />
        </div>
    );
}

export default App;
