import React, { useEffect } from "react";
import {
  Button,
  CardsWrapper,
  ReviewCard,
  ReviewsWrapper,
} from "./reviews.styles";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Reviews = () => {
  useEffect(() => {
    AOS.init({
      duration: 700, // Animation duration in milliseconds
      easing: 'ease-out-cubic', // Easing function for animation
      once: false, // Animation plays only once per element
      offset: 50, // Trigger animation when element is 150px from viewport bottom
    });

    AOS.refresh();
  }, []);

  return (
    <div
      className=" bg-gray-100 text-gray-600 dark:text-gray-300 pt-8 dark: mb-32 md:mb-[-5px]"
      id="reviews"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        {/* Removed data-aos from this div */}
        <div className="mb-10 space-y-4 px-6 md:px-0 text-center md:text-left">
          <h2 className="text-2xl font-bold text-black text-center md:text-left lg:text-left xl:text-left dark:text-white md:text-4xl">
            <span className="text-black">What Do Our</span>{" "}
            <span className="text-[#6dc7d1]">Clients Say</span>
          </h2>
        </div>

        <div>
          {/* Removed data-aos from this anchor tag */}
          <a
            href="https://www.facebook.com/YourPageName/reviews"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button className="mb-4">Leave A Review</Button>
          </a>
        </div>

        <ReviewsWrapper>
          <CardsWrapper>
            {/* Card 1 */}
            <ReviewCard
              data-aos="fade-up" // Simple down-to-up animation
              data-aos-delay="0" // No delay for the first card
            >
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
                revisions were handled quickly. I’m very pleased with the final
                design and the overall experience.
              </p>
            </ReviewCard>

            {/* Card 2 */}
            <ReviewCard
              data-aos="fade-up" // Simple down-to-up animation
              data-aos-delay="200" // Delay for staggered effect
            >
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
                my digital product, and Lumeart Studio nailed it. The design
                was polished, the style was unique, and revisions were handled
                quickly. Highly recommended!
              </p>
            </ReviewCard>

            {/* Card 3 */}
            <ReviewCard
              data-aos="fade-up" // Simple down-to-up animation
              data-aos-delay="400" // Delay for staggered effect
            >
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
                Absolutely loved the creativity! Lumeart delivered a cover design
                that was not only visually appealing but also matched my brand
                perfectly. The process was smooth, communication was great, and
                the final result exceeded my expectations.
              </p>
            </ReviewCard>

            {/* Card 4 - New Review */}
            <ReviewCard
              data-aos="fade-up" // Simple down-to-up animation
              data-aos-delay="600" // Delay for staggered effect
            >
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
                to detail and unique design style really set them apart. I’ll
                definitely be coming back for future projects!
              </p>
            </ReviewCard>
          </CardsWrapper>
        </ReviewsWrapper>
      </div>
    </div>
  );
};

export default Reviews;