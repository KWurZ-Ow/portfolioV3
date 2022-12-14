import React from 'react';
import { Creations } from '../db/Creations'
import { useTracker } from 'meteor/react-meteor-data';

export const Presentation = () => {
  const creas = useTracker(() => Creations.find({}).fetch());

  return (
    <div className='page'>
      <h1>🌊 Coucou</h1>
      {creas.map((crea) => {
        return <div key={crea.name}>
          <p>{crea.name}</p>
          <img src={crea.img} />
        </div>
      })}
    </div>
  );
};
