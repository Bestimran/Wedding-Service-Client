import React, { useEffect, useState } from "react";
import Card from "../../Card/Card";

const Services = () => {
  const [serviceAll, setAll] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => setAll(data));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-4 max-w-screen-xl mx-auto mt-20">
      {serviceAll?.map((service) => (
        <Card service={service} key={service._id}></Card>
      ))}
    </div>
  );
};

export default Services;
