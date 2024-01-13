import React from "react";

// import { CircularProgressbar } from "react-circular-progressbar";



// import "react-circular-progressbar/dist/styles.css";
import { handleSectionNavigation } from "../../utils";
import { Link } from "react-router-dom";
import ScrollToTopButton from "./Scroll";
import useApi from "../../hooks/useApi";
import { Button, Img, Line, Text } from "../../components";

const Portfolio = () => {
  const {projects,technology,skills,loading,error} = useApi();
  
  const openLink = (url)=>{
    window.open(url);

  } 
  return (
    <>
        <div className=" font-poppins container mx-auto">
            <div id="header">
              <header className="bg-gray-900  ">
                <div className="flex flex-wrap justify-around items-center h-24 space-x-4 px-4">
                  <Text
                  className="text-white-A700 text-sm md:text-2xl"
                  size="txtPoppinsMedium30"
                  onClick={()=>handleSectionNavigation("lets_Start")}
                >
                  Portfolio
                </Text>
                <Text
                  className=" text-white-A700 text-sm  md:text-2xl"
                  size="txtPoppinsMedium30"
                  onClick={()=>handleSectionNavigation("projects")}
                >
                  Projects
                </Text>
                <Text
                  className=" text-white-A700 text-sm  md:text-2xl"
                  size="txtPoppinsMedium30"
                  onClick={()=>handleSectionNavigation("technology")}
                >
                  Technologies
                </Text>
                <Text
                  className="text-white-A700 text-sm md:text-2xl"
                  size="txtPoppinsMedium30"
                  onClick={()=>handleSectionNavigation("about")}
                >
                  About me
                </Text>
                <Img
                  className="h-8  w-8"
                  src="images/img_user.svg"
                  alt="user"
                  onClick={()=>openLink("https://github.in/fakiza")}
                />
                </div>
              </header>
            </div>

            <div id="lets_Start" className="relative h-[350px] sm:h-[490px] md:h-[500px]  text-center bg-gradient-to-b from-gray-900 via-deep_purple-300 ">
            <div className="relative text-center w-full   sm:w-3/4  top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
                  <Text className=" text-white-A700 px-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl text-center my-3 md:my-5" size="txtPoppinsSemiBold64">
                    Frontend Developer
                  </Text>       
                  <Text className=" text-gray-400 text-lg md:text-2xl lg:text-4xl text-center px-2 my-5 md:my-10" size="txtPoppinsSemiBold36Gray400">
                  Passionate Front-end Developer with 3+ years of experience dedicated to creating visually appealing and dynamic user experiences. 
                  </Text>
                  <Button
                    className="min-w-[150px] my-auto rounded-[40px] text-sm sm:text-xl md:text-2xl  text-center "
                    size="sm"
                    color="cyan_600_deep_purple_300"
                    onClick={()=>handleSectionNavigation("projects")}
                  >
                    Let’s begin
                  </Button>  
            </div>
            </div>

            <div id="projects" className="container mx-auto py-12 ">
              <div className="md:mb-12">
                    <Text
                      className="text-4xl  text-white-A700 text-center"
                      size="txtPoppinsSemiBold64"
                    >
                      Projects
                    </Text>
              </div>
              <div className="">
                  <div className="flex  flex-wrap space-around">
                    {projects?.map((item, index) => (
                    <div key={item.id} className="bg-gray-900 p-[25px] sm:px-5 rounded-br-[50px] rounded-tl-[50px] shadow-bs w-[90%] my-10 mx-auto md:w-[500px]">
                      <Img
                        className="h-[200px] md:h-[266px] sm:h-auto object-cover rounded-lg w-full"
                        src={item.image}
                        alt="imageOne"
                      />
                      <Text
                        className="mt-4 text-xl md:text-2xl text-white-A700"
                        size="txtPoppinsSemiBold36"
                      >
                      {item.name}
                      </Text>
                      <Line className="bg-gradient  h-1  mt-4 rounded-sm  w-3/5" />
                      <Text
                        className="mt-4 text-sm md:text-xl text-white-600 w-full"
                        size="txtPoppinsSemiBold28"
                      >
                        {item.description}
                      </Text>
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] mb-5 min-w-[200px] mt-[25px] text-center text-lg md:text-xl"
                        shape="round"
                        color="cyan_600_deep_purple_300"
                        onClick={()=>openLink(item.url)}
                      >
                        Look it up
                      </Button>
                    </div>
                    ))}
                 </div>
                </div>
            </div>

            <div id="technology" className=" container mx-auto py-12">
                <div className="">
                  <Text
                    className="text-2xl md:text-4xl  text-white-A700 text-center"
                    size="txtPoppinsSemiBold64"
                  >
                    Technologies
                  </Text>
                  <div className="my-8 mx-auto w-[80%]">
                    <div className="space-y-6">
                     { technology?.map((item,index)=>(
                        <div key={item.id} className="">
                        <div className="flex justify-between px-4 ">
                          <Text
                            className="text-white-A700 text-lg sm:text-xl md:text-2xl"
                            size="txtPoppinsSemiBold36"
                          >
                            {item.name}
                          </Text>
                          <Text
                            className=" text-white-600 text-sm  md:text-lg"
                            size="txtPoppinsSemiBold24"
                          >
                            {item.level}
                          </Text>
                        </div>
                        <div className="bg-blue_gray-900 rounded-[16px] w-full">
                          <div className={`bg-gradient h-4  md:h-6 rounded-[16px] w-${item.width}`}></div>
                        </div>
                      </div>
                      ))}
                      
                    </div>  
                  </div>
                  <div className=" mx-auto w-[80%] ">
                    <div className="py-6 ">
                      <Text
                          className="text-2xl md:text-4xl text-white-A700 text-center"
                          size="txtPoppinsSemiBold48"
                        >
                          Additional technologies and skills
                        </Text>
                    </div>
                    
                    <div  className=" flex justify-between flex-wrap gap-4">
                    {skills?.map((skill,index)=>(
                          <Text key={index}
                            className="text-white-600 text-lg md:text-2xl mx-auto"
                            size="txtPoppinsSemiBold36"
                          >
                           {skill}
                          </Text> 
                    ))}
                    </div>
                </div>
              </div>
            </div>

            <div id="about" className="container mx-auto p-4 md:p-12">
              <div className="">
                <div className="pb-4 md:pb-8">
                  <Text className="text-white-A700 text-2xl md:text-4xl text-center" size="txtPoppinsSemiBold64">
                    About me
                  </Text>
                </div>
                <Text className="text-white-A700 text-center text-sm sm:text-lg md:text-2xl sm:w-3/4 mx-auto">
                Hello there! 👋 I'm <span className="text-cyan-600">Fakiza</span>, a frontend developer with a passion for crafting digital experiences. 
                I thrive on turning ideas into reality through the power of code and design.
                </Text>
                <Line className="bg-gradient  h-1 mt-5 sm:mt-6  md:mt-12 rounded-sm  " />
                <div className="relative py-5 md:py-12">
                  <div className=" flex ">
                    <div className="flex flex-col justify-around md:justify-between pr-2 text-white-600 ">
                      <Text
                        className="text-sm sm:text-xl md:text-3xl "
                        size="txtPoppinsSemiBold36"
                      >
                        2018
                      </Text>
                      <Text
                        className="text-sm sm:text-xl md:text-3xl   "
                        size="txtPoppinsSemiBold36"
                      >
                        2019
                      </Text>
                      <Text
                        className="text-sm sm:text-xl md:text-3xl   "
                        size="txtPoppinsSemiBold36"
                      >
                        2020
                      </Text>
                      <Text
                        className="text-sm sm:text-xl md:text-3xl  "
                        size="txtPoppinsSemiBold36"
                      >
                        2023
                      </Text>
                    </div>
                    <div className="h-full px-4 hidden sm:flex">
                    <Img
                      className="h-full"
                      src="images/img_verticle_timeline.svg"
                      alt="timeline"
                    />
                    </div>
                    <div className="flex flex-col items-start text-white-600 justify-between space-y-4 w-full">
                      <Text
                        className="text-right md:text-center  text-sm md:text-xl  "
                        size="txtPoppinsSemiBold28"
                      >
                        In 2018, I successfully completed my Bachelor of Engineering degree at
                       Bearys Institute of Technology Managlore under VTU. This academic journey not only equipped me with a strong foundation in 
                       Computer Sience and Engineering but also fostered a deep passion for problem-solving and innovation.
                      </Text>
                      <Text
                        className=" text-right md:text-center  text-sm md:text-xl "
                        size="txtPoppinsSemiBold28"
                      >
                        Embarking on my professional journey, I took a significant step in 2019 by joining Asiansoft Technology.
                         This experience became a pivotal chapter where I immersed myself in real-world projects, 
                         collaborated with talented professionals, and expanded my skills in web technology. 
                         Working at Asiansoft has been instrumental in shaping my practical understanding of IT industry, and 
                         I continue to thrive in this dynamic and collaborative environment.
                      </Text>
                      <Text
                        className="text-right md:text-center   text-sm md:text-xl "
                        size="txtPoppinsSemiBold28"
                      >
                        In 2020, I embraced the flexibility of freelancing and ventured into self-employment,
                        gaining exposure to a diverse array of projects and further honing my expertise.
                        In 2022, I joyfully took a maternity break, prioritizing family and personal responsibilities.
                       This period, focused on nurturing a new chapter in my life, 
                        provided invaluable experiences, resilience, and personal growth.
                      </Text>
                      <Text
                        className="text-right md:text-center   text-sm md:text-xl"
                        size="txtPoppinsSemiBold28"
                      >
                        Looking ahead, I am eager to explore new horizons, contribute to innovative projects, and leverage my diverse experiences to make a meaningful impact. My journey reflects adaptability, 
                        a passion for learning, and an unwavering commitment to excellence.
                      </Text>
                    </div>
                  </div>
                </div>
                
              </div>
              
            </div>

            <footer className="flex justify-between p-4 ">
              <div className="my-4 text-lg sm:text-xl md:text-2xl text-white-A700">
              <a href="https://wa.me/+917338116065" target="_blanck">
                <Text className="  " size="txtPoppinsSemiBold42">
                    Whatsapp me  : +91 7338116065 
                </Text> 
              </a>
                <a href="mailTo:fakiza504@gmail.com" target="_blank">
                  <Text className=" " size="txtPoppinsSemiBold42">
                    Email : fakiza504@gmail.com
                  </Text>
                </a>
              </div>
                <div className="my-4">
                  <a href="https://github.in/fakiza" target="_blank">
                  <Img
                    className="h-10 w-10 md:h-16 md:w-16"
                    src="images/img_user.svg"
                    alt="github account"
                  />
                  </a>
                </div>
              </footer>
        <ScrollToTopButton />
      
      </div>
    </>
  );
};

export default Portfolio;
