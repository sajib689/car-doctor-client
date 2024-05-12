import icon1 from "../assets/icons/person.svg";
import icon2 from "../assets/icons/Group 38729.svg";
import icon3 from "../assets/icons/group.svg";
import icon4 from "../assets/icons/Wrench.svg";
import icon5 from "../assets/icons/check.svg";
import icon6 from "../assets/icons/deliveryt.svg";
const WhyChoose = () => {
  return (
    <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <span className="text-xs uppercase font-bold text-[#FF3811] ">
          Core Features
        </span>
        <h2 className="text-2xl md:text-5xl mb-6 font-bold">Why Choose Us?</h2>
        <p className="dark:text-gray-600">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="container mx-auto grid justify-center gap-2 sm:grid-cols-2 lg:grid-cols-6">
        <div className="flex flex-col items-center p-4 hover:bg-orange-500 hover:text-white">
          <img src={icon1} alt="" />
          <h3 className="my-3 text-xl font-semibold">Expert Team</h3>
        </div>
        <div className="flex flex-col items-center p-4 hover:bg-orange-500 hover:text-white">
          <img className="bg-orange-500 rounded-full" src={icon2} alt="" />
          <h3 className="my-3 text-xl font-semibold">Timely Delivery</h3>
        </div>
        <div className="flex flex-col items-center p-4 hover:bg-orange-500 hover:text-white">
          <img src={icon3} alt="" />
          <h3 className="my-3 text-xl font-semibold">24/7 Support</h3>
        </div>
        <div className="flex flex-col items-center p-4 hover:bg-orange-500 hover:text-white">
          <img src={icon4} alt="" />
          <h3 className="my-3 text-xl font-semibold">Best Equipment</h3>
        </div>
        <div className="flex flex-col items-center p-4 hover:bg-orange-500 hover:text-white">
          <img src={icon5} alt="" />
          <h3 className="my-3 text-xl font-semibold">100% Guranty</h3>
        </div>
        <div className="flex flex-col items-center p-4 hover:bg-orange-500 hover:text-white ">
          <img src={icon6} alt="" />
          <h3 className="my-3 text-xl font-semibold">Timely Delivery</h3>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
