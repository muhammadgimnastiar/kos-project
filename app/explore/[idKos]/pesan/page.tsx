"use client";
import { Button } from "@/components/molecules/shadcn/button";
import { KostData } from "@/lib/kost-data";
import { useParams } from "next/navigation";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const params = useParams<{ idKos: string }>;
  const { idKos } = params();
  const room = KostData[Number(idKos)];
  return (
    <div className="container mx-auto p-4 mt-16">
      <div className="flex flex-wrap lg:flex-nowrap gap-4">
        {/* Details and Form Column */}
        <div className="w-full lg:w-1/2 p-4">
          <h1 className="text-3xl font-bold mb-2">{room.title}</h1>
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-500">{room.place}</p>
            <p className="text-lg font-semibold">
              {room.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}{" "}
              /month
            </p>
          </div>
          <div className="mb-2">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Check-in Date
                </label>
                <input
                  type="date"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Check-out Date
                </label>
                <input
                  type="date"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
            </form>
          </div>
          <div className="mb-2">
            <h2 className="text-xl font-semibold">Price Summary</h2>
            <p className="text-lg font-semibold">
              {room.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}{" "}
              per month
            </p>
          </div>
        </div>
        {/* Payment Methods Column */}
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Payment Methods</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <img
                src="https://th.bing.com/th/id/OIP.CSv0D_Pv2hzbhGo6UWoLAgHaHa?rs=1&pid=ImgDetMain"
                alt="mastercard"
                className="w-12 h-12 mr-4"
              />
              <span>Mastercard</span>
            </li>
            <li className="flex items-center">
              <img
                src="https://th.bing.com/th/id/R.d201a5b0e53d870fa436d64438b00621?rik=19Iq%2fBataT2EpQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fvisa-logo-png-visa-logo-png-transparent-amp-svg-vector-pluspng-2400x2400.png&ehk=nFx2LlazjBd%2fQTkFzEJBVwnv9%2foG4hopIBBBjz1Et7M%3d&risl=&pid=ImgRaw&r=0"
                alt="Bank Mandiri"
                className="w-12 h-12 mr-4"
              />
              <span>Visa</span>
            </li>
            <li className="flex items-center">
              <img
                src="https://i2.wp.com/toppng.com/uploads/preview/gopay-logo-png-image-116028322425nx9mi76v1.png"
                alt="GoPay"
                className="w-12 h-12 mr-4"
              />
              <span>GoPay</span>
            </li>
            {/* Add more payment methods as needed */}
          </ul>
          <div className="mt-4">
            <Button className="w-full rounded-full">
              Konfirmasi Pemesanan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
