import FictionCover from "../FictionCover/FictionCover"
import NonFictional from '../../assets/NonFictional.png'
import BenefitsSection from "../Benefits/benefits"
import { benefitsData } from "../../services/benefits"
import Packages from "../ourPackages/packages"
// import { myPackagesData } from "../ourPackages/packagesData"
import SpecialEditionAddOns from "../SpecialEditionAddOns/SpecialEditionAddOns"
import DesignProcess from "../HowWeDesign/design"
import Carousel from "../Carousal/carousal"
import RedesignForm from "../BookCoverRedesign/RedesignForm"
import Reviews from "../reviews/reviews"
const NonFictonalCover = () => {
  return (
    <div>
<FictionCover
      title="Non-Fiction Ebook and Print Cover Design"
      subtitle="Pay only when you're satisfied with the final result"
      image={NonFictional}
      bookCoversText=""
     
    />
      <BenefitsSection
        title={
          <>
           Here’s What Benefits  <span>You Get</span>
          </>
        }
        benefits={benefitsData}
      />

<Packages />   

<SpecialEditionAddOns/>
<DesignProcess/>
<Carousel/>
<RedesignForm
  heading={`Don’t Have an Idea for Your Cover?`}
  subHeading="We’ll help you come up with ideas that work
" 
  buttonText="Get a Cover For Free" 
/>
<Reviews/>


    </div>
  )
}

export default NonFictonalCover