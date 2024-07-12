import { PiStarFourFill } from "react-icons/pi";
import { RiCheckboxCircleFill, RiCloseCircleFill } from "react-icons/ri";

const PricingCard = ({
  plan,
  price,
  description,
  features,
  active,
  offer,
  period,
}) => {
  return (
    <div
      className={`relative border-2 border-secondary-300 hover:border-white bg-secondary-300  p-8 rounded-2xl hover:bg-secondary-100 hover:text-white transition-all duration-300 hover:-translate-y-5 ${
        active ? "bg-gray-950 lg:-translate-y-5 text-white" : ""
      }`}
    >
      <div className="space-y-5">
        <PiStarFourFill className="text-primary text-2xl" />
        {offer === true ? (
          <span className="bg-primary font-semibold p-1 text-xs text-black absolute right-0 top-3">
            BEST OFFER
          </span>
        ) : (
          ""
        )}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{plan}</h2>
          <span className="bg-slate-700 rounded-full px-2 px1">{period}</span>
        </div>
        <p className="text-gray-500">{description}</p>
        <div className="flex items-end">
          <h1 className="text-4xl font-bold">{price}€</h1>
          <h5 className="text-gray-500">/ Per month</h5>
        </div>
      </div>
      <hr className="border-gray-300 my-5" />
      <div className="space-y-5">
        <h3 className="text-lg font-bold">Features</h3>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              {feature.include ? (
                <RiCheckboxCircleFill className="text-purple-800" />
              ) : (
                <RiCloseCircleFill className="text-red-600" />
              )}
              {feature.feature}
            </li>
          ))}
        </ul>
        <button className="border-2 border-gray-950 bg-dark py-3 text-black px-4 rounded-full w-full hover:bg-gradient-to-b hover:bg-primary hover:text-white hover:font-bold transition-all duration-100">
          Start with the {plan}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
