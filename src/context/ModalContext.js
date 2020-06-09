import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';


//create the context
export const ModalContext = createContext();

const ModalProvider = (props) => {

    //state of the provider
    const [ idrecipe, saveIdRecipe ] = useState(null);

    return ( 
        <ModalContext.Provider
            value={{
                saveIdRecipe
            }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;