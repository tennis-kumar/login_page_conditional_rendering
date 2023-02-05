import React from "react";
import Form from "./Form";

var isLoggedIn = false;
var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1> Hello </h1> : <Form isRegistered={userIsRegistered} />}
    </div>
  );
}

export default App;
