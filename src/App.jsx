import React, { useEffect, useState } from "react";
import "./Styles/styles.css";
import "./Styles/loader.css";
import Search from "./Components/Search";
import Results from "./Components/Results";
import Header from "./Components/Header";

function App() {
  const [modo, setModo] = useState(true);
  const [dataTrending, setDataTrending] = useState([]);
  const [dataAutoC, setDataAutoC] = useState([]);
  const [dataGif, setDataGif] = useState([]);
  const [search, setSearch] = useState("");
  const [btnSearch, setBtnSearch] = useState(false);
  const [enviar, setEnviar] = useState("");
  const [isloading, setIsloading] = useState(false);

  const manejarModo = () => {
    setModo(!modo);
  };

  const manejarSearch = (e) => {
    const search = e.target.value;
    setSearch(search);
  };

  const manejarBtnSearch = (e) => {
    e.preventDefault();
    setBtnSearch(true);
    setEnviar(search);
  };

  const manejarClick = (e) => {
    e.preventDefault();
    setSearch(e.target.innerText);
    setBtnSearch(true);
    setEnviar(search);
  };

  // Obtener Gif
  useEffect(() => {
    if (btnSearch === true) {
      setIsloading(true);
      const obtenerGif = async () => {
        let key = "j0LCK6aERZVX4qcPneKUu6kfsQhcfcpp";
        let url = "https://api.giphy.com/v1/gifs/search";
        let response = await fetch(
          `${url}?api_key=${key}&q=${search}&limit=15&offset=0&rating=g&lang=es`
        );
        setIsloading(false);
        let dataGif = await response.json();
        setBtnSearch(false);
        setDataGif(dataGif.data);

        setSearch("");
      };
      obtenerGif();
    } else {
      setIsloading(true);
      const obtenerTrendings = async () => {
        let response = await fetch(
          `https://api.giphy.com/v1/gifs/trending?api_key=j0LCK6aERZVX4qcPneKUu6kfsQhcfcpp&limit=15&rating=g`
        );
        setIsloading(false);
        let dataTrending = await response.json();
        setDataTrending(dataTrending.data);
      };
      obtenerTrendings();
    }
  }, [btnSearch, search]);

  // Obtener Gif Autocompletación
  useEffect(() => {
    const obtenerAutoC = async () => {
      let key = "j0LCK6aERZVX4qcPneKUu6kfsQhcfcpp";
      let response = await fetch(
        `https://api.giphy.com/v1/gifs/search/tags?api_key=${key}&q=${search}&limit=5&offset=0&rating=g&lang=en`
      );

      let dataAutoC = await response.json();
      setDataAutoC(dataAutoC.data);
    };

    obtenerAutoC();
  }, [search]);

  return (
    <div className={`App ${modo ? "" : "dark"}`}>
      <Header manejarModo={manejarModo} modo={modo} />
      <Search
        search={search}
        manejarSearch={manejarSearch}
        manejarBtnSearch={manejarBtnSearch}
        dataAutoC={dataAutoC}
        manejarClick={manejarClick}
      />

      <Results
        modo={modo}
        listaG={dataGif}
        listaGT={dataTrending}
        search={search}
        btnSearch={btnSearch}
        enviar={enviar}
        isloading={isloading}
      />
    </div>
  );
}

export default App;
