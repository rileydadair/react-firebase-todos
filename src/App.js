import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddTodo from "./screens/AddTodo";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/addtodo" component={AddTodo} />
      </Router>
    </div>
  );
}

export default App;
