import React from "react";
import Button from "./Button";
import RadialGradient from "./RadialGradient";
import { headerIntroData } from "../assets/lib/data";
import { useSectionInView } from "../assets/lib/hooks";
import { useActiveSectionContext } from "../context/active-section-context";
import { useLanguage } from "../context/language-context";
import { BsMouse } from "react-icons/bs";

const HeaderIntro: React.FC = () => {
  const { language } = useLanguage();
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      className="hero flex flex-col  justify-center gap-10 items-center h-full max-lg:h-full max-lg:gap-6"
      ref={ref}
      id="home"
    >
      <RadialGradient scale="scale-y-125" opacity="opacity-30"  />

      <h1 className="w-[18rem] h-[18rem] max-sm:w-[14rem] max-sm:h-[14rem] drop-shadow-2xl shadow-2xl avatar-img   flex items-center justify-center text-9xl font-bold text-black bg-gray-800 rounded-full">
        {headerIntroData.initials}
      </h1>
      {/* <img
        src={headerIntroData.profilepicture}
        alt={headerIntroData.profilepicture}
        className="w-1/6 drop-shadow-2xl rounded-full shadow-2xl avatar-img max-lg:w-3/4"
        style={{ filter: "blur(4px)", opacity: 0.8 }}
      /> */}
      <h1>
        {language === "DE"
          ? headerIntroData.title.de
          : headerIntroData.title.en}
        <span className="wave text-7xl">&#128075;&#127997;</span>
      </h1>
      <h2>{headerIntroData.subtitle}</h2>
      <p className="w-1/2 text-center max-sm:hidden">
        {language === "DE"
          ? headerIntroData.description.de
          : headerIntroData.description.en}
      </p>

      <div className="button-container flex items-center justify-center mr-8 gap-10 mb-12 max-lg:flex-col max-lg:items-center">
        {headerIntroData.buttons.map((button, index) => (
          <Button
            key={index}
            label={language === "DE" ? button.label.de : button.label.en}
            iconSVG={button.icon}
            link={button.link || `#${button.name.toLocaleLowerCase()}`}
            buttoncolor={button.color}
            target={button.link && '_blank'}
            onClick={() => {
              button.name && setActiveSection(button.name);
              setTimeOfLastClick(Date.now());
            }}
          />
        ))}
      </div>
      <div className="scroll-down-container animate-bounce flex gap-6">
        <BsMouse className="text-[2.6rem]" />
      </div>
    </section>
  );
};

export default HeaderIntro;
