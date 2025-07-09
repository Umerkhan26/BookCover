// import React from "react";
// import TeamCard from "./TeamCard";
// import shahid from '../../assets/shahid.jpeg'
// import packag1 from '../../assets/pacakge1.jpeg'
// const teamMembers = [
//   { name: "Shoib", role: "Head of Customer Success", imageSrc: packag1 },
//   { name: "Anas Ahmad", role: "CEO, Co-Founder", imageSrc: packag1 },
//   { name: "Shahid Khan", role: "Developer", imageSrc: shahid},
//   { name: "Shamroz Khan", role: "Senior Graphic Designer", imageSrc: packag1 },
//   { name: "Jawad", role: "Senior Graphic Designer", imageSrc: packag1 },
//   { name: "Umar", role: "Developer", imageSrc: packag1 },
//   { name: "Ali", role: "Marketing Manager", imageSrc: packag1 },
//   { name: "Helen", role: "Marketing Manager", imageSrc: packag1 },
// ];

// const TeamSection: React.FC = () => {
//   return (
//     <div className="mt-10 mb-32">
//       <h2 className="text-xl font-semibold text-center mt-32">
//         Our <span className="text-[#6dc7d1] font-bold text-3xl mt-32">Our Team</span>
//       </h2>
//       <div className="grid grid-cols-4 gap-6 mt-16 ml-52 mr-52">
//         {teamMembers.map((member, index) => (
//           <TeamCard key={index} {...member} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeamSection;
import React from "react";
import TeamCard from "./TeamCard";
// import shahid from "../../assets/shahid.jpeg";
// import Umer from "../../assets/Umer.jpg";
// import packag1 from "../../assets/pacakge1.jpeg";
import UserIcon from "../../assets/user.png";
// import User from "../../components/AdminDashboard/user";

const teamMembers = [
  { name: "Shoib", role: "Head of Customer Success", imageSrc: UserIcon },
  { name: "Anas Ahmad", role: "CEO, Co-Founder", imageSrc: UserIcon },
  { name: "Shahid Khan", role: "Developer", imageSrc: UserIcon },
  { name: "Shamroz Khan", role: "Senior Graphic Designer", imageSrc: UserIcon },
  { name: "Umar", role: "Developer", imageSrc: UserIcon },
  { name: "Ali", role: "Marketing Manager", imageSrc: UserIcon },
  { name: "Shaharyar Khan", role: "Graphic Designer", imageSrc: UserIcon },
];

const TeamSection: React.FC = () => {
  return (
    <div className="mt-10 mb-20 px-10">
      <h2 className="text-xl font-semibold text-center mt-32 -mb-6">
        <span className="text-black">Our</span>
        <span className="font-bold text-3xl text-[#6dc7d1] "> Team</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16 w-full max-w-screen-xl mx-auto">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
