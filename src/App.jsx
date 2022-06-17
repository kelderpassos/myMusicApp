import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Search from './Pages/Search';
import Album from './Pages/Album';
import Favorites from './Pages/Favorites';
import Profile from './Pages/Profile';
import ProfileEdit from './Pages/ProfileEdit';
import NotFound from './Pages/NotFound';
import './global.css'

function App() {
  return (    
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/search" element={<Search />}></Route>
        <Route exact path="/album/:id" element={<Album />}></Route>
        <Route exact path="/favorites" element={<Favorites />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route exact path="/profile/edit" element={<ProfileEdit />}></Route>
        <Route exact path="*" element={<NotFound />}></Route>
      </Routes>
  )
}

export default App
