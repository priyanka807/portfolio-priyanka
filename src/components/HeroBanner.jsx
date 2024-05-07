import { useRef } from "react";
import { motion } from "framer-motion";

import Wrapper from "./Wrapper";
import amit from "../assets/amit2.png";
import externalLinkIcon from "../assets/external-link-icon.png";
import gmailIcon from "../assets/email-icon.png";
import { scrollTo } from "../helper";
import { useFollowPointer } from "./useFollowPointer";

const HeroBanner = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  return (
    <div
      id="hero"
      // className="w-[100%] xl:h-[100vh] bg-[#111111] overflow-hidden "
      className="w-auto xl:h-[90vh]  overflow-hidden  "
      // md:h-[100vh]
    >
      {/* BACKGROUND ELEMENTS FOR DESKTOP START */}

      {/* <motion.span
        ref={ref}
        animate={{ x, y }}
        className="hidden md:block sec-1-bg-gradient-1-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute md:left-[1000px] 2xl:left-[1309px] -top-[709px] "
      /> */}

      <span className="hidden md:block sec-1-bg-gradient-2-desktop md:w-[700px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute left-[105px] top-[672px] md:top-[500px] 2xl:top-[672px]  " />

      {/* <span className="hidden md:block sec-1-bg-gradient-2-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute left-[105px] top-[672px] md:top-[500px] 2xl:top-[672px]  " /> */}
      {/* BACKGROUND ELEMENTS FOR DESKTOP END */}

      {/* BACKGROUND ELEMENTS FOR DESKTOP START */}
      {/* <span className="md:hidden sec-1-bg-gradient-1-mobile absolute w-[212px] h-[211px] left-[285px] -top-[25px]  " /> */}
      <span className="md:hidden sec-1-bg-gradient-2-mobile absolute w-[636px] h-[635px] -left-[334px] top-[672px]  " />
      {/* BACKGROUND ELEMENTS FOR DESKTOP END */}

      <Wrapper>
        {/* NAVBAR START */}
        <motion.div
          className="  hidden md:flex items-center justify-between mt-[40px] 2xl:mt-[63px] relative  "
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <div className="  flex items-center gap-[6px]">
            <div className="w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center">
              <img src={gmailIcon} alt="" className="w-[18px]" />
            </div>
            <div>priyankacoder11@gmail.com</div>
          </div>
          <ul className=" flex 2xl:text-[20px]">
            {/* <li
                className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
                onClick={() => scrollTo("about")}
              >
                About me
              </li> */}
            <li
              className=" cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
              onClick={() => scrollTo("skills")}
            >
              Skills
            </li>
            <li
              className=" cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
              onClick={() => scrollTo("work")}
            >
              Work
            </li>
            <li
              className=" cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
              onClick={() => scrollTo("contact")}
            >
              Contact
            </li>
            <li className=" cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg">
              <a
                href="https://drive.google.com/file/d/11gfxuFZZ5C7D4wyHy2dZ58EEIEfECSwR/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </motion.div>
        {/* NAVBAR END */}

        {/* BIG HEADING START */}
        {/* <motion.div
          className=" flex justify-center text-center mt-14 mb-10 relative "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="  ">
            Hello, I'm Priyanka Kumari
            <br className="invisible md:visible " />
            Web Developer
          </h1>
        </motion.div> */}
        {/* BIG HEADING END */}

        <motion.div
          className="flex justify-center  items-center    "
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <div className=" mt-20 ">
            <div
              className="  "
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <div className="font-light mb-4 ">
                👋 Hi, I Am <span className="font-semibold">Priyanka Kumari</span>
              </div>
              <div className="max-w-[700px]  ">
                {/* I'm a web developer with a focus on the Mern developer, but still
                exploring other technologies and frameworks that catch my
                interest! if you're looking for a developer to add to your team,
                I'd love to hear from you! */}
                I'm currently honing my expertise in React development and in the process of mastering the MERN stack.
                adapt at crafting robust and scalable solutions. Passionate about exploring new technologies 
                and frameworks, I bring a dynamic approach to projects.I'm enthusiastic about expanding my skills across MongoDB, Express, and Node.js. Eager to contribute to dynamic projects and grow alongside your team.
                 If you're seeking a dedicated developer to elevate your team, 
                I'm eager to collaborate and contribute effectively.
              </div>
            </div>
            <div
              className="  flex justify-center gap-2 relative z-10  mt-7 "
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <div className="leading-[22px]   ">
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-purple-800 to-orange-600 hover:bg-gradient-to-l focus:ring-4  font-medium rounded-lg text-sm px-2 py-2.5 text-center mr-2 mb-2"
                >
                  <a href="https://github.com/priyanka807" target="_blank">
                    GitHub
                  </a>
                </button>
              </div>
              <div className="leading-[22px] ">
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-purple-800 to-orange-600 hover:bg-gradient-to-l focus:ring-4  font-medium rounded-lg text-sm px-2 py-2.5 text-center mr-2 mb-2"
                >
                  <a
                    href="https://drive.google.com/file/d/11gfxuFZZ5C7D4wyHy2dZ58EEIEfECSwR/view"
                    target="_blank"
                  >
                    Resume
                  </a>
                </button>
              </div>
              <div className="leading-[22px]">
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-purple-800 to-orange-600 hover:bg-gradient-to-l focus:ring-4  font-medium rounded-lg text-sm px-2 py-2.5 text-center mr-2 mb-2 "
                  onClick={() => scrollTo("contact")}
                >
                  Hire Me
                </button>
              </div>
            </div>
          </div>

          <div className=" flex justify-end  md:justify-end   ">
            <div
              className=" rounded-b-[10px] overflow-hidden  -translate-x-1/2   xl:shadow-2xl   "
              initial={{ y: 200, x: "-50%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* <img
                className=" w-[170px] md:w-[340px] xl:w-[230px] "
                src={amit}
                alt=""
              /> */}
            </div>
          </div>
        </motion.div>

        {/* NUMBER BLOCK END */}
      </Wrapper>
    </div>
  );
};

export default HeroBanner;
