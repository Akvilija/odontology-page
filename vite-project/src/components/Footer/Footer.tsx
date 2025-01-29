import OdontologyServices from "../OdontologyServices";
import WorkingHours from "../WorkingHours";
import SectionTitle from "../SectionTitle";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa"; 

const Footer = (): JSX.Element => {
    return (
        <footer className="bg-gray-100 text-gray-800 text-lg py-10 border-t border-gray-300">
            <div className="container mx-auto flex flex-col items-center md:flex-row justify-around md:items-baseline gap-10 text-center md:text-left">
                
                {/* Registration & Address */}
                <div className="flex flex-col items-center md:items-start">
                    <SectionTitle title="Registracija" className="text-blue-600" />
                    <a href="tel:+37034752545" className="flex items-center text-gray-700 hover:text-blue-500">
                        <FaPhone className="mr-2 text-blue-500" />
                        +370 347 52545
                    </a>

                    <SectionTitle title="Adresas" className="text-blue-600 mt-4" />
                    <a 
                        href="https://www.google.com/maps?q=J.+Basanavičiaus+g.+44,+Kėdainiai+57287"
                        target="_blank"
                        className="flex items-center text-gray-700 hover:text-blue-500"
                    >
                        <FaMapMarkerAlt className="mr-2 text-red-500" />
                        J. Basanavičiaus g. 44, Kėdainiai
                    </a>
                </div>

                {/* Working Hours */}
                <div className="text-center md:text-left">
                    <SectionTitle title="Darbo laikas" className="text-gray-800" />
                    <WorkingHours />
                </div>

                {/* Services */}
                <div className="text-center md:text-left">
                    <SectionTitle title="Paslaugos" className="text-gray-800" />
                    <div className="flex flex-col items-center md:items-start gap-1">
                        <OdontologyServices />
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-10 text-gray-600 text-sm">
                <p>© 2025 Juvera. Visos teisės saugomos.</p>
            </div>
        </footer>
    );
};

export default Footer;
