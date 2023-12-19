import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const AirFrictionExample = () => {
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const runnerRef = useRef(null);

  useEffect(() => {
    const { Engine, Render, Runner, MouseConstraint, Mouse, Composite, Bodies } = Matter;

    // create engine
    const engine = Engine.create();
    engineRef.current = engine;
    const world = engine.world;

    // create renderer
    const render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 800,
        height: 600,
        showVelocity: true,
      },
    });
    renderRef.current = render;
    Render.run(render);

    // create runner
    const runner = Runner.create();
    runnerRef.current = runner;
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

    // cleanup on component unmount
    return () => {
      Render.stop(render);
      Runner.stop(runner);
    };
  }, []); // Run only once on component mount

  return (
  <>
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
    <div ref={renderRef} />;
    </div>
  </>
  
)
};

export default AirFrictionExample;
