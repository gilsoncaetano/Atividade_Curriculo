import React from "react";
import "./App.css";

function Cabecalho() {
  return (
    <div className="AtaApp">
      <h1>Francisco Gilson Rufino Caetano</h1>
      <p className="info">Técnico em Informática é Infraestrutura de Redes</p>
      <hr />

      <nav>
        <div className="For1">OBJETIVO</div>
      </nav>
      <ul>
        <p className="infox">
          Meu objetivo de fazer parte da equipe da empresa, Atuar na área de TI
          acredito que poderia executar meus conhecimentos teórico e pratico e
          ajuda no crescimento da empresa e do grupo de trabalho, sera um grande
          prazer de multiplica com meus conhecimentos na área de Técnico de TI,
          Sou uma pessoa muito dedicada e comprometimento com as atribuições que
          são dada a mim.
        </p>
      </ul>
      <hr />
      <nav>
        <div className="For1">EXPERIÊNCIAS</div>
      </nav>
      <ul>
        <p className="infoBi">Elétricos | Motorista na categoria AD.</p>
        <p className="infox">
          • Período: 26/10/2015 – 16/03/2020 <br />
          • Empresa: ENEL – antiga ELETROPAULO.
          <br />
          • Cargo: Elétricos I e Motorista na categoria AD.
          <br />• Principais atividades: Infraestrutura de redes elétrica e
          Manutenção da rede.
        </p>
      </ul>
      <hr />
      <nav>
        <div className="For1">QUALIFICAÇÕES E ATIVIDADES PROFISSIONAIS</div>
      </nav>
      <ul>
        <p className="infoBi">Aperfeiçoamento e Atividades Complementares</p>
        <p className="infox">
          • Infraestrutura de Redes de computadores.
          <br />• Eletricista de Média e Baixa tensão elétrica.
        </p>
      </ul>
      <hr />
      <nav>
        <div className="For1">INFORMAÇÕES ADICIONAIS</div>
      </nav>
      <ul>
        <p className="infoBi">
          Noções e Conhecimento de Infraestrutura de Redes de Computadores{" "}
        </p>
        <p className="infox">
          • Em Windows, GNU/Linux, Ubuntu, e Manutenção de hardware, Instalação
          de
          <br />
          software, Instalação de Redes Locais de Computadores, Instalação e
          <br />
          configuração de sistemas e operacionais de redes locais de Router,
          Switch,
          <br />
          Access Point, Conhecimento básico em Administração de Redes, Windows
          <br />
          Server, Ubuntu Server, pfSenser-Firewall, E linguagem de Programação
          nível
          <br />
          básico em HTML + CSS + JAVA + REACT + JAVAScript + Banco de dados.
          <br />• Aplicações de escritório (Word, PowerPoint).
        </p>
      </ul>
    </div>
  );
}

export default Cabecalho;
