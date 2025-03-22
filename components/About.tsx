import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        
        <p className="text-gray-300 text-center text-lg">
          An enthusiastic individual eager to grow in UX/UI design, focusing on user-centered interfaces. Skilled in understanding user behaviors, creating wireframes, and conducting usability testing. Proficient in Figma, Sketch, with an emphasis on accessibility and seamless experiences. Passionate about design innovation and team collaboration. 
          <br />
          <br />
          <br />
          Passionate about designing intuitive and seamless user experiences, I transform concepts into visually compelling and functional interfaces. With a keen eye for detail and a user-first mindset, I craft elegant solutions that enhance usability and push design boundaries.
        </p>
      </div>
    </section>
  );
};

export default About;
