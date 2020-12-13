import React from "react";

export default function City(props) {
  return (
    <>
      <div>
        <b>{props.name}</b> - {props.info}
      </div>
    </>
  );
}
