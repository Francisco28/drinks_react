import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';


//create the context
export const ModalContext = createContext();

const ModalProvider = (props) => {

    //state of the provider
    const [ idrecipe, saveIdRecipe ] = useState(null);
    
    //state to recipe
    const [ inforecipe, saveRecipe ] = useState({});


    //una vez que tenemos una receta, llamar la api
    useEffect( () => {
        const getRecipe = async () => {
            if(!idrecipe) return;

            const url_recipe = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`;

            const result = await axios.get(url_recipe);
            
            saveRecipe(result.data.drinks[0]);
        }

        getRecipe();

    }, [idrecipe])

    return ( 
        <ModalContext.Provider
            value={{
                inforecipe,
                saveIdRecipe,
                saveRecipe
            }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;