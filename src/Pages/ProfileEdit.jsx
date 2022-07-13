import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserCircle } from "phosphor-react";
import Header from '../Components/Header';
import { Loading } from '../Components/Loading';
import { getUser, updateUser } from "../services/userAPI";
import styles from './ProfileEdit.module.css';

export function ProfileEdit() {
  const [image, setImage] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  // const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);
  
  const fetchUser = async () => {
    setLoading(true);
    const { name, email, image, description} = await getUser();
    setUsername(name);
    setEmail(email);
    setImage(image);
    setDescription(description);
    setLoading(false);
  }
  
  const REGEX_PATTERN = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  let errorMsg;
  const validEmail = REGEX_PATTERN.test(email);
  const requirements = [
    validEmail,
    username.length > 0,
    email.length > 0,
    description.length > 0,
  ];

  !validEmail ? errorMsg ='Please, type a valid e-mail' : errorMsg = '';

  const isDisabled = requirements.every((condition) => condition === true);    

  const handleInput = ({target}) => {
    switch (target.name) {
      case 'name':
        setUsername(target.value);
        break;
      case 'email':
        setEmail(target.value);
        break;
      case 'description':
        setDescription(target.value);
        break;
      case 'image':
        setImage(target.value);
        break;
      default:
        break;
    }
  }
    
  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      name: username,
      email: email,
      image: image,
      description: description,
    };
    updateUser(userInfo);
    history('/profile');
  }

  return (
    <div>
      <Header />
      <main>        
        {loading ? <Loading /> : (
          <section className={styles.userContainer}>
          <form onSubmit={ handleSubmit }>
            <div className={styles.userImage}>
              {image === '' ? <UserCircle size={60} className={styles.userIcon}/> : <img src={ image } alt={ `user's photo`} />}            
            <input name="image" type="text" placeholder="Set the exact link of your photo" onChange={ handleInput }/>
            </div>
            <div className={styles.inputContainer}>
              <h4 className={styles.username}>Name</h4>
              <p>Feel free to use your social name</p>
              <input type="text"
              name="name" placeholder="Name" onChange={ handleInput } required />
              <h4 className={styles.email}>Email</h4>
              <input type="text"
              name="email" placeholder="username@user.com" onChange={ handleInput } required />
              <p>{errorMsg}</p>
              <h4>Description</h4>              
            </div>              
                <input
                  type="textarea"
                  name="description" placeholder="About me"
                  onChange={ handleInput }
                  required
                  className={styles.description}
                />
              <button
                type="submit" 
                className={styles.saveBtn}
                disabled={!isDisabled}
              >
                Save
              </button>
          </form>
        </section>
        )}
      </main>
    </div>
  )
}

export default ProfileEdit;
