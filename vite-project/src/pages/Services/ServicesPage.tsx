import Container from "../../components/Container";
import ServiceList from "../../components/ServicesList";
import services from "../../data/services";

const ServicesPage = (): JSX.Element => {
    return (
        <Container>
            <ServiceList services={services} />
        </Container>
    );
};

export default ServicesPage;