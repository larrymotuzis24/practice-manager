"use client"
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedClinic } from '@/lib/features/clinic/clinicSlice';
import ClinicModal from './ClinicModal';

export default function ClinicList() {
  const [modalOpen, setModalOpen] = useState(false);

  const clinics =   useSelector(state => state.clinics.currentClinics);
  const dispatch = useDispatch();

  const handleClinicSelect = (clinicId) => {
    dispatch(setSelectedClinic(clinicId));
    setModalOpen(true);

  };

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  useSelector(state => console.log(state))
  return (
    <div className="mx-4 my-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 py-2 pb-2 border-b mb-5">Clinics</h1>
      <ul>
        {clinics.map(clinic => (
          <li 
            key={clinic.id}
            onClick={() => handleClinicSelect(clinic.id)}
          >
            <h2>{clinic.title} - {clinic.location}</h2>
            <div>
            </div>
          </li>
        ))}
      </ul>
        {modalOpen && <ClinicModal onClose={handleCloseModal} />}
    </div>
  );
}
