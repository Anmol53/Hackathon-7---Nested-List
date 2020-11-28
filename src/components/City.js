import React, { useState } from "react";

export default function State(props) {
  const [renderTown, setRenderTown] = useState(false);
  return (
    <>
      <h2 onClick={() => setRenderTown(!renderTown)} id={props.id}>
        {props.data.name}
      </h2>
      {renderTown
        ? props.data.towns.map((val, index) => {
            return (
              <h3 key={`town${index + 1}`} id={`town${index + 1}`}>
                {val.name}
              </h3>
            );
          })
        : null}
    </>
  );
}
