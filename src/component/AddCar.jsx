import React, { useState } from 'react';
import { useAddCarMutation } from '../api/apiSlices';
import './AddCar.css'; // Uslublarni import qilish

const AddCar = () => {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [addCar] = useAddCarMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    addCar({ name, model });
    setName('');
    setModel('');
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
      <button type="submit">Add Car</button>
    </form>
  );
};

export default AddCar;
