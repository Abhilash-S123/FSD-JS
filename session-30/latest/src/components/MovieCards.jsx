import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import Loading from "./Loading";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Watchlist from "./Watchlist";
import Row from "react-bootstrap/Row";

const MovieCards = () => {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");
  const [loader, setLoader] = useState(false);
  const [watchlist, setWatchlist] = useState([]);
  const [watchlistBoolean, setWatchlistBoolean] = useState(true);

  const addToWatchList = (film) => {
    if (watchlist.some((cinema) => cinema === film)) return;
    setWatchlist([...watchlist, film]);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.genres.some((genre) =>
      genre.toLocaleLowerCase().includes(input.toLocaleLowerCase()),
    ),
  );

  const fetchApi = async () => {
    try {
      const resp = await axios.get("https://api.tvmaze.com/shows");
      setMovies(resp.data);     
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(true);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  if (loader)
    return (
      <>
        <h1>Watch Premiere</h1>

        <section className="">
          <button className="btn btn-primary me-2" onClick={() => setInput("")}>
            All
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => setInput("Action")}
          >
            Action
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => setInput("Comedy")}
          >
            Comedy
          </button>
          <button className="btn btn-primary" onClick={() => setInput("Drama")}>
            Drama
          </button>
        </section>

        <section>
          <button
            onClick={() => setWatchlistBoolean(!watchlistBoolean)}
            className="btn btn-danger mt-2"
          >
            Watchlist
          </button>
        </section>

        {watchlistBoolean ? (
          filteredMovies.length > 0 && (
            <Container>
              <Row xs={1} md={4}>
                {filteredMovies.map((movie) => (
                  <div key={movie.id}>
                    <Cards
                      addToWatchList={addToWatchList}
                      list={watchlist}
                      film={movie}
                      id={movie.id}
                      image={movie.image.medium}
                      name={movie.name}
                      genre={movie.genres}
                      rating={movie.rating.average}
                      year={movie.premiered}
                    ></Cards>
                  </div>
                ))}
              </Row>
            </Container>
          )
        ) : (
          <Watchlist watchList={watchlist} setwatchList={setWatchlist} />
        )}
      </>
    );
  else return <Loading />;
};

export default MovieCards;
