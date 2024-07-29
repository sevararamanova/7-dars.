import React, { useState } from 'react';
import { useUpdateCarMutation } from '../api/apiSlices';
import './UpdateCar.css';

const UpdateCar = ({ car }) => {
  const [name, setName] = useState(car.name);
  const [model, setModel] = useState(car.model);
  const [updateCar] = useUpdateCarMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCar({ id: car.id, name, model });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Car Name"
      />
      <input
        type="text"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        placeholder="Car Model"
      />
      <button type="submit">Update Car</button>
    </form>
  );
};

export default UpdateCar;
