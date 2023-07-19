import store from "./Redux/store";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(document.getElementById("root"));

let EnterPost = (state) => {
 
  root.render(
    <React.StrictMode>
     
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
     
    </React.StrictMode>
  );
};
EnterPost(store.getstate());
store.subcribe(() => {
  let state = store.getstate();
  EnterPost(state);
});

reportWebVitals();
