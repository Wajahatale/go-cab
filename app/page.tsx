"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { UserButton } from "@clerk/nextjs";
import Booking from "@/components/Booking/Booking";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-blue-100">
          <Booking />
        </div>
        <div className="col-span-2 bg-red-100">Map</div>
      </div>
    </div>
  );
}
