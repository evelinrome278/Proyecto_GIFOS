import React from "react";
import imgHeader from "../../public/img/ilustra_header.svg";
import Autocomplete from "./Autocomplete";

function Search({
  search,
  manejarSearch,
  manejarBtnSearch,
  manejarClick,
  dataAutoC
}) {
  return (
    <div className="containerBusqueda">
      <div>
        <h2>
          ¡Inspírate y busca los mejores <strong>GIFS</strong>!
        </h2>
      </div>

      <img
        className="imgSearch"
        src={imgHeader}
        alt="imagen header"
        type="text"
      />

      <div>
        <form onSubmit={manejarBtnSearch}>
          <input
            className="relative"
            placeholder="Buscar Gif"
            onChange={manejarSearch}
            value={search}
            type="text"
          />

          <button>
            <img src="/img/icon-search-mod-noc.svg" alt="buscar" />
          </button>

          {search === "" ? (
            <></>
          ) : search.length >= 0 && search !== "" ? (
            <Autocomplete
              dataAutoC={dataAutoC}
              manejarBtnSearch={manejarBtnSearch}
              manejarClick={manejarClick}
            />
          ) : (
            <> </>
          )}
        </form>
      </div>
    </div>
  );
}

export default Search;
