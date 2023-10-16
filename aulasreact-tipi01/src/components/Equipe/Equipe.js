import ExibePerfil from '../ExibePerfil/ExibePerfil'
import './equipe.css';

function Equipe(){
    const listaP = [
        {nome:"Gabriel", imagem:"", crt: ""},
        {nome:"Julia", imagem:"", crt:""},
    ]
    return(
        <>
        <h1>Equipe</h1>
        {listaP.map ((turma) =>
        <div className ='div-exibe'>
        <ExibePerfil nome={turma.nome} img={turma.imagem} crt={turma.crt}/>
       
        </div>
        )}
        </> 
    )
}

export default Equipe;