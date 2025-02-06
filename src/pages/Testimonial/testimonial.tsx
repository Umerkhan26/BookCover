import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  BoxDescription,
  ButtonGreen,
  ButtonWrapper,
  ColTestimonials,
  Container,
  IconSocNet,
  ListTestimonials,
  MainScreen,
  SectionTestimonials,
  SocialNetwork,
  Subtitle,
  SvgLeftBottom,
  SvgLeftTop,
  SvgRightBottom,
  SvgRightTop,
  TestimonialDescription,
  TestimonialImage,
  TestimonialTitle,
  Title,
  WrapTestimonials,
  YoutubeIconWrapper,
} from "./testimonial.styles";

// Component
const Testimonials: React.FC = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");

  const openPopup = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setSelectedVideoUrl("");
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      e.target instanceof HTMLElement &&
      e.target.id === "testimonials-video-popup-overlay"
    ) {
      closePopup();
    }
  };

  return (
    <SectionTestimonials>
      <WrapTestimonials>
        {/* SVG Left Top */}
        <SvgLeftTop>
          <svg
            width="90"
            height="90"
            viewBox="0 0 105 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_59_2010"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="3"
              y="0"
              width="102"
              height="108"
            >
              <rect
                x="3.0293"
                y="107.06"
                width="107.06"
                height="101"
                rx="10"
                transform="rotate(-90 3.0293 107.06)"
                fill="#FDFFFD"
              />
            </mask>
            <g mask="url(#mask0_59_2010)">
              <circle
                cx="59.2434"
                cy="1.40289"
                r="31.8231"
                transform="rotate(90 59.2434 1.40289)"
                stroke="#38555F"
              />
              <circle
                cx="59.2434"
                cy="66.0447"
                r="31.8231"
                transform="rotate(90 59.2434 66.0447)"
                stroke="#38555F"
              />
              <circle
                cx="-5.40313"
                cy="66.0447"
                r="31.8231"
                transform="rotate(90 -5.40313 66.0447)"
                stroke="#38555F"
              />
            </g>
          </svg>
        </SvgLeftTop>

        {/* SVG Left Bottom */}
        <SvgLeftBottom>
          <svg
            width="91"
            height="245"
            viewBox="0 0 91 257"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.5 1C12.5037 0.997274 3.59512 2.86953 -4.71685 6.50981C-13.0288 10.1501 -20.5812 15.4871 -26.9425 22.2157C-33.3039 28.9444 -38.3495 36.933 -41.791 45.725C-45.2325 54.517 -47.0026 63.94 -47 73.4559L-47 359H90L90 73.4559C90 54.2394 82.7831 35.8099 69.9368 22.2218C57.0906 8.63373 39.6673 1 21.5 1V1Z"
              stroke="#38555F"
              strokeMiterlimit="10"
            />
          </svg>
        </SvgLeftBottom>

        {/* SVG Right Top */}
        <SvgRightTop>
          <svg
            width="190"
            height="33"
            viewBox="0 0 210 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="175"
              cy="-1.99984"
              r="34.4999"
              transform="rotate(90 175 -1.99984)"
              stroke="#38555F"
            />
            <circle
              cx="105"
              cy="-1.99984"
              r="34.4999"
              transform="rotate(90 105 -1.99984)"
              stroke="#38555F"
            />
            <circle
              cx="35.0001"
              cy="-1.99984"
              r="34.4999"
              transform="rotate(90 35.0001 -1.99984)"
              stroke="#38555F"
            />
          </svg>
        </SvgRightTop>

        {/* SVG Right Bottom */}
        <SvgRightBottom>
          <svg
            width="69"
            height="245"
            viewBox="0 0 69 257"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M69 0.999997C77.9306 0.997268 86.7742 2.86953 95.0255 6.50981C103.277 10.1501 110.774 15.4871 117.089 22.2157C123.404 28.9444 128.413 36.933 131.829 45.725C135.245 54.517 137.003 63.94 137 73.4559L137 359L0.999996 359L1.00002 73.4558C1.00002 54.2394 8.16431 35.8099 20.9168 22.2218C33.6692 8.63372 50.9653 0.999995 69 0.999997V0.999997Z"
              stroke="#38555F"
              strokeMiterlimit="10"
            />
          </svg>
        </SvgRightBottom>

        {/* Main Content */}
        <Container>
          <MainScreen>
            <svg
              width="48"
              height="12"
              viewBox="0 0 48 12"
              fill="none"
              style={{ display: "block", margin: "auto", marginBottom: "30px" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="5.82952" cy="5.82659" r="5.32659" stroke="#25293F" />
              <path
                d="M29.4648 5.82659C29.4648 8.75736 27.0291 11.1532 23.9995 11.1532C20.9699 11.1532 18.5342 8.75736 18.5342 5.82659C18.5342 2.89582 20.9699 0.5 23.9995 0.5C27.0291 0.5 29.4648 2.89582 29.4648 5.82659Z"
                stroke="#25293F"
              />
              <circle cx="42.1733" cy="5.82659" r="5.32659" stroke="#25293F" />
            </svg>

            <Title>Meet Our Customers</Title>
            <Subtitle>
              Indie authors share their stories about how MiblArt helped them{" "}
              <br />
              get a cover of their dreams
            </Subtitle>
          </MainScreen>
        </Container>
      </WrapTestimonials>

      {/* Testimonials List Section */}
      <Container>
        <ListTestimonials>
          {/* Testimonial 1 */}
          <ColTestimonials>
            <a
              href="#testimonials-video-popup"
              className="open-testimonials-video-popup"
              onClick={(e) => {
                e.preventDefault();
                openPopup("https://www.youtube.com/embed/acSAOuurVwI");
              }}
            >
              <TestimonialImage
                src="https://miblart.com/wp-content/uploads/2022/06/Rectangle-502.png"
                alt="David Lyons"
              />
            </a>
            <YoutubeIconWrapper>
              <svg height="100%" version="1.1" viewBox="0 0 68 48" width="70px">
                <path
                  className="ytp-large-play-button-bg"
                  d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                  fill="gray"
                />
                <path d="M 45,24 27,14 27,34" fill="#fff" />
              </svg>
            </YoutubeIconWrapper>
            <BoxDescription>
              <div className="after"></div>
              <div className="content">
                <TestimonialTitle>David Lyons</TestimonialTitle>
                <TestimonialDescription>
                  MiblArt team is super patient and approachable, but they're
                  also talented book cover designers who are always open to
                  collaboration.
                </TestimonialDescription>
                <SocialNetwork>
                  <IconSocNet
                    href="https://www.facebook.com/AuthorDavidBLyons"
                    target="_blank"
                    color="#3b5998"
                  >
                    <FaFacebook size={20} />
                  </IconSocNet>

                  <IconSocNet
                    href="https://twitter.com/theopenauthor"
                    target="_blank"
                    color="#1da1f3"
                  >
                    <FaTwitter size={20} />
                  </IconSocNet>

                  <IconSocNet
                    href="https://www.instagram.com/theopenauthor/"
                    target="_blank"
                    color="#E4405F"
                  >
                    <FaInstagram size={20} />
                  </IconSocNet>
                </SocialNetwork>
              </div>
              <div className="before"></div>
            </BoxDescription>
          </ColTestimonials>

          {/* Testimonial 2 */}
          <ColTestimonials>
            <a
              href="#testimonials-video-popup"
              className="open-testimonials-video-popup"
              onClick={(e) => {
                e.preventDefault();
                openPopup("https://www.youtube.com/embed/DjQXKvpSxPM");
              }}
            >
              <TestimonialImage
                src="https://miblart.com/wp-content/uploads/2022/06/Rectangle-503.png"
                alt="Kate Myers"
              />
            </a>
            <YoutubeIconWrapper>
              <svg height="100%" version="1.1" viewBox="0 0 68 48" width="70px">
                <path
                  className="ytp-large-play-button-bg"
                  d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                  fill="gray"
                />
                <path d="M 45,24 27,14 27,34" fill="#fff" />
              </svg>
            </YoutubeIconWrapper>
            <BoxDescription>
              <div className="after blue"></div>
              <div className="content">
                <TestimonialTitle>Kate Myers</TestimonialTitle>
                <TestimonialDescription>
                  "The entire MiblArt team is super friendly and they spend a
                  lot of time making sure that you get what you want. I
                  recommend them to anyone I can."
                </TestimonialDescription>
                <SocialNetwork>
                  <IconSocNet
                    href="https://www.facebook.com/AuthorDavidBLyons"
                    target="_blank"
                    color="#3b5998"
                  >
                    <FaFacebook size={20} />
                  </IconSocNet>

                  <IconSocNet
                    href="https://www.instagram.com/theopenauthor/"
                    target="_blank"
                    color="#E4405F"
                  >
                    <FaInstagram size={20} />
                  </IconSocNet>
                </SocialNetwork>
              </div>
              <div className="before blue"></div>
            </BoxDescription>
          </ColTestimonials>

          {/* Testimonial 3 */}
          <ColTestimonials>
            <a
              href="#testimonials-video-popup"
              className="open-testimonials-video-popup"
              onClick={(e) => {
                e.preventDefault();
                openPopup("https://www.youtube.com/embed/9eEs1P51Xkw");
              }}
            >
              <TestimonialImage
                src="https://miblart.com/wp-content/uploads/2022/06/Rectangle-504.png"
                alt="Kate Jones"
              />
            </a>
            <YoutubeIconWrapper>
              <svg height="100%" version="1.1" viewBox="0 0 68 48" width="70px">
                <path
                  className="ytp-large-play-button-bg"
                  d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                  fill="gray"
                />
                <path d="M 45,24 27,14 27,34" fill="#fff" />
              </svg>
            </YoutubeIconWrapper>
            <BoxDescription>
              <div className="after grad"></div>
              <div className="content">
                <TestimonialTitle>Kate Jones</TestimonialTitle>
                <TestimonialDescription>
                  "MiblArt is extremely professional and they always deal with
                  my order in a very timely manner. They always produce a result
                  I'm never disappointed with."
                </TestimonialDescription>
                <SocialNetwork>
                  <IconSocNet
                    href="https://www.facebook.com/AuthorDavidBLyons"
                    target="_blank"
                    color="#3b5998"
                  >
                    <FaFacebook size={20} />
                  </IconSocNet>

                  <IconSocNet
                    href="https://twitter.com/theopenauthor"
                    target="_blank"
                    color="#1da1f3"
                  >
                    <FaTwitter size={20} />
                  </IconSocNet>

                  <IconSocNet
                    href="https://www.instagram.com/theopenauthor/"
                    target="_blank"
                    color="#E4405F"
                  >
                    <FaInstagram size={20} />
                  </IconSocNet>
                </SocialNetwork>
              </div>
              <div className="before grad"></div>
            </BoxDescription>
          </ColTestimonials>
        </ListTestimonials>
        <ButtonWrapper>
          <ButtonGreen href="https://miblart.com/testimonials/">
            View all reviews
          </ButtonGreen>
        </ButtonWrapper>
      </Container>

      {/* Video Popup Modal */}
      {isPopupVisible && (
        <div
          id="testimonials-video-popup-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={handleOverlayClick}
        >
          <div
            style={{
              position: "relative",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "800px",
              width: "90%",
              maxHeight: "80%",
              overflow: "auto",
            }}
          >
            <div className="video_from_youtube">
              <iframe
                width="100%"
                height="500px"
                src={selectedVideoUrl}
                frameBorder="0"
                allowFullScreen
                id="v1"
              ></iframe>
            </div>
            <button
              title="Close (Esc)"
              type="button"
              style={{
                position: "absolute",
                top: "1px",
                right: "3px",
                background: "transparent",
                border: "none",
                fontSize: "30px",
                cursor: "pointer",
                color: "#000",
              }}
              onClick={closePopup}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </SectionTestimonials>
  );
};

export default Testimonials;
