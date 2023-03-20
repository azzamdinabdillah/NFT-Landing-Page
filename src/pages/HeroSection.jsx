const HeroSection = () => {
    return (
        <section className="">
            <div>
                <div className="relative">
                    <img src="./images/hero-image.png" alt="" className="w-full h-[50vh] object-cover" />
                    <div className="flex justify-center items-center flex-col pb-14 absolute bottom-0">
                        <h1 style={{ 
                            background: "rgb(92,62,175)",
                            background: "linear-gradient(195deg, rgba(92,62,175,1) 0%, rgba(210,121,245,1) 100%)",
                            color:"transparent",
                            display:"inline-block",
                            backgroundClip:"text", 
                         }} className="bg-clip-text font-inter text-[45px] text-center px-10">Collect your NFTs Here!</h1>
                         <div className="mt-5">
                         <div className="relative">
                            <div>
                         <input type="text" placeholder="Find Your NFT" className="rounded-full py-2 bg-white bg-opacity-20" />
                          <img src="./images/search.png" alt="" className="absolute top-0 w-[10%]" />
                            </div>
                         </div>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;