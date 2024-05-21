export const ClassCard = ({ classInfo }) => {
    return (
      <div className="p-4 m-2 bg-white shadow-md rounded-lg text-black">
        <h3 className="text-lg font-bold ">{classInfo.id}</h3>
        <p><strong>Location:</strong> {classInfo.location}</p>
        {/* More details and a link to a detailed view can be added here */}
      </div>
    );
  };