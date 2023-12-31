import React, { useRef, useEffect } from "react";
import Matter from "matter-js";

const Friction = () => {
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

        const engine = Engine.create();
        const world = engine.world;

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

        const runner = Runner.create();
        Runner.run(runner, engine);

        Composite.add(world, [
            // walls
            Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
            Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
            Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
            Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
        ]);

        Composite.add(world, [
            Bodies.rectangle(300, 180, 700, 20, {
                isStatic: true,
                angle: Math.PI * 0.06,
                render: { fillStyle: "#060a19" },
            }),
            Bodies.rectangle(300, 70, 40, 40, { friction: 0.001 }),
        ]);

        Composite.add(world, [
            Bodies.rectangle(300, 350, 700, 20, {
                isStatic: true,
                angle: Math.PI * 0.06,
                render: { fillStyle: "#060a19" },
            }),
            Bodies.rectangle(300, 250, 40, 40, { friction: 0.0005 }),
        ]);

        Composite.add(world, [
            Bodies.rectangle(300, 520, 700, 20, {
                isStatic: true,
                angle: Math.PI * 0.06,
                render: { fillStyle: "#060a19" },
            }),
            Bodies.rectangle(300, 430, 40, 40, { friction: 0 }),
        ]);

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
        render.mouse = mouse;

        Render.lookAt(render, {
            min: { x: 0, y: 0 },
            max: { x: 800, y: 600 },
        });

        return () => {
            Render.stop(render);
            Runner.stop(runner);
        };
    }, []);

    return <canvas ref={canvasRef} />;
};

export default Friction;
