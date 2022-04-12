import React from "react";

function Autocomplete({ manejarClick, dataAutoC }) {
  return (
    <div
      onClick={manejarClick}
      className={`${dataAutoC.length > 0 ? "containerAutoComple" : ""}`}
    >
      <div className="inputAuto">{GifSugerencia({ dataAutoC })} </div>
    </div>
  );
}

function GifSugerencia({ dataAutoC }) {
  return (
    <div>
      {dataAutoC.map((gif) => {
        return (
          <div key={gif.name} className="inputAuto">
            <p className="sugerencias"> {gif.name} </p>
          </div>
        );
      })}
    </div>
  );
}

export default Autocomplete;
