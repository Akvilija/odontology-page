import DoctorsList from "../../components/DoctorsList";
import { Doctor } from "../../types";

const doctors: Doctor[] = [
    { id: 1, name: 'Jurate Kutkeviciene', specialty: 'Gydytoja odontologe', license: 'OPL', image: 'https://scontent.fvno8-1.fna.fbcdn.net/v/t39.30808-6/442435273_2500599950132518_1192490418759042530_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=_oPh_Lt2sGkQ7kNvgFGmkhe&_nc_zt=23&_nc_ht=scontent.fvno8-1.fna&_nc_gid=Ajipd8HNSKrO8aGYT_BNC-B&oh=00_AYAwh2cU8WLK_WQUqwRFXk8qYUOZtgX6g5ULpHJS3kLzkA&oe=67A56D95'},
    { id: 2, name: 'Agne Blinstrubiene', specialty: 'Gydytoja odontologe', license: 'OPL', image: 'https://armedikaklinika.lt/wp-content/uploads/2023/10/Agne_blinstrubiene.jpg'},
    { id: 3, name: 'Jolanta Ramoniene', specialty: 'Gydytoja odontologe', license: 'OPL', image: 'https://www.info.lt/images/nuotraukos/2397073_1.jpg?20250120135549'},
    { id: 4, name: 'Lina Dziugiene', specialty: 'Gydytoja odontologe - Burnos chirurge', license: 'OPL', image: 'https://scontent.fvno8-1.fna.fbcdn.net/v/t39.30808-6/456225104_2501189066740273_1588612123007816924_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=8NpOJEQHWnwQ7kNvgEZydi1&_nc_zt=23&_nc_ht=scontent.fvno8-1.fna&_nc_gid=AxeD_j0MXiDOzFIX7WslFNC&oh=00_AYBpnos0K_PUO0XuEyiDOnJfVLEpY7o0H-UXtUelXwLcMg&oe=67A56019'},
    { id: 5, name: 'Algirdas Daugintis', specialty: 'Gydytojas odontologas', license: 'OPL', image: 'https://scontent.fvno8-1.fna.fbcdn.net/v/t39.30808-6/448723366_2737400486436992_2514559755797335610_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2HjatRrVkPgQ7kNvgH_g2zl&_nc_zt=23&_nc_ht=scontent.fvno8-1.fna&_nc_gid=AfktfcsmvFhQT9T-zQ_3ncy&oh=00_AYAKSS80UN_9ddLW2xZxEDzdm6ZSVz6cEMwAy4EZ1QOxig&oe=67A57967'},
    { id: 6, name: 'Gilmute Ciukeviciene', specialty: 'Burnos higieniste', license: 'OPL', image: 'https://www.info.lt/images/nuotraukos/2397073_3.jpg?20250120135549'},
    { id: 7, name: 'Akvilija Skorupskaite', specialty: 'Burnos higieniste', license: 'OPL', image: 'https://scontent.fvno8-1.fna.fbcdn.net/v/t1.6435-9/33580954_1998876780183402_962424689823580160_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pl-VXGUl7PwQ7kNvgGrAXl5&_nc_zt=23&_nc_ht=scontent.fvno8-1.fna&_nc_gid=Ar004yvlJU6fMRB9Vodntca&oh=00_AYDRfkoQrU94VMH19IT631W5PRQK7mENLRuX9uH7MMygFw&oe=67C70C05'}
];

const DoctorsPage = (): JSX.Element => {
    return (
        <div className="container mx-auto">
            <DoctorsList doctors={doctors} />
        </div>
    );
};

export default DoctorsPage;