import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { useSpring, animated } from "react-spring";
import backgroundImage1 from "./2.png";
import backgroundImage2 from "./4.png";
import backgroundImage3 from "./5.png";

import imageA from "./a.jpg";
import imageB from "./b.jpg";
import cardBG from "./card1.png";
import gold from "./gold.jpeg";
import cash from "./cash.jpeg";
import steak from "./steak.jpeg";
import brunch from "./brunch.jpeg";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showOptionA, setShowOptionA] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const [showConfetti, setShowConfetti] = useState(true);
  const [confettiVisible, setConfettiVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   let timer;
  //   if (showConfetti) {
  //     setConfettiVisible(true);
  //     timer = setTimeout(() => {
  //       setConfettiVisible(false);
  //     }, 10000); // Hide after 5 seconds
  //   }
  //   return () => clearTimeout(timer); // Cleanup timer on unmount or if showConfetti changes
  // }, [showConfetti]);

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setConfettiVisible(true);
  };

  const [selectedOption2, setSelectedOption2] = useState(null);

  const handleOptionClick2 = (option) => {
    setSelectedOption2(option);
    setConfettiVisible(true);
  };

  const [selectedOption3, setSelectedOption3] = useState(null);

  const handleOptionClick3 = (option) => {
    setSelectedOption3(option);
    setConfettiVisible(true);
  };

  const springProps = useSpring({
    transform: isOpen ? "rotateY(180deg)" : "rotateY(0deg)",
  });

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleOption = () => {
    setShowOptionA(!showOptionA);
  };

  const sectionOneRef = useRef(null);
  const sectionTwoRef = useRef(null);
  const sectionThreeRef = useRef(null);
  const sectionFourRef = useRef(null);
  const sectionFiveRef = useRef(null);
  const sectionSixRef = useRef(null);
  const { width, height } = useWindowSize();

  // const sectionSevenRef = useRef(null);
  // const sectionEightRef = useRef(null);

  return (
    <div className="App">
      {confettiVisible && (
        <Confetti numberOfPieces={200} width={width} height={height} />
      )}
      <animated.section
        className="section-one"
        ref={sectionOneRef}
        style={{
          backgroundImage: `url(${backgroundImage1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="birthdayCard">
          <div
            className="cardFront"
            style={{
              backgroundImage: `url(${cardBG})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            <h3 className="happy">HAPPY BIRTHDAY MUNTARIN!</h3>
            <div className="balloons">
              <div className="balloonOne" />
              <div className="balloonTwo" />
              <div className="balloonThree" />
              <div className="balloonFour" />
            </div>
          </div>
          <div className="cardInside">
            <h3 className="back">HAPPY BIRTHDAY!!</h3>
            <p>Dear Muntarin,</p>
            <p>
              Happy birthday!! I hope your day is filled with lots of love and
              laughter! May all of your birthday wishes come true.
            </p>
            <button
              style={{
                marginTop: 100,
                width: 300,
                padding: 20,
                background: "#405061",
                fontSize: 20,
              }}
              onClick={() =>
                sectionTwoRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              Choose gifts
            </button>
          </div>
        </div>
      </animated.section>
      <animated.section
        className="section-two"
        ref={sectionTwoRef} // Assign the ref
        style={{
          backgroundImage: `url(${backgroundImage2})`,
          backgroundSize: "cover", // Cover the entire view area
          backgroundRepeat: "no-repeat", // Do not repeat the image
          backgroundPosition: "center", // Center the image
          transform: `translateY(${scrollY * 0.5}px)`,
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <div className="question">Pick one...</div>
        <div className="options">
          <div
            className={`option ${selectedOption === "A" ? "selected" : ""}`}
            onClick={() => handleOptionClick("A")}
          >
            <div className="option-text">
              INK+IVY Marta Flax Linen{" "}
              <a
                target="_blank"
                href="https://www.amazon.com/INK-IVY-Printed-Comforter-II10-1108/dp/B0BHVCWD3Q/ref=sr_1_1?crid=2PZQ0PNAQUD6L&keywords=ink%2Band%2Bivy%2Bcomforter%2Bset%2Bflax%2Band%2Bcotton%2Bblend&qid=1698880767&s=home-garden&sprefix=ink%2Band%2Bivy%2Bcomforter%2Bset%2Bflax%2Band%2Bcotton%2Bblend%2Cgarden%2C115&sr=1-1&ufe=app_do%3Aamzn1.fos.f5122f16-c3e8-4386-bf32-63e904010ad0&th=1"
              >
                Link
              </a>
            </div>

            <img className="option-image" src={imageA} alt="Option A" />
          </div>
          <div
            className={`option ${selectedOption === "B" ? "selected" : ""}`}
            onClick={() => handleOptionClick("B")}
          >
            <div className="option-text">
              Three Geese Pinch{" "}
              <a
                target="_blank"
                href="https://www.amazon.com/Three-Geese-Comforter-Insert-Hypo-allergenic/dp/B07T4MBJLZ/ref=pd_ci_mcx_mh_mcx_views_0?pd_rd_w=UmOl6&content-id=amzn1.sym.225b4624-972d-4629-9040-f1bf9923dd95%3Aamzn1.symc.40e6a10e-cbc4-4fa5-81e3-4435ff64d03b&pf_rd_p=225b4624-972d-4629-9040-f1bf9923dd95&pf_rd_r=ZG6463S6VRN8D6ZG3GGP&pd_rd_wg=lloCN&pd_rd_r=846611a9-8818-410f-b5aa-1d72430c865f&pd_rd_i=B07T4MBJLZ&th=1"
              >
                Link
              </a>
            </div>
            <img className="option-image" src={imageB} alt="Option A" />
          </div>
        </div>
        <button
          style={{
            marginTop: 100,
            width: 500,
            padding: 20,
            background: "#405061",
            fontSize: 20,
          }}
          onClick={() =>
            sectionThreeRef.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          Go to next gift
        </button>
      </animated.section>

      <animated.section
        className="section-three"
        ref={sectionThreeRef} // Assign the ref
        style={{
          backgroundImage: `url(${backgroundImage3})`,
          backgroundSize: "cover", // Cover the entire view area
          backgroundRepeat: "no-repeat", // Do not repeat the image
          backgroundPosition: "center", // Center the image
          transform: `translateY(${scrollY * 0.5}px)`,
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <div className="question">Pick one...</div>
        <div className="options">
          <div
            className={`option ${selectedOption2 === "A" ? "selected" : ""}`}
            onClick={() => handleOptionClick2("A")}
          >
            <div className="option-text">300 dollar cash </div>

            <img className="option-image" src={cash} alt="Option A" />
          </div>
          <div
            className={`option ${selectedOption2 === "B" ? "selected" : ""}`}
            onClick={() => handleOptionClick2("B")}
          >
            <div className="option-text">300 dollar credit for gold </div>
            <img className="option-image" src={gold} alt="Option A" />
          </div>
        </div>
        <button
          style={{
            marginTop: 100,
            width: 500,
            padding: 20,
            background: "#405061",
            fontSize: 20,
          }}
          onClick={() =>
            sectionFourRef.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          Go to next gift
        </button>
      </animated.section>
      <animated.section
        className="section-four"
        ref={sectionFourRef} // Assign the ref
        style={{
          backgroundImage: `url(${backgroundImage2})`,
          backgroundSize: "cover", // Cover the entire view area
          backgroundRepeat: "no-repeat", // Do not repeat the image
          backgroundPosition: "center", // Center the image
          transform: `translateY(${scrollY * 0.5}px)`,
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <div className="question">Pick one...</div>
        <div className="options">
          <div
            className={`option ${selectedOption3 === "A" ? "selected" : ""}`}
            onClick={() => handleOptionClick3("A")}
          >
            <div className="option-text">Brunch </div>

            <img className="option-image" src={brunch} alt="Option A" />
          </div>
          <div
            className={`option ${selectedOption3 === "B" ? "selected" : ""}`}
            onClick={() => handleOptionClick3("B")}
          >
            <div className="option-text">Dinner </div>
            <img className="option-image" src={steak} alt="Option A" />
          </div>
        </div>
        <button
          style={{
            marginTop: 100,
            width: 500,
            padding: 20,
            background: "#405061",
            fontSize: 20,
          }}
          onClick={() =>
            sectionFiveRef.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          Go to next gift
        </button>
      </animated.section>
      <animated.section
        className="section-five"
        ref={sectionFiveRef} // Assign the ref
        style={{
          backgroundImage: `url(${backgroundImage3})`,
          backgroundSize: "cover", // Cover the entire view area
          backgroundRepeat: "no-repeat", // Do not repeat the image
          backgroundPosition: "center", // Center the image
          transform: `translateY(${scrollY * 0.5}px)`,
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <div className="question">Be ready for...</div>

        <div className="singleButton">
          <h2>A surprise in the city</h2>
          <h3>Event at 8pm</h3>
          <h3>Leave house at 7pm</h3>
        </div>
        <button
          style={{
            marginTop: 100,
            width: 500,
            padding: 20,
            background: "#405061",
            fontSize: 20,
          }}
          onClick={() =>
            sectionSixRef.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          Go to next gift
        </button>
      </animated.section>
      <animated.section
        className="section-six"
        ref={sectionSixRef} // Assign the ref
        style={{
          backgroundImage: `url(${backgroundImage2})`,
          backgroundSize: "cover", // Cover the entire view area
          backgroundRepeat: "no-repeat", // Do not repeat the image
          backgroundPosition: "center", // Center the image
          transform: `translateY(${scrollY * 0.5}px)`,
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <div className="question">Get ready for...</div>

        <div className="singleButton">
          <h2>A late night drive to get dessert</h2>
          {/* <h3>Get dessert</h3> */}
        </div>

        {/* <button
          style={{
            marginTop: 100,
            width: 500,
            padding: 20,
            background: "#405061",
            fontSize: 20,
          }}
          onClick={scrollToSectionTwo}
        >
          Go to bonus gifts
        </button> */}
      </animated.section>
    </div>
  );
}

export default App;
