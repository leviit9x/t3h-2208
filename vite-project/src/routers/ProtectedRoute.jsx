import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { api } from "../configs";

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(false);

  async function checkMe() {
    if (!token) {
      return;
    }
    setIsLoading(true);
    api
      .get("/products")
      .then((data) => {
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    checkMe();
  }, []);

  if (isLoading) {
    return <div>loading.....</div>;
  }

  const _comp = children ?? <Outlet />;

  return token ? (
    _comp
  ) : (
    <Navigate to={{ pathname: "/login" }} state={{ from: location }} />
  );
};
