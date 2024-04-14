import Header from "../components/Header";
import {useState, useEffect} from 'react';
import axios from 'axios';
import "./Library.css"

function Library () {

    const [booksArray, setBooksArray] = useState();

    useEffect(() => {
        axios.get('./books')
        .then(res => {
            setBooksArray(res.data);
        })
        .catch(err => console.log(err))
      }, []);

      while(booksArray === undefined){
        return (
            <div>
                Loading...
            </div>
        )
        }

    console.log(booksArray)

    return (
        <div>
            <Header></Header>

            <h1>Library</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Read</th>
                        <th>Genre</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {booksArray.map((rowContent, index) => (
                        <tr key={index}>
                        <td>{rowContent.title}</td>
                        <td>{rowContent.author}</td>
                        <td>{rowContent.consumed}</td>
                        <td>{rowContent.genre}</td>
                        <td>{rowContent.notes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Library;