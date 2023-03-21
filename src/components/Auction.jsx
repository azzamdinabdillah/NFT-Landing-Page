const Auction = (props) => {
  return (
    <div className="mb-3">
      <div
        style={{
          background:
            "linear-gradient(355deg, rgba(255,255,255,0.06214985994397759) 0%, rgba(255,255,255,0.14338235294117652) 71%)",
        }}
        className="p-4 rounded-xl flex items-center gap-5"
      >
        <img src={props.img} alt="" />
        <div className="text-white w-full">
          <h1 className="font-bold text-base">
            {props.title}
          </h1>
          <div className="flex justify-between items-center mt-2 w-full">
            <h1 className="font-medium">{props.price}</h1>
            <p className="text-primary-color">{props.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auction;
