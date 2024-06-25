import '../styles/header.css'
import {Link} from 'react-router-dom'

function header() {
    return (
        <header>
            <h1>Portafolio</h1>
            <nav>
                <Link to='/login' className='boton'>Acceder</Link>
            </nav>
        </header>
    )
}
export default header;
{/* <header id="titulo">
            <h1>{title}</h1>
        </header> */}