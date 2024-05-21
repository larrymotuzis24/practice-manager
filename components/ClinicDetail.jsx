import { useSelector } from 'react-redux';

export default function ClinicDetails() {
  const selectedClinicId = useSelector(state => state.clinics.selectedClinicId);
  const clinic = useSelector(state => state.clinics.items.find(clinic => clinic.id === selectedClinicId));

  if (!clinic) return null;

  return (
    <div>
      <h2>{clinic.title} - {clinic.location}</h2>
      <ul>
        {clinic.classes.map(c => (
          <li key={c.id}>
            <h3>{c.date} - Grade: {c.grade}</h3>
            <p>Plan: {c.practicePlan}</p>
            <p>Notes: {c.notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
