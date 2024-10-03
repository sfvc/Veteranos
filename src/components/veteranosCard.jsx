import PropTypes from 'prop-types';

const VeteranosCard = ({ veteranos }) => {
    return (
        <>
            {veteranos.map((veterano) => (
                <a key={veterano.id} href={`/veteranos/${veterano.id}`} className="card">
                    <div className="card_divcontainer">
                        <div className="card_divcontainer1">
                            <img src={veterano.img} alt={veterano.nombre} />
                        </div>
                        
                        <div className="card_divcontainer2">
                            <h2>{veterano.nombre}</h2>
                            <small>{veterano.grado}</small>
                            <small>Ver perfil</small>
                        </div>
                    </div>
                </a>
            ))}
        </>
    );
};

// Define prop types
VeteranosCard.propTypes = {
    veteranos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            nombre: PropTypes.string.isRequired,
            grado: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired, // Make sure to include the image prop type
        })
    ).isRequired,
};

export default VeteranosCard;
