import "./App.css";
import Document from "./Document";
import { useEffect, useState } from "react";

function App() {

  const [post, setPost] = useState("");

  useEffect(() => {
    fetch('https://jaspervdj.be/lorem-markdownum/markdown.txt')
    .then((res) => res.text())
    .then((data) => {
      data = data.slice(0, 5000);
      console.log(data);
      setPost(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
  },[]);



  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          <Document content={post} />
        </div>
      </div>
    </div>
  );
}

export default App;
