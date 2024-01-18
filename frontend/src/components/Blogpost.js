

function Blogpost(props) {
        return (
            <div>
                <h1>THIS IS A POST</h1>
                <h2>{props.title}</h2>
                <p>{props.body}</p>
                <time datetime={props.date}></time>
            </div>
        );
}

export default Blogpost;