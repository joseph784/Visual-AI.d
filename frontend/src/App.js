import { useState } from "react";
import axios from "axios";

function App() {
  const [picture, setPicture] = useState("");
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/");
      console.log(response.data);
      setPicture(response.data);
      setCaption("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-purple-500 justify-center">Piclingo</h1>
      {loading ? <p>Loading...</p> : <img alt="OpenAI!" src={picture} />}
      <input
        onChange={(event) => {
          setCaption(event.target.value);
          console.log(caption);
        }}
      />
      <button onClick={handleClick}>Generate</button>
    </div>
  );
}

export default App;
