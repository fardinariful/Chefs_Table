const CurrentCooks = () => {
    return (
        <div>
            <h3 className='text-center'>Currently Cooking:</h3>
            <table className="max-w-24 text-center border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr className="">
                        <th className="py-3 px-6 font-semibold border-b">Recipe Name</th>
                        <th className="py-3 px-6 font-semibold border-b">Calories</th>
                        <th className="py-3 px-6 font-semibold border-b">Preparing Time</th>
                    </tr>
                </thead>
               
            </table>
        </div>
    );
};

export default CurrentCooks;