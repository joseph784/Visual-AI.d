// import "./App.css";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [picture, setPicture] = useState("");

//   useEffect(() => {
//     console.log(picture);
//   }, [picture]);

//   return (
//     <div>
//       <h1 class="text-purple-500 justify-center">Piclingo</h1>
//       <img alt="OpenAI!" src={picture} />
//       <input />
//       <button
//         onClick={() => {
//           axios.get("http://127.0.0.1:5000/").then(
//             (response) => {
//               console.log(response.data);
//               setPicture(response.data);
//             },
//             (error) => {
//               console.log(error);
//             }
//           );
//         }}
//       >
//         Generate
//       </button>
//       <button
//         onClick={() => {
//           console.log(picture);
//         }}
//       >
//         Test
//       </button>
//     </div>
//   );
// }

// export default App;
import { useState } from "react";
import axios from "axios";

function App() {
  const [picture, setPicture] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/");
      console.log(response.data);
      setPicture(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 class="text-purple-500 justify-center">Piclingo</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img alt="OpenAI!" src={picture} />
      )}
      <input />
      <button onClick={handleClick}>Generate</button>
    </div>
  );
}

export default App;
