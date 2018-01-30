import React from "react";
import { Link } from "react-router-dom";

const LinkDetail = props => {
  return (
    <div>
      <Link className="" to={props.word}>
        {window.location.origin}/{props.word}
      </Link>
    </div>
  );
};

export default LinkDetail;
