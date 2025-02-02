import { NavLink } from 'react-router'
import doctors from '../../assets/images/gydytojai.png';
import clinicPhoto from '../../assets/images/juvera.jpg';

type HeaderNavigationProps = {
    onSectionChange: (image: string) => void;
}

const HeaderNavigation = ({ onSectionChange }: HeaderNavigationProps): JSX.Element => {
    return (
        <nav className="flex items-center justify-center mr-7">
            <ul className="flex space-x-10">
                <li>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-[var(--active-color)]' : 'text-black'}
                        onClick={() => onSectionChange(clinicPhoto)}>
                        Apie Mus
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/doctors' className={({ isActive }) => isActive ? 'text-[var(--active-color)]' : 'text-black'}
                        onClick={() => onSectionChange(doctors)}>
                        Gydytojai
                    </NavLink>
                </li>
                <li>Paslaugos</li>
                <li>Kainos</li>
                <li>Kontaktai</li>
            </ul>
        </nav>
    );
}

export default HeaderNavigation;