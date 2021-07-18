import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";

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
    <Container fluid>
      <Row>{artist && <div>{artist.name}</div>}</Row>
    </Container>
  );
};

export default Artist;
