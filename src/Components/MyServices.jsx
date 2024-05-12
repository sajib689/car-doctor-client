import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyServicesCard from "./MyServicesCard";
import Loader from "./../Utilities/Loader";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const MyServices = () => {
  const [orders, setOrders] = useState([]);
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure()
  useEffect(() => {
    axiosSecure.get(`/orders?email=${user?.email}`)
    .then((res) => {
      setOrders(res.data);
    });
  },[user?.email,axiosSecure])

 
  const handleConfirm = (_id) => {
    fetch(`http://localhost:3000/orders/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const remaining = orders.filter((order) => order._id !== _id);
          const update = orders.find((order) => order._id === _id);
          update.status = "confirm";
          const newOrders = [update, ...remaining];
          setOrders(newOrders);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your Service Confirm done",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  if (loading) return <Loader />;
  return (
    <div className="mt-12">
      <h1 className="text-4xl text-center font-bold">My Services</h1>
      <div className="mt-5 container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="dark:bg-gray-300">
              <tr className="text-left">
                <th className="p-3">Service Id</th>
                <th className="p-3">Service Name</th>
                <th className="p-3">Issued</th>
                <th className="p-3">Due</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <MyServicesCard
                  key={order._id}
                  order={order}
                  handleConfirm={handleConfirm}
                ></MyServicesCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
