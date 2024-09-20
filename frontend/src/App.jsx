import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

let clicked =0;
let posts = [];
function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Title until now: ${title}`);
    console.log(`Content until now: ${content}`);
  }

  const getPosts = async () => {
    try {
      posts = (await axios.get("http://localhost:5000/posts")).data;
    }
    catch (err) {
      console.error(err);
    }
  }

  const handleClick = () => {
    clicked = 1;
    getPosts();
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Title: <input type="text" name="title" onChange={(event) => {
          setTitle(event.target.value)
        }} /> </label>
        <label>Content: <input type="text" name="content" onChange={(event) => {
          setContent(event.target.value)
        }}
        /> </label>
        <input type='submit' value="Submit" />
      </form>
      <div>
        <button type='button' onClick={handleClick}> Get Posts!</button>
      </div>
        <div>

        </div>
    </>
  )
}

export default App
