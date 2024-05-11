import { useState } from "react";
import "./App.css";
import Products from "./Products";
function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const YOUR_APP_ID = process.env.REACT_APP_API_ID;
  const YOUR_APP_KEY = process.env.REACT_APP_API_KEY;
  const changeHandler = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === "") {
      setData([]);
      setError(null);
      return;
    }
    fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.hits);
        setError("Not Found...");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <center>
        <h2>Food Recipe App</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={search}
            onChange={changeHandler}
            placeholder="Enter something..."
          />
          <br />
          <input type="submit" name="search" className="btn btn-primary" />
        </form>
        {data.length >= 1 ? <Products data={data} /> : error}
      </center>
    </div>
  );
}

export default App;
