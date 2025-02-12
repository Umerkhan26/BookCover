import Carousel from "../../pages/Carousal/carousal"
import BookCoverDesigns from "../../pages/GetACover/BookCovers"
import PartnerCover from "../../pages/Partner/partnerCover"
import Reviews from "../../pages/reviews/reviews"
import SpecialEditionAddOns from "../../pages/SpecialEditionAddOns/SpecialEditionAddOns"

const GetACover = () => {
  return (
    <div>
  <PartnerCover
  title={"We Help Authors\nMake Book Cover Design"}
  subtitle="Their Best Marketing Tool"

      bookCoversText=""
     
    />
    <BookCoverDesigns/>
    <SpecialEditionAddOns/>
    <Carousel/>
    <Reviews/>

    </div>
  )
}

export default GetACover