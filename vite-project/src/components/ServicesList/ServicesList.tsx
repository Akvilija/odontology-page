import { Service } from "../../types";
import Container from "../Container";
import ServicesItem from "../ServicesItem";

type servicesDataProps = {
    services: Service[]
};

const ServiceList = ({ services }: servicesDataProps): JSX.Element => {
    return (
        <Container>
            <ul className="grid justify-items-center grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                    <li key={service.id}>
                        <ServicesItem service={service} />
                    </li>
                ))}
            </ul>
        </Container>
    )
}

export default ServiceList;