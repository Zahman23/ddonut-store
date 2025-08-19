"use client";

import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import Title from "@/components/ui/title";
import Link from "next/link";
import React from "react";

const CallAction = () => {
  return (
    <div className="text-center">
      <Title variant="h3" className="mb-4">
        Ready to taste perfection?
      </Title>
      <Text className="mb-6">
        Each donut is made fresh daily with premium ingredients. Order now and
        experience the Sweet Circles difference!
      </Text>
      <Link href="/shop">
        <Button size="lg" className="text-lg px-8 py-4">
          Order Now - IDR 5,000 each
        </Button>
      </Link>
    </div>
  );
};

export default CallAction;
