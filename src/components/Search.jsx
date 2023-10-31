import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Search = () => {
    
    const [searchId, setSearchId] = useState("")
    const navigate = useNavigate()
  
    return (
    <>
    <div className="search__wrapper">
        < h1 className="body__title">Browse your favourite Movies</h1>
        <div className="search__input--wrapper">
        <input
        type='text'
        onChange={(e) => setSearchId(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && navigate(`/${searchId}`)}
        placeholder="Search for movies..."
        ></input>
        </div>
    </div>
    </>
  )
}

export default Search