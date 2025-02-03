import { Link, useParams } from "react-router";
import services from "../../data/services";

const ServicePage = (): JSX.Element => {
    const { id } = useParams<{ id: string }>();
    const service = services.find(service => service.id === Number(id));

    if (!service) {
        return <h2 className="text-center text-red-500">Paslauga nerasta</h2>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 h-auto" >
            <h1 className="text-3xl font-bold mt-4">{service.name}</h1>
            <p className="text-lg text-gray-700 mt-2 mb-10">{service.description}</p>
            <Link to="/services" className="p-3 bg-[var(--active-color)] text-white">Atgal</Link>
        </div>
    );
};

export default ServicePage;