"use client";

import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import Title from "@/components/ui/title";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="text-center mb-16">
      <Title variant="h1" className="mb-6">
        Sweet Circles
      </Title>
      <Text className="mb-8" size="xl">
        Artisanal donuts crafted with love, rotating fresh daily
      </Text>
      <Text size="lg" className="max-w-2xl mx-auto mb-8">
        Welcome to Sweet Circles, where every donut is a perfect circle of joy.
        Our master bakers use only the finest ingredients to create donuts that
        will make your taste buds dance with delight.
      </Text>
      <Link href={"/shop"}>
        <Button size="lg" className="text-lg px-8 py-4">
          Visit Our Shop
        </Button>
      </Link>
    </div>
  );
};

export default HeroSection;
