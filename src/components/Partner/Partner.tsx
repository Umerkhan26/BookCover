import DesignProcess from "../../pages/HowWeDesign/design"
import PartnerCover from "../../pages/Partner/partnerCover"
import AffiliateBenefits from "./AffiliateBenefits"
import benfits1 from '../../assets/benifits1.jpg'
import ShareIdeasSection from "../../pages/IdeaSection/ideaSection"

const Partner = () => {
  return (
    <div>
      <PartnerCover
      title="Partner With Miblart"
      subtitle="Let's cooperate to make the self-publishing industry better!"

      bookCoversText=""
     
    />

<DesignProcess
  title="How Does It Work"
  highlight="Custom Covers"
  subtitle="This is how you become our affiliate."
  steps={[
    { number: "01", title: "Approval", description: "After being approved, you’ll get a unique referral link to promote our services." },
    { number: "02", title: "Personal dashboard", description: "You’ll get access to your personal dashboard, where you can check stats on clicks, sign-ups, and purchases of your referred clients, track your commissions, as well as access promotional banners." },
    { number: "03", title: "Referred client", description: "A referred client is assigned to you, as an affiliate, so you’ll get a 10% from each order a referred customer makes." },
    { number: "04", title: "Commissions", description: "Commissions are paid each month on your PayPal account." },

  ]}
  buttonText="Get Started"
  buttonLink="/custom-design"   
/>
<AffiliateBenefits/>

<DesignProcess
  title="Value-added reselling"
  highlight="How Does It
Work"
  subtitle="This is how you become our affiliate."
  steps={[
    { number: "01", title: "Reach out to us to discuss reselling possibilities", description: "After being approved, you’ll get a unique referral link to promote our services" },
    { number: "02", title: "Get approved based on the target audience match", description: "Perfect fit for publishing or marketing agencies, editing or proofreading companies, and those of you who cater to indie authors" },
    { number: "03", title: "Become an authorized reseller", description: "Expand the range of services your existing and potential clients might be looking for" },

  ]}
  buttonText="Get Started"
  buttonLink="/custom-design"   
/>
<AffiliateBenefits
  title="Benefits you get"
  benefits={[
    "Supplement your services to give more value to your clients",
    "Save costs for in-house resources ",
    "Gain a competitive advantage",
    "White label reselling if requested"
  ]}
  buttonText="Join Now"
  image={benfits1}
/>
<ShareIdeasSection
        title="Not sure what kind of cooperation is best for you, <span>or want to get more info?</span>"
        subtitle="We are here to help and adapt to your special needs"
        buttonText="Book A call"
        buttonLink="https://miblart.com/cover-idea/"
        
      />

    </div>
  )
}

export default Partner
