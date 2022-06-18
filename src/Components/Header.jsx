import styles from './Header.module.css';
import logo from '../Images/logo.png';
import { UserCircle } from 'phosphor-react';
import { getUser } from '../services/userAPI';
import { useState, useEffect } from 'react';
import { LoadingUser } from './Loading';
import { NavLink } from 'react-router-dom';


function Header() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const response = await getUser();
      setUsername(response.name);
      setLoading(false);
    }
    fetchUser()
  }, [username]);

  return (
    <header>
      <div className={styles.containerHeader}>
        <img className={styles.logo} src={logo}/>
        <section className={styles.containerUser}>
          <div><UserCircle size={25} /> {loading ? <LoadingUser /> : <span>{username}</span>}</div>
        </section>
      </div>
      <nav className={styles.containerLinks}>
        <section><NavLink to="/search">Search</NavLink></section>
        <section><NavLink to="/favorites">Favorites</NavLink></section>
        <section><NavLink to="/profile">Profile</NavLink></section>
      </nav>
    </header>
  )
}

export default Header;
