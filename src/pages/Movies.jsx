import { useNavigate, useParams } from 'react-router-dom';
import Search from '../components/Search';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';

const Movies = () => {
  const { searchId } = useParams();
  const apiKey = '6c5beaa4';
  const apiUrl = `https://www.omdbapi.com/?s=${searchId}&apikey=${apiKey}`;

  const [movies, setMovies] = useState([]);
  const [filterType, setFilterType] = useState('all');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  async function getMovies() {
    setLoading(true);
    try {
      const { data } = await axios.get(apiUrl);
      const filteredMovies = data.Search.filter((movie) => {
        if (filterType === 'pre2000') {
          const movieYear = parseInt(movie.Year);
          return movieYear < 2000;
        } else if (filterType === 'post2000') {
          const movieYear = parseInt(movie.Year);
          return movieYear >= 2000;
        }
        return true;
      });

      setMovies(filteredMovies);
    } catch (error) {
      setMovies([]);
    } finally {
      // Delay setting loading to false by 2 seconds
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }

  useEffect(() => {
    getMovies();
  }, [searchId, filterType]);

  return (
    <>
      <Search />
      <div className='filter__wrapper'>
        {!loading ? <h2>Showing you search results for: "{searchId}"</h2> : <h2>"Searching for results..."</h2>}
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="all">Filter by: All</option>
          <option value="pre2000">Pre-2000</option>
          <option value="post2000">Post-2000</option>
        </select>
      </div>
      <div className='movies'>
        {!loading ? (
          movies.length > 0 ? (
            movies.slice(0, 6).map((movie) => (
              <div key={movie.imdbID}>
                <img
                  className='movie click'
                  onClick={() => navigate(`${movie.imdbID}`)}
                  src={movie.Poster}
                />
              </div>
            ))
          ) : (
            <p>No results found</p>
          )
        ) : (
          // Loading Skeleton State
          <>
            <img className='movie click skeleton__movie' />
            <img className='movie click skeleton__movie' />
            <img className='movie click skeleton__movie' />
            <img className='movie click skeleton__movie' />
            <img className='movie click skeleton__movie' />
            <img className='movie click skeleton__movie' />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Movies;
