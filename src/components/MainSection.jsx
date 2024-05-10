import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import {
  fetchGenre,
  fetchHiphop,
  fetchPop,
  fetchRock,
  AddToFavorites,
  RemoveFromFavorites,
  playSong,
} from "../redux/actions";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

import { useState } from "react";

const MainSection = () => {
  const dispatch = useDispatch();
  const musicGenre = useSelector((state) => state.genres);
  const favoriteSongs = useSelector((state) => state.favoriteSongs.content);
  const searchResults = useSelector((state) => state.searchInput.content);
  const [searchedSongs, setSearchedSongs] = useState([]);

  useEffect(() => {
    dispatch(fetchGenre("katyperry", fetchPop));
    dispatch(fetchGenre("queen", fetchRock));
    dispatch(fetchGenre("eminem", fetchHiphop));

    if (searchResults) {
      const fetchSearchResults = async () => {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchResults);
        const data = await response.json();

        setSearchedSongs(data.data);
      };

      fetchSearchResults();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchResults]);

  return (
    <Col xs={12} md={9} className="offset-md-3 mainPage">
      <Container>
        <Row>
          <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </Col>
        </Row>
        {searchResults && (
          <Row className="mt-5">
            <Col xs={10}>
              <div id="searchedSongs">
                <h2 className="text-white">
                  Search Results for {searchResults.charAt(0).toUpperCase() + searchResults.slice(1)}
                </h2>
                <Row
                  className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="searchedSongsSection"
                >
                  {searchedSongs.map(
                    (song, index) =>
                      index < 8 && (
                        <Col key={index} className="text-center py-2">
                          <img className="img-fluid" src={song.album.cover_medium} alt="track" />
                          <p>
                            Track: {song.title}
                            <br />
                            Artist: {song.artist.name}
                          </p>
                          <FaPlay className="text-white me-3" onClick={() => dispatch(playSong(song))} />
                          {favoriteSongs.includes(song.id) ? (
                            <FaHeart className="text-success" onClick={() => dispatch(RemoveFromFavorites(song.id))} />
                          ) : (
                            <CiHeart className="text-white" onClick={() => dispatch(AddToFavorites(song.id))} />
                          )}
                        </Col>
                      )
                  )}
                </Row>
              </div>
            </Col>
          </Row>
        )}

        <Row>
          <Col xs={10}>
            <div id="rock">
              <h2>Rock Classics</h2>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
                {musicGenre.rock.map(
                  (song, index) =>
                    index < 4 && (
                      <Col key={index} className="text-center">
                        <img className="img-fluid" src={song.album.cover_medium} alt="track" />
                        <p>
                          Track: {song.title}
                          <br />
                          Artist: {song.artist.name}
                        </p>
                        <FaPlay className="text-white me-3" onClick={() => dispatch(playSong(song))} />
                        {favoriteSongs.includes(song.id) ? (
                          <FaHeart className="text-success" onClick={() => dispatch(RemoveFromFavorites(song.id))} />
                        ) : (
                          <CiHeart onClick={() => dispatch(AddToFavorites(song.id))} />
                        )}
                      </Col>
                    )
                )}
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            <div id="pop">
              <h2>Pop Culture</h2>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
                {musicGenre.pop.map(
                  (song, index) =>
                    index < 4 && (
                      <Col key={index} className="text-center">
                        <img className="img-fluid" src={song.album.cover_medium} alt="track" />
                        <p>
                          Track: {song.title}
                          <br />
                          Artist: {song.artist.name}
                        </p>
                        <FaPlay className="text-white me-3" onClick={() => dispatch(playSong(song))} />
                        {favoriteSongs.includes(song.id) ? (
                          <FaHeart className="text-success" onClick={() => dispatch(RemoveFromFavorites(song.id))} />
                        ) : (
                          <CiHeart onClick={() => dispatch(AddToFavorites(song.id))} />
                        )}
                      </Col>
                    )
                )}
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            <div id="hiphop">
              <h2>HipHop</h2>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection">
                {musicGenre.hiphop.map(
                  (song, index) =>
                    index < 4 && (
                      <Col key={index} className="text-center">
                        <img className="img-fluid" src={song.album.cover_medium} alt="track" />
                        <p>
                          Track: {song.title}
                          <br />
                          Artist: {song.artist.name}
                        </p>
                        <FaPlay className="text-white me-3" onClick={() => dispatch(playSong(song))} />
                        {favoriteSongs.includes(song.id) ? (
                          <FaHeart className="text-success" onClick={() => dispatch(RemoveFromFavorites(song.id))} />
                        ) : (
                          <CiHeart onClick={() => dispatch(AddToFavorites(song.id))} />
                        )}
                      </Col>
                    )
                )}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default MainSection;
