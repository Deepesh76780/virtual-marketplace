"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { Category } from "@/config";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  catergory: Category;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}

const NavItem = ({ isAnyOpen, catergory, handleOpen, isOpen }: Props) => {
  return (
    <div className="flex items-center">
      <div className="relative flex  items-center">
        <Button
          className="gap-1.5"
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {catergory.label}
          <ChevronDown
            className={cn("h-4 w-4 transition-all text-muted-foreground", {
              "-rotate-180": isOpen,
            })}
          />
        </Button>
      </div>
      {isOpen ? (
        <div
          className={cn(
            "absolute inset-x-0 top-full text-sm text-muted-foreground",
            {
              "animate-in fade-in-10 slide-in-from-top-4": !isAnyOpen,
            }
          )}
        >
          <div
            className="absolute inset-0 top-1/2 bg-white shadow"
            aria-hidden="true"
          />
          <div className="relative bg-white">
            <div className="mx-auto max-w-7xl px-8">
              <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                  {catergory.features.map((feature) => (
                    <div
                      onClick={() => close}
                      key={feature.name}
                      className="group relative text-base sm:text-sm"
                    >
                      <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                        <Image
                          src={feature.imageSrc}
                          alt="product category image"
                          fill
                          className="object-cover object-center"
                        />
                      </div>

                      <Link
                        href={feature.href}
                        className="mt-6 block font-medium text-gray-900"
                      >
                        {feature.name}
                      </Link>
                      <p className="mt-1" aria-hidden="true">
                        Shop now
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavItem;
