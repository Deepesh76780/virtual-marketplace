import React from "react";

interface pageProps {
  params: {
    productId: string;
  };
}

const page = ({ params }: pageProps) => {
  return <div>page</div>;
};

export default page;
