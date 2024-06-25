import '../styles/header.css'
import {Link} from 'react-router-dom'

function header() {
    return (
        <header>
            <nav>
                <Link to='/login' className='boton'>Acceder</Link>
            </nav>
            <h1 className='Titulo'>Portafolio</h1>
        </header>
    )
}
export default header;
{/* <header id="titulo">
            <h1>{title}</h1>
        </header> */}