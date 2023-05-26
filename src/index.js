import React from "react";
import ReactDOM from "react-dom/client";
// Components should start with capital letter
// Encapsulate multiple tags inside <React.Fragment></React.Fragment>
function Greeting() {
  return (
    <React.Fragment>
      <div>
        <h1>Hello</h1>
      </div>
      <h2>How are you</h2>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
