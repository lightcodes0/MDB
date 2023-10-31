import Footer from "../components/Footer"
import Search from "../components/Search"
import Popcorn from "../assets/popcorn.png"

const Home = () => {
  return (
    <>
    <Search />
    <div className="home__wrapper">
        <img 
        className="home__image"
        src={Popcorn} />
    </div>
    <Footer />
    </>
  )
}

export default Home