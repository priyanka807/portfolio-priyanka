import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import SkillIcon from "./SkillIcon";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Achievements from "./Achievements";
import Div from "./Div";

// IMAGES
import sk1 from "../assets/typescript.svg";
import sk2 from "../assets/bootstrap.png";
import sk3 from "../assets/nextjs.png";
import sk4 from "../assets/sk-4.png";
import sk5 from "../assets/sk-5.png";
import sk6 from "../assets/github.png";
import sk7 from "../assets/sk-7.png";
import sk8 from "../assets/sk-8.png";
import sk9 from "../assets/sk-9.png";
import sk10 from "../assets/sk-10.png";
import sk11 from "../assets/sk-11.png";
import pattern from "../assets/heading-pattern.png";
import pe1 from "../assets/sec-3-p-e-1.png";
import pe2 from "../assets/sec-3-p-e-2.png";
import pe3 from "../assets/sec-3-p-e-3.png";
import BarGraph from "./Resume/BarGraph";
// import nextjs from '../assets/nextjs.png';

const Skills = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1500], [1000, 0], { clamp: false });
  const y2 = useTransform(scrollY, [0, 2200], [1500, 0], { clamp: false });
  const y3 = useTransform(scrollY, [0, 2700], [2000, 0], { clamp: false });
  return (
    <div
      id="skills"
      className=" bg-[#111111] py-[50px] md:py-[50px] relative overflow-hidden"
    >
      {/* BACKGROUND ELEMENTS START */}
      <div className="sec-3-bg-gradient-1" />
      <div className="sec-3-bg-gradient-2" />
      <motion.img className="sec-3-p-e-1" style={{ y: y1 }} src={pe1} />
      <motion.img className="sec-3-p-e-2" style={{ y: y2 }} src={pe2} />
      <motion.img className="sec-3-p-e-3" style={{ y: y3 }} src={pe3} />
      {/* BACKGROUND ELEMENTS END */}
      <Wrapper>
        {/* SKILL ICONS START */}
        {/* <h1 className=" m-auto text-center text-[48px] text mb-6 font-bold " >My Skills</h1> */}
        <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-10">
          My Skills
        </div>
        <Div className="grid grid-cols-4 gap-3 md:grid-cols-11 relative  ">
          <SkillIcon path={sk1} />
          <SkillIcon path={sk2} />
          <SkillIcon path={sk3} />
          <SkillIcon path={sk4} />
          <SkillIcon path={sk5} />
          <SkillIcon path={sk6} />
          <SkillIcon path={sk7} />
          <SkillIcon path={sk8} />
          <SkillIcon path={sk9} />
          <SkillIcon path={sk10} />
          <SkillIcon path={sk11} />
        </Div>
        {/* SKILL ICONS END */}

        {/* SERVICES SECTION START */}
        <motion.div
          className="flex flex-col md:flex-row  justify-between  py-[30px] md:py-[50px] relative   "
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {/* SERVICES START */}

          <div className="flex flex-col text-center  w-[100%]  md:w-[33%]  ">
            <div className="text-3xl font-bold mr-10 py-3">FRONTEND</div>
            <div className=" ">
              <div className="  flex flex-col  gap-4 mt-6  w-[100%]  ">
                <BarGraph name={"HTML"} percent={85} />
                <BarGraph name={"CSS"} percent={80} />
                <BarGraph name={"JavaScript"} percent={65} />
                <BarGraph name={"React"} percent={75} />
                <BarGraph name={"Redux Toolkit"} percent={60} />
                <BarGraph name={"TypeScript"} percent={40} />
                <BarGraph name={"Tailwind CSS"} percent={70} />
                <BarGraph name={"Next Js"} percent={40} />
                {/* <BarGraph name={"WordPress"} percent={90} /> */}
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col text-center  w-[100%]  md:w-[33%]  ">
            <div className="text-3xl font-bold mr-10 py-3">BACKEND</div>
            <div className=" ">
              <div className="  flex flex-col  gap-4 mt-6  w-[100%] ">
                <BarGraph name={"Node JS"} percent={50} />
                <BarGraph name={"Express Js"} percent={55} />
                <BarGraph name={"MongoDB"} percent={50} />
              </div>
            </div>
          </div> */}

          <div className="flex flex-col  text-center  w-[100%]  md:w-[33%]   ">
            <div className="text-3xl font-bold mr-10 py-3">TOOLS</div>
            <div className="  ">
              <div className="  flex flex-col  gap-4 mt-6  w-[100%]  ">
                <BarGraph name={"GitHub"} percent={65} />
                <BarGraph name={"Netlify"} percent={75} />
                <BarGraph name={"Vercel"} percent={60} />
              </div>
            </div>
          </div>
          {/* SERVICES END */}
        </motion.div>

        <Portfolio />
        {/* <Achievements /> */}
      </Wrapper>
    </div>
  );
};

export default Skills;
