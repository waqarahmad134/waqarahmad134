import React from "react";
import about from "../../assets/Images/about_me.webp"
const About = () => {
  return (
    <div
      className="AboutBody flex justify-center items-center gap-2.5 relative h-screen
       w-full text-white font-bold bg-cover bg-no-repeat"
      id="about1"
    >
      <div className="grid sm:grid-cols-2 w-5/6">
        <div>
          <img src={about} alt="" />
        </div>
        <div>
          <div className="text-center text-3xl text-amber-400 my-3">
            About me:
          </div>
          <div className="">
            I have always been fascinated by the intersection of design and
            technology, and how they can come together to create beautiful and
            functional websites. As a front-end web developer, I see myself as a
            storyteller, using code to bring my client's vision to life. I take
            pride in my ability to create intuitive user experiences that keep
            visitors engaged and coming back for more. When I'm not coding, you
            can find me exploring new hiking trails or experimenting with a new
            recipe in the kitchen.
          </div>
          {/* <Link to="/resume">
            {" "}
            <div
              className="g-btn-2 hover:scale-110"
              title="Click to view Resume"
            >
              Resume
            </div>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default About;
