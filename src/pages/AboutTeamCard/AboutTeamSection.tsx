import React from "react";
import TeamCard from "./TeamCard";
// import shahid from "../../assets/shahid.jpeg";
// import Umer from "../../assets/Umer.jpg";
// import packag1 from "../../assets/pacakge1.jpeg";
import UserIcon from "../../assets/user.webp";
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
    <section className="py-20 px-6">
      {/* Section Heading */}
      <h2 className="text-center mb-14">
        <span className="text-2xl font-semibold text-black">Our </span>
        <span className="text-3xl font-bold text-[#6dc7d1]">Team</span>
      </h2>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
