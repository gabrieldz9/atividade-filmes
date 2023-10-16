
function ExibeCatalogo({nome,img,ano,}){
    return(
        <div>
            <img className='img-exibe-catalogo' src={img} alt={nome}/>
            <h1>{nome}</h1>
            <p>{ano}</p>
        </div>
    )
}
export default ExibeCatalogo;