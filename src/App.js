import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
// import reducer from "./redux";
import { Provider } from "react-redux";
import { store } from "./redux";

function App() {
  // const store = createStore(reducer);

  return (
    <div className="app">
      <Provider store={store}>
        <Counter />
        <Todo />
      </Provider>

    </div>
  );
}

export default App;