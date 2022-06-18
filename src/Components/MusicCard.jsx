import { useState, useEffect } from 'react';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import styles from './MusicCard.module.css';

function MusicCard({songs}) {
  const [isChecked, setIsChecked] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    fetchFavoriteSongs();
  }, [])

  const fetchFavoriteSongs = async() => {
    const favorites = await getFavoriteSongs();
    const checkFavorites = favorites.some((song) => song.trackId === id );
    console.log(favorites);
  }
  
  const handleCheckbox = async ({target}) => {    
    setId(target.id);
    const addedToFavorites = songs.find((song) => song.trackName === target.name);
    (target.checked ? 
      await addSong(addedToFavorites) : 
      await removeSong(addedToFavorites));    
  }

  return(
  <section className={styles.container}>
    {songs.map(({
      trackId,
      trackName, 
      trackNumber,
      previewUrl
    }) => {
      return (
      <div key={trackId} className={styles.songContainer}>        
        <p>{`${trackNumber}.${trackName}`}</p>
        <audio src={ previewUrl } controls>
          <track kind="captions" />
            Your browser does not support the element<code>audio</code>.
        </audio>        
          <input
            name={trackName}
            id={trackId}
            type="checkbox"
            onChange={handleCheckbox}
          />
        <label htmlFor={trackId}>
          ❤
        </label>        
      </div>
    )})}
  </section>)
};

export default MusicCard;
