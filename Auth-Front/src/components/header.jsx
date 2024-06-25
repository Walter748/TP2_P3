import '../styles/header.css'


export function header () {
    const handleLogout = () => {
        setUser([]); // Limpiar el estado del usuario al hacer logout
      };
    


    return (
        <header>
            <h1>Portafolio</h1>
        </header>
    )
}
export default header;
{/* <header id="titulo">
            <h1>{title}</h1>
        </header> */}