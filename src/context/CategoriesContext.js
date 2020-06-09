import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//Create the context
export const CategoriesContext = createContext();

//Provider is where is the functions and state
const CategoriesProvider = (props) => {

    //create the state of Context
    const [ categories, saveCategories ] = useState([]);

    //exect the called to the API
    useEffect(() => {

        const getCategories = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;

            const categories = await axios.get(url);

            saveCategories(categories.data.drinks);
        }
        getCategories();
    }, [  ]);


    return (
        <CategoriesContext.Provider
            //aqui pasamos el state para que se pueda utiizar en los demas componentes
            value={{
                categories
            }}
        >
            {props.children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider;