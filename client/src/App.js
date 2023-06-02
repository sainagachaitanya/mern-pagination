import './App.css';
import { useState, useEffect } from "react"


const App = ({match}) => {

  console.log(match.params.pageNumber);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/v1/posts?page=${page}`)

        const { data, pages: totalPages } = await res.json();

        setPages(totalPages);
        setPosts(data);
        setLoading(false);

      } catch (error) {
        console.log(error);
        setLoading(false);
        setError('Some error occured');
      }
    }

    fetchPosts()
  }, [page])

  return (
    <div className="App">
      {/* Pagination Components */}

      {/* Posts listing */}

      {/* Pagination Components */}
    </div>
  );
}

export default App;
