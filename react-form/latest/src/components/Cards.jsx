import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";

const Cards = ({ image, name, genre, rating, year, id, handleModal}) => {
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

          <Button onClick={() => handleModal({name, id, image})} className="btn btn-dark mt-2" variant="primary">
            Book Now
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
