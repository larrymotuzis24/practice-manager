
import React from 'react';
import { useSelector } from 'react-redux';

const ClinicModal = ({ onClose }) => {
  const selectedClinicId = useSelector(state => state.clinics.selectedClinicId);
  const clinic = useSelector(state => state.clinics.currentClinics.find(clinic => clinic.id === selectedClinicId));
  console.log(clinic)

  if (!clinic) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={onClose}>
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">{clinic.title} - {clinic.location}</h2>
          <button onClick={onClose} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul className="mt-3">
        <h2 className='text-black text-center'> {clinic.title}</h2>
          {clinic.classes.map(cls => (
            <li key={cls.id} className="mt-2 text-black">
              <p><strong>Date:</strong> {cls.date}</p>
              <p><strong>Age Group:</strong> {cls.grade}</p>
              <p><strong>Practice Plan:</strong> {cls.practicePlan}</p>
              <p><strong>Notes:</strong> {cls.notes}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClinicModal;
