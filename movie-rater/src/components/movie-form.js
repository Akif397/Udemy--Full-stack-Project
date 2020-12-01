import React, {useState} from 'react';
import API from '../api-service';

function MovieForm(props) {

    const [title, setTitle] = useState(props.movie.title);
    const [desc, setDesc] = useState(props.movie.desc);

    const updateclicked = () => {
        API.updateMovie(props.movie.id, { title, desc })
        .then( resp => console.log(resp) )
    }

    return (
        <React.Fragment>
            {props.movie && props.movie.title ?
                <div>
                    <label htmlFor="title">Title</label><br/>
                    <input id="title" type="text" placeholder="title" value={ title }
                    onChange={ evt => setTitle(evt.target.value)}></input><br/>
                    <label htmlFor="desc">Description</label><br/>
                    <input id="desc" type="text" placeholder="description" value={ desc }
                    onChange={ evt => setDesc(evt.target.value)}></input><br/>
                    <button onClick={ updateclicked }>Update</button>
                </div>
                : null}
        </React.Fragment>
    )
}

export default MovieForm;