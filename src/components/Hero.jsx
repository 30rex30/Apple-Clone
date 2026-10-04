function Hero() {
    return (
        <section className="relative h-screen overflow-hidden bg-black">
            <div className="absolute inset-0 w-full z-0">
                <img src="/img/hero.jpg" alt="Hero Image" className="w-full h-full object-cover opacity-90"></img>
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
            </div>

             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                <svg 
                    xmlns="http://w3.org" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2.5" 
                    stroke="currentColor" 
                    className="size-8 text-white cursor-pointer hover:text-gray-300 transition-colors"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" 
                    />
                </svg>
            </div>
        </section>
    );
}

export default Hero;
