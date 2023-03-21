import { Seller } from "../components/Seller";

const SellerSection = () => {
  return (
    <section className="mt-10 px-8 md:px-20 lg:px-32">
      <div>
        <h1 className="uppercase text-white font-bold text-center text-2xl md:text-3xl">
          top seller
        </h1>
        <div className="mt-6 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-7 md:mt-10">
          <Seller img={"./images/seller-1.png"} name={"RizKhen"} />
          <Seller img={"./images/seller-2.png"} name={"Jhiehe"} />
          <Seller img={"./images/seller-3.png"} name={"Fukiep"} />
          <Seller img={"./images/seller-4.png"} name={"Hags"} />
          <Seller img={"./images/seller-5.png"} name={"Berhans"} />
          <Seller img={"./images/seller-6.png"} name={"Abdliie"} />
          <Seller img={"./images/seller-7.png"} name={"Wetur Art"} />
          <Seller img={"./images/seller-8.png"} name={"Pokko"} />
        </div>
      </div>
    </section>
  );
};

export default SellerSection;
