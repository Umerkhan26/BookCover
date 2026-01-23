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
    <section
      style={{
        width: "100%",
        paddingTop: "10px",
        paddingBottom: "40px",
        backgroundColor: "#ffffff",
        paddingLeft: "16px",
        paddingRight: "16px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          paddingLeft: "clamp(16px, 4vw, 64px)",
          paddingRight: "clamp(16px, 4vw, 64px)",
        }}
      >
        {/* Section Heading */}
        <h2 style={{ textAlign: "center" as const, marginBottom: "48px" }}>
          <span
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 600,
              color: "#000",
            }}
          >
            Our{" "}
          </span>
          <span
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              color: "#6dc7d1",
            }}
          >
            Team
          </span>
        </h2>

        {/* Team Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
            justifyContent: "center",
          }}
        >
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
