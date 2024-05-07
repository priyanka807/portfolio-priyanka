import React from "react";

const TryA = () => {
  return (
    <div>
      <div className="flex  justify-between ">
        <div className="flex border justify-between">
          <div>
            {/* INTRO START */}
            <div
              className="inline-flex flex-col mb-10 text-center md:text-left text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] relative "
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <div className="font-light mb-4">
                👋 Hi, I Am <span className="font-semibold">Amit Kumar</span>
              </div>
              <div className="max-w-[810px]  ">
                I'm a web developer with a focus on the MERN stack, but still
                exploring other technologies and frameworks that catch my
                interest! if you're looking for a developer to add to your team,
                I'd love to hear from you!
              </div>
            </div>
            {/* INTRO END */}
          </div>

          <div>
            {/* NUMBER BLOCK START */}
            <div
              className="   relative z-10  "
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              {/* START */}
              <div className="flex justify-between  w-[100%] ">
                <div className="flex">
                  <div className="leading-[22px] ">
                    <button
                      type="button"
                      class="text-white bg-gradient-to-r from-purple-800 to-orange-600 hover:bg-gradient-to-l focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Resume
                    </button>
                  </div>
                  {/* END */}

                  {/* START */}
                  <div className="leading-[22px]">
                    <button
                      type="button"
                      class="text-white bg-gradient-to-r from-purple-800 to-orange-600 hover:bg-gradient-to-l focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                      onClick={() => scrollTo("contact")}
                    >
                      Hire Me
                    </button>
                  </div>
                </div>
                {/* END */}
              </div>
            </div>
          </div>

          <div>
            <div>
              {/* PERSON BLOCK START */}
              <div
                className=" rounded-b-[200px] overflow-hidden  -translate-x-1/2 border w-[200px]  "
                initial={{ y: 200, x: "-50%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img className=" " src={amit} alt="" />
              </div>
            </div>
            {/* PERSON BLOCK END */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryA;
