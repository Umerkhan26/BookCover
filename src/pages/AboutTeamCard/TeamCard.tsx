import React from "react";

interface TeamCardProps {
  imageSrc: string;
  name: string;
  role: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ imageSrc, name, role }) => {
  return (
    <div className="text-center text-black border-[#6dc7d1] p-4 rounded-lg mb-4 ">
      <img
        src={imageSrc}
        alt={name}
        className="w-full h-60 object-cover rounded-lg "
      />
      <div className="border  border-[#6dc7d1] mt-2">
      <h3 className="text-lg font-semibold mt-2">{name}</h3>
      <p className="text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
