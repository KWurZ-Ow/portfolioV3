import React, { useState } from 'react';
import { Button } from '@mantine/core';
import { Creations } from '../db/Creations';
import { useTracker } from 'meteor/react-meteor-data';

export const Hello = () => {
  const [counter, setCounter] = useState(0);
  const creas = useTracker(() => Creations.find({}).fetch());
  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div className='page'>
      <h1>🌊 Portfolio</h1>
      <Button onClick={increment}>Click me!</Button>
      <p>You've pressed the button {counter} times.</p>
      <h2>Créations</h2>
      {creas.map((crea) => {
        return <div key={crea.name}>
          <p>{crea.name}</p>
          <img src={crea.img} />
        </div>
      })}
    </div>
  );
};
