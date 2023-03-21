import Auction from "../components/Auction";

const ItemsSection = () => {
  return (
    <section className="px-5 mt-10 md:px-14 lg:px-32 lg:scale-90">
      <div className="md:flex justify-center gap-10 lg:gap-32 items-center">
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
              <h1 className="text-white text-xl lg:text-2xl font-bold">
                0.0079 ETH
              </h1>
            </div>

            <div>
              <p className="text-primary-color font-medium">Remaining Time</p>
              <h1 className="text-white text-xl lg:text-2xl font-bold">
                12:34:02
              </h1>
            </div>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <button className="bg-primary-color py-3 px-6 lg:px-14 text-white font-medium rounded-2xl">
              Place a Bid
            </button>
            <button className="bg-black bg-opacity-25 py-3 px-6 lg:px-14 text-white font-medium rounded-2xl border-2 border-white">
              View Artwork
            </button>
          </div>
        </div>

        <div className="mt-5 md:mt-0 lg:w-[40%]">
          <h1 className="text-white font-bold text-2xl md:text-3xl">New Auction</h1>
          <div className="mt-6">
            <Auction
              img={"./images/auction-1.png"}
              title={"Somewhere Else: 094 - Palm Trees & Basketball"}
              price={"0.5 ETH"}
              time={"03:23:23"}
            />
            <Auction
              img={"./images/auction-2.png"}
              title={"DRIP #515"}
              price={"0.7 ETH"}
              time={"00:33:44"}
            />
            <Auction
              img={"./images/auction-3.png"}
              title={"Bikes of Burden #28. Ribs."}
              price={"2.5 ETH"}
              time={"01:22:08"}
            />
            <Auction
              img={"./images/auction-4.png"}
              title={"Rizzo Collection #36"}
              price={"1.2 ETH"}
              time={"08:17:13"}
            />
          </div>
          <div className="flex justify-end items-center gap-1 mt-5 text-sm">
            <h1 className="font-medium text-white">View All Auction</h1>
            <img src="./images/arrow-right.png" alt="" className="scale-75" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemsSection;
