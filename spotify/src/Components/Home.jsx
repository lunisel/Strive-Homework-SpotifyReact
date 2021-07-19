import { Component } from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import FixedNav from "./FixedHomeNav";
import Loading from "./Loading";
import Navbar from "./Navbar";
import Player from "./Player";

class Home extends Component {
  state = {
    isLoading: false,
  };

  componentDidMount() {
    const handleState = (key, value) => {
      this.setState({
        ...this.state,
        isLoading: false,
        [key]: value,
      });
    };

    const fetchMusic = async (query) => {
      this.setState({
        isLoading: true,
      });
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
        );

        if (response.ok) {
          let items = await response.json();
          handleState(query, items.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchMusic("hits");
    fetchMusic("pop");
    fetchMusic("dance");
  }

  componentDidUpdate(prevS, prevP) {
    if (prevS !== this.state) {
      console.log(this.state);
    }
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
        <div className="home">
          <Row className="row-fixed">
            <FixedNav name={this.props.name} />
          </Row>
          <Row className="good-morning m-0">
            <div className="album-good-morning">
              <h3>Good Morning {this.props.name}</h3>
              {this.state.isLoading && <Loading />}
              <Row xs={5} style={{ display: "flex" }}>
                {this.state.hits &&
                  this.state.hits.slice(0, 5).map((song) => (
                    <Col key={song.id}>
                      <Card>
                        <div className="card-img-cont">
                          <Card.Img
                            variant="top"
                            src={song.album.cover}
                            alt="cover"
                          />
                        </div>
                        <Card.Body>
                          <Card.Title
                            onClick={() =>
                              this.props.history.push("/album/" + song.album.id)
                            }
                          >
                            {song.album.title}
                          </Card.Title>
                          <div
                            className="card-artist"
                            onClick={() =>
                              this.props.history.push(
                                "/artist/" + song.artist.id
                              )
                            }
                          >
                            {song.artist.name}
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </div>
          </Row>
          <Row className="recently-played m-0">
            <div className="album-good-morning">
              <h3>Recently played</h3>
              {this.state.isLoading && <Loading />}
              <Row xs={5} style={{ display: "flex" }}>
                {this.state.pop &&
                  this.state.pop.slice(0, 5).map((song) => (
                    <Col key={song.id}>
                      <Card>
                        <div className="card-img-cont">
                          <Card.Img
                            variant="top"
                            src={song.album.cover}
                            alt="cover"
                          />
                        </div>
                        <Card.Body>
                          <Card.Title onClick={() =>
                              this.props.history.push("/album/" + song.album.id)
                            }>{song.album.title}</Card.Title>
                          <div onClick={() =>
                              this.props.history.push(
                                "/artist/" + song.artist.id
                              )
                            } className="card-artist">{song.artist.name}</div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </div>
          </Row>
          <Row className="recently-played m-0">
            <div className="album-good-morning">
              <h3>Trending Now</h3>
              {this.state.isLoading && <Loading />}
              <Row xs={5} style={{ display: "flex" }}>
                {this.state.dance &&
                  this.state.dance.slice(0, 5).map((song) => (
                    <Col key={song.id}>
                      <Card>
                        <div className="card-img-cont">
                          <Card.Img
                            variant="top"
                            src={song.album.cover}
                            alt="cover"
                          />
                        </div>
                        <Card.Body>
                          <Card.Title onClick={() =>
                              this.props.history.push("/album/" + song.album.id)
                            }>{song.album.title}</Card.Title>
                          <div onClick={() =>
                              this.props.history.push(
                                "/artist/" + song.artist.id
                              )
                            } className="card-artist">{song.artist.name}</div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </div>
          </Row>
        </div>
        <Player />
      </div>
    );
  }
}

export default Home;
