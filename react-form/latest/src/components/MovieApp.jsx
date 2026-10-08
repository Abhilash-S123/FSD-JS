import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const MovieCards = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);

  //   Booking states

  const [showModal, setShowModal] = useState(false);
  const [selectedMovies, setSelectedMovies] = useState(null);

  const [bookingData, setBookingData] = useState({
    movie: '',
    date: "",
    time: "",
    seatType: "",
    ticket: "1",
    snacks: false,
    request: "",
    agree: false,
  });

  if (bookingData.movie ) {
    console.log('hilll');
    
  }

  console.log(bookingData);

  const fetchAPI = async () => {
    try {
      const resp = await axios.get("https://api.tvmaze.com/shows");
      setMovies(resp.data);
    } catch (error) {
      setError(error.name);
    } finally {
      setLoader(false);
    }
  };

  const handleModal = (movie) => {
    setSelectedMovies(movie);
    setBookingData({ ...bookingData, movie: movie.name });
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { value, name, type, checked } = e.target;
    console.log(value, name, type, checked);
    setBookingData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  if (error) return <h1>{error}</h1>;
  if (loader) return <h1>Loading ...</h1>;

  return (
    <>
      <h1>🎟️ Watch Premiere</h1>

      <Container>
        <Row xs={1} sm={2} md={4} lg={6}>
          {movies.map((movie) => (
            <div key={movie.id}>
              <Cards
                id={movie.id}
                handleModal={handleModal}
                film={movie}
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

      {/* // Modal */}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={() => {}} noValidate>
            <Form.Group className="mb-3">
              <Form.Label>Movie name</Form.Label>
              <Form.Control
                type="text"
                name="movie"
                value={bookingData.movie}
                readOnly
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={bookingData.date}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Label>Show Time</Form.Label>
            <div>
              <Form.Check
                inline
                type="radio"
                name="time"
                checked={bookingData.checked === '2:30 PM'}
                onChange={(e) => handleChange(e)}
                label="2:30 PM"
                value="2:30 PM"
              />
              <Form.Check
                inline
                type="radio"
                name="time"
                checked={bookingData.checked === '6:30 PM'}
                onChange={(e) => handleChange(e)}
                label="6:30 PM"
                value="6:30 PM"
              />
              <Form.Check
                inline
                type="radio"
                name="time"
                checked={bookingData.checked === '8:30 PM'}
                onChange={(e) => handleChange(e)}
                label="8:30 PM"
                value="8:30 PM"
              />
              <Form.Check
                inline
                type="radio"
                name="time"
                checked={bookingData.checked === '10:30 PM'}
                onChange={(e) => handleChange(e)}
                label="10:30 PM"
                value="10:30 PM"
              />
            </div>

            <Form.Label className="mb-2">Tickets</Form.Label>
            <Form.Select
              value={bookingData.ticket}
              onChange={(e) => handleChange(e)}
              name="ticket"
              id=""
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Form.Select>

            {/* <input type="checkbox" /> */}

            <Form.Group>
              <Form.Check
                onChange={(e) => handleChange(e)}
                label="Add popcorn"
                type="checkbox"
                name="snacks"
              ></Form.Check>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group>
              <Form.Check
                onChange={(e) => handleChange(e)}
                label="terms and conditions"
                type="checkbox"
                name="agree"
              ></Form.Check>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button
            variant="primary"
            disabled={!bookingData.agree}
            onClick={() => {}}
          >
            Confirm Booking
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MovieCards;
