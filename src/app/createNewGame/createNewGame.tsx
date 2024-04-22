"use effect"

import React, { useState, useEffect } from 'react';
import { GameBody } from '../game/interface/GameBody';
import { fetchPlayer, fetchcreateGame } from '../api/apiFinance';
import { findPlayer } from './findPlayer';
import { PlayerInterface } from './findPlayer'
import { XCircleIcon } from '@heroicons/react/24/solid';
import { useSearchParams } from 'next/navigation';
import { PlayerInfo } from '../game/interface/PlayerInfo';
const CreateNewGame: React.FC = () => {
  const searchParams = useSearchParams();
  const [MyPlayerInfo, setPlayerInfo] = useState<PlayerInfo | null>(null);

  const [playerIds, setPlayerIds] = useState<number[]>([]); // List of selected player IDs
  const [seconds, setSeconds] = useState<number>(20)
  const [player, setPlayer] = useState<string>("")
  const [searchResults, setSearchResults] = useState<PlayerInterface[] | null>([]);

  useEffect(() => {
    const fetchData = async () => {
      const playerID = searchParams.get("playerID");

      try {
        if (playerID != null) {
          const playerResponse = await fetchPlayer(playerID);

          if (playerResponse != null) {
            formData.adminId = playerResponse.id
            setPlayerInfo(playerResponse);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchParams]);

  const handleChangeMoveDuration = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value } = e.target;
    setSeconds(parseInt(value))
    formData.moveDuration = `PT${seconds}S`;
  }

  const handleChangePlayer = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value } = e.target;
    setPlayer(value);
    setSearchResults(await findPlayer(value));
  }

  const [formData, setFormData] = useState<GameBody>({
    title: '',
    type: 'HISTORICAL',
    initialDate: '',
    finalDate: '',
    initialBalance: 10000,
    moveDuration: 'PT20S',
    adminId: "0",
    playerIds: playerIds,
  });

  const createGame = () => {
    if (MyPlayerInfo != null) {
      console.log(MyPlayerInfo)
      const finalPlayerIds = playerIds
      if (MyPlayerInfo != null) {
        finalPlayerIds.push(MyPlayerInfo.id)
      }
      formData.playerIds = finalPlayerIds
      fetchcreateGame(formData)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const removePlayer = (idToRemove: number) => {
    // Filter out the player with the specified ID from the playerIds array
    const updatedPlayerIds = playerIds.filter((id) => id !== idToRemove);

    // Update the playerIds state with the filtered array
    setPlayerIds(updatedPlayerIds);

  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add code here to handle form submission, like sending data to server
    console.log('Form submitted:', formData);
    // Clear the form fields
    setFormData({
      title: '',
      type: 'HISTORICAL',
      initialDate: '',
      finalDate: '',
      initialBalance: 0,
      moveDuration: '',
      adminId: "0",
      playerIds: playerIds,
    });
  };

  const addPlayer = (playerId: number) => {
    // Check if the playerId already exists in the playerIds array
    if (!playerIds.includes(playerId)) {
      // If playerId is not already in the array, add it
      setPlayerIds([...playerIds, playerId]);

    } else {
      // If playerId is already in the array, show a message or perform other actions
      alert(`The Player is already in the list.`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-lg">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">Create New Game</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Game Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 h-12 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter game title"
              required
            />
          </div>
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
              Game Type
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="mt-1 h-12 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            >
              <option value="HISTORICAL">Historical</option>
              <option value="LIVE">Live</option>
            </select>
          </div>
          <div>
            <label htmlFor="initialBalance" className="block text-sm font-medium text-gray-700">
              Initial Balance
            </label>
            <input
              type="number"
              id="initialBalance"
              name="initialBalance"
              value={formData.initialBalance}
              defaultValue={10000}
              onChange={handleChange}
              className="mt-1 h-12 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter initial balance"
              required
            />
          </div>
          <div>
            <label htmlFor="initialDate" className="block text-sm font-medium text-gray-700">
              Initial Date
            </label>
            <input
              type="date"
              id="initialDate"
              name="initialDate"
              value={formData.initialDate}
              onChange={handleChange}
              className="mt-1 h-12 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="finalDate" className="block text-sm font-medium text-gray-700">
              Final Date
            </label>
            <input
              type="date"
              id="finalDate"
              name="finalDate"
              value={formData.finalDate}
              onChange={handleChange}
              className="mt-1  h-12 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="moveDuration" className="block text-sm font-medium text-gray-700">
              Daytime Speed (SECONDS)
            </label>
            <input
              type="number"
              id="moveDurationSeconds"
              name="moveDuration"
              value={seconds}
              onChange={handleChangeMoveDuration}
              className="mt-1 h-12 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Move duration in seconds"
              required
            />
          </div>
          <div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Find Player
              </label>
              <input
                type="text"
                id="playerIds"
                name="playerIds"
                value={player}
                onChange={handleChangePlayer}
                className="mt-1 h-12 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Find your friends"
                required
              />
              {/* Display search results */}
              <ul className="divide-y divide-gray-200">
                {searchResults !== null && player !== "" ? (
                  searchResults.map((player) => (
                    <li key={player.id} onClick={() => { addPlayer(player.id); setPlayer(""); setSearchResults(null) }} className="hover:bg-gray-100 cursor-pointer p-2 rounded-md">
                      {player.username}
                    </li>
                  ))
                ) : (
                  <li className="p-2">-------</li>
                )}
              </ul>
              {/* Display selected players */}
              <div>
                <p className="text-lg font-bold mt-4">Selected Players ID's :</p>
                <ul className="divide-y divide-gray-200">
                  {playerIds.map((id) => (
                    <li key={id} className="flex items-center justify-between p-2">
                      <span>{id}</span>
                      <button onClick={() => removePlayer(id)} className="text-red-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <XCircleIcon className="h-8 w-8" />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div>

            {MyPlayerInfo !== null && (
              <a href={`../gamelist?playerID=${MyPlayerInfo.id}`}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent the default behavior of the button click
                    createGame(); // Call the createGame function
                  }}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Create Game
                </button>
              </a>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewGame;
