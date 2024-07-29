// api/apiSlices.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://66a511d65dc27a3c190a9139.mockapi.io/api/cars/' }),
  endpoints: (builder) => ({
    getCars: builder.query({
      query: () => 'cars',
    }),
    getCarById: builder.query({
      query: (id) => `cars/${id}`,
    }),
    addCar: builder.mutation({
      query: (newCar) => ({
        url: 'cars',
        method: 'POST',
        body: newCar,
      }),
    }),
    updateCar: builder.mutation({
      query: (car) => ({
        url: `cars/${car.id}`,
        method: 'PUT',
        body: car,
      }),
    }),
    deleteCar: builder.mutation({
      query: (id) => ({
        url: `cars/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetCarsQuery,
  useGetCarByIdQuery,
  useAddCarMutation,
  useUpdateCarMutation,
  useDeleteCarMutation,
} = apiSlice;
