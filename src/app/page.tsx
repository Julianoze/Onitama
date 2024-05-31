"use client";

import { consecutiveUniqueRandom } from "unique-random";

export default function Home() {
  // TODO: add translate commom cards, way of wind
  // TODO: add translate to list
  // TODO: add translate to button

  // TODO: fix way of wind md size
  // TODO: add settings
  // TODO: add new game
  // TODO: keep screen on

  const random = consecutiveUniqueRandom(1, 3);

  return (
    <div className="flex w-full justify-center">
      <fieldset className="flex flex-col w-full bg-white rounded-lg m-2 md:max-w-[60%]">
        <div className="flex w-full justify-center mt-4">
          <img
            className="w-[50%] h-[50%] rounded-[100%]"
            src={`/img/logo/logo_${random()}.png`}
          />
        </div>
        <h1 className="text-4xl font-bold text-center text-black mb-4">
          Onitama
        </h1>

        <div className="flex justify-center">
          <button className="bg-red w-fit py-2 px-8 rounded-lg mb-4">
            <a className="font-bold" href="/game">
              Jogar
            </a>
          </button>
        </div>
      </fieldset>
    </div>
  );
}
