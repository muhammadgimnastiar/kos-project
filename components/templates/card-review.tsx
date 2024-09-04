"use client";
import { StarIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../molecules/shadcn/card";
import { Button } from "../molecules/shadcn/button";
import { useRouter } from "next/navigation";

type props = {
  id: number;
  image: string;
  title: string;
  price: number;
  place: string;
  rating: number;
  totalReviews: number;
};

export default function ReviewCard({
  id,
  image,
  title,
  price,
  place,
  rating,
  totalReviews,
}: props) {
  const route = useRouter();
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <p className="text-gray-500">{place}</p>
        <p className="text-lg font-semibold mt-2">
          {price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}{" "}
          / bulan
        </p>
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`h-5 w-5 ${i < rating ? "text-yellow-500" : "text-gray-300"}`}
            />
          ))}
          <span className="ml-2 text-gray-600">({totalReviews} reviews)</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          size="sm"
          variant="outline"
          onClick={() => route.push(`explore/${id}`)}
        >
          Read more
        </Button>
      </CardFooter>
    </Card>
  );
}
