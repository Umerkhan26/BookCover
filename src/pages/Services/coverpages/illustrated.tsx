import FictionCover from '../../FictionCover/FictionCover'
import illustratedCover from '../../../assets/illustratedCover.png'
import IllusratedDesignProcess from './illustratedDesignProcess'
// import Reviews from '../../reviews/reviews'
// import Packages from '../../ourPackages/packages'
const Illustrated = () => {
  return (
    <div className='text-black '>

<FictionCover
      title="Illustrated book cover design from scratch"
      subtitle="mmerse readers into your world"
      image={illustratedCover} // Can be dynamic as well
      bookCoversText=""
      // packagesComponent={<Packages />}
      // reviewsComponent={<Reviews />}
    />
<IllusratedDesignProcess/>

    </div>
  )
}

export default Illustrated