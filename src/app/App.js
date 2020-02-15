import React from "react";
import { Provider } from "react-redux";
import MainContainer from "./containers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers";
import "./styles/styles.css";

const store = createStore(
  allReducers,
  compose(
    applyMiddleware(
      store => next => action => Promise.resolve(action).then(next),
      thunk
    )
  )
);

function App() {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
}

export default App;
