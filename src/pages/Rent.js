import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Card } from "../components/Card";
import "react-datepicker/dist/react-datepicker.css";
import { estates } from "../data/estates";

export const Rent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [data, setData] = useState([
    {
      Name: "Semi Rich Thane",
      price: 600,
      address: " near Thane",
      location: "Mumbai",
      beds: 12,
      bathrooms: 5,
      size: "21x28m",
      propertyType: "Flat",
      image: "https://picsum.photos/400/200?random=57",
    },
    {
      Name: "Semi Rich",
      price: 600,
      address: "Opp Raheja",
      location: "Bangalore",
      beds: 3,
      bathrooms: 2,
      size: "1x8m",
      propertyType: "Bangalow",
      image: "https://picsum.photos/400/200?random=97",
    },
  ]);
  const [input, setInput] = useState();
  const [locationValue, setLocationValue] = useState("Bangalore");
  const [priceStartValue, setPriceStartValue] = useState(100);
  const [priceEndValue, setPriceEndValue] = useState(500);
  const [propertyTypeValue, setPropertyTypeValue] = useState("Flat");

  const master = (
    array,
    locationValue,
    propertyTypeValue,
    priceStartValue,
    priceEndValue
  ) => {
    let tempArray = [];
    let x = 0;

    for (x of array) {
      if (x["location"] === locationValue) {
        if (x["propertyType"] === propertyTypeValue) {
          if (x["price"] >= priceStartValue && priceEndValue >= x["price"])
            tempArray.push(x);
        }
      }
    }
    return tempArray;
  };

  const runQuery = function (e) {
    const answer = master(
      estates,
      locationValue,
      propertyTypeValue,
      priceStartValue,
      priceEndValue
    );
    setData(answer);
    console.log(answer);
    e.preventDefault();
  };

  const text = (array, text) => {
    let tempArray = [];
    let x = 0;

    for (x of array) {
      if (x["Name"].includes(text)) {
        console.log(x);
        tempArray.push(x);
      }
    }
    return tempArray;
  };

  const inputHandler = (e) => {
    setInput(e.target.value);
    const textanswer = text(estates, input);
    setData(textanswer);
  };

  return (
    <>
      <div className="bg-gray-100 h-screen">
        <div className="mx-32 py-5 pt-10 flex justify-between ">
          <p className="text-4xl font-medium">Search Property to rent</p>
          <form>
            <input
              type="text"
              onChange={inputHandler}
              className="p-2 rounded border-[1px] "
              placeholder="Search with Search Bar"
            ></input>
          </form>
        </div>

        <div className="mx-32 py-5  justify-between bg-white rounded">
          <div className="ml-10 big search box ">
            <form className="gap-5 flex ">
              <div className="flex flex-col">
                <label className="mx-auto">Location</label>

                <select
                  className="p-2 rounded border-[1px] bg-white"
                  value={locationValue}
                  onChange={(e) => {
                    setLocationValue(e.target.value);
                  }}
                >
                  <option value="Bangalore">Bangalore</option>
                  <option value="Mumbai">Mumbai</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="mx-auto">Date</label>

                <DatePicker
                  className="p-2 rounded border-[1px] bg-white w-32"
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                />
              </div>
              <div className="flex flex-col">
                <label className="mx-auto">Price Start</label>
                <select
                  className="p-2 rounded border-[1px] bg-white"
                  value={priceStartValue}
                  onChange={(e) => {
                    setPriceStartValue(e.target.value);
                  }}
                >
                  <option value="100">100</option>
                  <option value="200">200</option>
                  <option value="300">300</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="mx-auto">Price End</label>
                <select
                  className="p-2 rounded border-[1px] bg-white"
                  value={priceEndValue}
                  onChange={(e) => {
                    setPriceEndValue(e.target.value);
                  }}
                >
                  <option value="500">500</option>
                  <option value="600">600</option>
                  <option value="700">700</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="mx-auto">Property Type</label>
                <select
                  className="p-2 rounded border-[1px] bg-white"
                  value={propertyTypeValue}
                  onChange={(e) => {
                    setPropertyTypeValue(e.target.value);
                  }}
                >
                  <option value="Flat">Flat</option>
                  <option value="Bangalow">Bangalow</option>
                </select>
              </div>
              <button
                type="button"
                onClick={runQuery}
                className=" h-10 mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="mx-32 py-5  justify-between bg-gray-100 rounded">
          <Card mydata={data} />
        </div>
      </div>
    </>
  );
};
