
export const Header = ({nombre}) => {
    return (
        <section className="container my-5 bienvenida">
            <h1>{nombre}</h1>
            <h2> nuestro <strong>dulce</strong> mundo</h2>
            <p>¡Las mejores donas del país!</p>
        </section>
    )
}
export default Header