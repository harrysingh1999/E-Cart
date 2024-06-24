import React from "react";
import Button from "../Button";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col w-[50%] h-screen justify-center mx-auto">
      <p className="text-2xl text-red-500 text-center">
        Oops! 404 Page not Found
      </p>
      <NavLink to="/">
        <Button title="Go to Home" />
      </NavLink>
    </div>
  );
}
