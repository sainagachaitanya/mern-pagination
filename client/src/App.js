import './App.css';
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import Card from './components/Card';
import Pagination from './components/Pagination';

const App = () => {

  let { pageNumber } = useParams();
  
  if (pageNumber === undefined) {
    pageNumber = 1;
  }

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(pageNumber);
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
    <div className="app">
      {/* Pagination Components */}
      <Pagination page={page} pages={pages} changePage={setPage} />
      {/* Posts listing */}
      <div className='app__posts'>
        {
          posts.map((post) => {
            return <Card key={post._id} post={post}/>
          })
        }
      </div>
      {/* Pagination Components */}
      <Pagination page={page} pages={pages} changePage={setPage} />
    </div>
  );
}

export default App;
