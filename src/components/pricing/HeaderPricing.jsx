const HeaderPricing = ({ plan, onClickMonthly, onClickYearly }) => {
  return (
    <ul
      className={`relative p-2 bg-secondary-100 text-white flex items-center rounded-full before:absolute before:top-8 before:w-1/2 before:h-[86%] before:-translate-y-1/2 before:bg-dark before:rounded-full transition-all duration-300 before:transition-all before:duration-300 ${
        plan === "monthly" ? "before:left-1" : "before:left-[84px]"
      }`}
    >
      <li>
        <button
          onClick={onClickMonthly}
          className={`w-20 h-12 rounded-full relative z-10 ${
            plan === "monthly" ? "" : ""
          }`}
        >
          Personal
        </button>
      </li>
      <li>
        <button
          onClick={onClickYearly}
          className={`w-20 h-12 rounded-full relative z-10 ${
            plan === "yearly" ? "" : ""
          }`}
        >
          Company
        </button>
      </li>
    </ul>
  );
};

export default HeaderPricing;
