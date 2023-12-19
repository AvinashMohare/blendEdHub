import React, { useRef, useEffect } from "react";
import Matter from "matter-js";

const NewtonsCradle = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const {
            Engine,
            Render,
            Runner,
            Body,
            Composites,
            MouseConstraint,
            Mouse,
            Composite,
            Constraint,
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

        const cradle1 = newtonsCradle(280, 100, 5, 30, 200);
        Composite.add(world, cradle1);
        Body.translate(cradle1.bodies[0], { x: -180, y: -100 });

        const cradle2 = newtonsCradle(280, 380, 7, 20, 140);
        Composite.add(world, cradle2);
        Body.translate(cradle2.bodies[0], { x: -140, y: -100 });

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
            min: { x: 0, y: 50 },
            max: { x: 800, y: 600 },
        });

        return () => {
            Render.stop(render);
            Runner.stop(runner);
        };
    }, []);

    const newtonsCradle = (xx, yy, number, size, length) => {
        const { Composite, Constraint, Bodies } = Matter;
        const newtonsCradleComposite = Composite.create({
            label: "Newtons Cradle",
        });

        for (let i = 0; i < number; i++) {
            const separation = 1.9;
            const circle = Bodies.circle(
                xx + i * (size * separation),
                yy + length,
                size,
                {
                    inertia: Infinity,
                    restitution: 1,
                    friction: 0,
                    frictionAir: 0,
                    slop: size * 0.02,
                }
            );

            const constraint = Constraint.create({
                pointA: { x: xx + i * (size * separation), y: yy },
                bodyB: circle,
            });

            Composite.addBody(newtonsCradleComposite, circle);
            Composite.addConstraint(newtonsCradleComposite, constraint);
        }

        return newtonsCradleComposite;
    };

    return <canvas ref={canvasRef} />;
};

export default NewtonsCradle;
