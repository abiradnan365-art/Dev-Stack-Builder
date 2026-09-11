import hero from "../assets/banner-stack.png"
function Hero() {
    return (
        <div className="flex justify-between items-center container max-w-6xl mx-auto">
            <div className="">
                <h1 className="text-4xl font-bold my-4 ">Build Your Ideal <br /> <span  className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span> </h1>
                <p className=" my-3">Explore frontend, backend, database, and tooling options,<br />
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>
                
                    <button className="bg-orange-400 m-2 p-2 rounded-xl text-white hover:bg-orange-500 cursor-pointer">Explore Technologies</button>
                    <button className="border border-gray-400 m-1 p-2 rounded-xl hover:bg-gray-300 cursor-pointer ">Learn More</button>
              
            </div>
            <img src={hero} alt="" />
            
        </div>
       
    );
}
export default Hero;