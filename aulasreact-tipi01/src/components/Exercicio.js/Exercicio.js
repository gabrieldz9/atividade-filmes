import Banana from '../../images/banana2.jpg'
import Uva from '../../images/uva.jpg'
import Morango from '../../images/morango.jpg'
function Exercicio() {
    const f = [
     {fruta: "Banana", quantidade: "2kg", preço: "10R$", img:Banana},
     {fruta: "Uva", quantidade: "1kg", preço: "20R$", img: Uva},
     {fruta: "Morango", quantidade:"3kg", preço: "15R$", img: Morango},

    ];
    
    return (
        <>
          <h2>Minha lista</h2>
          {f.map((dado) => 
            <>
          <p>Fruta: {dado.fruta}<br/> Quantidade: {dado.quantidade}<br/> Preço: {dado.preço}<br/></p>
          <img src= {dado.img}/>
            </>
          
          )
          }
        </>

    )
}

export default Exercicio;