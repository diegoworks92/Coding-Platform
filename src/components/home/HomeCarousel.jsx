import { Carousel } from "flowbite-react";

function HomeCarousel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full">
      <Carousel slideInterval={5000}>
        <div className="w-full h-full relative">
          <img src="images/bg1.webp" alt="..." />
          <div className="absolute w-1/2 sm:w-2/6 top-0 left-0 sm:top-10 sm:left-10 2xl:top-32 2xl:left-32 rounded-sm bg-black bg-opacity-85 text-white p-2 sm:p-4">
            <h3 className="font-bold sm:text-2xl">Thrilling Discovery</h3>
            <p>
              Skills for today and tomorrow. Embark on your learning journey
              with us.
            </p>
          </div>
        </div>
        <div className="w-full h-full relative">
          <img src="images/bg2.webp" alt="..." />
          <div className="hidden xl:block absolute w-1/2 sm:w-2/6 top-0 left-0 right-10 2xl:right-32 m-auto sm:top-10 sm:left-10 2xl:top-32 2xl:left-32 rounded-sm bg-black bg-opacity-90 text-white p-2 sm:p-4">
            <h3 className="font-bold sm:text-2xl">
              Specially Designed For You
            </h3>
            <p className=" my-4">
              Choose from the various plans we provide, both individual and for
              businesses
            </p>
            <div className="flex flex-nowrap justify-center gap-2 text-black">
              <button className="border-2 border-gray-950 bg-dark py-3 text-black px-4 rounded-full w-full hover:bg-gradient-to-b hover:bg-primary hover:text-white hover:font-bold transition-all duration-100">
                Individual Plan
              </button>
              <button className="border-2 border-gray-950 bg-dark py-3 text-black px-4 rounded-full w-full hover:bg-gradient-to-b hover:bg-primary hover:text-white hover:font-bold transition-all duration-100">
                Business Plan
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
