import { Carousel } from "flowbite-react";

function CarouselH() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full">
      <Carousel slideInterval={50000}>
        <div className="w-full h-full relative">
          <img src="../../../public/images/bg1.webp" alt="..." />
          <div className="absolute w-1/2 sm:w-2/6 top-0 left-0 sm:top-10 sm:left-10 2xl:top-32 2xl:left-32 rounded-sm bg-black bg-opacity-85 text-white p-2 sm:p-4">
            <h3 className="font-bold sm:text-2xl">Thrilling Discovery</h3>
            <p>
              Skills for today and tomorrow. Embark on your learning journey
              with us.
            </p>
          </div>
        </div>
        <div className="w-full h-full relative">
          <img src="../../../public/images/bg2.webp" alt="..." />
          <div className="hidden xl:block absolute w-1/2 sm:w-2/6 top-0 left-0 right-10 2xl:right-32 m-auto sm:top-10 sm:left-10 2xl:top-32 2xl:left-32 rounded-sm bg-black bg-opacity-90 text-white p-2 sm:p-4">
            <h3 className="font-bold sm:text-2xl">
              Specially Designed For You
            </h3>
            <p className=" my-4">
              Choose from the various plans we provide, both individual and for
              businesses
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-black">
              <button className="bg-primary rounded-lg p-2">
                Individual Plan
              </button>
              <button className="bg-primary rounded-lg p-2">
                Business Plan
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselH;
