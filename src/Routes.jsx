import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "pages/NotFound";
const Portfolio = React.lazy(() => import("pages/Portfolio"));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Portfolio />,
    errorElement:<NotFound />,
    children: [
      { index: true, element: <Portfolio /> },
    ],
  },
],
{basename:"/Portfolio/"}
);  
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
        <RouterProvider router={router} />
     </React.Suspense> 
    
  );
};
export default ProjectRoutes;
