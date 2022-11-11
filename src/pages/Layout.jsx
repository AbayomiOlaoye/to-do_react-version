import { Outlet, Link } from 'react-router-dom';

const Layout = () => (
  <>
    <nav className="navBar">
      <ul>
        <li>
          <Link to="/" activeClassName="active-link">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
);
export default Layout;
