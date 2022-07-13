import React, { useEffect, useState } from "react";
import { UserCircle } from "phosphor-react";
import { NavLink } from "react-router-dom";
import Header from "../Components/Header";
import { Loading } from '../Components/Loading';
import { getUser } from "../services/userAPI";
import styles from './Profile.module.css'

export function Profile() {
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
      <main className={styles.container}>
        {loading ? <Loading /> : (
          <section className={styles.userContainer}>
          <div className={styles.userImageContainer}>
            {userData.image === '' ? <UserCircle size={60} className={styles.userIcon}/> : <img src={ userData.image } alt={ `${userData.name} photo`} className={styles.userImage} />}            
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
      </main>
    </div>
  )
}

export default Profile;
