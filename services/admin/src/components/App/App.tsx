import { Outlet } from "react-router-dom";
import { UserCard } from "@packages/shared/src/components/UserCard";

export const App = () => (
  <div>
    <h1>ADMIN MODULE</h1>
    <Outlet />
    <UserCard username='Pavel Topsky (From ADMIN)' />
  </div>
);
