import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/pagination";
import PropTypes from "prop-types";
// import genre from "./genre";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    selectedGenre: "",
    pageSize: 4,
  };
  componentDidMount() {
    const genres = [{ name: "All movies" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (e) => {
    const movies = this.state.movies.filter((m) => m._id !== e._id);
    this.setState({ movies });
  };

  handleClicked = (movie) => {
    let movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
    // console.log(genre);
  };

  render() {
    let { length: count } = this.state.movies;

    if (count === 0) return <h1>No movies in the database</h1>;
    const {
      currentPage,
      pageSize,
      selectedGenre,
      movies: allMovies,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const movies = paginate(filtered, currentPage, pageSize);
    return (
      <>
        <br />
        <br />
        <br />
        <div className={"row"}>
          <div className={"col-md-3 offset-1  "}>
            <ListGroup
              items={this.state.genres}
              selectedGenre={this.state.selectedGenre}
              onClick={this.handleGenreSelect}
            />
          </div>
          <div className=" col-md-8 ">
            <h1>Showing {filtered.length} Movies:</h1>
            <table className="table  ">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Stock</th>
                  <th>Rate</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {movies.map((movie) => (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <Like
                        liked={movie.liked}
                        onClick={() => this.handleClicked(movie)}
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => this.handleDelete(movie)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              itemCount={filtered.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Movies;
