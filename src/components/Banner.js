import React from "react";
import spaceBg3 from "../assets/spaceBg3.jpg";
import spaceman4 from "../assets/spaceman4.png";
import { TypeAnimation } from "react-type-animation";

export default function Banner() {
  return (
    <React.Fragment>
      <div className="min-h-screen max-h-1200 w-screen relative" id="banner">
        <div className="absolute inset-0 opacity-50">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${spaceBg3})` }}
          ></div>
        </div>
        <div className="px-6 pt-64 relative">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="text-white">
              <h1 className="inline-block rounded-lg py-2 text-2xl mr-12 px-3 font-bold mb-4 border border-white bg-gradient-to-r from-pink-900 via-transparent to-purple-500 bg-opacity-50">
                Welcome to my Website!
              </h1>
              <div>
                <TypeAnimation
                  sequence={[
                    // Same String at the start will only be typed once, initially
                    "Hi! I'm Bali",
                    1000,
                    "Hi! I'm Bali FullStack Developer",
                    1000,
                    "Ruby, Rails, React",
                    1000,
                    "HTML, CSS, JavaScript",
                    1000,
                    "Football, Gym, Gaming, Cooking",
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
                  repeat={3}
                />
              </div>
              <p className="mt-4 text-xl text-grey">
                I am an aspiring fullstack developer. I am passionate about
                creating efficient and user-friendly web applications that can
                help solve real-world problems. In my free time, I enjoy playing
                football, gaming, gyming and cooking!
              </p>
            </div>
            <div className="mx-auto -mt-16" style={{ height: "500px" }}>
              <img
                className="w-full h-full object-contain animate-updown"
                src={spaceman4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
