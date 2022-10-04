import React from "react";

const ListGroup = (props) => {
  const { items, onClick, selectedGenre } = props;
  return (
    <ul className="list-group">
      {items.map((genre) => (
        <li
          key={genre._id}
          className={
            genre === selectedGenre
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onClick(genre)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "_id",
  valueProperty: "name",
};

export default ListGroup;
