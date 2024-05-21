

const ClassCard = ({ classDetail }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-black"> <span className='font-semibold'> Date: </span> {classDetail.date} | <span className='font-semibold'> Grade: </span> {classDetail.grade} </h3>

      <p className="text-gray-800"><span className="font-bold">Practice Plan:</span> {classDetail.practicePlan}</p>

      <p className="text-gray-600 italic">{classDetail.notes}</p>
    </div>
  );
};

export default ClassCard;
