"use client";
import React from "react";

import { GameTableProps } from "../game/interface/GameTableProps";
import GameRowComponent from "./CreateRowComponent"

export default function GameTable({ playerInfo }: GameTableProps) {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/riva-dashboard-tailwind/riva-dashboard.css"
      />
      <div className="flex flex-wrap -mx-3 mb-5">
        <div className="w-full max-w-full px-3 mb-6 mx-auto">
          <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
            <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
              {/* card header */}
              <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                  <span className="mr-3 font-semibold text-dark">Welcome {playerInfo.username}</span>
                  <span className="mt-1 font-medium text-secondary-dark text-lg/normal">My Games </span>
                </h3>
                <div className="relative flex flex-wrap items-center my-2">
                  <button
                    onClick={() => {
                      window.location.href = `../createNewGame?playerID=${playerInfo.id}`;
                    }}
                    className="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"
                  >
                    Create new Game
                  </button>              </div>

              </div>
              {/* end card header */}
              {/* card body  */}
              <div className="flex-auto block py-8 pt-6 px-9">
                <div className="overflow-x-auto">
                  <table className="w-full my-0 align-middle text-dark border-neutral-200">
                    <thead className="align-bottom">
                      <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                        <th className="pb-3 pl-0 pr-3 text-start min-w-">GAME</th>
                        <th className="pb-3 pr-3 text-end min-w-[200px]">OWNER</th>
                        <th className="pb-3 pr-3 text-end min-w-[100px]">PROGRESS</th>
                        <th className="pb-3 pr-3 text-end min-w-[175px]">START</th>
                        <th className="pb-3 pr-3 text-end min-w-[170px]">DEADLINE</th>
                        <th className="pb-3 pr-0 text-end min-w-[50px]">NB PLAYERS</th>
                        <th className="pb-3 pr-0 text-end min-w-[50px]">PLAY</th>

                      </tr>
                    </thead>
                    <tbody>
                      {/* Row  */}
                      {playerInfo.wallets.map((game) => (
                        <GameRowComponent idGame={game.gameId} idPlayer={playerInfo.id} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* end card body */}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
