import ReviewCard from "@/components/templates/card-review";
import Hero from "@/components/templates/hero";
import HeroSectionGradientBackground from "@/components/templates/hero-explore";
import { KostData } from "@/lib/kost-data";
import React from "react";

type Props = {};

const Explore = (props: Props) => {
  const kostData = KostData;
  return (
    <>
      <HeroSectionGradientBackground />
      <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        {kostData.map((item, index) => (
          <ReviewCard
            id={index}
            image={item.image}
            title={item.title}
            price={item.price}
            place={item.place}
            rating={item.rating}
            totalReviews={item.totalReviews}
          />
        ))}
      </div>
    </>
  );
};

export default Explore;
