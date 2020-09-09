import React from "react";

const CourseDetails = () => {
  return (
    <section className="course-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="course-details__content">
              <div className="course-details__top">
                <div className="course-details__top-left">
                  <h2 className="course-details__title">
                    Full Stack Developer Work Challenge F2020
                  </h2>
                  <div className="course-one__stars">
                    <span className="course-one__stars-wrap"></span>
                  </div>
                </div>
                <div className="course-details__top-right">
                  <a href="#" className="course-one__category">
                    Web Development
                  </a>
                </div>
              </div>
              <div className="course-one__image">
                <img src="/assets/images/challenge.png" alt="" />
                <i className="far fa-heart"></i>
              </div>

              <ul
                className="course-details__tab-navs list-unstyled nav nav-tabs"
                role="tablist"
              >
                <li>
                  <a
                    className="active"
                    role="tab"
                    data-toggle="tab"
                    href="#overview"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    role="tab"
                    data-toggle="tab"
                    href="#curriculum"
                  >
                    Submissions
                  </a>
                </li>
                <li>
                  <a className="" role="tab" data-toggle="tab" href="#review">
                    Discussion
                  </a>
                </li>
              </ul>
              <div className="tab-content course-details__tab-content ">
                <div
                  className="tab-pane show active  animated fadeInUp"
                  role="tabpanel"
                  id="overview"
                >
                  <h3>General</h3>
                  <h5>Laravel development</h5>
                  <p className="course-details__tab-text">
                    Create a web app using the Laravel framework (PHP) to do the
                    following:
                  </p>
                  <ul>
                    <li>
                      Allow a user to login and explore the labs and click to
                      open up a google maps query{" "}
                    </li>
                    <li>
                      From admin, drop a pin for all the locations in the
                      following data sheet:
                      https://drive.google.com/file/d/1XjqJ7kp2AcMQjWaf_exDTTx-1qU4ctGp/view?usp=sharing
                    </li>
                    <li>
                      Feel free to add other features that might be useful (such
                      as search)
                    </li>
                  </ul>
                  <p className="course-details__tab-text">
                    The purpose of this web app is allow students to easily find
                    labs.
                  </p>
                  <br />
                  <h5>Submission Process: </h5>
                  Please begin by creating a Project. Upload the link to your
                  source code (Github link) and a short video demonstrating your
                  app. Create a document containing code snippets, explaining
                  your programming process. Please name all of your files and
                  documents using the following convention:
                  John_Smith_FullStack_Developer_Nameofyourfile. Once it is
                  completed, you will be able to submit it here to the Work
                  Challenge.
                  <br />
                  <br />
                  <h5>Evaluation Criteria: </h5>
                  <p className="course-details__tab-text">
                    25% on your approach to tackling the problem and the steps
                    you took to get to your solution and final deliverable
                  </p>
                  <p className="course-details__tab-text">
                    25% on how well you used various tools & processes to tackle
                    the challenge
                  </p>
                  <p className="course-details__tab-text">
                    50% on the final solution and output of your challenge
                  </p>
                  <br />
                  <ul className="list-unstyled course-details__overview-list">
                    <li>
                      <h3>Prepr</h3>
                    </li>
                  </ul>
                  <p className="course-details__tab-text">
                    Prepr connects students and start-ups to employees and
                    employers in order to build skills, create verifiable
                    portfolios and tackle challenges. We do this by creating
                    dedicated labs for individuals and teams to co-learn and
                    co-lab together in order to co-solve organizational
                    challenges.
                  </p>
                </div>
                <div
                  className="tab-pane  animated fadeInUp"
                  role="tabpanel"
                  id="curriculum"
                >
                  <h3 className="course-details__tab-title">Submissions</h3>
                  <br />
                </div>
                <div
                  className="tab-pane  animated fadeInUp"
                  role="tabpanel"
                  id="review"
                >
                  <div className="course-details__comment">
                    <div className="course-details__comment-single">
                      <div className="course-details__comment-top">
                        <div className="course-details__comment-img">
                          <img src="/assets/images/team-1-1.jpg" alt="" />
                        </div>
                        <div className="course-details__comment-right">
                          <h2 className="course-details__comment-name">
                            Steven Meyer
                          </h2>
                          <div className="course-details__comment-meta">
                            <p className="course-details__comment-date">
                              26 July, 2019
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="course-details__comment-text">
                        Lorem ipsum is simply free text used by copytyping
                        refreshing. Neque porro est qui dolorem ipsum quia quaed
                        inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.
                      </p>
                    </div>
                    <div className="course-details__comment-single">
                      <div className="course-details__comment-top">
                        <div className="course-details__comment-img">
                          <img src="/assets/images/team-1-2.jpg" alt="" />
                        </div>
                        <div className="course-details__comment-right">
                          <h2 className="course-details__comment-name">
                            Lina Kelley
                          </h2>
                          <div className="course-details__comment-meta">
                            <p className="course-details__comment-date">
                              26 July, 2019
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="course-details__comment-text">
                        Lorem ipsum is simply free text used by copytyping
                        refreshing. Neque porro est qui dolorem ipsum quia quaed
                        inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.
                      </p>
                    </div>
                  </div>
                  <form action="#" className="course-details__comment-form">
                    <h2 className="course-details__title">Add a comment</h2>

                    <div className="row">
                      <div className="col-lg-12">
                        <textarea placeholder="Write Message"></textarea>
                        <button
                          type="submit"
                          className="thm-btn course-details__comment-form-btn"
                        >
                          Leave a Comment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="course-details__price">
              <p className="course-details__price-text">
                Join and Submit challenge{" "}
              </p>

              <a href="#" className="thm-btn course-details__price-btn">
                Join Challenge
              </a>
              <a href="#" className="thm-btn course-details__price-btn">
                Submission
              </a>
            </div>

            <div className="header__social">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="course-details__meta">
              <a href="#" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                  <i className="far fa-calendar"></i>
                </span>
                Start date: <span>Sep 03,2020</span>
              </a>
              <a href="#" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                  <i className="far fa-clock"></i>
                </span>
                Deadline: <span>Sep 07,2020</span>
              </a>

              <a href="#" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                  <i className="far fa-user-circle"></i>
                </span>
                Members: <span> 3</span>
              </a>
              <a href="#" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                  <i className="fas fa-arrow-up"></i>
                </span>
                Learn Rank: <span>0</span>
              </a>
              <a href="#" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                  <i className="far fa-flag"></i>
                </span>
                Points: <span>100pts+</span>
              </a>
            </div>

            <div className="course-details__list">
              <h2 className="course-details__list-title">New Courses</h2>
              <div className="course-details__list-item">
                <div className="course-details__list-img">
                  <img src="/assets/images/lc-1-1.jpg" alt="" />
                </div>
                <div className="course-details__list-content">
                  <a className="course-details__list-author" href="#">
                    <span>Lydia Byrd</span>
                  </a>
                  <h3>
                    <a href="#">Marketing strategies</a>
                  </h3>
                </div>
              </div>
              <div className="course-details__list-item">
                <div className="course-details__list-img">
                  <img src="/assets/images/lc-1-1.jpg" alt="" />
                </div>
                <div className="course-details__list-content">
                  <a className="course-details__list-author" href="#">
                    <span>Lydia Byrd</span>
                  </a>
                  <h3>
                    <a href="#">Marketing strategies</a>
                  </h3>
                </div>
              </div>
              <div className="course-details__list-item">
                <div className="course-details__list-img">
                  <img src="/assets/images/lc-1-1.jpg" alt="" />
                </div>
                <div className="course-details__list-content">
                  <a className="course-details__list-author" href="#">
                    <span>Lydia Byrd</span>
                  </a>
                  <h3>
                    <a href="#">Marketing strategies</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
