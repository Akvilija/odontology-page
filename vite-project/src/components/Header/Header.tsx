import toothIcon from '../../assets/icons/tooth.svg';
import clinicPhoto from '../../assets/images/juvera.jpg';
import HeaderNavigation from '../HeaderNavigation';

const Header = (): JSX.Element => {
    return (
        <header className="relative bg-[var(--background-color)] text-2xl w-full text-center h-[600px]">
            <div className='absolute top-0 left-0 w-full bg-white/60 backdrop-blur-md z-10 flex justify-between items-center p-4'>
                <div className='flex items-center ml-4 '>
                    <img src={toothIcon} alt="Tooth Logo" className="w-12 h-12" />
                    <h1 className='ml-1.5 text-sky-700 font-semibold'>
                        Juvera
                        <span className='h-10 ml-3 mr-3 border border-solid border-sky-700'></span>
                        Dantų gydymas Kėdainiuose
                    </h1>
                </div>
                <HeaderNavigation />
            </div>
            <div className="relative w-full h-full">
                <img 
                    src={clinicPhoto} 
                    alt="clinic" 
                    className="w-full h-full object-cover"
                />
            </div>
        </header>
    );
}

export default Header;
