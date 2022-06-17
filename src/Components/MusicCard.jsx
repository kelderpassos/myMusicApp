import styles from './MusicCard.module.css';

function MusicCard({songs}) {
  return(
  <section className={styles.container}>
    {songs.map((music) => 
      <div className={styles.songContainer}>        
        <p>{music.trackName}</p>
        <audio src={ music.previewUrl } controls>
          <track kind="captions" />
            O seu navegador não suporta o elemento <code>audio</code>.
        </audio>
        <input type="checkbox" />
      </div>
    )}
  </section>)
};

export default MusicCard;
