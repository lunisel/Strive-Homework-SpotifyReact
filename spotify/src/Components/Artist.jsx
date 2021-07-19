import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import FixedNav from "./FixedHomeNav";
import Navbar from "./Navbar";
import Player from "./Player";

const Artist = (props) => {
  const [artist, setArtist] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  let id = props.match.params.name;

  const fetchMusic = async () => {
    setIsLoading(true);
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/" + id
      );

      if (response.ok) {
        let items = await response.json();
        setIsLoading(false);
        setArtist(items);
        console.log(items);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMusic();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <div className="artist-main">
        <FixedNav />
        <Row className="artist-top">
          {artist && (
            <div className="artist-top">
              <img
                className="img-artist-top img-fluid"
                src={artist.picture_big}
              />
              <h1>{artist.name}</h1>
            </div>
          )}
        </Row>
      </div>
      <Player />
    </div>
  );
};

export default Artist;
