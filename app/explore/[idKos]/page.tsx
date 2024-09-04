"use client";

import { useParams, useRouter } from "next/navigation";
import { KostData } from "@/lib/kost-data";
import React from "react";
import { Button } from "@/components/molecules/shadcn/button";

type Props = {};

const page = () => {
  const route = useRouter();
  const params = useParams<{ idKos: string }>;
  const { idKos } = params();
  const room = KostData[Number(idKos)];
  return (
    <div className="mt-16">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap lg:flex-nowrap gap-4">
          {/* Details Column */}
          <div className="w-full lg:w-1/2 p-4">
            <h1 className="text-3xl font-bold mb-2">{room.title}</h1>
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-500">{room.place}</p>
              <p className="text-lg font-semibold">
                {room.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}{" "}
                / month
              </p>
            </div>
            <div className="mb-2">
              <h2 className="text-xl font-semibold">Facilities</h2>
              <p>{room.facilities}</p>
            </div>
            <div className="mb-2">
              <h2 className="text-xl font-semibold">Privacy</h2>
              <p>{room.privacy}</p>
            </div>
            <div className="mb-2">
              <h2 className="text-xl font-semibold">Description</h2>
              <p>{room.description}</p>
            </div>
            <div className="mb-2">
              <h2 className="text-xl font-semibold">Location</h2>
              <p>{room.location}</p>
            </div>
          </div>
          {/* Image Column */}
          <div className="w-full lg:w-1/2 p-4">
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        <Button
          className="w-full mt-2 mb-3"
          onClick={() => route.push(`${idKos}/pesan`)}
        >
          Pesan
        </Button>
      </div>
    </div>
  );
};

export default page;
