// import React from "react";

// interface TeamCardProps {
//   imageSrc: string;
//   name: string;
//   role: string;
// }

// const TeamCard: React.FC<TeamCardProps> = ({ imageSrc, name, role }) => {
//   return (
//     <div className="text-center text-black border-[#6dc7d1] p-4 rounded-lg mb-4 ">
//       <img
//         src={imageSrc}
//         alt={name}
//         className="w-full h-60 object-cover rounded-lg "
//       />
//       <div className="border  border-[#6dc7d1] mt-2">
//       <h3 className="text-lg font-semibold mt-2">{name}</h3>
//       <p className="text-gray-500">{role}</p>
//       </div>
//     </div>
//   );
// };

// export default TeamCard;
import React from "react";

interface TeamCardProps {
  imageSrc: string;
  name: string;
  role: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ imageSrc, name, role }) => {
  return (
    <div
      style={{
        textAlign: "center",
        color: "#000",
        padding: "24px",
        borderRadius: "8px",
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        backgroundColor: "#ffffff",
        width: "100%",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow =
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow =
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
      }}
    >
      <img
        src={imageSrc}
        alt={name}
        style={{
          width: "128px",
          height: "128px",
          objectFit: "cover",
          borderRadius: "50%",
          display: "block",
          margin: "0 auto 16px",
          border: "4px solid #6dc7d1",
        }}
        width={128}
        height={128}
        loading="lazy"
      />
      <div>
        <h3
          style={{
            fontSize: "clamp(18px, 2vw, 20px)",
            fontWeight: 600,
            color: "#333",
            marginBottom: "4px",
          }}
        >
          {name}
        </h3>
        <p
          style={{
            color: "#4b5563",
            fontSize: "clamp(14px, 1.5vw, 16px)",
            marginBottom: "4px",
          }}
        >
          {role}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
