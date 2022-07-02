import { useState, useEffect } from 'react';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import styles from './MusicCard.module.css';

function MusicCard({ song, trackName, trackNumber, trackId, previewUrl, url, albumCoverSmall }) {
  const [isChecked, setIsChecked] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    fetchFavoriteSongs();
  }, [])
  
  
  const fetchFavoriteSongs = async() => {
    const favorites = await getFavoriteSongs();
    const checkFavorites = favorites.some((song) => song.trackId === trackId );
    setIsChecked(checkFavorites)
  }
  

  const handleCheckbox = async ({target}) => {
    if (target.checked) {
      await addSong(song);
      fetchFavoriteSongs();
    } else {
      await removeSong(song);
      fetchFavoriteSongs();
    }
  }

  return (
  <section>
    <div key={trackId} className={ url === '/favorites' ? styles.favoriteContainer : styles.songContainer}>
      {(url === '/favorites') && <img src={albumCoverSmall} />}       
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
