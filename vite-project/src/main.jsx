import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/global.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// redux || redux-toolkit || redux-query

// { state, reducer, middleware }
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
        {/* </PersistGate> */}
      </Provider>
    </Suspense>
  </React.StrictMode>
);
