import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import Link from "next/link";

const CourseOne = () => {
  const params = {
    slidesPerView: 3,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <div>
      <section className="course-one__top-title home-one">
        <div className="container">
          <div className="block-title mb-0">
            <h2 className="block-title__title">
              Explore our <br />
              popular challenges
            </h2>
          </div>
        </div>
        <div className="course-one__top-title__curve"></div>
      </section>

      <section className="course-one course-one__teacher-details home-one">
        <div className="container">
          <div className="course-one__carousel">
            <Swiper {...params}>
              <div className="item">
                <div className="course-one__single color-1">
                  <div className="course-one__image">
                    <img src="/assets/images/challenge.png" alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="course-one__content">
                    <a href="#" className="course-one__category">
                      Web development
                    </a>

                    <h2 className="course-one__title">
                      <a href="/course-details">
                        Full Stack Developer Work Challenge F2020
                      </a>
                    </h2>

                    <div className="course-one__meta">
                      <p>
                        Laravel development Create a web app using the Laravel
                        framework (PHP) to do the following: Allow a user to
                        login and explore the labs and click to open up a google
                        maps query
                      </p>
                    </div>
                    <a href="#" className="course-one__link">
                      View
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="course-one__single color-1">
                  <div className="course-one__image">
                    <img src="/assets/images/challenge.png" alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="course-one__content">
                    <a href="#" className="course-one__category">
                      Web development
                    </a>

                    <h2 className="course-one__title">
                      <a href="/course-details">
                        Front-end Developer Work Challenge F2020
                      </a>
                    </h2>

                    <div className="course-one__meta">
                      <p>
                        Your task is to redesign a few key pages of the Prepr
                        Network. Reimagine and create frontend webpages of the
                        following pages (and possible sub-pages): Explore page
                        (https://preprlabs.org/)
                      </p>
                    </div>
                    <a href="#" className="course-one__link">
                      View
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="course-one__single color-1">
                  <div className="course-one__image">
                    <img src="/assets/images/challenge.png" alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="course-one__content">
                    <a href="#" className="course-one__category">
                      Digital Marketing
                    </a>

                    <h2 className="course-one__title">
                      <a href="/course-details">
                        Digital Producer Work Challenge F2020
                      </a>
                    </h2>

                    <div className="course-one__meta">
                      <p>
                        Your task is to create a sample storyboard and video for
                        a new Prepr Promotional Video targeted at university
                        students to get them to register and engage with
                        challenges through the Prepr....
                      </p>
                    </div>
                    <a href="#" className="course-one__link">
                      View
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="course-one__single color-1">
                  <div className="course-one__image">
                    <img src="/assets/images/challenge.png" alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="course-one__content">
                    <a href="#" className="course-one__category">
                      Digital Marketing
                    </a>

                    <h2 className="course-one__title">
                      <a href="/course-details">
                        Digital Marketer Work Challenge F2020
                      </a>
                    </h2>

                    <div className="course-one__meta">
                      <p>
                        We are going to announce new Prepr Challenges and want
                        students from high schools, colleges and universities
                        who are graduating this year to participate. Your task
                        is to come up with...
                      </p>
                    </div>
                    <a href="#" className="course-one__link">
                      View
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="course-one__single color-1">
                  <div className="course-one__image">
                    <img src="/assets/images/challenge.png" alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="course-one__content">
                    <a href="#" className="course-one__category">
                      Mobile development
                    </a>

                    <h2 className="course-one__title">
                      <a href="/course-details">
                        Android Developer Work Challenge F2020
                      </a>
                    </h2>

                    <div className="course-one__meta">
                      <p>
                        Your task is to create an Android application of your
                        choice using Java and Android Studio that fulfils the
                        following criteria: Uses a database Includes
                        authentication (users,...
                      </p>
                    </div>
                    <a href="#" className="course-one__link">
                      View
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="course-one__single color-1">
                  <div className="course-one__image">
                    <img src="/assets/images/challenge.png" alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="course-one__content">
                    <a href="#" className="course-one__category">
                      Mobile development
                    </a>

                    <h2 className="course-one__title">
                      <a href="/course-details">
                        iOS Developer Work Challenge F2020
                      </a>
                    </h2>

                    <div className="course-one__meta">
                      <p>
                        Your task is to create an iOS application of your choice
                        in Swift that fulfils the following criteria: Uses a
                        database Includes authentication (users, login,
                        logout)...
                      </p>
                    </div>
                    <a href="#" className="course-one__link">
                      View
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="course-one__single color-1">
                  <div className="course-one__image">
                    <img src="/assets/images/challenge.png" alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="course-one__content">
                    <a href="#" className="course-one__category">
                      Web development
                    </a>

                    <h2 className="course-one__title">
                      <a href="/course-details">
                        UX Design Work Challenge F2020
                      </a>
                    </h2>

                    <div className="course-one__meta">
                      <p>
                        Your task is to redesign and reimagine a few key pages
                        of the Prepr Network. Create mock-ups/wireframes using
                        UI/UX designing tools (eg. Adobe XD, Sketch, Figma) of
                        the...
                      </p>
                    </div>
                    <a href="#" className="course-one__link">
                      View
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="course-one__single color-1">
                  <div className="course-one__image">
                    <img src="/assets/images/challenge.png" alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="course-one__content">
                    <a href="#" className="course-one__category">
                      Web development
                    </a>

                    <h2 className="course-one__title">
                      <a href="/course-details">
                        Machine Learning Engineer Work Challenge F2020
                      </a>
                    </h2>

                    <div className="course-one__meta">
                      <p>
                        Your task is to visualize labour / employment data
                        ((https://www150.statcan.gc.ca/n1/daily-quotidien/190308/dq190308a-eng.htm)
                        for Canada by province and industry...
                      </p>
                    </div>
                    <a href="#" className="course-one__link">
                      View
                    </a>
                  </div>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CourseOne;
