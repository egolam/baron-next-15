"use client";
import { useEffect } from "react";
import useWixClient from "./hooks/useWixClient";

import Featured from "./_components/Featured";
import Slider from "./_components/Slider";
import Discounted from "./_components/Discounted";

const HomePage = () => {
  const wixClient = useWixClient();

  useEffect(() => {
    const getProducts = async () => {
      const res = await wixClient.products.queryProducts().find();

      console.log(res);
    };

    getProducts();
  }, [wixClient]);

  return (
    <>
      <Slider />
      <Featured />
      <Discounted />
    </>
  );
};

export default HomePage;
