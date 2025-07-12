import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../css/Portfolio.css";
import { useState, useRef } from "react";

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const projects = [
    {
      link: "https://github.com/joshcord99/Personal-README-Generator",
      img: "/PersonalReadMeProject.png",
      alt: "Personal README Generator",
      title: "Personal-README-Generator",
      description:
        "A command-line app that generates a professional README.md file from user input.",
    },
    {
      link: "https://github.com/joshcord99/Personal-Vehicle-Builder-Generator",
      img: "/VehicleBuilder.jpg",
      alt: "Vehicle Builder",
      title: "Personal-Vehicle-Builder-Generator",
      description:
        "Lets users create custom virtual vehicles by selecting parts with price totals.",
    },
    {
      link: "https://github.com/joshcord99/Efficient-Studying",
      img: "/shortcutlogo.jpeg",
      alt: "Efficient Studying",
      title: "Efficient-Studying",
      description:
        "A productivity app for organizing study sessions and tracking focus time.",
    },
    {
      link: "https://github.com/joshcord99/Personal-Weather-Information",
      img: "/weatherimage.jpg",
      alt: "Weather Info",
      title: "Personal-Weather-Information",
      description:
        "Displays current weather using OpenWeather API based on city input.",
    },
    {
      link: "https://github.com/joshcord99/Joshua-Cordial-The-Programmer",
      img: "/AvatarMaker-2.png",
      alt: "Portfolio Website",
      title: "Joshua-Cordial-The-Programmer",
      description:
        "Personal portfolio site showcasing skills, projects, and contact info.",
    },
    {
      link: "https://github.com/anthonymoon2/TomoPudgy",
      img: "/tamapudgy.png",
      alt: "TamaPudgy",
      title: "TamaPudgy",
      description:
        "Collaborated on a full-stack game that simulates pet-raising mechanics.",
    },
    {
      link: "https://github.com/joshcord99/Talker",
      img: "/zen.jpg",
      alt: "Talker AI Therapist",
      title: "Talker - AI Therapist",
      description:
        "An AI-driven chatbot built for stress relief and mental health journaling.",
    },
  ];

  return (
    <div className="main-container page">
      <header className="portfolioHead">Completed Projects</header>

      <p className="portfolioHeader">
        If interested in seeing the repositories for these projects, please
        click on the image you would like to see. Then you will be redirected to
        a new page.
      </p>

      <section className="carousel-container">
        <div className="slide-counter">
          {activeIndex} of {projects.length}
        </div>

        <div className="carousel-nav-desktop">
          <button
            className="swiper-button-prev"
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
            aria-label="Previous slide"
          ></button>
          <button
            className="swiper-button-next"
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
            aria-label="Next slide"
          ></button>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex + 1);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          style={{ padding: "2rem 0" }}
          navigation={false}
        >
          {projects.map((proj, index) => (
            <SwiperSlide key={index}>
              <div className="card">
                <a href={proj.link} target="_blank" rel="noopener noreferrer">
                  <img src={proj.img} className="image" alt={proj.alt} />
                </a>
                <p className="portfolioText">{proj.title}</p>
                <p className="portfolioDescription">{proj.description}</p>
              </div>
              <div className="carousel-nav-mobile">
                <button
                  className="swiper-button-prev"
                  onClick={() => swiperRef.current?.slidePrev()}
                  disabled={isBeginning}
                  aria-label="Previous slide"
                >
                  Prev
                </button>
                <button
                  className="swiper-button-next"
                  onClick={() => swiperRef.current?.slideNext()}
                  disabled={isEnd}
                  aria-label="Next slide"
                >
                  Next
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
