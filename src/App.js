import "./App.css";

import List from "./component/List";
import AddUser from "./component/AddUser";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <AddUser />
      <List />
    </div>
  );
}

export default App;
