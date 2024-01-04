import Header from "../components/Header";
import { useState } from 'react';

function Post () {

    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();

        let newObj = {
            title: title,
            artist: artist
        }

        console.log(newObj)
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
                <label></label>
                    <input type="text"
                    value={artist}
                    placeholder="Artist"
                    onChange={(e) => setArtist(e.target.value)}
                    />
                <input type="submit"/>
            </form>
        </div>
    );
}

export default Post;