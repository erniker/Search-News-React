import React from "react";
import New from "./New";
import PropTypes from "prop-types";

const NewsList = ({ news }) => {
  return (
    <div className="row">
      {news.map((theNew) => (
        <New key={theNew.url} theNew={theNew} />
      ))}
    </div>
  );
};

NewsList.propTypes = {
  news: PropTypes.array.isRequired,
};

export default NewsList;
