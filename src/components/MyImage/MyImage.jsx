
const MyImage = ({ src, alt }) => {
    return (
      <img src={src} alt={alt} onError={(e) => {
        e.target.src = '/src/assets/images/participante.png';
      }} />
    );
  };
  
  export default MyImage;