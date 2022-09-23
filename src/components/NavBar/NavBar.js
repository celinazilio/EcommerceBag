import './NavBar.scss'
import CartWidget from '../CartWidget/CartWidget'

export const Navbar = () => {

    return (
        <header className="header2">
            <div className="header__container">
                <h1 className="header__logo">BolsaLogo</h1>
                <nav className="header__navbar">
                    <li className="header__navlink">Producto</li>
                    <li className="header__navlink">Contacto</li>
                    <li className="header__navlink">Faq</li>
                </nav>
                <CartWidget/>
            </div>
        </header>
    )
}


export default Navbar