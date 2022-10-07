import { Link } from 'react-router-dom'

export const NavBar2 = () => {

    return (
            <div className="header__navbar">
            <Link to={"/categorias/basicas"} className="header__navlink navbar2">basicas</Link>
            <Link to={"/categorias/divertidas"} className="header__navlink navbar2">divertidas</Link>
            <Link to={"/categorias/combos"} className="header__navlink navbar2">combos</Link>
            </div>
     
    )
}


export default NavBar2