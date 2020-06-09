import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));


const Recipe = ({recipe}) => {

    //configuration of the modal of Material UI 
    const [ modalStyle ] = useState(getModalStyle);
    const [ open, setOpen ] = useState(false);

    const classes = useStyles();

    //se abre la modal
    const handleOpen = () => {
        setOpen(true);
    }

    //se cierra la modal
    const handleClose = () => {
        setOpen(false);
    }

    //extract the values of the content
    const { inforecipe, saveIdRecipe, saveRecipe } = useContext(ModalContext);

    //show and formate the ingredients
    const showIngredients = inforecipe => {
        let ingredients = [];
        for(let i = 1; i < 16; i++) {
            if(inforecipe[`strIngredient${i}`]) {
                ingredients.push(
                <li>{ inforecipe[`strIngredient${i}`] } {inforecipe[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredients;
    }

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
                            saveIdRecipe(recipe.idDrink);
                            saveRecipe({});
                            handleOpen();
                        }}
                    >
                        View Recipe
                    </button>

                    <Modal
                        open={open}
                        onClose={ () => {
                            saveIdRecipe(null);
                            handleClose();
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{inforecipe.strDrink}</h2>
                            <h3 className="mt-4">Instructions</h3>
                            <p>
                                {inforecipe.strInstructions}
                            </p>

                            <img className="img-fluid my-4" src={inforecipe.strDrinkThumb} alt="" />

                            <h3>Ingredients and amounts</h3>
                            <ul>
                                { showIngredients(inforecipe) }
                            </ul>
                        </div>
                    </Modal>
                </div> 
            </div>
        </div>
     );
}
 
export default Recipe;