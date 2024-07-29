
import React from 'react';
import { useGetCarsQuery, useAddCarMutation } from './api/apiSlices';
import CarList from './component/CarList';
import AddCar from './component/AddCar';
import './App.css';

const App = () => {
  return (
    <div>
      <h1>Add a New CAr</h1>
       <AddCar />
       <br></br>
       <br></br>
      <h1>Car List</h1>
      <CarList />
   
     
    </div>
  );
};

export default App;
