import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";  // or style.css if you created it

const App = () => (
  <div>
    <h1>Hello, Intersection Types!</h1>
  </div>
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);