import React, { useRef, useEffect } from "react";
import Matter from "matter-js";

const DoublePendulum = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const {
            Engine,
            Events,
            Render,
            Runner,
            Body,
            Composite,
            Composites,
            Constraint,
            MouseConstraint,
            Mouse,
            Bodies,
            Vector,
        } = Matter;

        const engine = Engine.create();
        const world = engine.world;

        const render = Render.create({
            canvas: canvasRef.current,
            engine: engine,
            options: {
                width: 800,
                height: 600,
                wireframes: false,
            },
        });

        Render.run(render);

        const runner = Runner.create();
        Runner.run(runner, engine);

        const group = Body.nextGroup(true);
        const length = 200;
        const width = 25;

        const pendulum = Composites.stack(350, 160, 2, 1, -20, 0, (x, y) => {
            return Bodies.rectangle(x, y, length, width, {
                collisionFilter: { group: group },
                frictionAir: 0,
                chamfer: 5,
                render: {
                    fillStyle: "transparent",
                    lineWidth: 1,
                },
            });
        });

        engine.gravity.scale = 0.002;

        Composites.chain(pendulum, 0.45, 0, -0.45, 0, {
            stiffness: 0.9,
            length: 0,
            angularStiffness: 0.7,
            render: {
                strokeStyle: "#4a485b",
            },
        });

        Composite.add(
            pendulum,
            Constraint.create({
                bodyB: pendulum.bodies[0],
                pointB: { x: -length * 0.42, y: 0 },
                pointA: {
                    x: pendulum.bodies[0].position.x - length * 0.42,
                    y: pendulum.bodies[0].position.y,
                },
                stiffness: 0.9,
                length: 0,
                render: {
                    strokeStyle: "#4a485b",
                },
            })
        );

        const lowerArm = pendulum.bodies[1];

        Body.rotate(lowerArm, -Math.PI * 0.3, {
            x: lowerArm.position.x - 100,
            y: lowerArm.position.y,
        });

        Composite.add(world, pendulum);

        const trail = [];

        Events.on(render, "afterRender", () => {
            trail.unshift({
                position: Vector.clone(lowerArm.position),
                speed: lowerArm.speed,
            });

            Render.startViewTransform(render);
            render.context.globalAlpha = 0.7;

            for (let i = 0; i < trail.length; i += 1) {
                const point = trail[i].position;
                const speed = trail[i].speed;

                const hue =
                    250 + Math.round((1 - Math.min(1, speed / 10)) * 170);
                render.context.fillStyle = "hsl(" + hue + ", 100%, 55%)";
                render.context.fillRect(point.x, point.y, 2, 2);
            }

            render.context.globalAlpha = 1;
            Render.endViewTransform(render);

            if (trail.length > 2000) {
                trail.pop();
            }
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
            max: { x: 700, y: 600 },
        });

        return () => {
            Render.stop(render);
            Runner.stop(runner);
        };
    }, []);

    return <canvas ref={canvasRef} />;
};

export default DoublePendulum;
