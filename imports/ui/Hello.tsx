import React, { useState } from 'react';
import { Button } from '@mantine/core';

export const Hello = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>🌊 Portfolio</h1>
      <Button onClick={increment}>Click me!</Button>
      <p>You've pressed the button {counter} times.</p>
    </div>
  );
};
