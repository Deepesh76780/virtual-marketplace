import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

const perks = [
  {
    name: "Instant Delivery",
    icon: ArrowDownToLine,
    description: "Get your assets instantly after purchase.",
  },
  {
    name: "Quality Guarantee",
    icon: CheckCircle,
    description: "We verify each asset on the platform.",
  },
  {
    name: "For the Planet",
    icon: Leaf,
    description: "We plant a tree for every purchase.",
  },
  {
    name: "Secure Payments",
    icon: ArrowDownToLine,
    description: "We use Stripe to process payments.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-normal text-gray-900 sm:text-5xl">
            Your destination for premium-grade products
            <span className="text-blue-600"> Virtual assets</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to DigitalCat. Our team verifies each asset on the platform
            to uphold our rigorous quality standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant={"ghost"}>Our Quality Promise &rarr;</Button>
          </div>
        </div>
        {/* todo list product */}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            {perks.map((perk) => {
              return (
                <div
                  key={perk.name}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                >
                  <div className="md:flex-shrink-0 flex justify-center">
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                      {perk.icon && <perk.icon className="w-1/3 h-1/3" />}
                    </div>
                  </div>
                  <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="font-medium text-base text-gray-900">
                      {perk.name}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {perk.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
