import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const BlogTwo = () => {
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
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <section className="blog-two">
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">Our latest Projects </h2>
        </div>
        <div className="blog-two__carousel">
          <Swiper {...params}>
            <div className="item">
              <div
                className="blog-two__single"
                style={{ backgroundImage: `url(assets/images/project.jpg)` }}
              >
                <div className="blog-two__inner">
                  <a href="news-details.html" className="blog-two__date">
                    Project
                  </a>

                  <div className="blog-two__meta">
                    <a href="#">by Parag</a>
                  </div>
                  <h3 className="blog-two__title">
                    <a href="news-details.html">
                      Parag_FrontEnd prepr redesign Project
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="blog-two__single"
                style={{ backgroundImage: `url(assets/images/project.jpg)` }}
              >
                <div className="blog-two__inner">
                  <a href="news-details.html" className="blog-two__date">
                    Project
                  </a>

                  <div className="blog-two__meta">
                    <a href="#">by Parag</a>
                  </div>
                  <h3 className="blog-two__title">
                    <a href="news-details.html">
                      Parag_FrontEnd prepr redesign Project
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            <div className="item">
              <div
                className="blog-two__single"
                style={{ backgroundImage: `url(assets/images/project.jpg)` }}
              >
                <div className="blog-two__inner">
                  <a href="news-details.html" className="blog-two__date">
                    Project
                  </a>

                  <div className="blog-two__meta">
                    <a href="#">by Parag</a>
                  </div>
                  <h3 className="blog-two__title">
                    <a href="news-details.html">
                      Parag_FrontEnd prepr redesign Project
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            <div className="item">
              <div
                className="blog-two__single"
                style={{ backgroundImage: `url(assets/images/project.jpg)` }}
              >
                <div className="blog-two__inner">
                  <a href="news-details.html" className="blog-two__date">
                    Project
                  </a>

                  <div className="blog-two__meta">
                    <a href="#">by Parag</a>
                  </div>
                  <h3 className="blog-two__title">
                    <a href="news-details.html">
                      Parag_FrontEnd prepr redesign Project
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            <div className="item">
              <div
                className="blog-two__single"
                style={{ backgroundImage: `url(assets/images/project.jpg)` }}
              >
                <div className="blog-two__inner">
                  <a href="news-details.html" className="blog-two__date">
                    Project
                  </a>

                  <div className="blog-two__meta">
                    <a href="#">by Parag</a>
                  </div>
                  <h3 className="blog-two__title">
                    <a href="news-details.html">
                      Parag_FrontEnd prepr redesign Project
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            <div className="item">
              <div
                className="blog-two__single"
                style={{ backgroundImage: `url(assets/images/project.jpg)` }}
              >
                <div className="blog-two__inner">
                  <a href="news-details.html" className="blog-two__date">
                    Project
                  </a>

                  <div className="blog-two__meta">
                    <a href="#">by Parag</a>
                  </div>
                  <h3 className="blog-two__title">
                    <a href="news-details.html">
                      Parag_FrontEnd prepr redesign Project
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            <div className="item">
              <div
                className="blog-two__single"
                style={{ backgroundImage: `url(assets/images/project.jpg)` }}
              >
                <div className="blog-two__inner">
                  <a href="news-details.html" className="blog-two__date">
                    Project
                  </a>

                  <div className="blog-two__meta">
                    <a href="#">by Parag</a>
                  </div>
                  <h3 className="blog-two__title">
                    <a href="news-details.html">
                      Parag_FrontEnd prepr redesign Project
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default BlogTwo;
