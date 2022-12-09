import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import Page1 from "./Page1";
import Page2 from "./Page2";

function reducer(state, action) {
  if (state === undefined) {
    return {
      data1: "NONE",
      data2: 0,
    };
  }

  const newState = { ...state };
  switch (action.type) {
    case "STRING":
      newState.data1 = action.data;
      break;
    case "INT":
      newState.data2 = action.data;
  }
  return newState;
}

// const store = createStore();
const store = createStore(reducer);
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Page1 />
      </Provider>
    </div>
  );
}

export default App;
