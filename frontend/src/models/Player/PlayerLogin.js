import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

import image from "../../assets/imagem_conhecimento.jpg";

export default function PlayerLogin({ size }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-t from-white to-color2">
      <div className="bg-white min-h-[450px] h-[90%] w-[90%] lg:h-[700px] lg:w-[1200px] rounded-lg drop-shadow-xl flex flex-row">
        {size >= 1024 && (
          <div className="w-1/2 h-full flex items-center justify-center">
            <img
              src={image}
              alt="image"
              className="aspect-auto w-[500px] ml-10"
            />
          </div>
        )}
        <form className="w-full lg:w-1/2 flex justify-center flex-col items-center">
          <div className="mb-8 text-3xl">Player Login</div>
          <div className="flex items-center px-3 h-12 w-96 bg-stone-200  rounded-3xl mb-3">
            <FontAwesomeIcon
              icon={faUser}
              className="text-2xl  text-neutral-500 ml-2.5"
            />
            <input
              className="outline-0 ml-3 bg-inherit w-full"
              type="text"
              id="username"
              name="username"
              value={username}
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div className="flex items-center px-3 h-12 w-96 bg-stone-200  rounded-3xl mb-5">
            <FontAwesomeIcon
              icon={faLock}
              className="text-2xl  text-neutral-500 ml-2.5"
            />
            <input
              className="outline-0 ml-3 bg-inherit w-full"
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button className="flex items-center justify-center h-12 w-96 rounded-3xl cursor-pointer bg-color1 text-lg">
            LOGIN
          </button>
          <div className="w-full text-center my-5">______________________</div>
          <div className="w-full text-center">Don't have an account?</div>
          <div className="w-full text-center mt-5 cursor-pointer hover:text-color1 hover:underline duration-100 font-bold">
            Create an account now!
          </div>
        </form>
      </div>
    </div>
  );
}