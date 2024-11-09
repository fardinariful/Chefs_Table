import PropTypes from 'prop-types';
const Holding = ({recipeses}) => {
    return (
        <div className="w-1/3">
            <h3>Want to cook:{recipeses.length}</h3>
        </div>
    );
};

Holding.propTypes={
    recipeses:PropTypes.object.isRequired,
}

export default Holding;