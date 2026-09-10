import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Cards from "./Cards";

const Watchlist = ({ watchList, setwatchList }) => {
  const deleteFunction = (id) => {
    setwatchList(watchList.filter((film) => film.id !== id));
    // updatedWatchList = updatedWatchList.filter((film) => film.id !== id);
  };

  return (
    <>
      {watchList.length > 0 ? (
        <Container>
          <Row xs={1} md={4}>
            {watchList.map((movie) => (
              <div key={movie.id}>
                <Cards
                  list={[]}
                  id={movie.id}
                  image={movie.image.medium}
                  name={movie.name}
                  genre={movie.genres}
                  rating={movie.rating.average}
                  year={movie.premiered}
                ></Cards>
                <button
                  onClick={() => {
                    deleteFunction(movie.id);
                  }}
                  className="btn btn-danger w-100  "
                >
                  Remove
                </button>
              </div>
            ))}
          </Row>
        </Container>
      ) : (
        <h2 className="mt-3">No movies in watchlist</h2>
      )}
    </>
  );
};

export default Watchlist;
