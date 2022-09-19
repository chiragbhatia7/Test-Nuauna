// import React from "react";
// import ErrorIcon from "@material-ui/icons/Error";
// import "./NotFound.css";
// import { Typography } from "@material-ui/core";
// import { Link } from "react-router-dom";

// const NotFound = () => {
//   return (
//     <div className="PageNotFound">
//       <ErrorIcon />

//       <Typography>Page Not Found </Typography>
//       <Link to="/">Home</Link>
//     </div>
//   );
// };

// export default NotFound;

import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const notFound = () => {
  return (
    <div>
      <div className="page-not-found">
        <h1>
          <i class="fa-solid fa-circle-exclamation"></i>
        </h1>
        <h1>Page Not Found</h1>
        <Link to="/">
          <p>Home</p>
        </Link>
      </div>
    </div>
  );
};

export default notFound;
