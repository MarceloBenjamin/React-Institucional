import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes";

import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App();
