import FictionCover from '../FictionCover/FictionCover'
import AudioCover from '../../assets/AudioBookCover.png'
import BenefitsSection from '../Benefits/benefits'
import { benefitsData } from '../../services/benefits'
import DesignProcess from '../HowWeDesign/design'
import RedesignForm from '../BookCoverRedesign/RedesignForm'
import Reviews from '../reviews/reviews'
import AudioBookCoverAnimationSection from './AudioBookCoverAnimationSection'
const AudioBookCover = () => {
  return (
    <div>

<FictionCover   
      title="Custom Audiobook Cover Design"
      subtitle="Pay only when you’re satisfied with the final result"
      image={AudioCover}
      bookCoversText=""
     
    />

<AudioBookCoverAnimationSection/>
<DesignProcess/>

     <BenefitsSection
        title={
          <>
          We Create Audiobook Covers  <span>That Pop</span>
          </>
        }
        benefits={benefitsData}
      />
        
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

export default AudioBookCover