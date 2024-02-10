import React, { useState } from "react";

const Education = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div
      id="education"
      className="EducationBody flex flex-col justify-center items-center h-screen w-full
relative bg-cover bg-no-repeat bg-fixed text-white"
    >
      <div className="education-body-title text-3xl font-extrabold absolute right-10 top-10 font-mono  text-amber-400">
        ..// academic history
      </div>
      <div className="flex w-9/12">
        {/* Sidebar */}
        <div className="w-1/7">
          <ul className="p-4">
            <li
              className={`cursor-pointer text-lg font-semibold p-3 mb-2 rounded bg-black/60 hover:bg-black/80 ${
                selectedOption === 1 ? "text-amber-300" : ""
              }`}
              onClick={() => handleOptionClick(1)}
            >
              B. Tech
            </li>
            <li
              className={`cursor-pointer text-lg font-semibold p-3 mb-2 rounded bg-black/60 hover:bg-black/80  ${
                selectedOption === 2 ? "text-amber-300 " : ""
              }`}
              onClick={() => handleOptionClick(2)}
            >
              H. S. C
            </li>
            <li
              className={`cursor-pointer text-lg font-semibold p-3 mb-2 rounded bg-black/60 hover:bg-black/80 ${
                selectedOption === 3 ? "text-amber-300 " : ""
              }`}
              onClick={() => handleOptionClick(3)}
            >
              S. S. C
            </li>
          </ul>
        </div>
        {/* Content Box */}
        <div className="flex-1 p-4 w-auto">
          {selectedOption === 1 && (
            <div className="h-full w-full backdrop-blur-sm bg-black/40 pt-10 pb-10 pr-6 pl-6 flex flex-col gap-6">
              <div className="degree flex flex-col gap-2 bg-black/50 rounded-lg p-4">
                <div className="d-title text-3xl font-semibold  text-amber-300">
                  Bachelor of Technology
                </div>
                <div className="d-address text-lg">
                  Institute of Engineering & Management, Maulana Abul Kalam Azad
                  University of Technology, <br /> West Bengal, India
                </div>
              </div>
              <div className="degree-extra flex justify-between">
                <div className="d-major flex flex-col gap-2 bg-black/70 rounded-lg p-4">
                  <div className="d-major-title text-3xl font-medium  text-amber-300">
                    Major:
                  </div>
                  <div className="d-major-text text-lg">
                    Information Technology
                  </div>
                  <div className="d-major-link text-blue-400">
                    <a
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="section under development"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
                <div className="d-tenure flex flex-col gap-2 bg-black/70 rounded-lg pt-4 pb-4 text-center pr-12 pl-12">
                  <div className="text-3xl font-medium  text-amber-300">
                    Tenure:
                  </div>
                  <div className="text-lg">4 Years</div>
                  <div className="text-base">2017-2021</div>
                </div>
                <div className="d-grades flex flex-col gap-2 bg-black/70 rounded-lg p-4 text-right">
                  <div className="text-3xl font-medium  text-amber-300">
                    Grades Achieved:
                  </div>
                  <div className="text-lg">8.02/10 (Indian)</div>
                  <div className="text-lg">2.1/4 (German)</div>
                </div>
              </div>
            </div>
          )}
          {selectedOption === 2 && (
            <div className="h-full w-full backdrop-blur-sm bg-black/40 pt-10 pb-10 pr-6 pl-6 flex flex-col gap-6">
              <div className="degree flex flex-col gap-2 bg-black/50 rounded-lg p-4">
                <div className="d-title text-3xl font-semibold  text-amber-300">
                  Higher Secondary Certificate Examination
                </div>
                <div className="d-address text-lg">
                  B. A. F. Shaheen College, Chittagong Board,
                  <br /> Chittagong, Bangladesh
                </div>
              </div>
              <div className="degree-extra flex justify-between">
                <div className="d-major flex flex-col gap-2 bg-black/70 rounded-lg p-4">
                  <div className="d-major-title text-3xl font-medium  text-amber-300">
                    Major:
                  </div>
                  <div className="d-major-text text-lg">Science</div>
                  <div className="d-major-link text-blue-400">
                    <a
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="section under development"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
                <div className="d-tenure flex flex-col gap-2 bg-black/70 rounded-lg pt-4 pb-4 text-center pr-12 pl-12">
                  <div className="text-3xl font-medium  text-amber-300">
                    Tenure:
                  </div>
                  <div className="text-lg">2 Years</div>
                  <div className="text-base">2015-2017</div>
                </div>
                <div className="d-grades flex flex-col gap-2 bg-black/70 rounded-lg p-4 text-right">
                  <div className="text-3xl font-medium  text-amber-300">
                    Grades Achieved:
                  </div>
                  <div className="text-lg">4.50/5.00</div>
                </div>
              </div>
            </div>
          )}
          {selectedOption === 3 && (
            <div className="h-full w-full backdrop-blur-sm bg-black/40 pt-10 pb-10 pr-6 pl-6 flex flex-col gap-6">
              <div className="degree flex flex-col gap-2 bg-black/50 rounded-lg p-4">
                <div className="d-title text-3xl font-semibold  text-amber-300">
                  Secondary School Certificate Examination
                </div>
                <div className="d-address text-lg">
                  B. N. High School, Chittagong Board,
                  <br /> Chittagong, Bangladesh
                </div>
              </div>
              <div className="degree-extra flex justify-between">
                <div className="d-major flex flex-col gap-2 bg-black/70 rounded-lg p-4">
                  <div className="d-major-title text-3xl font-medium  text-amber-300">
                    Major:
                  </div>
                  <div className="d-major-text text-lg">Science</div>
                  <div className="d-major-link text-blue-400">
                    <a
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="section under development"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
                <div className="d-tenure flex flex-col gap-2 bg-black/70 rounded-lg pt-4 pb-4 text-center pr-12 pl-12">
                  <div className="text-3xl font-medium  text-amber-300">
                    Tenure:
                  </div>
                  <div className="text-lg">5 Years</div>
                  <div className="text-base">2010-2015</div>
                </div>
                <div className="d-grades flex flex-col gap-2 bg-black/70 rounded-lg p-4 text-right">
                  <div className="text-3xl font-medium  text-amber-300">
                    Grades Achieved:
                  </div>
                  <div className="text-lg">5.00/5.00</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Education;
