import { useState } from 'react';
import { useNavigate } from 'react-router';
import { createUser } from '../services/userAPI';
import {Loading} from '../components/Loading';
import styles from './Login.module.css';
import logo from '../images/logo.png'; // colocar svg

function Login() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const handleInput = ({target}) =>  {
    const name = target.value;
    setUsername(name)
  }

  const handleLoginButton = async (e) => {
    e.preventDefault();
    setLoading(true);  
    await createUser({name: username});
    setLoading(false);
    history('/search');  
  }

  const isInputEmpty = username.length < 2;

  if (loading) {
    return <Loading />
  }

  return (
    <div className={styles.container}>
      <div>
      <img className={styles.logo} src={logo} />

      </div>
      <div className={styles.inputContainer}>
        <form>
            <input
              type="text"
              name="username"
              placeholder="Name"
              onChange={handleInput}
              required
            />
          <button
            type="submit"
            onClick={handleLoginButton}
            disabled={isInputEmpty}
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login;
