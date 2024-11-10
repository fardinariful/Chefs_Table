const CurrentCooks = ({currentcook}) => {

    const { recipe_name, preparing_time, calories } = currentcook;
    return (
        <div>
            <h3 className='text-center'>Currently Cooking:{currentcook.length}</h3>
            <table className="max-w-24 text-center border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr className="">
                        <th className="py-3 px-6 font-semibold border-b">{recipe_name}</th>
                        <th className="py-3 px-6 font-semibold border-b">{calories}</th>
                        <th className="py-3 px-6 font-semibold border-b">{preparing_time}</th>
                    </tr>
                </thead>
               
            </table>
        </div>
    );
};

export default CurrentCooks;