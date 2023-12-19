import React, { useRef, useEffect, useState } from "react";
import Matter from "matter-js";

const FrictionSimulation = () => {
  const canvasRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);

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
      element: canvasRef.current,
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

    engineRef.current = engine;
    renderRef.current = render;

    // Start the simulation when the component mounts
    Matter.Engine.run(engine);
    Matter.Render.run(render);

    return () => {
      Matter.Render.stop(renderRef.current);
      Matter.Runner.stop(runner);
    };
  }, []);

  return (
    <div style={{ margin:'11%' }}>
      <h1 className="text-center" style={{ margin: 30,  }}>
        FRICTION SIMULATION
      </h1>
      <p style={{ margin: 30 }}>
        In this you will learn how friction acts on bodies and how different
        levels of friction affect the motion of a freely
      </p>
      <p style={{ margin: 30 }}>
        Friction, a force resisting motion, varies on different planes. On
        inclined surfaces, friction opposes the component of an object's weight
        parallel to the plane, affecting sliding or rolling. The coefficient of
        friction determines its strength, impacting how objects interact with
        surfaces, influencing stability, and determining their ability to
        overcome resistance. The frictional force on an inclined plane depends
        on the angle of inclination. As the angle increases, the component of
        the object's weight parallel to the plane also increases, intensifying
        the force resisting motion. This relationship is described by the
        equation � friction = � ⋅ � normal f friction ​ =μ⋅f normal ​ , where �
        μ is the coefficient of friction and � normal f normal ​ is the normal
        force acting perpendicular to the inclined surface.{" "}
      </p>
      <div
        ref={canvasRef}
        style={{
          width: "500px",
          height: "300px",
          border: "1px solid black",
          marginLeft: '20%',
        }}
      ></div>
    </div>
  );
};

export default FrictionSimulation;
