"use client";

import Title from "@/components/ui/title";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Text from "@/components/ui/text";

const donutFlavors = [
  {
    name: "Classic Glazed",
    description: "Our signature glazed donut with a perfect sweet coating",
    image: "/donut-1.png",
    color: "from-amber-200 to-yellow-300",
  },
  {
    name: "Chocolate Frosted",
    description: "Rich chocolate frosting with colorful sprinkles",
    image: "/donut-2.png",
    color: "from-amber-600 to-orange-400",
  },
  {
    name: "Strawberry Delight",
    description: "Fresh strawberry glaze with real fruit pieces",
    image: "/donut-3.png",
    color: "from-pink-300 to-rose-400",
  },
  {
    name: "Boston Cream",
    description: "Custard-filled with rich chocolate glaze",
    image: "/donut-4.png",
    color: "from-yellow-200 to-amber-300",
  },
  {
    name: "Maple Bacon",
    description: "Maple glaze topped with crispy bacon bits",
    image: "/donut-5.png",
    color: "from-orange-300 to-red-400",
  },
];

const FlavorBanner = () => {
  return (
    <div className="mb-12">
      <Title variant="h2" className="mb-8">
        Our Signature Flavors
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {donutFlavors.map((flavor, index) => (
          <Card
            key={index}
            className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
          >
            <CardContent className="p-4 flex gap-x-6 items-center md:block">
              <div
                className={`w-full  rounded-full bg-gradient-to-br ${flavor.color} flex items-center justify-center overflow-hidden md:mb-4`}
              >
                <img
                  src={flavor.image || "/placeholder.svg"}
                  alt={flavor.name}
                  className="w-24 h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div>
                <Title variant="h3" className="mb-2">
                  {flavor.name}
                </Title>
                <Text>{flavor.description}</Text>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FlavorBanner;
