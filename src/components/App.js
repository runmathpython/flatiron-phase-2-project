import React, { useEffect, useState} from "react";
import Header from "./Header";
import AddMovieForm from "./AddMovieForm";
import NewCommentForm from "./NewCommentForm";

function App(){
    const [showAddMovieForm, setShowAddMovieForm] = useState(false)
    const [showNewCommentForm, setShowNewCommentForm] = useState(false)
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/movies")
            .then(response => response.json())
            .then(setMovies)
    }, [])

    function handleClick(whatButton){
        if(whatButton === "movie"){
            setShowAddMovieForm(showAddMovieForm => !showAddMovieForm)
        }else if(whatButton === "comment"){
            setShowNewCommentForm(showNewCommentForm => !showNewCommentForm)
        }
    }

    return(
        <div>
            <Header />
            {showAddMovieForm ? <AddMovieForm /> : null}
            <div className="buttonContainer">
                <button onClick={handleClick("movie")}>Add a new movie</button>
            </div>
            {showNewCommentForm ? <NewCommentForm /> : null}
            <div className="buttonContainer">
                <button onClick={handleClick("comment")}>Put a new comment</button>
            </div>
        </div>
    )
}

export default App