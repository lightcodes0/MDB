import { useNavigate } from "react-router-dom"

const Nav = () => {
    const navigate = useNavigate()

  return (
    <>
    <nav>
        <h1 
        onClick={() => navigate(`/`)}
        className="nav__title click">MDB</h1> 
        <ul className="nav__links">
            <li 
            onClick={() => navigate(`/`)}
            className="nav__link click">Home</li>
            <li className="nav__link no__click">Contact</li>
            <li className="nav__link no__click remove">Watchlist</li>
        </ul>  
    </nav>
    </>
  )
}

export default Nav