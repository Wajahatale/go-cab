import CarsList from "@/data/CarsList";
import Image from "next/image";
import React from "react";

function Cars() {
  return (
    <div className="mt-3">
      <h2 className="font-semibold">Select Car</h2>
      <div>
        {CarsList.map((item, index) => (
          <div key={index}>
            <Image src={item.image} alt={item.name} width={75} height={90} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cars;
