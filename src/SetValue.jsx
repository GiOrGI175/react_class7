import React, { useState } from 'react';

const SetValue = () => {
  const [MyName, SetMyName] = useState('giorgi');

  //   SetMyName('Mindia');

  const HandeleNameFunction = () => {
    SetMyName('Mindia');
  };

  return (
    <div>
      <h1>Hello {MyName}</h1>
      <button onClick={HandeleNameFunction}>clk</button>
    </div>
  );
};

export default SetValue;
