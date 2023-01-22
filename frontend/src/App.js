import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [picture, setPicture] = useState("");

  useEffect(() => {
    console.log(picture);
  }, [picture]);

  return (
    <div>
      <h1 class="text-purple-500 justify-center">Piclingo</h1>
      <img alt="OpenAI!" src={picture} />
      <input />
      <button
        onClick={() => {
          axios.get("http://127.0.0.1:5000/test").then(
            (response) => {
              console.log(response.data);
              setPicture(response.data);
            },
            (error) => {
              console.log(error);
            }
          );
        }}
      >
        Generate
      </button>
      <button
        onClick={() => {
          console.log(picture);
        }}
      >
        Test
      </button>
    </div>
  );
}

export default App;
