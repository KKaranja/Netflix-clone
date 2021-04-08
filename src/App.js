import "./App.css";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="TrendingNow " fetchUrl={requests.fetchTrending} />
      <Row title="Trending Now" />
    </div>
  );
}

export default App;
