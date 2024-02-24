import React, { useState } from "react";
import "../styles/Playground.scss";
import AirFriction from "../components/playground/airFriction";
import NewtonsCradle from "../components/playground/newtonsCradle";
import DoublePendulum from "../components/playground/doublePendulum";
import Friction from "../components/playground/friction";
import StaticFriction from "../components/playground/staticFriction";

const Playground = () => {
    const [activeComponent, setActiveComponent] = useState("AirFriction");

    const toggleComponent = (component) => {
        if (activeComponent === component) {
            setActiveComponent(null);
        } else {
            setActiveComponent(component);
        }
    };

    return (
        <div className="rootPlayground">
            <p className="heading">Learn with some cool animations</p>
            <div className="buttons">
                <div
                    className="buttonContainer"
                    onClick={() => toggleComponent("AirFriction")}
                >
                    <p>Air Friction</p>
                </div>
                <div
                    className="buttonContainer"
                    onClick={() => toggleComponent("NewtonsCradle")}
                >
                    <p>Newton's Cradle</p>
                </div>
                <div
                    className="buttonContainer"
                    onClick={() => toggleComponent("DoublePendulum")}
                >
                    <p>Double Pendulum</p>
                </div>
                <div
                    className="buttonContainer"
                    onClick={() => toggleComponent("Friction")}
                >
                    <p>Friction</p>
                </div>
                <div
                    className="buttonContainer"
                    onClick={() => toggleComponent("StaticFriction")}
                >
                    <p>Static Friction</p>
                </div>
            </div>

            <div className="simulationsContainer">
                <div className="simulations">
                    {activeComponent === "AirFriction" && <AirFriction />}
                    {activeComponent === "NewtonsCradle" && <NewtonsCradle />}
                    {activeComponent === "DoublePendulum" && <DoublePendulum />}
                    {activeComponent === "Friction" && <Friction />}
                    {activeComponent === "StaticFriction" && <StaticFriction />}
                </div>
            </div>
        </div>
    );
};

export default Playground;
