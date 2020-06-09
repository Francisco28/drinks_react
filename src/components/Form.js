import React, { useContext } from 'react';
import { CategoriesContext } from '../context/CategoriesContext';

const Form = () => {

    const { categories } = useContext(CategoriesContext)

    console.log(categories);   

    return ( 
        <form 
            className="col-12"
        >
            <fieldset className="text-center">
                <legend>Search drinks for category or ingredient</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder="Search for ingredient"
                    />
                </div>
                
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="category"
                    >
                        <option value="">--Select Category--</option>
                        {categories.map(category => (
                            <option 
                                key={category.strCategory}
                                value={category.strCategory}
                            >
                                {category.strCategory}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Search Drinks"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Form;
