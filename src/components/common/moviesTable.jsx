import React, { Component } from "react";
import TableHeader from "./tableHeader";
import Like from "./like";
import TableBody from "./tableBody";

class MoviesTable extends Component {
  column = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <table className="table  ">
        <thead>
          <TableHeader
            onSort={onSort}
            sortColumn={sortColumn}
            column={this.column}
          />
        </thead>
        <TableBody data={movies} columns={this.column} />
      </table>
    );
  }
}

export default MoviesTable;
