// import LoginForm from "./LoginForm";
// import DataFetcher from "./DataFetcher";
import List from "./List";
import DataFetcher from "./DataFetcher.js";

function App() {
  return (
    <div className="App">
      {/* <LoginForm/> */}
      {/* <DataFetcher/> */}
      <DataFetcher render={(data) => <List items={data} />} />
    </div>
  );
}

export default App;
