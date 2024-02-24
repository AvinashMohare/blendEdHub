import React, { useRef, useEffect } from "react";
import Matter from "matter-js";

const AirFriction = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const {
            Engine,
            Render,
            Runner,
            MouseConstraint,
            Mouse,
            Composite,
            Bodies,
        } = Matter;

        // create engine
        const engine = Engine.create();
        const world = engine.world;

        // create renderer
        const render = Render.create({
            canvas: canvasRef.current,
            engine: engine,
            options: {
                width: 800,
                height: 600,
                showVelocity: true,
            },
        });

        Render.run(render);

        // create runner
        const runner = Runner.create();
        Runner.run(runner, engine);

        // add bodies
        Composite.add(world, [
            // falling blocks
            Bodies.rectangle(200, 100, 60, 60, { frictionAir: 0.001 }),
            Bodies.rectangle(400, 100, 60, 60, { frictionAir: 0.05 }),
            Bodies.rectangle(600, 100, 60, 60, { frictionAir: 0.1 }),

            // walls
            Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
            Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
            Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
            Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
        ]);

        // add mouse control
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false,
                },
            },
        });

        Composite.add(world, mouseConstraint);

        // keep the mouse in sync with rendering
        render.mouse = mouse;

        // fit the render viewport to the scene
        Render.lookAt(render, {
            min: { x: 0, y: 0 },
            max: { x: 800, y: 600 },
        });

        return () => {
            // Clean up the engine and renderer when the component unmounts
            Render.stop(render);
            Runner.stop(runner);
        };
    }, []);

    return (
        <div>
            <p style={{ fontSize: "20px" }}>
                Air resistance is defined as the force that acts in the opposite
                direction to an object moving through the air. It is also known
                as "drag." The magnitude of the force varies wildly from object
                to object. A large truck with a flat front will experience large
                amounts of air resistance, even at moderate speeds. The block
                which suffers lowest air resistance falls down faster as
                compared to the blocks which face larger air resistance
            </p>
            <canvas ref={canvasRef} />
        </div>
    );
};

export default AirFriction;
