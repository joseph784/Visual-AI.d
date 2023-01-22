import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [picture, setPicture] = useState("");
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {



      console.log(caption)
      const response = await axios.get(`http://localhost:5000/?prompt=${caption}`);
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
    
    <div className="text-center bg-color relative bottom-0">
      
       <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#news">Visual.ai.d</a>
        <a href="#contact">About</a>
        <a href="https://github.com/joseph784/nwhack23">GitHub</a>
      </div> 

      <img src="logo.png" alt="Visual.ai.d"></img>
      <div className="flex justify-center items-center">
        <input className="w-1/4 mx-auto my-4"
          onChange={(event) => {
          setCaption(event.target.value);
         }}
        />
        <div>
        <button  className="bg-purple-500 text-white p-2 rounded-lg" onClick={() => {handleClick(); 
          var myPopup = document.getElementById("myPopup"); myPopup.classList.toggle("show");}}>Generate</button>
          
        </div>  
          
        {loading ? <p className="text-center text-gray-500 bg-color">Loading...</p> : null}
      </div>

      <div id="myPopup" className="popup">
          <img src={picture} alt="Generated Image" />
          <span onClick={() => {var myPopup = document.getElementById("myPopup"); myPopup.classList.toggle("show");}}>X</span>
        </div>

    </div>
    
  );
}

export default App;
