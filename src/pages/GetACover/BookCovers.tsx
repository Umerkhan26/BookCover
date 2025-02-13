import { Link } from "react-router-dom";
import cover1 from "../../assets/NonFictional.png"
import cover2 from '../../assets/fictionCover.png'
import cover3 from '../../assets/AudioBookCover.png'
import cover4 from '../../assets/BookCoverRedesign.png'
import cover5 from '../../assets/premiumbookcover.jpg'
import cover6 from '../../assets/illustratedBookcover.jpg'
import cover7 from '../../assets/logobrandingcover.jpg'



import { GridContainer, GridItem, ItemImage, ItemTitle } from "./BookCovers.styles";


const BookCoverDesigns = () => {
  return (
    <GridContainer>
      <Link to="/fictionCover">
        <GridItem>
          <ItemImage src={cover2} alt="Fiction Book Cover Design" />
          <ItemTitle>Fiction Book Cover Design</ItemTitle>
        </GridItem>
      </Link>

      <Link to="/nonFiction">
        <GridItem>
          <ItemImage  src={cover1} alt="Non-Fiction Book Cover Design" />
          <ItemTitle>Non-Fiction Book Cover Design</ItemTitle>
        </GridItem>
      </Link>

      <Link to="/bookCoverRedesign">
        <GridItem>
          <ItemImage  src={cover4} alt="Book Cover Redesign" />
          <ItemTitle>Book Cover Redesign</ItemTitle>
        </GridItem>
      </Link>

      <Link to="/premium">
        <GridItem>
          <ItemImage src={cover5} alt="Premium Book Cover Design" />
          <ItemTitle>Premium Book Cover Design</ItemTitle>
        </GridItem>
      </Link>

      <Link to="/illustrated">
        <GridItem>
          <ItemImage  src={cover6} alt="Illustrated Book Cover Design" />
          <ItemTitle>Illustrated Book Cover Design</ItemTitle>
        </GridItem>
      </Link>

      <Link to="/audioBookCover">
        <GridItem>
          <ItemImage  src={cover3} alt="Cover Design for Audiobooks" />
          <ItemTitle>Cover Design for Audiobooks</ItemTitle>
        </GridItem>
   
      </Link>

      <Link to="/logoBrand">
        <GridItem style={{ gridColumn: "1 / span 1" }}> 
          <ItemImage src={cover7} alt="New Book Cover Design" />
          <ItemTitle>New Book Cover Design</ItemTitle>
        </GridItem>
      </Link>
    </GridContainer>
  );
};

export default BookCoverDesigns;
