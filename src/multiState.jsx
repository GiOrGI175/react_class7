import React, { useState } from 'react';

const MultiState = () => {
  const [counter, Setcounet] = useState(0);

  return (
    <>
      <div>
        <h1>{counter}</h1>
        <button onClick={() => Setcounet((perv) => perv + 1)}>++</button>
        <button onClick={() => Setcounet((perv) => perv - 1)}>--</button>
        <button onClick={() => Setcounet(0)}>reset</button>
      </div>
    </>
  );
};

export default MultiState;
