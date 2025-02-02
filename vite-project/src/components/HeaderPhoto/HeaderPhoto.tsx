type HeaderPhotoProps = {
    imageSrc: string;
    altText: string;
}

const HeaderPhoto = ({ imageSrc, altText }: HeaderPhotoProps) => {
    return (
        <div className="relative w-full h-full">
            <img 
                src={imageSrc} 
                alt={altText} 
                className="w-full h-full object-cover"
            />
        </div>
    )
}

export default HeaderPhoto;