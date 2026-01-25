export function Header(props: {
  title: string;
  aboutText: string;
  darkMode: boolean;
  toggleMode: () => void;
}) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${
          props.darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'
        }`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {props.aboutText}
                </a>
              </li>
            </ul>

            <div className="form-check form-switch me-3">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="switchCheckDefault"
                onChange={props.toggleMode}
              />
              <label className={`form-check-label ${props.darkMode ? 'text-light' : 'text-dark'}`} htmlFor="switchCheckDefault">
                {props.darkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
              </label>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

// https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-proptypes-and-defaultprops

// Header.propTypes = {
//     title: PropTypes.string,
// }
// Header.defaultProps = {
//     title: "Set title here",
// }

export default Header;
