import React, { useState } from "react";
import City from "./City";

export default function State(props) {
  const [renderCity, setRenderCity] = useState(false);
  return (
    <>
      <h1 onClick={() => setRenderCity(!renderCity)} id={props.id}>
        {props.data.name}{" "}
      </h1>
      {renderCity
        ? props.data.cities.map((val, index) => {
            return (
              <City
                key={`${val}City${index + 1}`}
                id={`city${index + 1}`}
                data={val}
              />
            );
          })
        : null}{" "}
    </>
  );
}
