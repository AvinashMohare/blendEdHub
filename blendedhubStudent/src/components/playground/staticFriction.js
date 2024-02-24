import React, { useRef, useEffect } from "react";
import Matter from "matter-js";

const StaticFriction = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const {
            Engine,
            Render,
            Runner,
            Body,
            Composites,
            Events,
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

        const body = Bodies.rectangle(400, 500, 200, 60, {
            isStatic: true,
            chamfer: 10,
            render: { fillStyle: "#060a19" },
        });
        const size = 50;

        const stack = Composites.stack(
            350,
            470 - 6 * size,
            1,
            6,
            0,
            0,
            (x, y) => {
                return Bodies.rectangle(x, y, size * 2, size, {
                    slop: 0.5,
                    friction: 1,
                    frictionStatic: Infinity,
                });
            }
        );

        Composite.add(world, [
            body,
            stack,
            // walls
            Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
            Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
            Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
            Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
        ]);

        Events.on(engine, "beforeUpdate", () => {
            if (engine.timing.timestamp < 1500) {
                return;
            }

            const px =
                400 + 100 * Math.sin((engine.timing.timestamp - 1500) * 0.001);

            // manual update velocity required for older releases
            if (Matter.version === "0.18.0") {
                Body.setVelocity(body, { x: px - body.position.x, y: 0 });
            }

            Body.setPosition(body, { x: px, y: body.position.y }, true);
        });

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

export default StaticFriction;
