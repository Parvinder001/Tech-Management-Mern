import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <div className="row pageNotFoundMain">
        <div className="header">404</div>
        <h4>Sorry! Page Not Found</h4>

        <p>
          Oops..! It seems like page you`re trying to access doesn`t exits . if
          you believe there`s an issue fell free to report it . and we`ll look
          into it.
        </p>
        <div className="btn">
          <NavLink to="/" className="btn btn-primary">
            Return home
          </NavLink>
          &nbsp; &nbsp;&nbsp;
          <NavLink to="/" className="btn btn-primary">
            Report problem
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
