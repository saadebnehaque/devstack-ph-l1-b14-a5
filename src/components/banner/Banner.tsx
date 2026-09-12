import hero from '../../assets/banner-stack.png'
const Banner = () => {



    return (

        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                <img
                    alt="Tailwind CSS hero component"
                    src={hero}
                    className="max-w-sm rounded-lg  lg:py-12.5 lg:px-17.5"
                />
                <div>
                    <h1 className=" text-3xl lg:text-6xl text-center lg:text-left inter font-extrabold">Build Your Ideal <span className='inter text-transparent bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text '>Development Stack</span></h1>

                    <p className="py-6 text-center lg:text-left text-[14px] lg:text-[18px] lg:inter  text-[#4B5563] leading-5.5 lg:leading-6.5">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>
                    <div className=' flex justify-center lg:justify-start gap-3 lg:gap-4'>
                        <button className="btn inter bg-linear-to-r from-[#F97316] to-[#EC4899] text-white">Explore Technologies</button>
                        <button className="btn font-medium">Learn More</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Banner;