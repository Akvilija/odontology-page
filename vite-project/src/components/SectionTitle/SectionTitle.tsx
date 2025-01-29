type SectionTitleProps = {
    title: string;
    className?: string;
  };
  
  const SectionTitle = ({ title, className = "" }: SectionTitleProps): JSX.Element => {
    return <h2 className={`text-lg text-center font-bold uppercase text-gray-900 bg-gray-200 px-3 py-1 rounded-md tracking-wide ${className}`}>{title}</h2>;
  };
  
  export default SectionTitle;  