import { Link } from "react-router-dom";
import cover1 from "../../assets/NonFictional.webp";
import cover2 from "../../assets/fictionCover.webp";
import cover3 from "../../assets/AudioBookCover.webp";
import cover4 from "../../assets/BookCoverRedesign.webp";
import cover5 from "../../assets/premiumbookcover.webp";
import cover6 from "../../assets/illustratedBookcover.webp";
import cover7 from "../../assets/logobrandingcover.webp";
import "aos/dist/aos.css";

import {
  GridContainer,
  GridItem,
  ItemImage,
  ItemTitle,
} from "./BookCovers.styles";

const BookCoverDesigns = () => {
  return (
    <GridContainer>
      <Link
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="0"
        to="/fiction-cover"
        style={{ textDecoration: "none" }}
      >
        <GridItem>
          <ItemImage src={cover2} alt="Fiction Book Cover Design" />
          <ItemTitle>Fiction Book Cover Design</ItemTitle>
        </GridItem>
      </Link>

      <Link
        data-aos="fade-up"
        data-aos-delay="200"
        to="/nonFiction"
        style={{ textDecoration: "none" }}
      >
        <GridItem>
          <ItemImage src={cover1} alt="Non-Fiction Book Cover Design" />
          <ItemTitle>Non-Fiction Book Cover Design</ItemTitle>
        </GridItem>
      </Link>

      <Link
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
        to="/book-cover-redesign"
        style={{ textDecoration: "none" }}
      >
        <GridItem>
          <ItemImage src={cover4} alt="Book Cover Redesign" />
          <ItemTitle>Book Cover Redesign</ItemTitle>
        </GridItem>
      </Link>

      <Link
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="600"
        to="/premium"
        style={{ textDecoration: "none" }}
      >
        <GridItem>
          <ItemImage src={cover5} alt="Premium Book Cover Design" />
          <ItemTitle>Premium Book Cover Design</ItemTitle>
        </GridItem>
      </Link>

      <Link
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="800"
        to="/illustrated"
        style={{ textDecoration: "none" }}
      >
        <GridItem>
          <ItemImage src={cover6} alt="Illustrated Book Cover Design" />
          <ItemTitle>Illustrated Book Cover Design</ItemTitle>
        </GridItem>
      </Link>

      <Link
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1000"
        to="/audio-book-cover"
        style={{ textDecoration: "none" }}
      >
        <GridItem>
          <ItemImage src={cover3} alt="Cover Design for Audiobooks" />
          <ItemTitle>Cover Design for Audiobooks</ItemTitle>
        </GridItem>
      </Link>

      <Link
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        to="/logo-branding"
        style={{ textDecoration: "none" }}
      >
        <GridItem style={{ gridColumn: "1 / span 1" }}>
          <ItemImage src={cover7} alt="New Book Cover Design" />
          <ItemTitle>New Book Cover Design</ItemTitle>
        </GridItem>
      </Link>
    </GridContainer>
  );
};

export default BookCoverDesigns;
