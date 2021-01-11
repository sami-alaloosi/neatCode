/** @format */

import React from "react";

import Header from "./Header";
function Home() {
  const componentName = "Home";

  return (
    <div>
      <Header componentName={componentName} />
      Hello from the home of the questions
    </div>
  );
}

export default Home;
