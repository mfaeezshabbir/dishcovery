import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        // <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-16 md:py-24 h-[95vh] flex">
        <section className="bg-[#1A2238] py-16 md:py-24 h-[95vh] flex">
            <div className="container flex flex-col items-center justify-between px-4 mx-auto md:px-6 lg:px-8 md:flex-row">
                <div className="flex-1 mb-12 md:mb-0">
                    <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">Discover the world&apos;s best destinations with us</h1>
                    <p className="mb-8 text-lg text-white opacity-75 md:text-xl md:mb-0">Join us on an adventure to explore new places, discover unique cultures and make unforgettable memories.</p>
                </div>
                <div className="relative items-center justify-center flex-1 text-center md:text-right">
                    <img src="https://source.unsplash.com/800x800/?restaurants" className='w-full h-full transition-all duration-500 ease-in-out transform rounded-lg shadow-xl hover:scale-110' alt="" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Link to="/discover" className="px-8 py-3 font-medium tracking-wide text-purple-500 uppercase transition-all duration-200 ease-in-out transform bg-white rounded-full shadow-lg hover:text-purple-600 hover:-translate-y-2 hover:shadow-xl">
                            Explore Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
