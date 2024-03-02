import Header from "../components/Header";
import { useState } from 'react';
import axios from 'axios';

function Post () {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [consumed, setConsumed] = useState(false);
    const [genre, setGenre] = useState("");
    const [notes, setNotes] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();

        axios.post("/new-book", {
            title: title,
            author: author,
            consumed: consumed,
            genre: genre,
            notes: notes
        })
    }
    
    return (
        <div>
            <Header></Header>
            <h1>Hey! This isnt the blog!</h1>

            <form onSubmit={handleSubmit}>
                <label>idk what labels do</label>
                    <input type="text"
                    value={title}
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    <input type="text"
                    value={author}
                    placeholder="Author"
                    onChange={(e) => setAuthor(e.target.value)}
                    />
                    <input type="checkbox"
                    value={true}
                    onChange={(e) => setConsumed(e.target.value)}
                    />
                    <input type="text"
                    value={genre}
                    placeholder="Genre"
                    onChange={(e) => setGenre(e.target.value)}
                    />
                    <input type="text"
                    value={notes}
                    placeholder="Notes"
                    onChange={(e) => setNotes(e.target.value)}
                    />
                <input type="submit"/>
            </form>
        </div>
    );
}

export default Post;