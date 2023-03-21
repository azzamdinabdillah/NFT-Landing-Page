export const Seller = (props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <img src={props.img} alt="" />
      <h1 className="font-medium text-white">{props.name}</h1>
    </div>
  );
};

export const CategoriesCard = (props) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(355deg, rgba(223,126,255,0.04534313725490191) 0%, rgba(151,71,255,0.37307422969187676) 71%)",
      }}
      className="p-2 rounded-3xl overflow-hidden mb-5"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <img src={props.img} alt="" />
        <h1 className="font-bold text-white text-xl">{props.name}</h1>
      </div>
    </div>
  );
};
