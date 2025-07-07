"use client";

import { cars } from "@/types/cars";
import { useEffect, useState } from "react";

export default function Home() {
  const [cars, setCars] = useState<cars[]>([]);

  const [newCarName, setNewCarName] = useState("");
  const [newDayRate, setNewDayRate] = useState("");
  const [newMonthRate, setNewMonthRate] = useState("");
  const [newCarImage, setNewCarImage] = useState("");

  useEffect(() => {
    const fetchCars = async () => {
      const dat = await fetch("/api/cars");
      const data = await dat.json();
      setCars(data);
    };
    fetchCars();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const dat = await fetch("/api/cars", {
      method: "POST",
      body: JSON.stringify({
        car_name: newCarName,
        day_rate: newDayRate,
        month_rate: newMonthRate,
        image: newCarImage,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (dat.ok) {
      const newCar = await dat.json();
      setCars([...cars, newCar]);
    }
  };

  const handleDelete = async (id: number) => {
    await fetch("/api/cars/${id}", { method: "DELETE" });
    setCars(
      cars.filter((cars) => {
        if (cars.car_id !== id) return cars;
      })
    );
  };

  const handleEdit = async (id: string) => {
    await fetch("/api/carss/${id}", {
      method: "EDIT",
      body: JSON.stringify({
        car_name: newCarName,
        day_rate: newDayRate,
        month_rate: newMonthRate,
        image: newCarImage,
      }),
    });
  };

  return (
    <>
      <h1 className="text-2xl font-black flex justify-center items-center">
        Rental App
      </h1>
      <form>
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
              {cars.map((car) => (
                <tr key={car.car_id}>
                  <td className="p-1">{car.car_name}</td>
                  <td className="bg-gray-600 p-1">{car.day_rate}</td>
                  <td className="p-1">{car.month_rate}</td>
                  <td className="bg-gray-600 p-1">{car.image}</td>
                  <td className="p-1">
                    <button
                      className="cursor-pointer"
                      onClick={() => handleDelete(car.car_id)}
                    >
                      Delete
                    </button>
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
