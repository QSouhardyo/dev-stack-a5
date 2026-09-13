import Hero from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className="py-4 lg:flex lg:items-center lg:my-10">

            <div className="left text-center lg:text-left lg:w-1/2">

                <h1 className="text-3xl font-bold md:text-5xl lg:text-7xl">
                    Build Your Ideal
                </h1>

                <h1 className="bg-brand-gradient bg-clip-text text-3xl font-bold text-transparent md:text-5xl lg:text-7xl">
                    Development Stack
                </h1>

                <p className="mt-4 mb-10 md:mt-8 lg:w-[80%] text-gray-500">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>

                <div>
                    <button className="btn mr-3 rounded-xl bg-brand-gradient text-white">
                        Explore Technologies
                    </button>

                    <button className="btn rounded-xl border-2 px-10">
                        Learn More
                    </button>
                </div>

            </div>

            <div className="right mt-8 lg:mt-0 lg:w-1/2">
                <img className="mx-auto w-full" src={Hero} alt="" />
            </div>

        </div>
    );
};

export default Banner;