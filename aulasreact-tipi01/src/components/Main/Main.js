import Catalogo from "../Catalogo.js/Catalogo";
import Carros from "../../images/carros.png";
import Bee from "../../images/bee-movie.png";
import Ratatouille from "../../images/ratatoiullee.png";
import Madagascar from "../../images/madagascar.png";
import Shrek from "../../images/shrek.png"
import Breaking from "../../images/breaking.png";
import Twd from "../../images/twd.png"
import Loki from "../../images/loki.png"
import Prison from "../../images/prisonbrak.png"
import La from "../../images/La_casa_de_papel.png"

function Main() {
    const listC = [
        {nome: "Carros", imagem: Carros, ano: "2006"},
        {nome: "Bee Movie", imagem: Bee, ano: "2007"},
        {nome: "Ratataouille", imagem: Ratatouille, ano: "2007"},
        {nome: "Madagascar", imagem: Madagascar, ano: "2005"},
        {nome: "Shrek", imagem: Shrek, ano: "2001"},
    ];

 const listB = [
      {nome: "Breaking Bad", imagem:Breaking, ano: "2008"},
      {nome: "The Walking Dead", imagem:Twd, ano: "2010"},
      {nome: "Loki", imagem:Loki, ano: "2021"},
      {nome: "Prison Break", imagem:Prison, ano: "2005"},
      {nome: "La casa de papel", imagem:La, ano: "2017"},
 ];


return (
    <main>
        <Catalogo lista={listC} titulo={"Filmes"}/>
        <Catalogo lista={listB} titulo={"Series"}/>
    </main>
);
}

export default Main;