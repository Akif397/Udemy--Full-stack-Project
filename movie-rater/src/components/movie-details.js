import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';



function MovieDetails(props) {

    const movie = props.movies;

    const [ highlighted, setHighlighted ] = useState(-1);
    const highlightRate = high => evt => {
        setHighlighted(high);
    }

    return (
        <React.Fragment>
            {movie ? (
                <div>
                    <h1>{movie && movie.title}</h1>
                    <p>{movie && movie.desc}</p>
                    <FontAwesomeIcon icon={ faStar } className={ movie.avg_rating > 0 ? "orange" : ""}/>
                    <FontAwesomeIcon icon={ faStar } className={ movie.avg_rating > 1 ? "orange" : ""}/>
                    <FontAwesomeIcon icon={ faStar } className={ movie.avg_rating > 2 ? "orange" : ""}/>
                    <FontAwesomeIcon icon={ faStar } className={ movie.avg_rating > 3 ? "orange" : ""}/>
                    <FontAwesomeIcon icon={ faStar } className={ movie.avg_rating > 4 ? "orange" : ""}/>
                    ({ movie.no_of_ratings })

                    <div className="rate-container">
                        <h3>Rate It</h3>
                        {
                            [...Array(5)].map( (element, index) => {
                                return <FontAwesomeIcon key={ index } icon={ faStar } className={ highlighted > index - 1 ? "purple" : ""} onMouseEnter={ highlightRate(index) } onMouseLeave={ highlightRate(-1) }/>
                            })
                        }
                    </div>
                </div>
            ) : null}
        </React.Fragment>
    )
}

export default MovieDetails;