import { Link, Outlet } from "react-router-dom";

export const App = () => (
  <div data-testid={"App.DataTestId"}>
    <h1>Page</h1>

    <Link to={"/about"}>About</Link>
    <br />
    <Link to={"/shop/main"}>Shop</Link>
    <Outlet />
  </div>
);
