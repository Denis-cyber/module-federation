import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { App } from "@/components/App/App";
import { About } from "@/pages/about";
import { adminRoutes } from "@packages/shared/src/routes/admin";

const routes = [
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: adminRoutes.about,
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
