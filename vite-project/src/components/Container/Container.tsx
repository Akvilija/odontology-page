type ContainerProps = {
    children: React.ReactNode; 
};

const Container = ({ children }: ContainerProps): JSX.Element => {
    return (
        <div
            className='mt-10 mb-10 px-4 sm:px-6 lg:px-8 max-w-screen-xxl '
        >
            {children}
        </div>
    );
};

export default Container;
