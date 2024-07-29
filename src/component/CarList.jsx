import React from 'react';
import { useGetCarsQuery, useDeleteCarMutation } from '../api/apiSlices';
import './CarList.css'; // Uslublarni import qilish

const CarList = () => {
  const { data: cars, error, isLoading } = useGetCarsQuery();
  const [deleteCar] = useDeleteCarMutation();

  const handleDelete = (id) => {
    deleteCar(id);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {cars.map((car) => (
        <li key={car.id}>
          {car.name} - {car.model}
          <button id="red"onClick={() => handleDelete(car.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default CarList;
