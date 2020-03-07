import React from 'react';

const Recipe = ({title, calories, image,ingredients}) => {
    return(
        <section id="team" className="pb-3">
            <div className="container">
                <div className="row">
                        {ingredients.map(ingredient =>(
                            <>
                                <div className="col-xs-12 col-sm-6 col-md-4">
                                    <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                                        <div className="mainflip">
                                            <div className="frontside">
                                                <div className="card" style={{width: "20rem"}}>
                                                    <img className="card-img-top" alt={title} src={image} alt={title}/>
                                                    <div className="card-body">
                                                        <h4 className="card-title">{title}</h4>
                                                        <h5 className="card-title">Calories. {calories}</h5>
                                                    </div>
                                                    <ul>
                                                        {ingredients.map(ingredient =>(
                                                            <li>{ingredient.text}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                </div>
        </div>
        </section>

    )
}
export default Recipe;
