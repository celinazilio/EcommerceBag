import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
export const NavBar = () => {

    return (
        <div className="header__container navbars">
            <a href="/" className="header__logo h1 noselect">ku-donuts</a>
                <nav className="header__navbar">
                <a href="/tienda" className="header__navlink noselect">Tienda</a>
                <a href="/contacto" className="header__navlink noselect">Contacto</a>
                </nav>
                <CartWidget/>
            </div>
    )
}


export default NavBar