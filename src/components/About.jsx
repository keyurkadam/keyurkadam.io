import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b bg-custom-bg text-custom-yellow-color"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          {/* <p className="text-4xl font-bold inline border-b-4 border-gray-500"> */}
          <p className="text-4xl font-bold inline  border-gray-500">
            # About
          </p>
        </div>
        <p className="text-xl ">
          Welcome! My name is Keyur Kadam, I am a full-stack software developer based in England. I work with web technologies to build scalable applications that stand the test of time. I value clean and readable code, working in diverse teams, and making a positive impact on the world. Keep reading to find out more about my work and skillset.
        </p>
        <br />
        {/* <p className="text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p> */}
      </div>
    </div>
  );
};

export default About;
