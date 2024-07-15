import React, { useState } from 'react';

const ManagObj = () => {
  const [user, setUser] = useState({
    name: '',
    age: 0,
    email: 'nozadzegeorge17@GamepadHapticActuator.com',
    password: 'test',
  });

  function HandleChange(e) {
    console.log(e.target.value);
    setUser({ ...user, name: e.target.value, phone: '555555555555555' });
    console.log(user);
  }

  function handleage(e) {
    console.log(e.target.value);
    setUser({ ...user, age: e.target.value });
  }

  return (
    <>
      <div>
        <h1>Object</h1>
        <input type='text' placeholder='Name' onChange={HandleChange} />
        <input type='number' placeholder='age' onChange={handleage} />
        <p>Name:{user.name}</p>
        <p>Age:{user.age}</p>
      </div>
    </>
  );
};

export default ManagObj;
