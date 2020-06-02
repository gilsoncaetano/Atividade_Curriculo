import React from "react";
import { BsEnvelopeFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { BsGeoAlt } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

function Contato() {
  return (
    <div className="Alfa">
      <div className="iconfox">
        <img src="foto3.png" className="foto1" />
        <nav className="For">
          <div className="For">CONTATO</div>
        </nav>
      </div>
      <hr />
      {/* Inicio de div icon 1*/}
      <div className="icon">
        <p className="infodx">gilsonebcs@gmail.com</p>
        <BsEnvelopeFill color="purple" size="1.5rem" />
      </div>
      {/* fim da div ico 1*/}

      {/* Inicio de div icon 2*/}
      <div className="icon">
        <p className="infodx">(11)9 9-7957-7572 | (11) 9 8367-7328</p>
        <AiFillPhone color="purple" size="1.5rem" />
      </div>
      {/* fim da div ico 2*/}

      {/* Inicio de div icon 3*/}
      <div className="icon">
        <p className="infodk">https://github.com/gilsoncaetano</p>
        <AiOutlineGithub color="purple" size="1.5rem" />
      </div>
      {/* fim da div ico 3*/}

      {/* Inicio de div icon */}
      <div className="icon1">
        <p className="infodg">
          Rua Santa maria do para nº 321 <br />
          Guarulhos-SP CEP 07175-400
        </p>
        <BsGeoAlt color="purple" size="1.5rem" />
      </div>
      {/* fim da div ico 4*/}

      <hr />
      <nav className="For">
        <div className="For">FORMAÇÂO</div>
      </nav>
      <ul>
        <p className="infodex">
          • Cursando Técnico: Técnico em Informática, <br />
          SENAC-TATUAPÉ, Carga Horária 1200 horas início 04/2019 a 11/2020.
        </p>
        <p className="infoAx">
          • Ensino Médio Completo concluído <br />
          E.E. Parque jurema III Concluído em 12/2014.
          <br />
        </p>
      </ul>

      <hr />
      <nav className="For">
        <div className="For">IDIOMAS</div>
      </nav>
      <ul>
        <p className="infoAx">
          • Português (Fluente).
          <br />
        </p>
      </ul>

      <hr />
      <nav className="For">
        <div className="For">CARTA DE RECOMENDAÇÂO</div>
      </nav>
      <div className="logo">
        <div class="modal-footer">
          <img
            width="360"
            height="245"
            src="logoenel.png"
            className="logo"
            href="declaracao.pdf"
          />

          <a href="declaracao.pdf" class="">
            Detalhes da carta{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
export default Contato;
