import ServiceList from "../../components/ServicesList";
import { Service } from "../../types";

const services: Service[] = [
    { id: 1, name: 'Dantu gydymas', description: 'Dantu gydymas - tai procesas, kurio metu gydytojas atlieka dantu gydymo proceduras, siekdamas atkurti dantu funkcionaluma ir estetika.', image: 'https://images.pexels.com/photos/5622016/pexels-photo-5622016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    { id: 2, name: 'Dantu balinimas', description: 'Dantu balinimas - tai procedura, kuria siekiama atkurti dantu spalva, pasalinti dantu apnašas ir dantu pigmentacija.', image: 'https://images.pexels.com/photos/6627562/pexels-photo-6627562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    { id: 3, name: 'Dantu implantavimas', description: 'Dantu implantavimas - tai procedura, kuria siekiama atkurti dantu funkcionaluma, estetika ir dantu eilutes simetrija.', image: 'https://images.pexels.com/photos/6502306/pexels-photo-6502306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    { id: 4, name: 'Burnos higiena', description: 'Burnos higiena - tai procedura, kuria siekiama islaikyti burnos sveikata, prevencija nuo dantu ligu ir burnos ligu.', image: 'https://images.pexels.com/photos/5622016/pexels-photo-5622016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    { id: 5, name: 'Dantu istraukimas', description: 'Dantu istraukimas - tai procedura, kuria siekiama isimti dantu, kurie yra neisgydomi arba sukelia skausma.', image: 'https://images.pexels.com/photos/6627566/pexels-photo-6627566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    { id: 6, name: 'Dantu protezavimas', description: 'Dantu protezavimas - tai procedura, kuria siekiama atkurti dantu funkcionaluma, estetika ir dantu eilutes simetrija.', image: 'https://images.pexels.com/photos/6502633/pexels-photo-6502633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    { id: 7, name: 'Dantu chirurgija', description: 'Dantu chirurgija - tai procedura, kuria siekiama atkurti dantu funkcionaluma, estetika ir dantu eilutes simetrija.', image: 'https://images.pexels.com/photos/4269355/pexels-photo-4269355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
];

const ServicesPage = (): JSX.Element => {
    return (
        <div className="container mx-auto">
            <ServiceList services={services} />
        </div>
    );
};

export default ServicesPage;