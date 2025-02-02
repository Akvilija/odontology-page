import { Doctor } from "../../types";

const DoctorItem = ({ doctor }: { doctor: Doctor }): JSX.Element => {
    return (
        <div className="bg-white shadow-lg rounded-2xl w-full md:w-100% text-center transition-transform transform hover:scale-105">
            <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-120 h-120 object-cover"
            />
            <h2 className="text-xl font-bold text-gray-800 p-2">{doctor.name}</h2>
            <p className="text-gray-600 mt-2">{doctor.specialty}</p>
            <p className="text-gray-500 mt-3 pb-4">Licencija: {doctor.license}</p>
        </div>
    )
}

export default DoctorItem;