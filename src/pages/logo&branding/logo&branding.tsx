import FictionCover from "../FictionCover/FictionCover"
import logoBrand from '../../assets/logoBrand.png'
import Packages from "../ourPackages/packages"
import { myPackagesData } from "../ourPackages/packagesData"
import RedesignExamples from "../BookCoverRedesign/RedesignExamples"
import { examples } from "../BookCoverRedesign/RedesignExampleData"

const LogoBranding = () => {
  return (
    <div className="">

<FictionCover
      title="Custom Logo Design and Branding"
      subtitle="Build and maintain a consistent author brand"
      image={logoBrand} // Can be dynamic as well
      bookCoversText=""
      // packagesComponent={<Packages />}
      // reviewsComponent={<Reviews />}
    />
        <Packages packagesData={myPackagesData} />   
        <RedesignExamples 
      heading="Custom Logo Design and Branding"
      examples={examples} 
    /> 

    </div>
  )
}

export default LogoBranding