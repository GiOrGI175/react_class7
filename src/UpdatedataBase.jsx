import React, { useState } from 'react';

const UpdateBase = () => {
  // ვარიანტიორი როცა ყოველ დაჭერაზე იცვლება

  const [MyName, SetMyName] = useState('giorgi');

  const [counter, setCounter] = useState(0);

  const HandeleNameFunction = () => {
    SetMyName((perv) => !perv);
  };

  return (
    <>
      <div>
        <h1>Counter:{counter}</h1>
        <button
          onClick={() => {
            setCounter((perv) => perv + 1);
          }}
        >
          clk
        </button>

        <div>
          <h1>Hello {MyName}</h1>
          <button onClick={HandeleNameFunction}>clk</button>
        </div>
      </div>
    </>
  );
};

export default UpdateBase;
