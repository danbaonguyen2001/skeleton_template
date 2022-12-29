import React, { useEffect, useState } from "react";
import Card from "./Card";
import LoadingSkeleton from "./LoadingSkeleton";

const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5">
      {loading
        ? Array(8)
            .fill(0)
            .map((item, index) => <Card.Loading key={index} />)
        : Array(8)
            .fill(0)
            .map((item, index) => <Card key={index} />)}
    </div>
  );
};

export default Layout;
