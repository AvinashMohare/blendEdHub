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

  return <div ref={renderRef} />;
};

export default AirFrictionExample;
