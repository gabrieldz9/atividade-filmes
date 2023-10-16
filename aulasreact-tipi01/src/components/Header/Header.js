import Logo from '../../images/Logo - Copia.png';
import './header.css';

function Header() {
    return(
        <header className="header-menu">
            <img src={Logo} alt='Logo' className="img-logo"/> 
            <h3>Elenco do Corinthians</h3>
        </header>
    )
}

export default Header;