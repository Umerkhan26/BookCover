import React from "react";
import styled, { keyframes, css } from "styled-components";

const shimmerKeyframe = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const ShimmerBase = styled.div<{
  width?: string;
  height?: string;
  rounded?: boolean;
}>`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${shimmerKeyframe} 1.5s infinite;
  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 8px;
    `}
  ${({ width, height }) => css`
    ${width && `width: ${width};`}
    ${height && `height: ${height};`}
  `}
`;

export const Shimmer: React.FC<{
  width?: string;
  height?: string;
  rounded?: boolean;
  className?: string;
  style?: React.CSSProperties;
}> = ({ width, height, rounded = true, className, style }) => (
  <ShimmerBase
    width={width}
    height={height}
    rounded={rounded}
    className={className}
    style={style}
  />
);

interface ShimmerImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  decoding?: "sync" | "async" | "auto";
  className?: string;
  style?: React.CSSProperties;
}

export const ShimmerImage: React.FC<ShimmerImageProps> = ({
  src,
  alt,
  width,
  height,
  loading = "lazy",
  fetchPriority,
  decoding,
  className,
  style,
}) => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: width ? `${width}px` : "100%",
        height: height ? `${height}px` : "auto",
        minHeight: height ? `${height}px` : undefined,
      }}
      className={className}
    >
      {!loaded && (
        <Shimmer
          width="100%"
          height="100%"
          rounded
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        style={{ 
          ...style, 
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.3s ease-in",
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
    </div>
  );
};

export const ShimmerText: React.FC<{
  lines?: number;
  width?: string;
  style?: React.CSSProperties;
}> = ({ lines = 1, width = "100%", style }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      width,
      ...style,
    }}
  >
    {Array.from({ length: lines }).map((_, i) => (
      <Shimmer key={i} height="16px" width={width} rounded />
    ))}
  </div>
);

export const ShimmerCard: React.FC<{ 
  height?: string; 
  width?: string;
  border?: boolean;
  padding?: string;
  style?: React.CSSProperties;
}> = ({
  height = "200px",
  width = "100%",
  border = false,
  padding,
  style,
}) => (
  <Shimmer 
    width={width} 
    height={height} 
    rounded 
    style={{
      border: border ? "2px solid #6dc7d1" : undefined,
      padding: padding,
      backgroundColor: border ? "#fff" : undefined,
      ...style,
    }}
  />
);

// Enhanced Benefit Card Shimmer
export const ShimmerBenefitCard: React.FC = () => (
  <div
    style={{
      background: "#fff",
      padding: "40px 25px",
      borderRadius: "10px",
      border: "2px solid #6dc7d1",
      minHeight: "190px",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <Shimmer width="50px" height="50px" rounded style={{ marginRight: "15px" }} />
      <Shimmer height="20px" width="60%" rounded />
    </div>
    <ShimmerText lines={2} width="90%" style={{ marginTop: "10px" }} />
  </div>
);

// Enhanced Package Card Shimmer
export const ShimmerPackageCard: React.FC = () => (
  <div
    style={{
      background: "#fff",
      padding: "30px",
      borderRadius: "10px",
      border: "1px solid #e0e0e0",
      minHeight: "400px",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
      <Shimmer height="22px" width="40%" rounded />
      <Shimmer height="26px" width="30%" rounded />
    </div>
    <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
      <div style={{ flex: 1 }}>
        <ShimmerText lines={5} width="100%" />
      </div>
      <div
        style={{
          flex: 1,
          background: "#f5f5f5",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
        <Shimmer height="16px" width="60%" rounded style={{ marginBottom: "8px" }} />
        <ShimmerText lines={4} width="100%" />
      </div>
    </div>
    <div style={{ marginBottom: "20px" }}>
      <ShimmerText lines={3} width="100%" />
    </div>
    <Shimmer height="48px" width="100%" rounded />
  </div>
);
