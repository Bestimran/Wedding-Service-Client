import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-4 max-w-screen-xl mx-auto mt-20">
      {services?.slice(0, 3).map((service) => (
        <Card service={service} key={service.id}></Card>
      ))}
      <div className=" align-center">
        <Link to="/service">
          <button className="btn btn-ghost bg-primary text-white">
            See all
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
