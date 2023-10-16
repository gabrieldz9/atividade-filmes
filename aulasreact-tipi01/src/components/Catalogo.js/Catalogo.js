import ExibeCatalogo from "../ExibeCatalogo/ExibeCatalogo";
import "./catalago.css";


function Catalogo({lista,titulo}) {

    return(
        <>
        <h1>{titulo}</h1>
        <div className="div-catalogo">
        {lista.map((flm) =>
            <ExibeCatalogo nome={flm.nome} img={flm.imagem} ano={flm.ano}/>
        )}
        </div>


        </>
    );
}

export default Catalogo;