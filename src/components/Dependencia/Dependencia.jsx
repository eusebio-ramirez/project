import reactIcon from '../../assets/images/react-icon.png';
import './dependencia.css';

const Dependencia = ({ title }) => {
    return (
        <>
            <div className='componentContainer'>
                <img className='landingIcon' src={reactIcon} />
                <h1 className='landingTitle'>{title}</h1>
            </div>
        </>
    );
}

export default Dependencia;