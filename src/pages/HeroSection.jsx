import { useState } from "react";

const HeroSection = () => {

    let [none, setNone] = useState(false);

    return (
      <section className="">
        <div>
          <div className="relative">
            <img
              src="./images/hero-image.png"
              alt=""
              className="w-full h-[50vh] md:h-full lg:h-[80vh] md:px-10 object-cover rounded-3xl overflow-hidden"
            />
            <div className="flex justify-center items-center flex-col pb-14 md:pb-10 absolute bottom-0 md:left-1/2 md:-translate-x-1/2">
              <h1 className="bg-gradient-to-t text-transparent from-[#5C3EAF] to-[#D279F5] bg-clip-text font-inter text-[45px] md:text-6xl lg:text-8xl md:leading-normal lg:leading-snug text-center px-10"
              >
                Collect your NFTs Here!
              </h1>
              <div className="relative mt-5">
                <input
                  type="text"
                  className="rounded-full py-3 px-10 bg-white bg-opacity-20 placeholder:translate-x-10 text-white"
                  id="searchNft"
                  onClick={() => setNone(true)}
                />
                <div className={(none === true) ? "hidden" : "flex justify-center items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 gap-3"}>
                  <img src="./images/search.png" alt="" className="w-[15%]" />
                  <label htmlFor="searchNft" className="text-white font-medium inline-block w-full">
                    Find Your NFT
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default HeroSection;