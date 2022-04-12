import "../Styles/styles.css";

function Header({ modo, manejarModo }) {
  return (
    <div className={`App ${modo ? "" : "dark "}`}>
      <div className="containerHeader ">
        <img
          className="logo "
          src={`${
            modo ? "/img/logo-desktop.svg" : "/img/logo-mobile-modo-noct.svg"
          }`}
          width="59px"
          alt="logo"
        />
        <button onClick={manejarModo} className="btnTema">
          {`${modo ? "MODO DARK " : "MODO LIGTH"}`}
        </button>
      </div>
    </div>
  );
}

export default Header;
