import React, { useEffect, useState } from "react";

function AutocompleteAddress() {
  const [source, setSource] = useState<any>();
  const [addressList, setAddressList] = useState<any>([]);
  const [destination, setDestination] = useState<any>();
  const [sourceUpdate, setSourceUpdate] = useState<any>(false);
  const [destinationUpdate, setDestinationUpdate] = useState<any>(false);

  useEffect(() => {
    const delayDebouncefn = setTimeout(() => {
      getAddressList();
    }, 1000);
    return () => clearTimeout(delayDebouncefn);
  }, [source, destination]);

  const getAddressList = async () => {
    setAddressList([]);
    const query = sourceUpdate ? source : destination;
    const res = await fetch("/api/search-address?q=" + query, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();
    setAddressList(result);
  };
  return (
    <div className="mt-5">
      <div className="relative">
        <label className="text-gray-400">Where From?</label>
        <input
          type="text"
          className="bg-white p-1 
          border-[1px] w-full 
          rounded-md outline-none 
          focus:border-yellow-300"
          value={source}
          onChange={(event) => {
            setSource(event.target.value);
            setSourceUpdate(true);
          }}
        />
        {addressList?.suggestions && sourceUpdate ? (
          <div className="shadow-md p-1 rounded-md absolute w-full bg-white">
            {addressList?.suggestions.map((item: any, index: number) => (
              <h2
                className="p-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSource(item.full_address);
                  setAddressList([]);
                  setSourceUpdate(false);
                }}
              >
                {item.full_address}
              </h2>
            ))}
          </div>
        ) : null}
      </div>
      <div className="relative">
        <label className="text-gray-400">Where To?</label>
        <input
          type="text"
          className="bg-white p-1 
          border-[1px] w-full 
          rounded-md outline-none 
          focus:border-yellow-300"
          value={destination}
          onChange={(event) => {
            setDestination(event.target.value);
            setDestinationUpdate(true);
          }}
        />
        {addressList?.suggestions && destinationUpdate ? (
          <div className="shadow-md p-1 rounded-md absolute w-full bg-white">
            {addressList?.suggestions.map((item: any, index: number) => (
              <h2
                className="p-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setDestination(item.full_address);
                  setAddressList([]);
                  setDestinationUpdate(false);
                }}
              >
                {item.full_address}
              </h2>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default AutocompleteAddress;
