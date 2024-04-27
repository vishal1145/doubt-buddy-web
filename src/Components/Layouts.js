import React, { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { a } from "caniuse-lite/dist/lib/supported";

export default function Layouts() {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [name, setName] = useState("");
  const [number, setNumber] = useState();
  const [email, setEmail] = useState("");
  // const [nameError, setNameError] = useState("");
  // const [numberError, setNumberError] = useState("");
  // const [emailError, setEmailError] = useState("");

  const closeButtonRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 992) {
        setSlidesPerView(3);
      } else if (width >= 768 && width < 992) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const contactUsSubmit = () => {
  //   let isValid = true;

  //   // Name validation
  //   if (name === "" || null) {
  //     setNameError("Please fill Name");
  //     isValid = false;
  //   } else {
  //     setNameError("");
  //   }

  //   // Number validation
  //   if (number) {
  //     if (!number.match("[0-9]{10}")) {
  //       setNumberError("Please enter a valid phone number");
  //       isValid = false;
  //     } else {
  //       setNumberError("");
  //     }
  //   }

  //   // Email validation
  //   if (email === "" || null) {
  //     setEmailError("Please fill Email Id");
  //     isValid = false;
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
  //     setEmailError("Invalid email address");
  //     isValid = false;
  //   } else {
  //     setEmailError("");
  //   }

  //   if (isValid) {
  //     try {
  //       closeButtonRef.current.click();
  //     } catch (error) {
  //       console.error("Data not saved:", error);
  //     }
  //   }
  // };

  const contactUsSubmit = async () => {
    if (name === "" || null) {
      toast.info("Please fill Name");
    } else if (number) {
      if (!number.match("[0-9]{10}")) {
        toast.warning("Please enter valid phone number");
      } else if (email === "" || null) {
        toast.info("Please fill Email Id");
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        toast.warning("Invalid email address");
        return;
      } else {
        try {
          toast.success("Details Save Successfully");
          closeButtonRef.current.click();
          setName("");
          setNumber("");
          setEmail("");
        } catch (error) {
          toast.error("Data not saved");
        }
      }
    } else if (email === "" || null) {
      toast.info("Please fill Email Id");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      toast.warning("Invalid email address");
      return;
    } else {
      try {
        toast.success("Details Save Successfully");
        closeButtonRef.current.click();
        setName("");
        setNumber("");
        setEmail("");
      } catch (error) {
        toast.error("Data not saved");
      }
    }
  };

  return (
    <>
      {/********************************Home-Page-Section******************************* */}
      <div className="home-page" id="Home">
        <div className="containers container-xl">
          <div className="rectangle">
            <img
              src="/Mask group.png"
              alt=""
              style={{ width: "100%", position: "absolute", bottom: "0" }}
            />
            <div className="row position-relative">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="div1 d-flex align-items-center">
                  <div className="doubt-buddy">
                    <button className="btn educational-btn">
                      <img
                        src="/star.png"
                        alt=""
                        style={{
                          width: "22px",
                          height: "22px",
                          marginRight: "7px",
                        }}
                      />
                      Educational App
                    </button>

                    <h1 className="main-yellow main-heading-size">Doubt Buddy</h1>
                    <img
                      className="db-design"
                      src="/Group 15.png"
                      alt=""
                    />
                    <h1
                      className="text-white mb-3 main-heading-size"
                      style={{ marginTop: "-6%" }}
                    >
                      Your Best Study
                    </h1>
                    <div className="d-flex align-items-center">
                      <h1 className="text-white main-heading-size">Buddy</h1>
                      <div className="d-flex align-items-center ms-3">
                        <div className="round" style={{ zIndex: "1" }}>
                          <img src="/Ellipse 22.png" alt="" />
                        </div>
                        <div
                          className="round"
                          style={{ marginLeft: "-12px", zIndex: "2" }}
                        >
                          <img src="/Ellipse 23.png" alt="" />
                        </div>
                        <div
                          className="round"
                          style={{ marginLeft: "-12px", zIndex: "3" }}
                        >
                          <img src="/Ellipse 24.png" alt="" />
                        </div>
                        <div className="text-white ms-3 d-flex align-items-center flex-column">
                          <h6 className="mb-0 lakh">1 Lakh +</h6>
                          <h6 className="mb-0 lakh">Learners</h6>
                        </div>
                      </div>
                    </div>
                    <div className="play-btn-group d-flex align-items-center">
                      <div>
                        <a
                          className="btn download-btn"
                          href="https://play.google.com/store/apps/details?id=com.doubtbuddy.student&pli=1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download Now
                        </a>
                      </div>
                      <div className="" style={{ marginLeft: "14px" }}>
                        <a
                          href="https://play.google.com/store/apps/details?id=com.doubtbuddy.student&pli=1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="play-store-btn"
                            src="/image 1468.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="div2">
                  <img src="/dbboy.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/********************************Ai-buddy-Section******************************* */}
      <div className="ai-buddy section-gap2">
        <div className="containers container-xl">
          <div className="row d-flex justify-content-between">
            <div className="col-12 col-sm-12 col-md-7 col-lg-7">
              <div className="div1">
                <div className="div1-1 heading">
                  <h1 className="main-gray heading-size mb-0">INTRODUCING <span className="main-blue">DOUBT BUDDY</span></h1>
                  {/* <h1 className="main-blue heading-size"></h1> */}
                  <img
                    className="heading-design-yellow"
                    src="Group-y 15.png"
                    alt=""
                  />
                </div>

                <div className="div-rr d-flex align-items-center">
                  <div className="border div1-2">
                    <img className="pb-3 div1-img" src="/Group 27.png" alt="" />
                    <h6 className="main-gray content-size-medium">
                      Now Learn, Practice and Solve your Doubts{" "}
                      <span className="main-blue">24x7</span> with AI Buddy
                    </h6>
                  </div>

                  <div className="border div1-3">
                    <img
                      className="pb-3 div1-img"
                      src="Group 27-r.png"
                      alt=""
                    />
                    <h6 className="main-gray content-size-medium">
                      Our <span className="main-blue">AI model</span> is more
                      capable than GPT-4, Claude and LIama2
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="div2">
                <div className="div2-1">
                  <div className="tutor d-flex align-items-center">
                    <div className="round4 d-flex align-items-center justify-content-center">
                      <img
                        src="/image 1467.png"
                        alt=""
                      />
                    </div>
                    <h6
                      className="main-gray content-size-normal mb-0"
                    >
                      Your Personalized Tutor
                    </h6>
                  </div>
                </div>
                <div className="div2-2 d-flex justify-content-center">
                  <img src="Illustration 3 1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="div3 pt-5">
        <img src="Group 34.png" alt="" style={{ width: "100%" }} />
      </div> */}

      {/********************************Key-Features-Section******************************* */}
      <div className="key-features section-gap2" id="Features">
        <div className="containers container-xl">
          <div className="heading text-center">
            <h1 className="main-blue heading-size">Key Features</h1>
            <img className="heading-design-yellow2" src="/Group-y 15.png" alt="" />
          </div>

          <div className="row">
            <div className="key-fet-div">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                  <div className="border card text-center">
                    <div className="mx-auto round2 d-flex align-items-center justify-content-center">
                      <h4 className="mb-0">1</h4>
                    </div>
                    <div className="content">
                      <h4 className="main-gray content-size-bold">Solve your Doubts Instantly</h4>
                      <p className="main-gray2 subcontent-size-normal">Get Step By Step Solution</p>
                    </div>
                    <img
                      className="mx-auto key-fet-img"
                      src="/scene 1 1.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                  <div className="border card text-center">
                    <div className="mx-auto round2 d-flex align-items-center justify-content-center">
                      <h4 className="mb-0">2</h4>
                    </div>
                    <div className="content">
                      <h4 className="main-gray content-size-bold">Personalized Practice</h4>
                      <p className="main-gray2 subcontent-size-normal">
                        Now Practice based on your Aptitude
                      </p>
                    </div>
                    <img
                      className="mx-auto key-fet-img"
                      src="/scene 3 1.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                  <div className="border card text-center">
                    <div className="mx-auto round2 d-flex align-items-center justify-content-center">
                      <h4 className="mb-0">3</h4>
                    </div>
                    <div className="content">
                      <h4 className=" main-gray content-size-bold">Check Your Answers</h4>
                      <p className="main-gray2 subcontent-size-normal">
                        Let AI Buddy Examine your Solution
                      </p>
                    </div>
                    <img
                      className="mx-auto key-fet-img"
                      src="/scene 2 1 1.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                  <div className="card last-card border text-center">
                    <div className="mx-auto round2 d-flex align-items-center justify-content-center">
                      <h4 className="mb-0">4</h4>
                    </div>
                    <div className="content">
                      <h4 className=" main-gray content-size-bold">Reporting</h4>
                      <p className="main-gray2 subcontent-size-normal">
                        Get Daily Performance Reporting
                      </p>
                    </div>
                    <img
                      className="mx-auto key-fet-img"
                      src="/scene 4 1.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="phone-div">
              <img className="phone-fet-img" src="/Phone-feature.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/********************************Offer-Section******************************* */}
      <div className="offer">
        <div className="containers container-xl">
          <div className="text-center">
            <h1 className="heading-size main-white">What we Offer?</h1>
            <img className="heading-design-yellow" src="/Group-y 15.png" alt="" />
          </div>
          <div className="sub-heading text-center">
            <h1 className="heading-size main-yellow">
              Are you an education company?
            </h1>
            <h6 className="main-white heading-size2 lh-base">
              Integrate your own doubt-solving chatbot in your app within a day.
            </h6>
            <h6 className="main-white heading-size2 lh-base">
              <span className="main-yellow">60%</span> of student's{" "}
              <span className="main-yellow">doubts get unresolved</span> and
              they need
            </h6>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
              <div className="card text-center ">
                {/* <div className="card-header"> */}
                  <div className="round3 mx-auto">
                    <h2 className="main-blue mt-2">1</h2>
                  </div>
                {/* </div> */}
                <div className="card-body">
                  <h6 className="main-gray2 content-size-normal lh-lg">
                    24 x 7 doubt resolution and concept clarity related to the
                    doubts they are having
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
              <div className="card text-center ">
                {/* <div className="card-header"> */}
                  <div className="round3 mx-auto">
                    <h2 className="main-blue mt-2">2</h2>
                  </div>
                {/* </div> */}
                <div className="card-body">
                  <h6 className="main-gray2 content-size-normal lh-lg">
                    Personalised tutoring experience to ask doubts, learn
                    concepts, practice etc
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
              <div className="card text-center ">
                {/* <div className="card-header"> */}
                  <div className="round3 mx-auto">
                    <h2 className="main-blue mt-2">3</h2>
                  </div>
                {/* </div> */}
                <div className="card-body">
                  <h6 className="main-gray2 content-size-normal lh-lg">
                    Rather than switching to other apps for doubts, they want to
                    get the questions solved within your app/platform.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/********************************Tutorbot-Section******************************* */}
      <div className="tutorbot section-gap2">
        <div className="containers container-xl">
          <div className="heading">
            <h1 className="heading-size main-blue">
              <span className="main-gray">Benefits</span> of having a <span className="main-gray">Tutorbot</span> on your platform
            </h1>
            {/* <h1 className="heading-size main-blue">
             
            </h1> */}
            {/* <h1 className="heading-size main-blue"></h1> */}
            <img className="heading-design-yellow2" src="Group-y 15.png" alt="" />
          </div>
          <div className="row">
            <div className="col-9">
              <div className="card ">
                <div className="div d-flex align-items-center">
                  <img className="yes-tick" src="/Group 113.png" alt="" />
                  <h6 className="content-size-normal main-gray mb-0">Holistic education for your students.</h6>
                </div>

                <div className="div d-flex align-items-center">
                  <img className="yes-tick" src="/Group 113.png" alt="" />
                  <h6 className="content-size-normal main-gray mb-0">Better student's learning experience.</h6>
                </div>

                <div className="div d-flex align-items-center">
                  <img className="yes-tick" src="/Group 113.png" alt="" />
                  <h6 className="content-size-normal main-gray mb-0">Big data of students for better iterations.</h6>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="card card-div">
                <img className="chat-tutorbot" src="/chat 1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/********************************CG-api-Section******************************* */}
      <div className="cg-api">
        <div className="containers container-xl">
          <div className="heading">
            <h1 className="heading-size main-gray">Why us than <span className="main-blue">Chat Gpt</span> API?</h1>
            {/* <h1 className="heading-size main-gray">
              <span className="main-blue">Chat Gpt</span> API?
            </h1> */}
            <img className="heading-design-yellow2" src="Group-y 15.png" alt="" />
          </div>
          <div className="row">
            <div className="col-9">
              <div className="card ">
                <div className="div d-flex align-items-center">
                  <img className="yes-tick" src="/Group 113.png" alt="" />
                  <h6 className="content-size-normal main-gray mb-0">Way cheaper than Chat GPT</h6>
                </div>

                <div className="div d-flex align-items-center">
                  <img className="yes-tick" src="/Group 113.png" alt="" />
                  <h6 className="content-size-normal main-gray mb-0">
                    Plug and play edtech chatbot with 24 x 7 support system
                  </h6>
                </div>

                <div className="div d-flex align-items-center">
                  <img className="yes-tick" src="/Group 113.png" alt="" />
                  <h6 className="content-size-normal main-gray mb-0">More than just to solve the doubts.</h6>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="card card-div">
                <img className="cg-api-img" src="/api 1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/********************************Better-Section******************************* */}
      <div className="better section-gap">
        <div className="containers container-xl">
          <div className="row">
            <div className="heading text-center">
              <h1 className="main-blue heading-size">Why It's Better?</h1>
              <img className="heading-design-yellow2" src="/Group-y 15.png" alt="" />
            </div>
            <div className="col-12">
              <h4 className="table-sub-heading main-blue content-size-medium">
                AI BUDDY VS CHATGPT VS LLAMA2
              </h4>
              <div className="table-div">
                <table>
                  <thead>
                    <tr>
                      <th>
                        <div className="d-flex align-items-center justify-content-between">
                          <span className="text-start main-gray">AI Buddy</span>
                          <img className="db-img" src="/Main Logo.png" alt="" />
                        </div>
                      </th>
                      <th>
                        <div className="d-flex align-items-center justify-content-between">
                          <span className="text-start main-gray">Chatgpt</span>
                          <img
                            className="gpt-img"
                            src="/image 1465.png"
                            alt=""
                          />
                        </div>
                      </th>
                      <th className="">
                        <div className="d-flex align-items-center justify-content-between">
                          <span className="text-start main-gray">LIama2</span>
                          <img
                            className="llama-img"
                            src="/image 1466.png"
                            alt=""
                          />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="image 632.png" alt="" />
                          <span>Take a Pic</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="image 627.png" alt="" />
                          <span>Type Everything</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="image 627.png" alt="" />
                          <span>Type Everything</span>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="image 632.png" alt="" />
                          <span>800 on Math SAT</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="image 627.png" alt="" />
                          <span>700 on Math SAT</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="image 627.png" alt="" />
                          <span>700 on Math SAT</span>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="image 632.png" alt="" />
                          <span>Personalized Step by Step Solution</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="image 627.png" alt="" />
                          <span>Long Complicated Paragraph</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="image 627.png" alt="" />
                          <span>Long Complicated Paragraph</span>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="image 632.png" alt="" />
                          <span>Quizzes for Targeted Practice</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="image 627.png" alt="" />
                          <span>Just Give you the Answer</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="image 627.png" alt="" />
                          <span>Just Give you the Answer</span>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="image 632.png" alt="" />
                          <span>Tool Belt of Functionalities</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="image 627.png" alt="" />
                          <span>Generic Chatbot</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="image 627.png" alt="" />
                          <span>Generic Chatbot</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/********************************Say-Section******************************* */}
      <div className="say section-gap2" id="Blog">
        <div className="containers container-xl pb-5">
          <img className="coma1" src="/coma1.png" alt="" />
          <img className="coma2" src="/coma2.png" alt="" />
          <div className="heading text-center">
            <h1 className="main-white heading-size">
              What Our students Have to Say?
            </h1>
            <img className="heading-design-yellow2" src="/Group-y 15.png" alt="" />
          </div>

          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={false}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="card text-center ">
                <div className="card-header">
                  <div className="round3 mx-auto">
                    <img className="round3-img" src="/Ellipse 26.png" alt="" />
                  </div>
                  <h5 className="name main-gray">Vivek</h5>
                  <div className="rating-star">
                    <span>
                      <img src="Star 6.png" alt="" />
                      <img src="Star 6.png" alt="" />
                      <img src="Star 6.png" alt="" />
                      <img src="Star 6.png" alt="" />
                      <img src="Star 6.png" alt="" />
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <h6 className="main-gray2 content-size-normal2 lh-base">
                    Doubt Buddy has helped me in increasing my efficiency by
                    giving detailed solutions to my doubts whether it is day or
                    night Thanks.
                  </h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card text-center">
                <div className="card-header">
                  <div className="round3 mx-auto">
                    <img className="round3-img" src="/image 1470.png" alt="" />
                  </div>
                  <h5 className="name main-gray">Himanshi</h5>
                  <div className="rating-star">
                    <span>
                      <img src="Star 6.png" alt="" />
                      <img src="Star 6.png" alt="" />
                      <img src="Star 6.png" alt="" />
                      <img src="Star 6.png" alt="" />
                      <img src="Star 6.png" alt="" />
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <h6 className="main-gray2 content-size-normal2 lh-base">
                    It's a really useful app really helpful. I'm very much
                    benefitted by using this app By clicking a photo, then you
                    go to question best tutor, they send you an answer.
                  </h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card text-center">
                <div className="card-header">
                  <div className="round3 mx-auto">
                    <img className="round3-img" src="/Ellipse 28.png" alt="" />
                  </div>
                  <h5 className="name main-gray">Amisha Sharma</h5>
                  <div className="rating-star">
                    <span>
                      <img src="Star 6.png" alt="" />
                      <img src="Star 6.png" alt="" />
                      <img src="Star 6.png" alt="" />
                      <img src="Star 6.png" alt="" />
                      <img src="Star 6.png" alt="" />
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <h6 className="main-gray2 content-size-normal2 lh-base">
                    Must have for students preparing for NEET. Teachers are
                    really supportive and cooperative. They solve your doubts
                    very calmly no matter how much time it takes or however
                    silly your doubt is.
                  </h6>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/********************************Recognition-Section******************************* */}
      <div className="recognition section-gap2">
        <div className="containers container-xl">
          <div className="heading text-center">
            <h1 className="main-blue heading-size">Recognition</h1>
            <img className="heading-design-yellow2" src="/Group-y 15.png" alt="" />
          </div>

          <div className="row">
            <div className="cc col-12 col-sm-6 col-md-4 col-lg-4">
              <div className=" card border text-center">
                <div className="card-header">
                  <img
                    className="mx-auto reco-img1"
                    src="/image 1462.png"
                    alt=""
                  />
                  <img
                    className="mx-auto reco-img2 ms-4"
                    src="/image 1464.png"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <h5
                    className="mb-3 main-blue heading-size3 lh-base"
                  >
                    YUKTI 2.0 Winners & Supported By
                  </h5>
                  <h6 className="main-gray content-size-normal lh-base">
                    MEITY, MOE, Maharastra State Government
                  </h6>
                </div>
              </div>
            </div>

            <div className="cc col-12 col-sm-6 col-md-4 col-lg-4">
              <div className=" card border text-center">
                <div className="card-header">
                  <img
                    className="mx-auto reco-img3"
                    src="/image 1463-1.png"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <h5
                    className="mb-3 main-blue heading-size3 lh-base"
                  >
                    Google Top 30 Innovative App of India
                  </h5>
                  <h6 className="main-gray content-size-normal lh-base">
                    Google & MEITY App Scale Academy 2022 TOP 30 Apps.
                  </h6>
                </div>
              </div>
            </div>

            <div className="cc col-12 col-sm-6 col-md-4 col-lg-4">
              <div className=" card border text-center">
                <div className="card-header">
                  <img className="mx-auto reco-img4" src="/aws.png" alt="" />
                </div>
                <div className="card-body">
                  <h5
                    className="mb-3 main-blue heading-size3 lh-base"
                  >
                    AWS Edstart Member
                  </h5>
                  <h6 className="main-gray content-size-normal lh-base">
                    AWS EdStart offers grants of AWS Promotional Credits to
                    build infrastructure and solutions on AWS
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/********************************Contact-Us-Section******************************* */}
      <div className="contact-us" id="Contact">
        <img className="contact-pngwing" src="/pngwing 3.png" alt="" />
        <div className="text-center position-relative">
          <h1 className="heading-size main-white">
            Want To Integrate Our <span className="main-yellow">AI Model</span>{" "}
            For
          </h1>
          <h1 className="heading-size main-white">
            Your <span className="main-yellow">Business</span>
          </h1>
          <img className="heading-design-yellow2" src="/Group 15.png" alt="" />
        </div>
        <div className="d-flex justify-content-center position-relative">
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#contactModal"
            className="btn download-btn contact-btn"
          >
            Contact Us
          </button>

          <div
            className="modal fade "
            id="contactModal"
            tabindex="-1"
            aria-labelledby="contactModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="contactModalLabel">
                    Contact Us
                  </h5>
                  <button
                    ref={closeButtonRef}
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                <div className="modal-body">
                  <form id="contactForm">
                    <div className="mb-2">
                      <label for="addName" className="form-label">
                        Name *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="addName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        required
                      />
                      {/* {nameError && (
                        <span
                          className="error"
                          style={{ fontSize: "12px", color: "red" }}
                        >
                          {nameError}
                        </span>
                      )} */}
                    </div>
                    <div className="mb-2">
                      <label for="phone" className="form-label">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder="Mobile Number"
                      />
                      {/* {numberError && (
                        <span
                          className="error"
                          style={{ fontSize: "12px", color: "red" }}
                        >
                          {numberError}
                        </span>
                      )} */}
                    </div>
                    <div>
                      <label for="email" className="form-label">
                        Email *
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                      />
                      {/* {emailError && (
                        <span
                          className="error"
                          style={{ fontSize: "12px", color: "red" }}
                        >
                          {emailError}
                        </span>
                      )} */}
                    </div>
                  </form>
                </div>

                <div className="modal-footer">
                  <div className="d-flex align-items-center justify-content-center w-100">
                    <button
                      type="button"
                      className="btn btn-secondary me-2 w-100 m"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={contactUsSubmit}
                      className="btn btn-primary w-100"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="cont-phone-img1" src="/Phone at Step 4.png" alt="" />
        <img className="cont-phone-img2" src="/Phone at Step 3.png" alt="" />
      </div>

      {/********************************Answer-Instant-Section******************************* */}
      <div className="answer-instant position-relative">
        <div className="containers container-xl">
          <div className="row">
            <div
              className="col-12 col-sm-12 col-md-7 col-lg-7"
              style={{ position: "relative" }}
            >
              <div className="div1">
                <img className="answer-pngwing" src="/pngwing 3.png" alt="" />
                <div className="position-relative">
                  <img className="db-plus-logo" src="/Union.png" alt="" />
                </div>
                <div className="col-12 col-sm-12 col-md-7 col-lg-7">
                  <h1
                    className="main-blue heading-size position-relative pe-2"
                    style={{
                      lineHeight: "1.5",
                    }}
                  >
                    Get Access To Unlimited Doubts And Practice
                  </h1>
                  <img
                    className="answer-design"
                    src="/Mask group wide.png"
                    alt=""
                  />
                </div>
                <div className="d-flex position-relative">
                  <div className="me-3">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.doubtbuddy.student&pli=1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="play-store-btn2"
                        src="/image 1468.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="text-center app-store d-flex">
                    <a
                      style={{ zIndex: "2" }}
                      href="https://play.google.com/store/apps/details?id=com.doubtbuddy.student&pli=1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="play-store-btn2"
                        src="/image 1469.png"
                        alt=""
                      />
                    </a>

                    <div className="" style={{ zIndex: "1" }}>
                      <img className="coming-soon-img" src="/Soon.png" alt="" />
                    </div>
                  </div>
                </div>
                {/* <button className="btn download-btn">COMING SOON</button> */}
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-5 col-lg-5 position-relative">
              <div className="phone d-flex justify-content-center">
                <img src="/dbapp.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* <ToastContainer /> */}
    </>
  );
}
