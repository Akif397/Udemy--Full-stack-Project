import React from 'react';

function MovieForm(props) {
    return (
        <React.Fragment>
            {props.movie && props.movie.title ? <h1> Edit</h1> : null}
        </React.Fragment>
    )
}

export default MovieForm;