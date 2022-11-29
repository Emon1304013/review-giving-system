import { Button} from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
  const [services,setServices] = useState([]);

  useEffect(()=> {
    fetch('https://roza-fusion-server.vercel.app/limitedServices')
    .then(res => res.json())
    .then(data => {setServices(data.data)})
    .catch(err => console.log(err))
  },[])
  return (
    <div className="mb-8">
      <h2 className="text-2xl lg:text-5xl text-center mb-8 font-heading text-[#00C1A2] uppercase">
        My Services
      </h2>

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-8 ">
          {services.map(service => <ServiceCard
          key = {service._id}
          service = {service}
          ></ServiceCard>)}
        </div>
      </div>
      <Link to='/services'><Button
      gradientDuoTone="greenToBlue" size="xl" className="my-8 w-2/12 mx-auto">View All</Button></Link>
    </div>
  );
};

export default ServiceSection;
