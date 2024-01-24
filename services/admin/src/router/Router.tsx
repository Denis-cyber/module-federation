import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { App } from "@/components/App/App";
import { About } from "@/pages/about";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback='Loading...'>
            <About />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
