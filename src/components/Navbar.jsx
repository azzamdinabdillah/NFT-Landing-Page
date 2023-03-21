import { useState } from "react";

const Navbar = () => {
  let [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#141414] fixed z-10 overflow-hidden w-full">
      <div>
        <div className="flex justify-between items-center py-3 px-5 md:px-10">
          <div className="flex items-center gap-2 scale-75">
            <img src="./images/brand-2.png" alt="" />
            <h1 className="font-bold text-3xl text-white">NFT</h1>
          </div>

          {/* navbar besar */}
          <div className="text-white font-bold lg:flex justify-start items-center gap-10 hidden">
            <p>Auction</p>
            <p>Community</p>
            <p>Explore</p>
          </div>
          <div className="hidden lg:inline-block w-[10%]">
            <button className="bg-button-color py-3 text-white font-medium rounded-2xl flex justify-center items-center gap-2">
              <img
                src="./images/wallet.png"
                alt=""
                className="w-[8%] md:w-[3%] lg:w-[15%]"
              />
              My Wallet
            </button>
          </div>

          <img
            src="./images/menu.png"
            alt=""
            className="scale-125 lg:hidden"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div
          style={{
            transition: ".2s all ease-in-out",
          }}
          className={
            open
              ? "text-white font-medium pt-3 flex flex-col gap-7 px-5 md:px-14 pb-5 h-[15em] md:h-[15em]"
              : "h-0 text-white font-medium flex flex-col gap-7 px-5 md:px-14"
          }
        >
          <p>Auction</p>
          <p>Community</p>
          <p>Explore</p>
          <button className="bg-button-color py-3 px-6 lg:px-5 text-white font-medium rounded-lg flex justify-center items-center gap-2">
            <img
              src="./images/wallet.png"
              alt=""
              className="w-[8%] md:w-[3%]"
            />
            My Wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
