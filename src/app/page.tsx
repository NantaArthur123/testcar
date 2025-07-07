"use client";

import { cars } from "@/types/cars";
import { useState } from "react";

export default function Home() {
  const [car, setCar] = useState<cars[]>([]);
  const [newCarName, setNewCarName] = useState("");
  const [newDayRate, setNewDayRate] = useState("");
  const [newMonthRate, setNewMonthRate] = useState("");
  const [newCarImage, setNewCarImage] = useState("");
  const [filterPrice, setFilterPrice] = useState(0);
  const handleFilterbyPrice = (e: number) => {
    setFilterPrice(e);
    console.log(filterPrice);
  };
  const handleSubmit = () => {
    const newcar = {
      car_id: Date.now(),
      car_name: newCarName,
      day_rate: newDayRate,
      month_rate: newMonthRate,
      image: newCarImage,
    };

    setCar([...car, newcar]);
  };

  return (
    <>
      <h1 className="text-2xl font-black flex justify-center items-center">
        Rental App
      </h1>
      <>
        <div className="flex flex-col gap-2 m-2 p-4 bg-gray-800 rounded">
          <div>
            <span>Car Name:</span>
            <input
              type="text"
              className="bg-gray-300 rounded ms-2 text-black p-1 ps-4"
              placeholder="Add new car name.."
              onChange={(e) => setNewCarName(e.target.value)}
            />
          </div>
          <div>
            <span>Day Rate:</span>
            <input
              type="number"
              name=""
              id=""
              className="bg-gray-300 rounded ms-2 text-black p-1 ps-4"
              placeholder="Rp. 300.000"
              onChange={(e) => setNewDayRate(e.target.value)}
            />
          </div>
          <div>
            <span>Month Rate:</span>
            <input
              type="number"
              name=""
              id=""
              className="bg-gray-300 rounded ms-2 text-black p-1 ps-4"
              placeholder="Rp. 9.000.000.."
              onChange={(e) => setNewMonthRate(e.target.value)}
            />
          </div>
          <div>
            <span>Image URL:</span>
            <input
              type="text"
              name=""
              id=""
              className="bg-gray-300 rounded ms-2 text-black p-1 ps-4"
              placeholder="img url.."
              onChange={(e) => setNewCarImage(e.target.value)}
            />
          </div>
          <div>
            <button
              className="bg-gray-300 text-black rounded p-1"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </>
      <div className=" bg-gray-800 m-2 p-4 rounded">
        <h2 className="text-xl flex flex-col justify-center items-center font-bold mb-2">
          Current Data
        </h2>
        <div className="flex flex-row gap-2">
          <span>Filter: </span>
          <div className="">
            <input
              type="checkbox"
              className="cursor-pointer"
              onChange={() => handleFilterbyPrice(35000000)}
              checked={filterPrice == 35000000}
            />
            <button
              className="ps-2 cursor-pointer"
              onClick={() => handleFilterbyPrice(35000000)}
            >
              Under 35.000.000
            </button>
          </div>
          <div className="">
            <input
              type="checkbox"
              className="cursor-pointer"
              onChange={() => handleFilterbyPrice(55000000)}
              checked={filterPrice == 55000000}
            />
            <button
              className="ps-2 cursor-pointer"
              onClick={() => handleFilterbyPrice(55000000)}
            >
              Under 55.000.000
            </button>
          </div>
          <div className="">
            <input
              type="checkbox"
              className="cursor-pointer"
              onChange={() => handleFilterbyPrice(75000000)}
              checked={filterPrice == 75000000}
            />
            <button
              className="ps-2 cursor-pointer"
              onClick={() => handleFilterbyPrice(75000000)}
            >
              More Than 75.000.000
            </button>
          </div>
        </div>
        <div className="bg-gray-700 rounded">
          <table className="table-fixed w-full">
            <thead>
              <tr>
                <th className="bg-gray-500 rounded-tl p-1">Name</th>
                <th className="bg-gray-500  p-1">Day Rate</th>
                <th className="bg-gray-500  p-1">Month Rate</th>
                <th className="bg-gray-500  p-1">Image URL</th>
                <th className="bg-gray-500 rounded-tr p-1">Delete</th>
              </tr>
            </thead>
            <tbody>
              {car.map((car) => (
                <tr key={car.car_id}>
                  <td className="p-1">{car.car_name}</td>
                  <td className="bg-gray-600 p-1">{car.day_rate}</td>
                  <td className="p-1">{car.month_rate}</td>
                  <td className="bg-gray-600 p-1">{car.image_url}</td>
                  <td className="p-1">
                    <button className="cursor-pointer">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
