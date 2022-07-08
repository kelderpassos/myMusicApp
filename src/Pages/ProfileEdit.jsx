import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserCircle } from "phosphor-react";
import Header from '../Components/Header';
import { Loading } from '../Components/Loading';
import { getUser } from "../services/userAPI";
import styles from './ProfileEdit.module.css';

export function ProfileEdit() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  // const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    setLoading(true);
    const request = await getUser();
    setUserData(request);
    setLoading(false);
  }

  const handleInput = ({target}) => {
    setUserData(target.value);
  }

  const handleSubmit = ({target}) => {
    console.log(target);
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
              {userData.image === '' ? <UserCircle size={60} className={styles.userIcon}/> : <img src={ userData.image } alt={ `${userData.name} photo`} />}            
            <input type="text" />
            </div>

              <h4 className={styles.nameHeader}>Name</h4>
              <p>Feel free to use your social name</p>
              <input type="text" placeholder="Name" onChange={ handleInput } required />
              <h4 className={styles.emailHeader}>Email</h4>
              <input type="text" placeholder="username@user.com" onChange={ handleInput } required />
              <p className={styles.email}>{ userData.email }</p>
              <h4 className={styles.descriptionHeader}>Description</h4>
              <input type="textbox" placeholder="About me" onChange={ handleInput } required />
              <button type="submit" >Save</button>
          </form>
        </section>
        )}
        </section>
      </main>
    </div>
  )
}

export default ProfileEdit;
