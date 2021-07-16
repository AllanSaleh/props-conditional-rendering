import React from "react";
import CardComponent from "./components/Card";
import {
  people,
  participants,
  peopleWithoutDescription,
} from "./mockdata/data";

function App() {
  return (
    <div className="App">
      {people.map(({ name, hobby }) => {
        return <CardComponent show={true} title={name} description={hobby} />;
      })}

      {people.map(({ name, hobby }) => {
        return <CardComponent show={false} title={name} description={hobby} />;
      })}
    </div>
  );
}

export default App;
