import { useState } from "react";
import "./style.css";
import logo from "../../assets/logo-black.png"

// Função principal que representa o componente Calculator
export default function Calculator() {
    // Estados do componente
    const [numero, setNumero] = useState(""); // Armazena o número atual
    const [acumulado, setAcumulado] = useState(); // Armazena o valor acumulado
    const [operador, setOperador] = useState(null); // Armazena o operador atual
    

    // Função para abrir um link ao clicar no logo
    function link() {
        window.open('https://leonardomoreeno.github.io');
    }

    // Função chamada quando um número é clicado
    const handleNumeroClick = (num) => {
        // Concatenar o novo número ao valor atual
        setNumero((prevNumero) => prevNumero + num.toString());
    };

    // Função chamada quando um operador é clicado
    const handleOperadorClick = (op) => {
        // Se já tiver um operador, realizar a operação
        if (operador !== null) {            
            handleResultadoClick();
        }

        // Atualizar o operador
        setOperador(op);

        // Armazenar o valor atual como acumulado
        setAcumulado(parseFloat(numero));

        // Limpar o número atual
        setNumero("");
    };

    // Função chamada quando o botão de resultado é clicado
    const handleResultadoClick = () => {
        const numeroAtual = parseFloat(numero);                     
       
        if (operador === "/") {
            setNumero(parseFloat(acumulado) / numeroAtual);
        } else if (operador === "*") {
            setNumero(parseFloat(acumulado) * numeroAtual);
        } else if (operador === "-") {
            setNumero(parseFloat(acumulado) - numeroAtual);
        } else if (operador === "+") {            
            setNumero(parseFloat(acumulado) + numeroAtual);                                                                       
        } else if (operador === "%") {
            setNumero(parseFloat(acumulado) * (numeroAtual / 100));
        }
    };

    // Função chamada quando o botão de excluir é clicado
    const handleExcluirClick = () => {
        // Limpar todos os estados
        setNumero("");
        setOperador(null);
        setAcumulado(0);
    };

    // Renderização do componente
    return (
        <div className="content">
            <div className="card">
                {/* Logo do aplicativo com ação de link ao clicar */}
                <img className="logo" src={logo} onClick={link} />

                {/* Tabela que representa a calculadora */}
                <table className="tabela">
                    <thead>
                        <tr>
                            {/* Exibição do valor acumulado e número atual */}
                            <th className="valor" colSpan="4">
                                <span className="minivalor"
                                    style={
                                        {

                                            display: isNaN(parseFloat(acumulado)) ? "none" : "inline-block"
                                        }
                                    }>
                                    {acumulado !== "" ? acumulado + operador : operador}
                                </span>
                                <input className="maiorvalor"
                                    type="text"
                                    value={numero}
                                    style={{ fontSize: numero.length > 8 ? "30px" : "60px" }}
                                    readOnly ></input>
                            </th>
                        </tr>
                    </thead>
                    {/* Corpo da tabela com os botões da calculadora */}
                    <tbody>
                        <tr>
                            <td className="zerar" colSpan="2" onClick={() => handleExcluirClick()}>AC</td>
                            <td className="operadores" onClick={() => handleOperadorClick("%")}>%</td>
                            <td className="operadores" onClick={() => handleOperadorClick("/")}>/</td>
                        </tr>
                        <tr>
                            <td onClick={() => handleNumeroClick(7)}>7</td>
                            <td onClick={() => handleNumeroClick(8)}>8</td>
                            <td onClick={() => handleNumeroClick(9)}>9</td>
                            <td className="operadores" onClick={() => handleOperadorClick("*")}>*</td>
                        </tr>
                        <tr>
                            <td onClick={() => handleNumeroClick(4)}>4</td>
                            <td onClick={() => handleNumeroClick(5)}>5</td>
                            <td onClick={() => handleNumeroClick(6)}>6</td>
                            <td className="operadores" onClick={() => handleOperadorClick("-")}>-</td>
                        </tr>
                        <tr>
                            <td onClick={() => handleNumeroClick(1)}>1</td>
                            <td id="2" onClick={() => handleNumeroClick(2)}>2</td>
                            <td onClick={() => handleNumeroClick(3)}>3</td>
                            <td className="operadores" onClick={() => handleOperadorClick("+")}>+</td>
                        </tr>
                        <tr>
                            <td onClick={() => handleNumeroClick(0)}>0</td>
                            <td onClick={() => handleNumeroClick(".")}>.</td>
                            <td className="resultado" colSpan="2" onClick={() => handleResultadoClick()}>=</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
