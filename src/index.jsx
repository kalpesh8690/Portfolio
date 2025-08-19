import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./components/Nav";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import ThemeContextWrapper from "./theme/ThemeContextWrapper";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/reducer";

// Configure Redux Store with Redux DevTools


const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.MODE !== 'production'
});

ReactDOM.createRoot(document.getElementById("root")).render(
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
