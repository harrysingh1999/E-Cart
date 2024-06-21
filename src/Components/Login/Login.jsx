import { useState } from "react";
import Button from "../Button";

export default function Login() {
  const [login, setLogin] = useState(true);
  const [forgotPassword, setForgotPassword] = useState(false);

  return (
    <div className="mx-auto flex py-52 flex-col items-center justify-center w-[80%] md:w-[60%] lg:w-[30%]">
      <h1 className="text-3xl">{login ? "LOGIN" : "REGISTER"}</h1>
      <p className="my-5 text-sm">
        {login
          ? "Please enter your e-mail and password:"
          : "Please fill in the information below:"}
      </p>
      <form
        className="flex flex-col justify-space w-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Username"
          className="border border-black/20 rounded-md px-4 py-2 w-full focus:outline-none"
        />

        <div
          className={`border border-black/20 rounded-md py-2 my-4 ${
            login ? "flex justify-around px-1" : "flex-none px-4"
          } `}
        >
          <input
            type="password"
            placeholder="Password"
            className="focus:outline-none px-4 w-full"
          />
          {login && (
            <button
              className="text-sm w-40 font-thin hover:text-blue-700"
              onClick={() => setForgotPassword((prevState) => !prevState)}
            >
              forgot Password?
            </button>
          )}
        </div>
        {forgotPassword && (
          <input
            type="text"
            placeholder="Enter your Email Address"
            className="border border-black/20 rounded-md px-4 py-2 w-full focus:outline-none"
          />
        )}
        {!login && (
          <input
            type="email"
            placeholder="Email"
            className="border border-black/20 rounded-md px-4 py-2 w-full focus:outline-none"
          />
        )}
        {!login && (
          <input
            type="number"
            placeholder="Mobile"
            className="border border-black/20 rounded-md my-4 px-4 py-2 w-full focus:outline-none"
          />
        )}
        {!login && (
          <input
            type="text"
            placeholder="First Name"
            className="border border-black/20 rounded-md px-4 py-2 w-full focus:outline-none"
          />
        )}
        {!login && (
          <input
            type="text"
            placeholder="Last Name"
            className="border border-black/20 rounded-md my-4 px-4 py-2 w-full focus:outline-none"
          />
        )}

        {!login && <p>Address Information:</p>}
        {!login && (
          <input
            type="text"
            placeholder="Address (House No, Building, Street, Area)"
            className="border border-black/20 rounded-md my-4 px-4 py-2 w-full focus:outline-none"
          />
        )}
        {!login && (
          <input
            type="text"
            placeholder="Locality / Town"
            className="border border-black/20 rounded-md px-4 py-2 w-full focus:outline-none"
          />
        )}
        {!login && (
          <input
            type="text"
            placeholder="City / District"
            className="border border-black/20 rounded-md my-4 px-4 py-2 w-full focus:outline-none"
          />
        )}
        {!login && (
          <input
            type="number"
            placeholder="Pin Code"
            className="border border-black/20 rounded-md px-4 py-2 w-full focus:outline-none"
          />
        )}
        {forgotPassword ? (
          <Button
            title="Change Password"
            handleClick={(e) => e.preventDefault()}
          />
        ) : (
          <Button
            title={login ? "LOGIN" : "CREATE MY ACCOUNT"}
            handleClick={(e) => e.preventDefault()}
          />
        )}
      </form>
      <div className="flex items-center text-sm">
        <span className="">
          {login ? "Dont have an account?" : "Already a user?"}
        </span>
        <button
          className="hover:text-blue-700 ms-2 text-lg "
          onClick={() => setLogin((prevState) => !prevState)}
        >
          {" "}
          {login ? "Create One" : "Login"}
        </button>
      </div>
    </div>
  );
}
