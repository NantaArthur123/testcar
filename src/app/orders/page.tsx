"use client";

import { cars, orders } from "@/types/cars";
import { useState } from "react";

export default function Order() {
  const [order, setOrder] = useState<orders[]>([]);
  const [car, setCar] = useState<cars[]>([]);

  return (
    <>
      <h1 className="text-2xl font-black flex justify-center items-center">
        Rental App
      </h1>
      <form>
        <div className="flex flex-col gap-2 m-2 p-4 bg-gray-800 rounded">
          <select className="bg-gray-300 rounded p-1 text-black">
            <option>Select Car</option>
            {car.map((car) => (
              <option value=""></option>
            ))}
          </select>
          <div>
            <span>Order Date:</span>
            <input
              type="date"
              className="bg-gray-300 rounded ms-2 text-black p-1 ps-4"
            />
          </div>
          <div>
            <span>Pickup Date:</span>
            <input
              type="date"
              className="bg-gray-300 rounded ms-2 text-black p-1 ps-4"
            />
          </div>
          <div>
            <span>Dropoff Date:</span>
            <input
              type="date"
              className="bg-gray-300 rounded ms-2 text-black p-1 ps-4"
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
            />
          </div>
          <div>
            <button
              className="bg-gray-300 text-black rounded p-1"
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
      <div className=" bg-gray-800 m-2 p-4 rounded">
        <h2 className="text-xl flex flex-col justify-center items-center font-bold mb-2">
          Current Data
        </h2>
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
              {order.map((car) => (
                <tr key={car.car_id}>
                  <td className="bg-gray-600 p-1">{car.order_id}</td>
                  <td className="p-1">{car.dropoff_date}</td>
                  <td className="bg-gray-600 p-1">{car.dropoff_location}</td>
                  <td className="p-1">{car.order_date}</td>
                  <td className="bg-gray-600 p-1">{car.order_id}</td>
                  <td className="bg-gray-600 p-1">{car.pickup_date}</td>
                  <td className="bg-gray-600 p-1">{car.pickup_location}</td>
                  <td className="p-1">
                    <button className="cursor-pointer">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div className="m-2 p-4 bg-gray-800 rounded">
          <h1 className="flex justify-center items-center font-black mb-4">
            EDIT DATA
          </h1>
          <div className="flex flex-col gap-2">
            <div>
              <button className="bg-gray-300 rounded ms-2 text-black p-1 ps-4 w-full">
                Pick ID
              </button>
            </div>
            <div>
              <span>Car Name:</span>
              <input
                type="text"
                className="bg-gray-300 rounded ms-2 text-black p-1 ps-4"
                placeholder="Add new car name.."
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
              />
            </div>
            <div>
              <button
                className="bg-gray-300 text-black rounded p-1"
                type="submit"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
