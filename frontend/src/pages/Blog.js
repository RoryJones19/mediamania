import Header from "../components/Header";
import Blogpost from "../components/Blogpost";

function Blog () {
    const intro = {
        const: "text",
        title: "Intro",
        body: "First post technically, trying to cobble things together",
        date: new Date()
    }
    return (
        <div>
            <Header></Header>
            <h1>Blog</h1>
            <p>Blog entries will go here!</p>

            <Blogpost
                type="text"
                title="intro"
                body="this is a test"
                ></Blogpost>
        </div>
    );
}

export default Blog