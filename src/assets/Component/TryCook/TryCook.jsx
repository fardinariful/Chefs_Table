import PropTypes from 'prop-types';

const TryCook = ({ wantcook,handleclick2 }) => {
    const { recipe_name, preparing_time, calories } = wantcook;
     
    return (
        <>
        <tr className="text-gray-700 bg-gray-100">
            <td className="py-3 px-6 border-b ">{recipe_name}</td>
            <td className="py-3 px-6 border-b ">{calories}</td>
            <td className="py-3 px-6 border-b">{preparing_time}</td>
            <td className="py-3 px-6 border-b w-32"> {/* Fixed width for button column */}
                <button onClick={()=>handleclick2(wantcook)} className="bg-blue-500 text-white w-full max-w-[100px] px-4  rounded hover:bg-blue-700">
                Preparing
                </button>
            </td>
        </tr>
        
        </>
    );
};


TryCook.propTypes={
    
    handleclick2:PropTypes.func,
    wantcook:PropTypes.array
    
}
export default TryCook;
