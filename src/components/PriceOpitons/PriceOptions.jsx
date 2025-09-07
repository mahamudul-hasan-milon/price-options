import PriceOption from "../PriceOption/PriceOption";
const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 30,
      features: [
        "Access to gym equipment",
        "Locker facility",
        "1 Free fitness assessment",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 50,
      features: [
        "Access to gym equipment",
        "Locker & shower facility",
        "Group fitness classes",
        "2 Personal training sessions per month",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 80,
      features: [
        "24/7 Gym access",
        "Unlimited group classes",
        "5 Personal training sessions per month",
        "Free nutrition consultation",
        "Sauna & steam room access",
      ],
    },
    {
      id: 4,
      name: "VIP Plan",
      price: 120,
      features: [
        "24/7 Gym access",
        "Unlimited group & yoga classes",
        "Unlimited personal training",
        "Customized diet plan",
        "Private locker & premium lounge access",
        "Priority booking for events",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl">Best Price in the Town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
