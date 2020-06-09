import React, { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

const Recipe = ({recipe}) => {

    //extract the values of the content
    const { saveIdRecipe } = useContext(ModalContext);

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{recipe.strDrink}</h2>

                <img className="card-img-top" src={recipe.strDrinkThumb} alt={`Image of ${recipe.strDrink}`} />

                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            saveIdRecipe(recipe.idDrink)}
                        }
                    >
                        View Recipe
                    </button>
                </div> 
            </div>
        </div>
     );
}
 
export default Recipe;