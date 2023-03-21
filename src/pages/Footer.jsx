const Footer = () => {
  return (
    <section className="">
      <div className="px-8 lg:px-32 md:px-20 lg:pt-20 lg:pb-20 pt-10 pb-10 mt-10 bg-[#5C3EAF] bg-opacity-30 md:grid grid-cols-4 lg:grid-cols-3 items-center gap-x-10 lg:items-start">
        <div className="col-span-4 lg:col-span-1">
          <div className="flex justify-start items-center gap-2">
            <img src="./images/brand.png" alt="" />
            <h1 className="text-white font-bold text-3xl">NFT</h1>
          </div>

          <p className="text-white font-medium mt-5 md:w-[80%] lg:w-[90%] lg:mt-10">
            MahyuNFT is the largest NFTs Marketplace of Etherium (ETH). Buy,
            sell, and discover exclusive digital items.
          </p>
        </div>
        <div className="my-8 lg:my-0 text-white font-bold underline flex flex-col justify-start gap-2 lg:gap-5 col-span-2 lg:col-span-1">
          <a href="#">About us</a>
          <a href="#">Frequently Asked Questions (FAQ)</a>
          <a href="#">Help Center</a>
          <a href="#">How to Buy and Sell</a>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <h1 className="font-bold text-white">
            Subscribe MahyuNFT for newsletter right now!
          </h1>
          <div className="mt-3 flex items-center justify-between md:justify-start gap-3 md:gap-3">
            <input
              type="text"
              className="bg-opacity-20 w-[90%] md:w-full bg-white py-3 rounded-lg pl-5 placeholder:text-white text-white outline-none border-none"
              placeholder="Insert Your Email Here"
            />
            <button className="bg-button-color py-3 px-6 lg:px-5 text-white font-medium rounded-lg">
              Sent
            </button>
          </div>
        </div>
      </div>

      <div className="py-5 md:px-20 lg:px-32 bg-[#5C3EAF] text-white px-8 md:flex justify-between">
        <h1 className="font-medium">© 2023 Mahyu.my.id | Azam Din Abdillah</h1>
        <div className="flex items-center gap-2 mt-1">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
