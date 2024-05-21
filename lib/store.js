import { configureStore } from '@reduxjs/toolkit';
import clinicReducer from './features/clinic/clinicSlice';


export const makeStore = () => {
  return configureStore({
    reducer: {
      clinics: clinicReducer,
    }
  })
}
