import React from "react";

export default function Head({ first, second }) {
  return (
    <div className="mainTitle">
      <h1>{first}</h1>
      <h3>{second}</h3>
    </div>
  );
}
