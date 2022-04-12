import React from "react";

function NoResult(modo) {
  return (
    <div>
      <div className={`App ${modo ? "" : "dark "} containerNoResult`}>
        <br />
        <h1 className="textNoResult">
          Lo sentimos no encontramos lo que buscas
        </h1>
        <h2 className="textNoResult">¡Inténtalo de nuevo!</h2>
      </div>
    </div>
  );
}

export default NoResult;
