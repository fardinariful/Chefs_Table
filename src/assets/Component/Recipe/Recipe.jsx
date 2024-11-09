import PropTypes from 'prop-types';
import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
const Recipe = ({recipe}) => {
    const {recipe_name,recipe_image,short_description,ingredients,preparing_time,calories}=recipe;
    return (
        <div>
            <div className="card bg-base-100 w-80 h-[110vh] shadow-xl">
      <figure className="px-10 pt-10">
    <img
      src={recipe_image}
      alt="Shoes"
      className="rounded-xl w-64 h-44" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{recipe_name}</h2>
    <p className="text-[#878787]">{short_description}</p>
    <hr />
    <h3 className='text-[#282828]'>Ingrediant:{ingredients.length}</h3>
    {
        ingredients.map((ingred,idx)=><span key={idx}> <li className='text-[#878787]'>{ingred}</li> </span>)
    }
    <hr />
    <div className='flex flex-row justify-between'>
        <div className='flex flex-row w-1/2 text-center justify-center items-center gap-3'>
        <h3 className='text-xl'><CiClock2></CiClock2></h3>
        <h3>{preparing_time}</h3>
        </div>
        <div className='flex flex-row w-1/2 text-center justify-center items-center gap-3'>
        <h3><FaFire></FaFire></h3>
        <h3>{calories}</h3>
        </div>
       
    </div>
    <div className="mt-5">
    <button className="btn btn-success w-full ">Want to cook</button>
    </div>
  </div>
</div>
        </div>
    );
};
Recipe.propTypes={
    recipe:PropTypes.object.isRequired
    
}
export default Recipe;