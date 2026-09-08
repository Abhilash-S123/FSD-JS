import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";

const Cards = ({
  image,
  name,
  genre,
  rating,
  year,
  id,
  film,
  addToWatchList,
  list,
}) => {
  const [exist, setExist] = useState(false);
  const filmExist = list.some((movie) => movie.id === id);

  useEffect(() => {
    setExist(filmExist);
  }, [filmExist]);

  return (
    <>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          {genre.map((genre, i) => (
            <div key={i}>
              <p className="">{genre}</p>
            </div>
          ))}
          <Card.Title> Year of release {year}</Card.Title>
          <Card.Title>Rating - {rating}</Card.Title>
          {addToWatchList ? (
            <Button
              onClick={() => {
                addToWatchList(film, id);
              }}
              className="btn btn-secondary"
              variant="primary"
            >
              {exist ? "Added" : "Add to watch list"}
            </Button>
          ) : (
            ""
          )}

          <Button className="btn btn-dark mt-2" variant="primary">
            Watch Now
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
