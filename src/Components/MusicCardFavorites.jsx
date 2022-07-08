import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import styles from './MusicCard.module.css';

function MusicCard({ song, trackName, trackNumber, trackId, previewUrl, albumCoverSmall, fetchFavoriteSongs, teste }) {
  const [isChecked, setIsChecked] = useState(false);
  const [removed, setRemoved] = useState(false);
  const location = useLocation();

  useEffect(() => {
    renderFavoriteSongs();
    console.log('teste');
  }, [])
  
  
  const renderFavoriteSongs = async() => {
    console.log('teste');
    const favorites = await getFavoriteSongs();
    const checkFavorites = favorites.some((song) => song.trackId === trackId );
    setIsChecked(checkFavorites)
  }
  

  const handleCheckbox = async ({target}) => {

    if (target.checked) {
      await addSong(song);
      await teste()
    } else {
      await removeSong(song);
      await teste()
      await fetchFavoriteSongs();
    }
  }

  return (
  <section>
    <div key={trackId} className={ location.pathname === '/favorites' ? styles.favoriteContainer : styles.songContainer}>
      {(location.pathname === '/favorites') && <img src={albumCoverSmall} />}       
      <p>{`${trackNumber}.${trackName}`}</p>
      <audio className={styles.audioPlayer} src={ previewUrl } controls>
        <track kind="captions" />
          Your browser does not support the element<code>audio</code>.
      </audio>        
        <input
          name={trackName}
          id={trackId}
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckbox}
        />
      <label htmlFor={trackId}>
        ❤
      </label>        
      </div>
  </section>
  )};

export default MusicCard;
