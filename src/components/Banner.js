import React from "react";
import bannerBg from "../assets/banner-bg.png";
import headerImg from "../assets/header-img.svg";
import { TypeAnimation } from "react-type-animation";

export default function Banner() {
  return (
    <React.Fragment>
      <div
        className="min-h-screen w-screen"
        style={{
          backgroundImage: `url(${bannerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pt-64 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="text-white">
              <h1 className="inline-block rounded-lg py-2 text-2xl mr-12 px-3 font-bold mb-4 border border-white bg-gradient-to-r from-pink-900 via-transparent to-purple-500 bg-opacity-50">
                Welcome to my portfolio!
              </h1>
              <div>
                <TypeAnimation
                  sequence={[
                    // Same String at the start will only be typed once, initially
                    "Hi! I'm Bali",
                    1000,
                    "Hi! I'm Bali FullStack Developer",
                    1000,
                  ]}
                  speed={50}
                  style={{
                    fontSize: "4em",
                    fontWeight: "bold",
                    lineHeight: "1em",
                  }}
                  repeat={Infinity}
                />
              </div>
              <p className="mt-4 text-lg text-gray-400">
                I am an aspiring fullstack developer. I am passionate about
                creating efficient and user-friendly web applications that can
                help solve real-world problems. In my free time, I enjoy playing
                football, gaming, gyming and cooking!
              </p>
            </div>
            <div className="mx-auto" style={{ height: "500px" }}>
              <img
                className="w-full h-full object-contain animate-updown"
                src={headerImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
