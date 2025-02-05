import { HashRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Movies from './components/Movies'
import TvShows from './components/TvShows'
import Bookmarks from './components/Bookmarks'


function App() {

  return (
    <HashRouter>
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='/movies' element={<Movies />}/>
            <Route path='/tvseries' element={<TvShows />}/>
            <Route path='/bookmarks' element={<Bookmarks />}/>
          </Route>
      </Routes>
    </HashRouter>
  )
}

export default App;
