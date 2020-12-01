const TOKEN = "587f51b1fd5fac03914b5d9794d857a1ccc1ff1d";

export default class API{
    static updateMovie(movie_id, body){
        return fetch(`http://127.0.0.1:8000/api/movies/${movie_id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; odata=verbose',
                'Authorization': `Token ${TOKEN}`
            },
            body: JSON.stringify( body )
        })
            .then(resp => resp.json())
    }
}