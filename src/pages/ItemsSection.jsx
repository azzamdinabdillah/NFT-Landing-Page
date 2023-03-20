const ItemsSection = () => {
  return (
    <section className="px-5 mt-10">
      <div>
        <div
          style={{
            background:
              "linear-gradient(355deg, rgba(223,126,255,0.04534313725490191) 0%, rgba(151,71,255,0.37307422969187676) 71%)",
          }}
          className="px-5 pt-5 pb-10 rounded-2xl bg-opacity-20"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-start gap-2">
              <img src="./images/flame.png" alt="" />
              <h1 className="text-white text-xl font-bold">Item Ending Soon</h1>
            </div>
            <img src="./images/arrow-right.png" alt="" className="scale-90" />
          </div>
          <img
            src="./images/nft-item.png"
            alt=""
            className="mt-5 rounded-lg overflow-hidden"
          />
          <div className="mt-5">
            <h1 className="text-white text-xl font-bold">
              Hurricane (Common Body)
            </h1>
            <div className="flex gap-2 items-center mt-1">
              <p className="text-white font-medium">by Spider Tanks</p>
              <img src="./images/blue-check.png" alt="" />
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div>
              <p className="text-primary-color font-medium">Current Bid</p>
              <h1 className="text-white text-xl font-bold">0.0079 ETH</h1>
            </div>

            <div>
              <p className="text-primary-color font-medium">Remaining Time</p>
              <h1 className="text-white text-xl font-bold">12:34:02</h1>
            </div>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <button className="bg-primary-color py-3 px-6 text-white font-medium rounded-2xl">
              Place a Bid
            </button>
            <button className="bg-black bg-opacity-25 py-3 px-6 text-white font-medium rounded-2xl border-2 border-white">
              View Artwork
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemsSection;
