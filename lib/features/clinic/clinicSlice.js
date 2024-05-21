
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  currentClinics: [
    {
      id: 'getbetter-lemont',
      title: 'Get Better',
      location: 'Lemont',
      classes: [
        {
          id: 'class1',
          date: '2023-06-01',
          grade: 'k-2nd',
          practicePlan: 'Dribbling Basics',
          notes: 'Focus on ball handling'
        },
        {
          id: 'class2',
          date: '2023-06-03',
          grade: '3rd-5th',
          practicePlan: 'Dribbling Basics',
          notes: 'Focus on ball handling'
        }
      ]
    },
    {
      id: 'getbetter-oakbrook',
      title: 'Get Better',
      location: 'Oakbrook',
      classes: [
        {
          id: 'class1',
          date: '2023-06-02',
          grade: 'k-2nd',
          practicePlan: 'Shooting Techniques',
          notes: 'Work on free throws and three-pointers'
        }, 
        {
          id: 'class2',
          date: '2023-06-04',
          grade: '3rd-5th',
          practicePlan: 'Shooting Techniques',
          notes: 'Work on free throws and three-pointers'
        }
      ]
    },
    {
      id: 'next',
      title: 'NEXT',
      location: 'Hinsdale',
      classes: [
        {
          id: 'class1',
          date: '2023-06-05',
          grade: '3rd-4th',
          practicePlan: 'Advanced Defensive Tactics',
          notes: 'Emphasis on man-to-man and zone defense'
        }
      ]
    }
  ],
  status: 'idle',
  error: null
};

const clinicSlice = createSlice({
  name: 'clinics',
  initialState,
  reducers: {
    setSelectedClinic(state, action) {
      state.selectedClinicId = action.payload
    }
  }
});
export const { setSelectedClinic } = clinicSlice.actions;
export default clinicSlice.reducer;
