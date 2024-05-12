import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {_id, title, img, price, description } = service;
  return (
    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
      <img
        src={img}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
          <p className="dark:text-gray-800">{description.slice(0, 60)}...</p>
          <p>Price: {price}</p>
        </div>
        <Link to={`/checkout/${_id}`} className="flex btn bg-orange-500 text-white hover:bg-orange-600 items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
