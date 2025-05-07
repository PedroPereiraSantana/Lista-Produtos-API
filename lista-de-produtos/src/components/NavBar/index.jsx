
import './style.css'
import LogoPrincipal from '../../assets/logo-principal.png'
import Produtos from '../../pages/Produtos/Produtos'

function NavBar() {
    return(
        <nav>
            <img src={LogoPrincipal} alt="" />

            <a href={Produtos}><button>Início</button></a>
        </nav>
    )
}

export default NavBar
