import React, { useEffect, useRef } from "react";
import Matter, {
  Engine,
  Render,
  Runner,
  Body,
  Composite,
  Constraint,
  Bodies,
  MouseConstraint,
  Mouse,
} from "matter-js";

const NewtonsCradleExample = () => {
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const runnerRef = useRef(null);

  useEffect(() => {
    // create engine
    const engine = Engine.create();
    engineRef.current = engine;
    const world = engine.world;

    // create renderer
    const render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 600,
        height: 500,
        showVelocity: true,
      },
    });
    renderRef.current = render;
    Render.run(render);

    // create runner
    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);

    // Newton's Cradle setup
    const newtonsCradle1 = createNewtonsCradle(280, 100, 5, 30, 200);
    Composite.add(world, newtonsCradle1);
    Body.translate(newtonsCradle1.bodies[0], { x: -180, y: -100 });

    const newtonsCradle2 = createNewtonsCradle(280, 380, 7, 20, 140);
    Composite.add(world, newtonsCradle2);
    Body.translate(newtonsCradle2.bodies[0], { x: -140, y: -100 });

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
      min: { x: 0, y: 50 },
      max: { x: 800, y: 600 },
    });

    // cleanup on component unmount
    return () => {
      Render.stop(render);
      Runner.stop(runner);
    };
  }, []); // Run only once on component mount

  const createNewtonsCradle = (xx, yy, number, size, length) => {
    const newtonsCradle = Composite.create({ label: "Newtons Cradle" });

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

      Composite.addBody(newtonsCradle, circle);
      Composite.addConstraint(newtonsCradle, constraint);
    }

    return newtonsCradle;
  };

  return (
    <div style={{ margin: "11%" }}>
      <h1 className="text-center" style={{ margin: 30 }}>
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
      <div ref={renderRef} />;
    </div>
  );
};

export default NewtonsCradleExample;
