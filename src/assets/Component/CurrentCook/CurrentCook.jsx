const CurrentCook = ({ currentlyCook }) => {
    const { recipe_name, preparing_time, calories } = currentlyCook;
    return (
        <tr>
            <td className="py-3 px-6 border-b">{recipe_name}</td>
            <td className="py-3 px-6 border-b">{calories}</td>
            <td className="py-3 px-6 border-b">{preparing_time}</td>
        </tr>
    );
};

export default CurrentCook;
