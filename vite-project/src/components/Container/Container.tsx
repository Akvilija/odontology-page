type ContainerProps = {
    children: React.ReactNode; 
};

const Container = ({ children }: ContainerProps): JSX.Element => {
    return (
        <div
            className='mt-10 mb-10 max-w-screen-xl h-full mx-auto'
        >
            {children}
        </div>
    );
};

export default Container;
