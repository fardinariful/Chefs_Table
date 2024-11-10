import PropTypes from 'prop-types';
import TryCook from '../TryCook/TryCook';
import { useState } from 'react';
import CurrentCooks from '../CurrentCooks/CurrentCooks';

const Holding = ({ recipeses}) => {
   const [currentcook,setcurrentcook]=useState([]);

   const handleclick2=currentres=>{
    //console.log(currentres);
    const newcurrentres=[...currentcook,currentres];
    setcurrentcook(newcurrentres);
   }
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
                        <TryCook key={wantcook.id} wantcook={wantcook}  handleclick2={handleclick2}/>
                    ))}
                </tbody>
            </table>
            <CurrentCooks currentcook={currentcook}></CurrentCooks>
        </div>
    );
};

Holding.propTypes = {
    recipeses: PropTypes.array.isRequired
};

export default Holding;

