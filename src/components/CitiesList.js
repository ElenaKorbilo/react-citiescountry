import React from "react";
import City from "./City";

export default function CitiesList(props) {
  return (
    <div>
      {props.data.map(item => (
        <City {...item} />
      ))}
    </div>
  );
}
