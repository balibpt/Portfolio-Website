import React, { useState, useEffect } from "react";
import { Carousel, Modal } from "flowbite-react";
import porjectImg3 from "../assets/projectImg3.png";
import airbnb from "../assets/airbnb.png";
import airbnbGif from "../assets/airbnb.gif";
import catchGif from "../assets/catch.gif";

// export default function Projects() {
//   const [showCatchModal, setShowCatchModal] = useState(false);
//   const [showAirbnbModal, setShowAirbnbModal] = useState(false);

//   const [isHovering, setIsHovering] = useState(false);

//

//   useEffect(() => {
//     if (isHovering) {
//       const timeout = setTimeout(() => {
//         setShowCatchModal(true);
//       }, 1000);
//     }

//     return () => {
//       clearTimeout(timeout);
//     }

//   }, [isHovering]);

//   return (
//     <React.Fragment>
//       <div id="projects" className="py-4 px-6 mb-10">
//         <h1 className="text-white font-bold text-4xl text-center mb-4">
//           Projects
//         </h1>
//         <p className="text-xl text-grey text-center mb-4">
//           Explore my recent projects below, where I applied my skills to create
//           various different web applications. Click on a project to learn more
//           about it.
//         </p>
//         <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 px-16">
//           <Carousel>
//             <div
//               onMouseEnter={() => {
//                 setIsHovering(true);
//               }}
//               onMouseLeave={() => {
//                 setIsHovering(false);
//               }}
//             >
//               <img
//                 src={porjectImg3}
//                 alt="..."
//                 className="object-fill opacity-80"
//               />
//               <Modal show={showCatchModal}>
//                 <Modal.Body
//                   onMouseLeave={() => {
//                     setShowCatchModal(false);
//                   }}
//                 >
//                   <a
//                     href="https://catch-nft.herokuapp.com/"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="block h-full"
//                   >
//                     <img src={catchGif} alt="" className="" />
//                   </a>
//                 </Modal.Body>
//               </Modal>
//             </div>
//             <div
//               onMouseEnter={() => {
//                 setShowAirbnbModal(true);
//               }}
//             >
//               <img src={airbnb} alt="..." className="object-fill opacity-80" />
//               <Modal show={showAirbnbModal}>
//                 <Modal.Body
//                   onMouseLeave={() => {
//                     setShowAirbnbModal(false);
//                   }}
//                 >
//                   <a
//                     href="https://github.com/wenghaishi/1160-airbnb-clone"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="block h-full"
//                   >
//                     <img src={airbnbGif} alt="" className="" />
//                   </a>
//                 </Modal.Body>
//               </Modal>
//             </div>
//           </Carousel>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }

export default function Projects() {
  const [showCatchModal, setShowCatchModal] = useState(false);
  const [showAirbnbModal, setShowAirbnbModal] = useState(false);

  const [isHoveringOverCatch, setIsHoveringOverCatch] = useState(false);
  const [isHoveringOverAirbnb, setIsHoveringOverAirbnb] = useState(false);

  useEffect(() => {
    window.addEventListener("click", () => {
      setShowCatchModal(false);
      setShowAirbnbModal(false);
    });
  }, []);

  useEffect(() => {
    let timeoutId = null;

    if (isHoveringOverCatch) {
      timeoutId = setTimeout(() => {
        setShowCatchModal(true);
      }, 1000);
    } else {
      clearTimeout(timeoutId);
      setShowCatchModal(false);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isHoveringOverCatch]);

  useEffect(() => {
    let timeoutId = null;

    if (isHoveringOverAirbnb) {
      timeoutId = setTimeout(() => {
        setShowAirbnbModal(true);
      }, 1000);
    } else {
      clearTimeout(timeoutId);
      setShowAirbnbModal(false);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isHoveringOverAirbnb]);

  return (
    <React.Fragment>
      <div id="projects" className="py-4 px-6 mb-10">
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
            <div
              onMouseEnter={() => {
                setIsHoveringOverCatch(true);
              }}
              onMouseLeave={() => {
                setIsHoveringOverCatch(false);
              }}
            >
              <img
                src={porjectImg3}
                alt="..."
                className="object-fill opacity-80"
              />
              <Modal show={showCatchModal}>
                <Modal.Body
                  onMouseLeave={() => {
                    setShowCatchModal(false);
                  }}
                >
                  <a
                    href="https://catch-nft.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="block h-full"
                  >
                    <img src={catchGif} alt="" className="" />
                  </a>
                </Modal.Body>
              </Modal>
            </div>
            <div
              onMouseEnter={() => {
                setIsHoveringOverAirbnb(true);
              }}
              onMouseLeave={() => {
                setIsHoveringOverAirbnb(false);
              }}
            >
              <img src={airbnb} alt="..." className="object-fill opacity-80" />
              <Modal show={showAirbnbModal}>
                <Modal.Body
                  onMouseLeave={() => {
                    setShowAirbnbModal(false);
                  }}
                >
                  <a
                    href="https://github.com/wenghaishi/1160-airbnb-clone"
                    target="_blank"
                    rel="noreferrer"
                    className="block h-full"
                  >
                    <img src={airbnbGif} alt="" className="" />
                  </a>
                </Modal.Body>
              </Modal>
            </div>
          </Carousel>
        </div>
      </div>
    </React.Fragment>
  );
}
