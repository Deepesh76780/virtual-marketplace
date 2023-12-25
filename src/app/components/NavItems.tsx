"use client";
import { PRODUCT_CATEGORY } from "@/config";
import React, { useEffect, useRef } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/useClick";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = React.useState<null | number>(null);
  const isAnyOpen = activeIndex !== null;
  const navRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(navRef, () => setActiveIndex(null));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      }
    };

    document.addEventListener("keydown", handler);

    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORY.map((category, index) => {
        const handleOpen = () => {
          if (activeIndex === index) {
            setActiveIndex(null);
          } else {
            setActiveIndex(index);
          }
        };

        const isOpen = index === activeIndex;

        return (
          <NavItem
            key={index}
            handleOpen={handleOpen}
            isOpen={isOpen}
            catergory={category}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
