"use client";
import { useRouter } from "next/navigation";
import { Button } from "../molecules/shadcn/button";

export default function Hero() {
  const route = useRouter();
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden py-24 lg:py-32 bg-cover bg-center bg-[url(https://img.freepik.com/free-photo/low-angle-shot-brown-white-building-with-windows-blue-sky_181624-5277.jpg?t=st=1725426042~exp=1725429642~hmac=82b2930b0b8182c4be5602f30280cab920527301798f23a80aa86d8bafe38178&w=1060)]">
        <div
          aria-hidden="true"
          className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
        >
          <div className="" />
        </div>
        {/* End Gradients */}
        <div className="relative z-10">
          <div className="container py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto">
              {/* Title */}
              <div className="mt-5 max-w-2xl">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-slate-50">
                  TEMUKAN KAMAR YANG KAMU INGINKAN
                </h1>
              </div>
              {/* End Title */}
              <div className="mt-5 max-w-3xl">
                <p className="text-xl text-muted-foreground text-slate-200">
                  Temukan kost idaman dengan mudah! .
                </p>
              </div>
              {/* Buttons */}
              <div className="mt-8 gap-3 flex justify-center">
                <Button size={"lg"} onClick={() => route.push("/explore")}>
                  Get started
                </Button>
                <Button size={"lg"} variant={"outline"}>
                  Learn more
                </Button>
              </div>
              {/* End Buttons */}
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
