import { Link } from "react-router-dom";
import './EmptyCart.css'

export function EmptyCart() {
    return (
        <div>
            <h1>¡El carro esta vacio!</h1>
            <p>
            <Link to='/'>Volver al Inicio</Link>
            </p>
        </div>
    )
}