import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserCircle } from "phosphor-react";
import Header from '../Components/Header';
import { Loading } from '../Components/Loading';
import { getUser, updateUser } from "../services/userAPI";
import styles from './ProfileEdit.module.css';

export function ProfileEdit() {
  // const [userData, setUserData] = useState({});
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
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

  const validateButton = () => {
    if (username.length > 0 && email.length > 1 && description.length > 0) {
      setIsDisabled(false);
    }    
  }

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
      default:
        break;
    }
    validateButton();
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
        <section className={styles.container}>
        {loading ? <Loading /> : (
          <section className={styles.userContainer}>
          <form onSubmit={ handleSubmit }>
            <div className={styles.userImage}>
              {image === '' ? <UserCircle size={60} className={styles.userIcon}/> : <img src={ userData.image } alt={ `user's photo`} />}            
            <input type="text" />
            </div>
              <h4 className={styles.nameHeader}>Name</h4>
              <p>Feel free to use your social name</p>
              <input type="text"
              name="name" placeholder="Name" onChange={ handleInput } required />
              <h4 className={styles.emailHeader}>Email</h4>
              <input type="text"
              name="email" placeholder="username@user.com" onChange={ handleInput } required />
              <h4 className={styles.descriptionHeader}>Description</h4>
              <input type="textarea"
              name="description" placeholder="About me" onChange={ handleInput } required />
              <button type="submit" disabled={isDisabled}>Save</button>
          </form>
        </section>
        )}
        </section>
      </main>
    </div>
  )
}

export default ProfileEdit;
