import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from './../Provider/AuthProvider';

const CheckOut = () => {
  const { title, price, service_id } = useLoaderData();
  const {user} = useContext(AuthContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullname = form.fullname.value;
    const email = user?.email;
    const address = form.address.value;
    const city = form.city.value;
    const state = form.state.value;
    const zip = form.zip.value;
    const date = form.date.value;
    const feedback = form.feedback.value;
    const orders = {
      cutomerName: fullname,
      email,
      serviceName: title,
      price: price,
      service_id: service_id,
      address,
      city,
      state,
      zip,
      date,
      feedback,
    };
    fetch('http://localhost:3000/orders',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(orders)
    })
    .then(res => res.json())
    .then(data => {
      if(data) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your Service Order Success",
          showConfirmButton: false,
          timer: 1500
        });
      }
      form.reset()
    })
  };
  return (
    <section className="p-12 dark:bg-gray-100 dark:text-gray-900">
      <form
        onSubmit={handleSubmit}
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-8 rounded-md shadow-md bg-gray-50 dark:bg-gray-700">
          <div className="space-y-4 col-span-full lg:col-span-1">
            <p className="font-medium text-gray-800 dark:text-gray-200">
              Personal Information
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              fuga autem eum!
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Full name
              </label>
              <input
                name="fullname"
                id="fullname"
                type="text"
                placeholder="Full name"
                className="w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:border-gray-600 dark:focus:border-violet-500 dark:focus:ring-violet-500 dark:text-gray-200"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
              value={user?.email}
                name="email"
                id="email"
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:border-gray-600 dark:focus:border-violet-500 dark:focus:ring-violet-500 dark:text-gray-200"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="serviceName"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Service Name
              </label>
              <input
                name="serviceName"
                value={title}
                id="serviceName"
                type="text"
                placeholder=" Service Name"
                className="w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:border-gray-600 dark:focus:border-violet-500 dark:focus:ring-violet-500 dark:text-gray-200"
              />
            </div>
            <div className="col-span-full">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Address
              </label>
              <input
                name="address"
                id="address"
                type="text"
                placeholder="Address"
                className="w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:border-gray-600 dark:focus:border-violet-500 dark:focus:ring-violet-500 dark:text-gray-200"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                City
              </label>
              <input
                name="city"
                id="city"
                type="text"
                placeholder="City"
                className="w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:border-gray-600 dark:focus:border-violet-500 dark:focus:ring-violet-500 dark:text-gray-200"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                State / Province
              </label>
              <input
                name="state"
                id="state"
                type="text"
                placeholder="State / Province"
                className="w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:border-gray-600 dark:focus:border-violet-500 dark:focus:ring-violet-500 dark:text-gray-200"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label
                htmlFor="zip"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                ZIP / Postal
              </label>
              <input
                name="zip"
                id="zip"
                type="text"
                placeholder="ZIP / Postal"
                className="w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:border-gray-600 dark:focus:border-violet-500 dark:focus:ring-violet-500 dark:text-gray-200"
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="grid grid-cols-4 gap-6 p-8 rounded-md shadow-md bg-gray-50 dark:bg-gray-700">
          <div className="space-y-4 col-span-full lg:col-span-1"></div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Price
              </label>
              <input
                name="price"
                value={price}
                id="price"
                type="text"
                placeholder="Price"
                className="w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:border-gray-600 dark:focus:border-violet-500 dark:focus:ring-violet-500 dark:text-gray-200"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Date
              </label>
              <input
                name="date"
                id="date"
                type="date"
                placeholder="Date"
                className="w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:border-gray-600 dark:focus:border-violet-500 dark:focus:ring-violet-500 dark:text-gray-200"
              />
            </div>
            <div className="col-span-full">
              <label
                htmlFor="feedback"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Feedback
              </label>
              <textarea
                name="feedback"
                id="feedback"
                placeholder="Feedback"
                className="w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:border-gray-600 dark:focus:border-violet-500 dark:focus:ring-violet-500 dark:text-gray-200"
              ></textarea>
            </div>
            <div className="col-span-full">
              <button
                className="w-full px-4 py-3 rounded-md border dark:border-gray-800 bg-orange-500 text-white focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                Submit
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default CheckOut;
