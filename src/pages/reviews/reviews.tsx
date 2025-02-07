import {
  Button,
  CardsWrapper,
  ReviewCard,
  ReviewsWrapper,
} from "./reviews.styles";

const Reviews = () => {
  return (
    <div
      className="text-gray-600 dark:text-gray-300 pt-8 dark: mb-24"
      id="reviews"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mb-10 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800 dark: md:text-4xl">
            What Do Our <span className="text-[#00bcd4]">Client Say</span>
          </h2>
        </div>
        <div>
          <Button className="mb-4">Leave A Review</Button>
        </div>
        <ReviewsWrapper>
          <CardsWrapper>
            {/* Card 1 */}
            <ReviewCard>
              <div className="flex gap-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/12.jpg"
                  alt="user avatar"
                  width="400"
                  height="400"
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 dark:">
                    Daniella Doe
                  </h6>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
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
              <p className="mt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                aliquid quo eum quae quos illo earum ipsa doloribus nostrum
                minus libero aspernatur laborum cum, a suscipit, ratione ea
                totam ullam!
              </p>
            </ReviewCard>

            {/* Card 2 */}
            <ReviewCard>
              <div className="flex gap-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/14.jpg"
                  alt="user avatar"
                  width="200"
                  height="200"
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 dark:">
                    Jane doe
                  </h6>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
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
              <p className="mt-8">
                Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non
                cumque quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
              </p>
            </ReviewCard>

            {/* Card 3 */}
            <ReviewCard>
              <div className="flex gap-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/18.jpg"
                  alt="user avatar"
                  width="200"
                  height="200"
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 dark:">
                    Yanick Doe
                  </h6>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
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
              <p className="mt-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto laboriosam deleniti aperiam ab veniam sint non cumque
                quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
              </p>
            </ReviewCard>

            {/* Card 4 - New Review */}
            <ReviewCard>
              <div className="flex gap-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/men/22.jpg"
                  alt="user avatar"
                  width="200"
                  height="200"
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 dark:">
                    John Smith
                  </h6>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
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
              <p className="mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                et nisl nec lorem scelerisque consectetur. Proin laoreet
                tristique dolor.
              </p>
            </ReviewCard>
          </CardsWrapper>
        </ReviewsWrapper>
      </div>
    </div>
  );
};

export default Reviews;
