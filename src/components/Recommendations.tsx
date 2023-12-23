import bannerBg from "../assets/img/bannerbg.webp";
import React from "react";
import { Swiper, SwiperSlide, } from "swiper/react";
import { Autoplay, EffectCards, Pagination, Navigation } from "swiper/modules";
import { recommendations } from "../assets/lib/data";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { useTheme } from "../context/theme-context";
import LiveTicker from "./ParallaxText";
 
const Recommendations: React.FC = () => {
  const { theme } = useTheme()
  return (
    <React.Fragment>
       <section id="kudos" className="quote-banner mt-10 relative overflow-x-clip z-[1]">
        <div
          className="quote-outer-container bg-[--darkblue] h-[70vh] -rotate-3 flex justify-center items-center scale-110 max-lg:h-full min-[1921px]:px-96"
          style={{
            backgroundImage: `url(${bannerBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="quote-container rotate-3 flex items-center flex-col justify-center p-56 max-lg:p-20 ">
            <Swiper
              grabCursor={true}
              modules={[EffectCards, Autoplay, Pagination, Navigation]}
              className=" w-[60vw] max-sm:w-[95vw] justify-center align-middle items-center  min-[1921px]:px-96"
              loop={true}
              navigation
              scrollbar={{ draggable: true }}
              autoplay={{
                delay: 15000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              effect="coverflow"
              style={{ alignItems: "center" }}
              pagination={{
                clickable: true,
              }}
            >
             
              {recommendations.map((recommendation, index: number) => (
                <SwiperSlide
                  key={index}
                  style={{ filter:theme ==='dark' ?  "brightness(0.5)" : ''}}
                  className="text-[--white] flex flex-row justify-between   p-20 text-left  "
                >
                  <div className="  flex flex-col gap-12 ">
                     <img
                      src={recommendation.image}
                      alt={recommendation.image}
                      className="  w-full object-contain object-top rounded-3xl" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <LiveTicker />
      </section>
    </React.Fragment>
  );
};

export default Recommendations;
