import React from "react";
import { Routes, Route } from "react-router-dom";
import { Pages } from "../pages";

const Routers = [
  {
    path: "/",
    component: Pages.HomePage,
    child: [],
    isProtected: false,
  },
  {
    path: "/login",
    component: Pages.LoginPage,
    child: [],
  },
  {
    path: "/products",
    component: Pages.Products,
    child: [
      {
        path: "/:id",
        component: Pages.ProductDetail,
      },
      {
        path: "/preview/:id",
        component: Pages.ProductDetailPreview,
      },
    ],
  },
  {
    path: "/profile",
    component: Pages.Profile,
    child: [
      {
        path: "/settings",
        component: Pages.Settings,
      },
    ],
  },
];

export default function RootRouter() {
  return (
    <Routes>
      {Routers.map(({ path, component: Component, child }) =>
        !!child.length ? (
          <Route key={path} path={path}>
            <Route index element={<Component />} />
            {child.map(({ path: childPath, component: ChildComponent }) => (
              <Route
                path={path + childPath}
                element={<ChildComponent />}
                key={childPath}
              />
            ))}
          </Route>
        ) : (
          <Route key={path} path={path} element={<Component />} />
        )
      )}
    </Routes>
  );
}
