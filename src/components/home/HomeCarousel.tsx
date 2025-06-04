import { Carousel } from "flowbite-react";

function HomeCarousel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full">
      <Carousel slideInterval={5000}>
        <div className="w-full h-full relative overflow-hidden">
          <img src="images/bg1.webp" alt="..." className="rounded-b-xl" />
          <div className="absolute w-1/2 sm:w-2/6 top-0 left-0 sm:top-10 sm:left-10 2xl:top-32 2xl:left-32 rounded-sm bg-black bg-opacity-85 text-white p-2 sm:p-4">
            <h3 className="font-bold sm:text-2xl">Thrilling Discovery</h3>
            <p className="text-sm sm:text-base">
              Skills for today and tomorrow. Embark on your learning journey
              with us.
            </p>
          </div>
        </div>
        <div className="w-full h-full relative overflow-hidden ">
          <img
            src="images/bg2.webp"
            alt="Descripción de la imagen"
            className="opacity-30 sm:opacity-100 rounded-b-xl"
          />
          <div className="absolute inset-0 flex items-center justify-center sm:p-4  sm:h-auto h-48  sm:bg-black sm:bg-opacity-80 text-white">
            <div className="text-center text-sm sm:text-base">
              <h3 className="font-bold text-lg sm:text-2xl">
                Specially Designed For You
              </h3>
              <p className="my-4">
                Choose from the various plans we provide, both individual and
                for businesses
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-black sm:flex-nowrap">
                <button className=" bg-dark py-3 text-black px-4 rounded-full w-32 sm:w-auto hover:bg-gradient-to-b hover:bg-primary hover:text-white sm:hover:font-bold transition-all duration-100">
                  Individual Plan
                </button>
                <button className=" bg-dark py-3 text-black px-4 rounded-full w-32 sm:w-auto hover:bg-gradient-to-b hover:bg-primary hover:text-white sm:hover:font-bold transition-all duration-100">
                  Business Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
