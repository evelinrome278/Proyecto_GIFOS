import React from "react";
import Card from "./Card";
import NoResult from "./NoResult";

function Results({ modo, isloading, listaG, listaGT, btnSearch, enviar }) {
  return (
    <div>
      <div className="containerResultados">
        {listaG.length !== 0 && enviar !== "" ? (
          <h2>
            Resultado de la Búsqueda <i className="far fa-smile-beam"></i>
          </h2>
        ) : listaG.length === 0 && enviar === "" ? (
          <h2>
            Mira los últimos gifs en tendencia{" "}
            <i className="far fa-grin-stars"></i>
          </h2>
        ) : listaG !== [] && btnSearch === false ? (
          <h2>
            Ups...{" "}
            <span>
              <i className="far fa-sad-tear"></i>
            </span>
          </h2>
        ) : (
          <> </>
        )}

        {isloading ? <div className="loader"> </div> : null}

        <div className="listResult">
          {listaG.length !== 0 && enviar !== "" ? (
            listaG.map((gif) => {
              return (
                <Card
                  key={gif.id}
                  image={gif.images}
                  title={gif.title}
                  url={gif.url}
                />
              );
            })
          ) : listaG.length === 0 && enviar === "" ? (
            listaGT.map((gif) => {
              return (
                <Card
                  key={gif.id}
                  image={gif.images}
                  title={gif.title}
                  url={gif.url}
                />
              );
            })
          ) : listaG !== [] && btnSearch === false ? (
            <NoResult modo={modo} />
          ) : (
            <> </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Results;
