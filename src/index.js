import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./components/Nav";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import ThemeContextWrapper from "./theme/ThemeContextWrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducer";

const store=createStore(rootReducer,composeWithDevTools())

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
          <Nav />
          <App />
          <Footer/>
      </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </ThemeContextWrapper>
);

reportWebVitals();
