

const TryCook = ({ wantcook }) => {
    const { recipe_name, preparing_time, calories } = wantcook;
     
    return (
        <>
        <tr className="text-gray-700 bg-gray-100">
            <td className="py-3 px-6 border-b ">{recipe_name}</td>
            <td className="py-3 px-6 border-b ">{calories}</td>
            <td className="py-3 px-6 border-b">{preparing_time}</td>
            <td className="py-3 px-6 border-b w-32"> {/* Fixed width for button column */}
                <button className="bg-blue-500 text-white w-full max-w-[100px] px-4  rounded hover:bg-blue-700">
                Preparing
                </button>
            </td>
        </tr>
        
        </>
    );
};

export default TryCook;
