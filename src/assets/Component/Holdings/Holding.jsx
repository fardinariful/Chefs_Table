import PropTypes from 'prop-types';
import TryCook from '../TryCook/TryCook';
import { useState } from 'react';

const Holding = ({ recipeses}) => {
   
    return (
        <div className="w-1/3 mr-12">
            <h3 className='text-center'>Want to cook: {recipeses.length}</h3>
            <table className="max-w-24 text-center border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr className="">
                        <th className="py-3 px-6 font-semibold border-b">Recipe Name</th>
                        <th className="py-3 px-6 font-semibold border-b">Calories</th>
                        <th className="py-3 px-6 font-semibold border-b">Preparing Time</th>
                    </tr>
                </thead>
                <tbody>
                    {recipeses.map((wantcook) => (
                        <TryCook key={wantcook.id} wantcook={wantcook} />
                    ))}
                </tbody>
            </table>
            
        </div>
    );
};

Holding.propTypes = {
    recipeses: PropTypes.array.isRequired
};

export default Holding;

