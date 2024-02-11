import Header from "../components/Header";
import { useState } from 'react';

function Post () {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();

        let newObj = {
            title: title,
            content: content
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
                    value={content}
                    placeholder="Content"
                    onChange={(e) => setContent(e.target.value)}
                    />
                <input type="submit"/>
            </form>
        </div>
    );
}

export default Post;