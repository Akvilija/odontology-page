import { Service } from "../../types";

const ServicesItem = ({ service }: { service: Service }): JSX.Element => {
    return (
        <div className="shadow-lg rounded-lg overflow-hidden w-100 max-w-sm transition-transform transform hover:scale-105">
            <div className="relative">
                <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full h-48 object-cover filter grayscale transition-all duration-300 hover:grayscale-0"
                />
            </div>
            
            <div className="bg-[var(--active-color)] text-white text-center p-4 flex flex-col justify-between ">
                <h2 className="text-lg font-semibold">{service.name}</h2>


                <a href="#" className="block text-sm text-yellow-400 mt-2 hover:underline">
                    Plačiau →
                </a>
            </div>
        </div>
    );
}

export default ServicesItem;
