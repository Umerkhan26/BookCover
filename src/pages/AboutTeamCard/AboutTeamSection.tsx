import React from "react";
import TeamCard from "./TeamCard";
import shahid from '../../assets/shahid.jpeg'
import packag1 from '../../assets/pacakge1.jpeg'
const teamMembers = [
  { name: "Shoib", role: "Head of Customer Success", imageSrc: packag1 },
  { name: "Anas Ahmad", role: "CEO, Co-Founder", imageSrc: packag1 },
  { name: "Shahid Khan", role: "Developer", imageSrc: shahid},
  { name: "Shamroz Khan", role: "Senior Graphic Designer", imageSrc: packag1 },
  { name: "Jawad", role: "Senior Graphic Designer", imageSrc: packag1 },
  { name: "Umar", role: "Developer", imageSrc: packag1 },
  { name: "Ali", role: "Marketing Manager", imageSrc: packag1 },
  { name: "Helen", role: "Marketing Manager", imageSrc: packag1 },
];

const TeamSection: React.FC = () => {
  return (
    <div className="mt-10 mb-32">
      <h2 className="text-xl font-semibold text-center mt-32">
        Our <span className="text-[#6dc7d1] font-bold text-3xl mt-32">Our Team</span>
      </h2>
      <div className="grid grid-cols-4 gap-6 mt-16 ml-52 mr-52">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
