import FictionCover from "../FictionCover/FictionCover"
import BookCoverRedesaign from '../../assets/BookCoverRedesign.png'
import Packages from "../ourPackages/packages"
import { myPackagesData } from "../ourPackages/packagesData"
import SpecialEditionAddOns from "../SpecialEditionAddOns/SpecialEditionAddOns"
import RedesignExamples from "./RedesignExamples"
import RedesignForm from "./RedesignForm"
import { examples } from "./RedesignExampleData"
const BookCoverRedesign = () => {
  return (
    <div className="mb-32 text-black">
        <FictionCover
      title="Book Cover Redesign"
      subtitle=""
      image={BookCoverRedesaign} // Can be dynamic as well
      bookCoversText=""
      // packagesComponent={<Packages />}
      // reviewsComponent={<Reviews />}
    />
        <Packages packagesData={myPackagesData} />    
        <SpecialEditionAddOns/>
        <RedesignExamples 
      heading="Our Book Cover Redesign Examples"
      examples={examples} 
    />        <RedesignForm/>

    </div>
  )
}

export default BookCoverRedesign