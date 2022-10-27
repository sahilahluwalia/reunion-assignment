import React from "react";

export const Card = (props) => {
  const { mydata } = props;
  return (
    <>
      <div>
        <div className="grid grid-cols-3 gap-10 ">
          {mydata.map((data, index) => (
            <div key={index}>
              <div className="hover:bg-gray-100 cursor-pointer mt-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img
                  className="rounded"
                  src={data.image}
                  alt="card photo"
                  srcset=""
                />

                <div className="p-5">
                  <div className="text-3xl font-bold text-blue-700">
                    ${data.price}
                    <span className="text-gray-500 text-xl">/month</span>
                  </div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.Name}
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {data.address}
                  </p>
                  {data.location}
                  <div className="h-[1px] mt-1 bg-gray-200"></div>
                  <div className="flex mt-2 text-gray-600 text-semibold gap-10">
                    <div>{data.beds} beds</div>
                    <div>{data.bathrooms} bathrooms</div>
                    <div>{data.size} size</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
