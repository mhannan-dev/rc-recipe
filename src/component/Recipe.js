import React from 'react';

const Recipe = ({title, calories, image,ingredients}) => {
    return(
        <div>
            {ingredients.map(ingredient =>(
                <div className="card">
                    <img className="card_img" alt={title} src={image}/>
                        <h4>{title}</h4>
                            <ul>
                                {ingredients.map(ingredient =>(
                                    <li>{ingredient.text}</li>
                                ))}
                            </ul>
                    <h5>Cal. {calories}</h5>
                </div>
            ))}
        </div>

    )
}
export default Recipe;
