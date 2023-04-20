import React from "react";
import { Carousel } from "flowbite-react";
import porjectImg1 from "../assets/project-img1.png";

export default function Projects() {
  return (
    <React.Fragment>
      <div className="py-4 px-6 mb-10">
        <h1 className="text-white font-bold text-4xl text-center mb-4">
          Projects
        </h1>
        <p className="text-xl text-grey text-center mb-4">
          Explore my recent projects below, where I applied my skills to create
          various different web applications. Click on a project to learn more
          about it.
        </p>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 px-16">
          <Carousel>
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
              alt="..."
            />
          </Carousel>
        </div>
      </div>
    </React.Fragment>
  );
}
