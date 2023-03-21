import { CategoriesCard } from "../components/Seller";

const CategoriesSection = () => {
  return (
    <section className="px-5 md:px-20 lg:px-32 md:mt-20">
      <div>
        <h1 className="text-white font-bold text-2xl md:text-3xl mt-14 text-center uppercase">
          Categories
        </h1>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3 lg:grid-cols-4 md:mt-10 lg:gap-5">
          <CategoriesCard img={"./images/nft-1.png"} name={"Art"} />
          <CategoriesCard img={"./images/nft-2.png"} name={"Collection"} />
          <CategoriesCard img={"./images/nft-3.png"} name={"Domain Name"} />
          <CategoriesCard img={"./images/nft-4.png"} name={"Music"} />
          <CategoriesCard img={"./images/nft-5.png"} name={"Photography"} />
          <CategoriesCard img={"./images/nft-6.png"} name={"Sport"} />
          <CategoriesCard img={"./images/nft-7.png"} name={"Trading Card"} />
          <CategoriesCard img={"./images/nft-8.png"} name={"ArUtilityt"} />
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
