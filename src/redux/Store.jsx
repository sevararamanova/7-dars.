// store.js (yoki store.jsx)

import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlices'; // RTK Query API slice


const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // RTK Query middleware
});

export default store; // Default eksport
