import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate, NavLink } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate()

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.tvmaze.com/shows/${id}`
        );

        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>

         {/* Using different method to navigate but href refreshes the page */}
      <Link to="/">← Back</Link>
      <button onClick={() => navigate(-1)} > Go Back</button>
      <NavLink to='/'>← Back</NavLink>
      <a href="/">← Back</a>



      <h1>{movie.name}</h1>

      {movie.image && (
        <img
          src={movie.image.medium}
          alt={movie.name}
        />
      )}

      <p>
        <strong>Language:</strong> {movie.language}
      </p>

      <p>
        <strong>Genres:</strong> {movie.genres.join("-")}
      </p>

      <p>
        <strong>Rating:</strong>{" "}
        {movie.rating.average || "N/A"}
      </p>

      <div
        dangerouslySetInnerHTML={{
          __html: movie.summary,
        }}
      />
    </div>
  );
}

export default MovieDetails;