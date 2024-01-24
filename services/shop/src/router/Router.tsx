import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { App } from "@/components/App/App";
import { Shop } from "@/pages/shop";
import { UserCard } from "@packages/shared/src/components/UserCard";

const routes = [
  {
    path: "/shop",
    element: <App />,
    children: [
      {
        path: "/shop/main",
        element: (
          <Suspense fallback='Loading...'>
            <Shop />
          </Suspense>
        ),
      },
      {
        path: "/shop/second",
        element: (
          <Suspense fallback='Loading...'>
            <div style={{ color: "pink" }}>
              <h1>second page</h1>
              <UserCard username='Pavel Topsky (From SHOP)' />
            </div>
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
