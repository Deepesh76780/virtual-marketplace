"use client";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/payload-types";
import React, { useEffect } from "react";

const AddToCartButton = ({ product }: { product: Product }) => {
  const { addItem } = useCart();
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSuccess(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isSuccess]);
  return (
    <Button
      onClick={() => {
        addItem(product);
        setIsSuccess(true);
      }}
      size={"lg"}
      className="w-full"
    >
      {isSuccess ? "Added!" : "Add to cart"}
    </Button>
  );
};

export default AddToCartButton;
