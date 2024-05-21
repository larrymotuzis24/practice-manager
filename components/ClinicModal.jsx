import { useSelector } from 'react-redux';
import ClassCard from './ClassCard';

const ClinicModal = ({ onClose }) => {
  const selectedClinicId = useSelector(state => state.clinics.selectedClinicId);
  const clinic = useSelector(state => state.clinics.currentClinics.find(clinic => clinic.id === selectedClinicId));
  console.log(clinic)

  if (!clinic) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={onClose}>
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center">
          <h2 className="text-lg text-black font-bold mx-auto">{clinic.title} - {clinic.location}</h2>
          <button onClick={onClose} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul className="mt-3">
        {clinic.classes.map(cls => (
            <ClassCard key={cls.id} classDetail={cls} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClinicModal;
