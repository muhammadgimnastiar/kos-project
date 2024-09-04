import React from "react";
import { Button } from "../molecules/shadcn/button";

type Props = {};

const CardCampaign = (props: Props) => {
  return (
    <div className="w-5/6 mx-auto p-6 bg-primary border-2 border-black rounded-lg shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex flex-col lg:flex-row w-full">
        {/* Text Column */}
        <div className="flex-row p-4">
          <h1 className="text-7xl font-bold leading-tight  text-white">
            Cari Kost Idealmu
          </h1>
          <h1 className="text-7xl font-bold leading-tight  text-white">
            di Sini !!!
          </h1>
          <Button className="bg-secondary text-primary mt-16">
            Pesan Sekarang
          </Button>
        </div>
        {/* Image Column */}
        <div className="flex-1">
          <img
            src="https://plus.unsplash.com/premium_photo-1661751356300-c4756372be3b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Kost Image"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CardCampaign;
