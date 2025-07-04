import { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";

import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/contexts/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const data = {
      name: "Vinayak Gosain",
    };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ user_name: userName, setUserName }}>
      <div>
        {/* <UserContext.Provider value={{ user_name: "Modi Ji" }}> */}
        <Header />
        {/* </UserContext.Provider> */}
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        path: "/",
        Component: Body,
      },
      {
        path: "/resMenu/:resId",
        Component: RestaurantMenu,
      },
      {
        path: "/about",
        Component: AboutUs,
      },
      {
        path: "/contact",
        Component: ContactUs,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
