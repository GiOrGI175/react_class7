import React, { useState } from 'react';

const ToggleBoolean = () => {
  const [isOn, setIson] = useState(false);

  return (
    <>
      <div>
        <p>{isOn ? 'on' : 'off'}</p>
        <button onClick={() => setIson((perv) => !perv)}>on/off</button>
      </div>
    </>
  );
};

export default ToggleBoolean;
