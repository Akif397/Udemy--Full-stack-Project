import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';



function MovieDetails(props) {

    let movie = props.movies;

    const [highlighted, setHighlighted] = useState(-1);
    const highlightRate = high => evt => {
        setHighlighted(high);
    }
    const rateClicked = rate => evt => {
        fetch(`http://127.0.0.1:8000/api/movies/${movie.id}/rate_movie/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;odata=verbose',
                'Authorization': 'Token 587f51b1fd5fac03914b5d9794d857a1ccc1ff1d'
            },
            body: JSON.stringify({ stars: rate + 1 })
        })
            .then(() => getDetails())
            .catch(error => console.log(error))
    }

    const getDetails = () => {
        fetch(`http://127.0.0.1:8000/api/movies/${movie.id}/`, {
            method: 'Get',
            headers: {
                'Content-Type': 'application/json;odata=verbose',
                'Authorization': 'Token 587f51b1fd5fac03914b5d9794d857a1ccc1ff1d'
            }
        })
            .then(resp => resp.json())
            .then(resp => props.updateMovie(resp))
            .catch(error => console.log(error))
    }

    return (
        <React.Fragment>
            {movie ? (
                <div>
                    <h1>{movie && movie.title}</h1>
                    <p>{movie && movie.desc}</p>
                    <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 0 ? "orange" : ""} />
                    <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 1 ? "orange" : ""} />
                    <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 2 ? "orange" : ""} />
                    <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 3 ? "orange" : ""} />
                    <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 4 ? "orange" : ""} />
                    ({movie.no_of_ratings})

                    <div className="rate-container">
                        <h3>Rate It</h3>
                        {
                            [...Array(5)].map((element, index) => {
                                return <FontAwesomeIcon key={index} icon={faStar} className={highlighted > index - 1 ? "purple" : ""}
                                    onMouseEnter={highlightRate(index)}
                                    onMouseLeave={highlightRate(-1)} onClick={rateClicked(index)} />
                            })
                        }
                    </div>
                </div>
            ) : null}
        </React.Fragment>
    )
}

export default MovieDetails;