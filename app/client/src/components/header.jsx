import "./header.css"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="top-Area">
        <nav>
            <ul className="Navigation-Part">
                <li>Promoções</li>
                <li>Cardápio</li>
                <li>Pedidos</li>
                <li>Quem Somos</li>
                <li>Contato</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header