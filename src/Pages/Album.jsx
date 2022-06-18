import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import { Loading } from '../Components/Loading';
import MusicCard from '../Components/MusicCard';
import getMusics from '../services/musicsAPI';
import styles from './Album.module.css';

export function Album() {
  const [artistInfo, setArtistInfo] = useState({});
  const [albumInfo, setAlbumInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const {id} = useParams();
  
  useEffect(() => {
    const fetchSongs = async () => {
      setLoading(true);
      const response = await getMusics(id)
      setArtistInfo(response[0]);
      setAlbumInfo(response);
      setLoading(false);
    };

    fetchSongs();
  }, []);

  const songs = albumInfo.filter((song) => song.kind === 'song');

  return (
    <div>
      <Header />
      {loading && <Loading />}
      <main>
        <section className={styles.container}>
          <div className={styles.artistInfo}>
            <img src={artistInfo.artworkUrl100}></img>
            <h4>{artistInfo.collectionName}</h4>
          </div>
          <MusicCard songs={songs}/>
        </section>
      </main>
    </div>
  )
}

export default Album;
