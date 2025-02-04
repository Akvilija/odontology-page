import { NavLink } from 'react-router-dom';
import doctors from '../../assets/images/gydytojai.png';
import clinicPhoto from '../../assets/images/juvera.jpg';
import servicesPhoto from '../../assets/images/paslaugoss.png';
import { useState } from 'react';

type HeaderNavigationProps = {
    onSectionChange: (image: string) => void;
}

const HeaderNavigation = ({ onSectionChange }: HeaderNavigationProps): JSX.Element => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prevState => !prevState);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav>
            <button onClick={toggleMenu} className="xl:hidden p-2 text-xl cursor-pointer">
                ☰
            </button>
            <ul className={`flex flex-col xl:flex-row xl:space-x-10 absolute xl:static top-20 left-0 w-full xl:w-auto bg-white xl:bg-transparent shadow-xl xl:shadow-none ${isMenuOpen ? 'block' : 'hidden'} xl:flex`}>
                <li className='hover:bg-[var(--hover-color)] p-2'>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-[var(--active-color)]' : 'text-black' }
                        onClick={() =>{onSectionChange(clinicPhoto); closeMenu();}}>
                        Apie Mus
                    </NavLink>
                </li>
                <li className='hover:bg-[var(--hover-color)] p-2'>
                    <NavLink to='/doctors' className={({ isActive }) => isActive ? 'text-[var(--active-color)]' : 'text-black'}
                        onClick={() => {onSectionChange(doctors); closeMenu();}}>
                        Gydytojai
                    </NavLink>
                </li>
                <li className='hover:bg-[var(--hover-color)] p-2'>
                    <NavLink to='/services' className={({ isActive }) => isActive ? 'text-[var(--active-color)]' : 'text-black'}
                        onClick={() => {onSectionChange(servicesPhoto); closeMenu();}}>
                        Paslaugos
                    </NavLink>
                </li>
                <li className='hover:bg-[var(--hover-color)] p-2'>
                    <NavLink to='/prices' className="text-black" onClick={closeMenu}>
                        Kainos
                    </NavLink>
                </li>
                <li className='hover:bg-[var(--hover-color)] p-2'>
                    <NavLink to='/contact' className="text-black" onClick={closeMenu}>
                        Kontaktai
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default HeaderNavigation;