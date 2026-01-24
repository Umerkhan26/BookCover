import styled from "styled-components";
import {
  Button,
  CardsWrapper,
  ReviewCard,
  ReviewsWrapper,
} from "./reviews.styles";

const ReviewsContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding-left: clamp(20px, 5vw, 0px);
  padding-right: clamp(20px, 5vw, 0px);

  @media (min-width: 1200px) {
    padding-left: 0;
    padding-right: 0;
  }

  @media (max-width: 1199px) {
    padding-left: clamp(20px, 5vw, 32px);
    padding-right: clamp(20px, 5vw, 32px);
  }
`;

const Reviews = () => {
  return (
    <div
      className="bg-gray-100 text-gray-600 dark:text-gray-300 py-12 md:py-16"
      id="reviews"
      style={{ width: "100%", overflowX: "hidden" }}
    >
      <ReviewsContainer>
        <ReviewsHeadingWrapper>
          <h2
            style={{
              fontSize: "clamp(22px, 5vw, 40px)",
              fontWeight: 700,
              color: "#000",
              textAlign: "center",
              marginBottom: "4px",
              padding: "0",
              display: "block",
              visibility: "visible",
              width: "100%",
              maxWidth: "100%",
              lineHeight: "1.3",
              wordWrap: "break-word",
              overflowWrap: "break-word",
              boxSizing: "border-box",
            }}
            className="mt-10 md:mt-0"
          >
            <span style={{ color: "#000", display: "inline" }}>
              What Do Our
            </span>{" "}
            <span style={{ color: "#6dc7d1", display: "inline" }}>
              Clients Say
            </span>
          </h2>
        </ReviewsHeadingWrapper>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <a
            href="https://www.facebook.com/share/1EreeG179x/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button>Leave A Review</Button>
          </a>
        </div>

        <ReviewsWrapper>
          <CardsWrapper>
            {/* Card 1 */}
            <ReviewCard>
              <div className="flex gap-4 text-black">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/12.jpg"
                  alt="user avatar"
                  width="400"
                  height="400"
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-black-700 dark:">
                    Daniella Doe
                  </h6>
                  <p className="text-sm text-black-500 dark:text-black-300">
                    Mobile dev
                  </p>
                  <div className="flex text-yellow-500">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-black">
                Lumeart Studio turned my idea into a clean, professional cover
                that matched my vision perfectly. Communication was smooth, and
                revisions were handled quickly. I'm very pleased with the final
                design and the overall experience.
              </p>
            </ReviewCard>

            {/* Card 2 */}
            <ReviewCard>
              <div className="flex gap-4 text-black">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/14.jpg"
                  alt="user avatar"
                  width="200"
                  height="200"
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-black-700 dark:">
                    Jane doe
                  </h6>
                  <p className="text-sm text-black-500 dark:text-black-300">
                    Marketing
                  </p>
                  <div className="flex text-yellow-500">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-black">
                Professional, fast, and creative! I needed a standout cover for
                my digital product, and Lumeart Studio nailed it. The design was
                polished, the style was unique, and revisions were handled
                quickly. Highly recommended!
              </p>
            </ReviewCard>

            {/* Card 3 */}
            <ReviewCard>
              <div className="flex gap-4 text-black">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/18.jpg"
                  alt="user avatar"
                  width="200"
                  height="200"
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-black-700 dark:">
                    Yanick Doe
                  </h6>
                  <p className="text-sm text-black-500 dark:text-black-300">
                    Developer
                  </p>
                  <div className="flex text-yellow-500">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-black">
                Absolutely loved the creativity! Lumeart delivered a cover
                design that was not only visually appealing but also matched my
                brand perfectly. The process was smooth, communication was
                great, and the final result exceeded my expectations.
              </p>
            </ReviewCard>

            {/* Card 4 - New Review */}
            <ReviewCard>
              <div className="flex gap-4 text-black">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/men/22.jpg"
                  alt="user avatar"
                  width="200"
                  height="200"
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-black-700 dark:">
                    John Smith
                  </h6>
                  <p className="text-sm text-black-500 dark:text-black-300">
                    Designer
                  </p>
                  <div className="flex text-yellow-500">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-black">
                Stunning work by Lumeart Studio! The cover design I received was
                modern, sharp, and exactly what I had imagined. Their attention
                to detail and unique design style really set them apart. I'll
                definitely be coming back for future projects!
              </p>
            </ReviewCard>
          </CardsWrapper>
        </ReviewsWrapper>
      </ReviewsContainer>
    </div>
  );
};

export default Reviews;

export const ReviewsHeadingWrapper = styled.div`
  text-align: center;
  margin-bottom: 10px;
  padding-bottom: 20px;
  box-sizing: border-box;

  /* MOBILE ONLY */
  margin-top: 50px;

  /* DESKTOP & UP */
  @media (min-width: 768px) {
    margin-top: 20px;
  }
`;
