import { Doctor } from "../../types";
import DoctorItem from "../DoctorItem";
import Container from "../Container";

type doctorsDataProps = {
    doctors: Doctor[]
};

const DoctorsList = ({ doctors }: doctorsDataProps): JSX.Element => {
    return (
        <Container>
            <ul className="grid justify-items-center grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {doctors.map((doctor) => (
                    <li key={doctor.id}>
                        <DoctorItem doctor={doctor} />
                    </li>
                ))}
            </ul>
        </Container>
    )
}

export default DoctorsList;