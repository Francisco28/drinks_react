import React, { createContext, useState } from 'react';


//Create the context
export const CategoriesContext = createContext();

//Provider is where is the functions and state
const CategoriesProvider = (props) => {

    //create the state of Context
    const [ hello, saveHello ] = useState('Hello');

    return (
        <CategoriesContext.Provider
            value={{
                hello
            }}
        >
            {props.children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider;