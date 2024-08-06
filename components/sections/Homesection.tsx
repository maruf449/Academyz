// components/HeroSection.js
const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center parallax-bg"
        style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1661767552224-ef72bb6b671f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
      >
        <div className="w-full h-full bg-black opacity-50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 md:px-12 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-slide-in">
          Discover Amazing Experiences
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-slide-in-delay">
          Explore a world of creativity with our platform designed to help you achieve your goals.
        </p>
        <a
          href="#explore"
          className="inline-block bg-yellow-500 text-black py-3 px-6 rounded-lg font-semibold text-lg transition-transform transform hover:scale-105 hover:shadow-lg animate-bounce"
        >
          Get Started
        </a>
      </div>

      {/* Animated Scroll Indicator */}
      <a href="#explore" className="absolute bottom-10 text-white animate-bounce">
        <svg
          className="w-8 h-8 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 15l7 7 7-7M12 3v12" />
        </svg>
        <p className="mt-2">Scroll Down</p>
      </a>
    </section>
  );
};

export default HeroSection;
