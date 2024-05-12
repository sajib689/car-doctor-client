import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-48 mb-48">
    <div className="mb-24">
    <h1 className="text-3xl md:text-4xl font-bold text-center ">
        Our Services
      </h1>
      <p className="text-center mt-4">
        the majority have suffered alteration in some form, by injected humour, <br />
        or randomised words which don't look even slightly believable.{" "}
      </p>
    </div>
      <div className="grid grid-cols md:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
