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

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    setLoading(true);
    const request = await getUser();
    setUserData(request);
    setLoading(false);
  }

  return (
    <div>
      <Header />
      <main>
        <section className={styles.container}>
        {loading ? <Loading /> : (
          <section className={styles.userContainer}>
          <div className={styles.userImage}>
            {userData.image === '' ? <UserCircle size={60} className={styles.userIcon}/> : <img src={ userData.image } alt={ `${userData.name} photo`} />}            
            <NavLink to="/profile/edit"><button type="button" className={styles.editButton}>Profile Edit</button></NavLink>
          </div>
          <h4 className={styles.nameHeader}>Name:</h4>
          <p className={styles.name}>{ userData.name }</p>
          <h4 className={styles.emailHeader}>Email:</h4>
          <p className={styles.email}>{ userData.email }</p>
          <h4 className={styles.descriptionHeader}>Description:</h4>
          <p className={styles.description}>{ userData.description }</p>
        </section>
        )}
        </section>
      </main>
    </div>
  )
}

export default ProfileEdit;
