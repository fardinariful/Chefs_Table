import CurrentCook from "../CurrentCook/CurrentCook";
import PropTypes from 'prop-types';
const CurrentCooks = ({ currentcook }) => {
    return (
        <div>
            <h3 className="text-center">Currently Cooking: {currentcook.length}</h3>
            <table className="w-full text-center border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr>
                        <th className="py-3 px-6 font-semibold border-b">Recipe Name</th>
                        <th className="py-3 px-6 font-semibold border-b">Calories</th>
                        <th className="py-3 px-6 font-semibold border-b">Preparing Time</th>
                    </tr>
                </thead>
                <tbody>
                    {currentcook.map((currentlyCook) => (
                        <CurrentCook key={currentlyCook.id} currentlyCook={currentlyCook} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
CurrentCooks.propTypes = {
    currentcook: PropTypes.array.isRequired
};

export default CurrentCooks;
